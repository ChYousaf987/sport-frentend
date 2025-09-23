import React, { useState, useEffect } from "react";
import { logo } from "../Navbar/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import loginImage from "./Images/login.png";

const ResetPassword = () => {
  const [resetToken, setResetToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const urlEmail = new URLSearchParams(location.search).get("email") || "";
  const storedEmail = localStorage.getItem('resetPasswordEmail') || "";
  const [email, setEmail] = useState(urlEmail || storedEmail || "");
  
  // Clear localStorage email on component unmount
  useEffect(() => {
    return () => {
      localStorage.removeItem('resetPasswordEmail');
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate inputs
    if (!email) {
      setMessage("Email is required");
      toast.error("Email is required");
      return;
    }
    if (!resetToken) {
      setMessage("Reset token is required");
      toast.error("Reset token is required");
      return;
    }
    if (!newPassword) {
      setMessage("New password is required");
      toast.error("New password is required");
      return;
    }
    if (newPassword.length < 6) {
      setMessage("Password must be at least 6 characters");
      toast.error("Password must be at least 6 characters");
      return;
    }
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match");
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      console.log("Submitting reset password request:", { email, token: resetToken, newPassword: "[REDACTED]" });
      const response = await axios.post("http://localhost:3001/api/user/reset-password", {
        email,
        token: resetToken,
        newPassword
      });
      
      setMessage(response.data.message || "Password has been reset successfully");
      toast.success("Password has been reset successfully");
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Reset password error:", error.response?.data || error.message);
      const errorMessage = error.response?.data?.message || "Failed to reset password";
      setMessage(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black absolute top-0 -bottom-88 left-0 right-0 w-[100%] z-[999999] max-lg:-bottom-96">
      <div className="w-[90%] flex rounded mx-auto max-lg:flex-col-reverse">
        <div
          className="w-[50%] bg-[#ffffff] flex flex-col py-28 justify-center items-center gap-5 rounded-l-3xl max-lg:py-8 max-lg:w-[100%] max-lg:rounded-l-none max-lg:rounded-bl-3xl max-lg:rounded-b-3xl"
        >
          <img src={logo} alt="Logo" className="w-20" />
          <h1 className="text-3xl font-medium">Reset Password</h1>
          {message && <p className={message.includes("success") ? "text-green-500" : "text-red-500"}>{message}</p>}
          <form onSubmit={handleSubmit} className="w-[90%] flex flex-col gap-5">
            {<div className="flex flex-col w-[100%] gap-1">
                <label className="text-xl font-medium">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3 py-1.5 rounded-full"
                  style={{ border: "1.5px solid #9ca3af" }}
                />
              </div>
            }
            
            <div className="flex flex-col w-[100%] gap-1">
              <label className="text-xl font-medium">Reset Token</label>
              <input
                type="text"
                value={resetToken}
                onChange={(e) => setResetToken(e.target.value)}
                className="px-3 py-1.5 rounded-full"
                placeholder="Enter the token sent to your email"
                style={{ border: "1.5px solid #9ca3af" }}
                required
              />
            </div>

            <div className="flex flex-col w-[100%] gap-1">
              <label htmlFor="newPassword" className="text-xl font-medium">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="px-3 py-1.5 rounded-full"
                placeholder="Enter new password"
                style={{ border: "1.5px solid #9ca3af" }}
                disabled={loading}
              />
            </div>
            <div className="flex flex-col w-[100%] gap-1">
              <label htmlFor="confirmPassword" className="text-xl font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="px-3 py-1.5 rounded-full"
                placeholder="Confirm new password"
                style={{ border: "1.5px solid #9ca3af" }}
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              className="text-xl w-[100%] bg-[#E45352] py-1.5 px-3 text-[#ffffff] font-medium rounded-full"
              disabled={loading}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
          <p>
            Remember your password?{" "}
            <span
              className="text-[#E45352] cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>
        <div className="w-[50%] max-lg:w-[100%]">
          <img
            src={loginImage}
            alt="Reset Password"
            className="w-[100%] h-[100%] rounded-r-3xl max-lg:rounded-r-none max-lg:rounded-t-3xl max-lg:h-[20rem] max-lg:object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;