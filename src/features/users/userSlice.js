import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3001/api/users";

// Signup user
export const signupUser = createAsyncThunk(
  "user/signup",
  async (userData, { rejectWithValue }) => {
    try {
      console.log("🔄 Signup API call:", userData.email);
      const response = await axios.post(`${API_URL}/signup`, userData);
      console.log("✅ Signup response:", response.data);
      return response.data;
    } catch (err) {
      console.error("❌ Signup API error:", {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message
      });
      const errorMessage = err.response?.data?.message || err.message || "Signup failed";
      return rejectWithValue(errorMessage);
    }
  }
);

// Verify OTP
export const verifyOTPUser = createAsyncThunk(
  "user/verifyOTP",
  async ({ userId, otp }, { rejectWithValue }) => {
    try {
      console.log("🔄 Verify OTP API call for user:", userId);
      const response = await axios.post(`${API_URL}/verify-otp`, {
        userId,
        otp,
      });
      console.log("✅ Verify OTP response:", response.data);
      return response.data;
    } catch (err) {
      console.error("❌ Verify OTP API error:", {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message
      });
      const errorMessage = err.response?.data?.message || err.message || "OTP verification failed";
      return rejectWithValue(errorMessage);
    }
  }
);

// Login user - Enhanced error handling
export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      console.log("🔄 Attempting login API call for:", email);
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      console.log("✅ Login API response:", response.data);
      
      if (response.data.userId) {
        localStorage.setItem("userId", response.data.userId);
        console.log("💾 User ID saved to localStorage:", response.data.userId);
      }
      
      return response.data;
    } catch (err) {
      console.error("❌ Login API error details:", {
        status: err.response?.status,
        statusText: err.response?.statusText,
        data: err.response?.data,
        message: err.message
      });
      
      // Extract the exact error message from the server response
      let errorMessage = "Login failed";
      
      if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      console.error("📤 Returning error to Redux:", errorMessage);
      
      // Return the error so it goes to the rejected case in Redux
      return rejectWithValue(errorMessage);
    }
  }
);

// Fetch current user
export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const userId = localStorage.getItem("userId");
      console.log("🔄 Fetching user with ID:", userId);
      
      if (!userId) {
        const noUserError = "No user ID found";
        console.error("❌ No user ID in localStorage");
        return rejectWithValue(noUserError);
      }
      
      const response = await axios.post(`${API_URL}/me`, { userId });
      console.log("✅ Fetch user response:", response.data);
      return response.data;
    } catch (err) {
      console.error("❌ Fetch user error:", {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message
      });
      const errorMessage = err.response?.data?.message || err.message || "Failed to fetch user";
      return rejectWithValue(errorMessage);
    }
  }
);

