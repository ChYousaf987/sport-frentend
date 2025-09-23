import React, { useState } from "react";
import { logo } from "../Navbar/Navbar";
import Signup_img from "./Images/signup.jpeg";
import google from "./Images/Google.png";
import facebook from "./Images/facebook.png";
import { useDispatch, useSelector } from "react-redux";
import { signupUser, clearError } from "../../features/users/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Sign_up = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [localError, setLocalError] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const genders = [
    { select: "Select Your Gender", value: "", id: 1 },
    { select: "Male", value: "Male", id: 2 },
    { select: "Female", value: "Female", id: 3 },
    {
      select: "Neither Male Nor Female",
      value: "Neither Male Nor Female",
      id: 4,
    },
  ];

  const submitData = (e) => {
    e.preventDefault();
    
    // Validate all required fields
    if (!fullName) {
      setLocalError("Full name is required");
      toast.error("Full name is required");
      return;
    }
    if (!email) {
      setLocalError("Email is required");
      toast.error("Email is required");
      return;
    }
    if (!location) {
      setLocalError("Location is required");
      toast.error("Location is required");
      return;
    }
    if (!gender) {
      setLocalError("Gender is required");
      toast.error("Gender is required");
      return;
    }
    if (!age) {
      setLocalError("Age is required");
      toast.error("Age is required");
      return;
    }
    if (!password) {
      setLocalError("Password is required");
      toast.error("Password is required");
      return;
    }
    if (password.length < 6) {
      setLocalError("Password must be at least 6 characters");
      toast.error("Password must be at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      setLocalError("Passwords do not match");
      toast.error("Passwords do not match");
      return;
    }
    
    setLocalError("");
    dispatch(clearError());
    
    console.log("Submitting signup data:", { 
      fullName, 
      email, 
      location, 
      gender, 
      age, 
      password: "[REDACTED]" 
    });
    
    dispatch(
      signupUser({
        fullName,
        email,
        password,
        location,
        gender,
        age,
      })
    ).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        toast.success("Please verify OTP sent to your email");
        navigate("/verify-otp", { state: { userId: result.payload.userId } });
      } else {
        const errorMsg = result.payload || "Signup failed";
        setLocalError(errorMsg);
        toast.error(errorMsg);
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[90%] max-w-6xl flex rounded-lg shadow-lg bg-white max-lg:flex-col">
        <form
          onSubmit={submitData}
          className="w-[50%] flex flex-col py-10 px-6 justify-center items-center gap-5 max-lg:w-full max-lg:py-6"
        >
          <img src={logo} alt="Logo" className="w-20" />
          <h1 className="text-3xl font-medium">Sign Up Now</h1>
          {error && <p className="text-red-500">{error}</p>}
          {localError && <p className="text-red-500">{localError}</p>}
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="fullName" className="text-lg font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter Full Name"
              disabled={loading}
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="email" className="text-lg font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter Email Address"
              disabled={loading}
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="location" className="text-lg font-medium">
              Location
            </label>
            <input
              type="text"
              name="location"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter Your Location"
              disabled={loading}
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="gender" className="text-lg font-medium">
              Gender
            </label>
            <select
              name="gender"
              required
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              disabled={loading}
            >
              {genders.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.select}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="age" className="text-lg font-medium">
              Age
            </label>
            <input
              type="number"
              name="age"
              required
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter Your Age"
              disabled={loading}
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="password" className="text-lg font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter Password"
              disabled={loading}
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="confirmPassword" className="text-lg font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Confirm Password"
              disabled={loading}
            />
          </div>
          <div className="flex items-center gap-2 w-full">
            <input type="checkbox" disabled={loading} />
            <p className="text-gray-600 text-sm">
              I agree to the terms and conditions.
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 py-2 px-4 text-white font-medium rounded-full hover:bg-red-600 disabled:bg-red-300"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <span
              className="text-red-500 cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </form>
        <div className="w-[50%] max-lg:w-full">
          <img
            src={Signup_img}
            alt="Signup"
            className="w-full h-full object-cover rounded-r-lg max-lg:rounded-t-lg max-lg:h-64"
          />
        </div>
      </div>
    </div>
  );
};

export default Sign_up;
