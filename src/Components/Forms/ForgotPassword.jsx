import React, { useState } from "react";
import { logo } from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import loginImage from "./Images/login.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setMessage("Email is required");
      toast.error("Email is required");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      console.log("Submitting forgot password request for email:", email);
      const response = await axios.post("http://localhost:3001/api/user/forgot-password", { email });
      
      const successMessage = response.data.message || "Reset instructions sent to your email";
      setMessage(successMessage);
      toast.success(successMessage);
      
      // Store email in localStorage to ensure it's available on the reset page
      localStorage.setItem('resetPasswordEmail', email);
      
      // Redirect to reset password page after 2 seconds
      setTimeout(() => {
        navigate(`/reset-password?email=${encodeURIComponent(email)}`);
      }, 2000);
    } catch (error) {
      console.error("Forgot password error:", error.response?.data || error.message);
      const errorMessage = error.response?.data?.message || "Failed to send reset instructions";
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
          <h1 className="text-3xl font-medium">Forgot Password</h1>
          {message && <p className={message.includes("sent") ? "text-green-500" : "text-red-500"}>{message}</p>}
          <form onSubmit={handleSubmit} className="w-[90%] flex flex-col gap-5">
            <div className="flex flex-col w-[100%] gap-1">
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
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              className="text-xl w-[100%] bg-[#E45352] py-1.5 px-3 text-[#ffffff] font-medium rounded-full"
              disabled={loading}
            >
              {loading ? "Sending..." : "Reset Password"}
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
            alt="Forgot Password"
            className="w-[100%] h-[100%] rounded-r-3xl max-lg:rounded-r-none max-lg:rounded-t-3xl max-lg:h-[20rem] max-lg:object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;