// Update user profile
export const updateUserProfileThunk = createAsyncThunk(
  "user/updateUserProfile",
  async (userData, { rejectWithValue }) => {
    try {
      console.log("🔄 Updating user profile for:", userData.userId);
      const response = await axios.post(`${API_URL}/update-profile`, userData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("✅ Update profile response:", response.data);
      return response.data;
    } catch (err) {
      console.error("❌ Update profile error:", {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message
      });
      const errorMessage = err.response?.data?.message || err.message || "Failed to update profile";
      return rejectWithValue(errorMessage);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
    success: false,
    message: null,
  },
  reducers: {
    clearError: (state) => {
      console.log("🧹 Clearing error from Redux state");
      state.error = null;
    },
    clearSuccess: (state) => {
      console.log("🧹 Clearing success from Redux state");
      state.success = false;
      state.message = null;
    },
    logout: (state) => {
      console.log("🚪 Logging out user");
      state.user = null;
      state.error = null;
      state.success = false;
      state.message = null;
      state.loading = false;
      localStorage.removeItem("userId");
    },
    updateUserRole: (state, action) => {
      console.log("🔄 Updating user role to:", action.payload.role);
      if (state.user) {
        state.user.role = action.payload.role;
      }
    },
    resetState: (state) => {
      console.log("🔄 Resetting entire user state");
      state.user = null;
      state.error = null;
      state.success = false;
      state.message = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // ========================================
      // SIGNUP CASES
      // ========================================
      .addCase(signupUser.pending, (state) => {
        console.log("⏳ Signup pending...");
        state.loading = true;
        state.error = null;
        state.success = false;
        state.message = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        console.log("✅ Signup fulfilled:", action.payload);
        state.loading = false;
        state.user = {
          userId: action.payload.userId,
          fullName: action.payload.fullName || "",
          email: action.payload.email || "",
          role: action.payload.role || "user",
        };
        localStorage.setItem("userId", action.payload.userId);
        state.success = true;
        state.message = action.payload.message;
        state.error = null;
      })
      .addCase(signupUser.rejected, (state, action) => {
        console.log("❌ Signup rejected! Error:", action.payload);
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })

      // ========================================
      // VERIFY OTP CASES
      // ========================================
      .addCase(verifyOTPUser.pending, (state) => {
        console.log("⏳ Verify OTP pending...");
        state.loading = true;
        state.error = null;
        state.success = false;
        state.message = null;
      })
      .addCase(verifyOTPUser.fulfilled, (state, action) => {
        console.log("✅ Verify OTP fulfilled:", action.payload);
        state.loading = false;
        state.user = {
          userId: action.payload.userId,
          fullName: action.payload.user.fullName,
          email: action.payload.user.email,
          location: action.payload.user.location,
          gender: action.payload.user.gender,
          age: action.payload.user.age,
          role: action.payload.user.role,
        };
        localStorage.setItem("userId", action.payload.userId);
        state.success = true;
        state.message = action.payload.message;
        state.error = null;
      })
      .addCase(verifyOTPUser.rejected, (state, action) => {
        console.log("❌ Verify OTP rejected! Error:", action.payload);
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })

      // ========================================
      // LOGIN CASES - ENHANCED LOGGING
      // ========================================
      .addCase(loginUser.pending, (state) => {
        console.log("⏳ Login pending...");
        state.loading = true;
        state.error = null;
        state.success = false;
        state.message = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log("✅ Login fulfilled! User:", action.payload.userId);
        state.loading = false;
        state.user = {
          userId: action.payload.userId,
          fullName: action.payload.user.fullName,
          email: action.payload.user.email,
          location: action.payload.user.location,
          gender: action.payload.user.gender,
          age: action.payload.user.age,
          role: action.payload.user.role,
        };
        localStorage.setItem("userId", action.payload.userId);
        state.success = true;
        state.message = action.payload.message;
        state.error = null; // Clear any previous errors on success
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.log("❌ LOGIN REJECTED! Setting error in state:", action.payload);
        state.loading = false;
        state.error = action.payload; // This triggers the useEffect in Login component
        state.success = false;
        console.log("🔍 Current state after rejection:", {
          loading: state.loading,
          error: state.error,
          success: state.success
        });
      })

      // ========================================
      // FETCH USER CASES
      // ========================================
      .addCase(fetchUser.pending, (state) => {
        console.log("⏳ Fetch user pending...");
        state.loading = true;
        state.error = null;
        state.success = false;
        state.message = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        console.log("✅ Fetch user fulfilled:", action.payload.userId);
        state.loading = false;
        state.user = {
          userId: action.payload.userId,
          fullName: action.payload.fullName,
          email: action.payload.email,
          location: action.payload.location,
          gender: action.payload.gender,
          age: action.payload.age,
          description: action.payload.description,
          profileImage: action.payload.profileImage,
          role: action.payload.role,
        };
        state.success = true;
        state.error = null;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        console.log("❌ Fetch user rejected! Error:", action.payload);
        state.loading = false;
        if (action.payload === "No user ID found") {
          console.log("👋 No user ID - clearing localStorage");
          state.user = null;
          localStorage.removeItem("userId");
          state.error = null; // Don't show error for no user ID
        } else {
          state.error = action.payload;
        }
      })

      // ========================================
      // UPDATE PROFILE CASES
      // ========================================
      .addCase(updateUserProfileThunk.pending, (state) => {
        console.log("⏳ Update profile pending...");
        state.loading = true;
        state.error = null;
        state.success = false;
        state.message = null;
      })
      .addCase(updateUserProfileThunk.fulfilled, (state, action) => {
        console.log("✅ Update profile fulfilled:", action.payload);
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
        state.user = {
          userId: action.payload.user.userId,
          fullName: action.payload.user.fullName,
          email: action.payload.user.email,
          location: action.payload.user.location,
          gender: action.payload.user.gender,
          age: action.payload.user.age,
          description: action.payload.user.description,
          profileImage: action.payload.user.profileImage,
          role: action.payload.user.role,
        };
        state.error = null;
      })
      .addCase(updateUserProfileThunk.rejected, (state, action) => {
        console.log("❌ Update profile rejected! Error:", action.payload);
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { 
  clearError, 
  clearSuccess, 
  logout, 
  updateUserRole,
  resetState 
} = userSlice.actions;

export default userSlice.reducer;