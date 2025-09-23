import React, { useState } from "react";
import { logo } from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { verifyOTPUser, clearError } from "../../features/users/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();
  const { userId } = location.state || {};

  const submitData = (e) => {
    e.preventDefault();
    if (!userId) {
      toast.error("Invalid session. Please try signing up again.");
      navigate("/signup");
      return;
    }
    dispatch(clearError());
    dispatch(verifyOTPUser({ userId, otp })).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        toast.success("OTP verified successfully");
        navigate("/"); // Changed to redirect to home
      } else {
        toast.error(result.payload || "OTP verification failed");
      }
    });
  };

  return (
    <div className="bg-black absolute top-0 -bottom-88 left-0 right-0 w-[100%] z-[999999] max-lg:-bottom-96">
      <div className="w-[90%] flex rounded mx-auto max-lg:flex-col">
        <form
          onSubmit={submitData}
          className="w-[50%] bg-[#ffffff] flex flex-col py-28 justify-center items-center gap-5 rounded-3xl max-lg:py-8 max-lg:w-[100%] max-lg:rounded-3xl"
        >
          <img src={logo} alt="Logo" className="w-20" />
          <h1 className="text-3xl font-medium">Verify OTP</h1>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex flex-col w-[90%] gap-1">
            <label htmlFor="otp" className="text-xl font-medium">
              Enter OTP
            </label>
            <input
              type="text"
              name="otp"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="px-3 py-1.5 rounded-full"
              placeholder="Enter 6-digit OTP"
              style={{ border: "1.5px solid #9ca3af" }}
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            className="text-xl w-[90%] bg-[#E45352] py-1.5 px-3 text-[#ffffff] font-medium rounded-full"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
          <p>
            Back to{" "}
            <span
              className="text-[#E45352] cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>
        </form>
        <div className="w-[50%] max-lg:hidden"></div>
      </div>
    </div>
  );
};

export default VerifyOTP;