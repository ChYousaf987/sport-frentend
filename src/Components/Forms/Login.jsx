// Login.jsx - Clean production version
import React, { useState, useEffect, useCallback } from "react";
import { logo } from "../Navbar/Navbar";
import Login_img from "./Images/login.png";
import google from "./Images/Google.png";
import facebook from "./Images/facebook.png";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, clearError } from "../../features/users/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  // Handle Redux state errors (from rejected case)
  useEffect(() => {
    if (error && !isSubmitting) {
      let errorMessage = "Login failed. Please try again.";

      if (
        error.includes("Invalid email or password") ||
        error.includes("Invalid credentials")
      ) {
        errorMessage = "Invalid email or password";
      } else if (error.includes("verify your email") || error.includes("OTP")) {
        errorMessage = "Please verify your email with OTP first";
      }

      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        toastId: "redux-login-error",
      });

      // Clear the error after showing toast
      dispatch(clearError());
    }
  }, [error, isSubmitting, dispatch]);

  // Handle successful login
  useEffect(() => {
    if (user && user.userId) {
      toast.success("Login Successful!", {
        position: "top-right",
        autoClose: 2000,
        toastId: "login-success",
      });
      const destination = user.role === "organizer" ? "/organizer-events" : "/";
      navigate(destination, { replace: true });
    }
  }, [user, navigate]);

  // Memoized login handler
  const handleLoginSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      // Prevent multiple submissions
      if (isSubmitting || loading) {
        return;
      }

      // Validation
      if (!email || !password) {
        toast.error("Please enter both email and password", {
          position: "top-right",
          autoClose: 3000,
          toastId: "validation-error",
        });
        return;
      }

      // Set submitting state
      setIsSubmitting(true);

      // Clear any previous errors BEFORE dispatch
      dispatch(clearError());

      // Dispatch login action WITHOUT unwrap() to let Redux handle it
      const result = dispatch(loginUser({ email, password }));

      // Wait for the action to complete
      result
        .then((actionResult) => {
          // Check if it was fulfilled (success)
          if (loginUser.fulfilled.match(actionResult)) {
            // Navigation handled by useEffect
          }
          // Check if it was rejected (error)
          else if (loginUser.rejected.match(actionResult)) {
            setIsSubmitting(false);
            // Error handled by useEffect
          }
        })
        .catch((thrownError) => {
          setIsSubmitting(false);

          // Fallback error handling
          toast.error("Unexpected error occurred", {
            position: "top-right",
            autoClose: 5000,
            toastId: "unexpected-error",
          });
        });
    },
    [email, password, isSubmitting, loading, dispatch]
  );

  const handleForgotPassword = (e) => {
    e.preventDefault();
    navigate("/forgot-password");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  const isLoading = loading || isSubmitting;

  return (
    <div className="bg-black absolute top-0 -bottom-88 left-0 right-0 w-[100%] z-[999999] max-lg:-bottom-96">
      <div className="w-[90%] flex rounded mx-auto max-lg:flex-col-reverse">
        <form
          onSubmit={handleLoginSubmit}
          className="w-[50%] bg-[#ffffff] flex flex-col py-28 justify-center items-center gap-5 rounded-l-3xl max-lg:py-8 max-lg:w-[100%] max-lg:rounded-l-none max-lg:rounded-bl-3xl max-lg:rounded-b-3xl"
        >
          <img src={logo} alt="Logo" className="w-20" />
          <h1 className="text-3xl font-medium">Login Now</h1>

          <div className="flex flex-col w-[90%] gap-1">
            <label htmlFor="email" className="text-xl font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-1.5 rounded-full"
              placeholder="Enter Email Address"
              style={{ border: "1.5px solid #9ca3af" }}
              disabled={isLoading}
            />
          </div>

          <div className="w-[90%] gap-3 flex flex-col">
            <div className="flex flex-col w-[100%] gap-1">
              <label htmlFor="password" className="text-xl font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-3 py-1.5 rounded-full"
                placeholder="Enter Password"
                style={{ border: "1.5px solid #9ca3af" }}
                disabled={isLoading}
              />
            </div>
            <div className="flex justify-between">
              <div></div>
              <div
                className="text-[#9ca3af] underline cursor-pointer hover:text-red-500"
                onClick={handleForgotPassword}
              >
                Forgot Password
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="text-xl w-[90%] bg-[#E45352] py-1.5 px-3 text-[#ffffff] font-medium rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-600 transition-colors"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login Now"}
          </button>

          <div className="flex flex-col justify-center items-center gap-5 w-[90%]">
            <h1 className="text-sm text-gray-600">
              <span className="font-semibold">Login</span> With Others
            </h1>
            <div
              className="flex justify-center cursor-pointer items-center w-full p-1.5 gap-2 rounded-full opacity-60"
              style={{ border: "1.5px solid #9ca3af33" }}
            >
              <img src={google} alt="Google" className="w-7" />
              <p className="text-sm">
                Login with <span className="font-semibold">Google</span>
              </p>
            </div>
            <div
              className="flex justify-center cursor-pointer items-center w-full p-1.5 gap-2 rounded-full opacity-60"
              style={{ border: "1.5px solid #9ca3af33" }}
            >
              <img src={facebook} alt="Facebook" className="w-7" />
              <p className="text-sm">
                Login with <span className="font-semibold">Facebook</span>
              </p>
            </div>
          </div>

          <p className="text-center text-sm">
            Don't have an account?{" "}
            <span
              className="text-[#E45352] cursor-pointer hover:underline font-medium"
              onClick={handleSignup}
            >
              Sign Up
            </span>
          </p>
        </form>

        <div className="w-[50%] max-lg:w-[100%]">
          <img
            src={Login_img}
            alt="Login"
            className="w-[100%] h-[100%] rounded-r-3xl max-lg:rounded-r-none max-lg:rounded-t-3xl max-lg:h-[20rem] max-lg:object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
