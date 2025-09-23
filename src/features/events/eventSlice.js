// redux/eventSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3001/api/user";

export const getOrganizerEvents = createAsyncThunk(
  "event/getOrganizerEvents",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/organizer-events`, {
        userId,
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch events"
      );
    }
  }
);

export const createNewEvent = createAsyncThunk(
  "event/createNewEvent",
  async (eventData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/create-event`, eventData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to create event"
      );
    }
  }
);

export const editEvent = createAsyncThunk(
  "event/editEvent",
  async ({ eventId, eventData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${API_URL}/edit-event/${eventId}`,
        eventData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to edit event"
      );
    }
  }
);

export const deleteEvent = createAsyncThunk(
  "event/deleteEvent",
  async (eventId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${API_URL}/delete-event/${eventId}`);
      return { eventId };
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to delete event"
      );
    }
  }
);

const eventSlice = createSlice({
  name: "event",
  initialState: {
    upcomingEvents: [],
    pastEvents: [],
    loading: false,
    error: null,
    success: false,
    message: null,
  },
  reducers: {
    clearEventError: (state) => {
      state.error = null;
    },
    clearEventSuccess: (state) => {
      state.success = false;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get Organizer Events
      .addCase(getOrganizerEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOrganizerEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.upcomingEvents = action.payload.upcomingEvents;
        state.pastEvents = action.payload.pastEvents;
      })
      .addCase(getOrganizerEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Create New Event
      .addCase(createNewEvent.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.message = null;
      })
      .addCase(createNewEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
        state.upcomingEvents.push(action.payload.event);
      })
      .addCase(createNewEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Edit Event
      .addCase(editEvent.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.message = null;
      })
      .addCase(editEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
        state.upcomingEvents = state.upcomingEvents.map((event) =>
          event._id === action.payload.event._id ? action.payload.event : event
        );
        state.pastEvents = state.pastEvents.map((event) =>
          event._id === action.payload.event._id ? action.payload.event : event
        );
      })
      .addCase(editEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete Event
      .addCase(deleteEvent.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.message = null;
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = "Event deleted successfully";
        state.upcomingEvents = state.upcomingEvents.filter(
          (event) => event._id !== action.payload.eventId
        );
        state.pastEvents = state.pastEvents.filter(
          (event) => event._id !== action.payload.eventId
        );
      })
      .addCase(deleteEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearEventError, clearEventSuccess } = eventSlice.actions;
export default eventSlice.reducer;
