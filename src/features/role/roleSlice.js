import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  submitRoleChange,
  getRoleRequests,
  manageRoleRequest,
} from "./roleService";

export const submitRoleChangeRequest = createAsyncThunk(
  "role/submitRoleChange",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await submitRoleChange(formData);
      return response;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Role change request failed"
      );
    }
  }
);

export const fetchRoleRequests = createAsyncThunk(
  "role/fetchRoleRequests",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await getRoleRequests(userId);
      return response;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch role requests"
      );
    }
  }
);

export const manageRole = createAsyncThunk(
  "role/manageRole",
  async ({ userId, requestId, action }, { rejectWithValue }) => {
    try {
      const response = await manageRoleRequest({ userId, requestId, action });
      return response;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to manage role request"
      );
    }
  }
);

const roleSlice = createSlice({
  name: "role",
  initialState: {
    loading: false,
    success: false,
    error: null,
    message: null,
    roleRequests: [],
  },
  reducers: {
    clearRoleState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitRoleChangeRequest.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(submitRoleChangeRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
      })
      .addCase(submitRoleChangeRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchRoleRequests.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRoleRequests.fulfilled, (state, action) => {
        state.loading = false;
        state.roleRequests = action.payload;
      })
      .addCase(fetchRoleRequests.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(manageRole.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(manageRole.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
        state.roleRequests = state.roleRequests.map((req) =>
          req._id === action.payload.requestId
            ? {
                ...req,
                status:
                  action.payload.role === "organizer" ? "approved" : "rejected",
              }
            : req
        );
      })
      .addCase(manageRole.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearRoleState } = roleSlice.actions;
export default roleSlice.reducer;
