import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  submitRoleChangeRequest,
  clearRoleState,
} from "../../features/role/roleSlice";
import { toast } from "react-toastify";
import { logo } from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Role1 from "./Images/role1.jpeg";
import Role2 from "./Images/role2.jpeg";

const ChangeRole = () => {
  const [formData, setFormData] = useState({
    userId: "",
    fullName: "",
    email: "",
    phoneNumber1: "",
    phoneNumber2: "",
    organizerType: "",
    city: "",
    region: "",
    address: "",
    sports: [],
    eventTypes: [],
    bankName: "",
    accountNumber: "",
    termsAccepted: false,
  });

  const dispatch = useDispatch();
  const { user, loading: userLoading } = useSelector((state) => state.user);
  const { loading, success, error, message } = useSelector(
    (state) => state.role
  );

  const organizers = [
    { select: "Select Organizer Type", value: "", id: 1 },
    { select: "Business/Club", value: "Business/Club", id: 2 },
    { select: "Individual Organizer", value: "Individual Organizer", id: 3 },
  ];
  const cities = [
    { select: "City", value: "", id: 1 },
    { select: "City1", value: "City1", id: 2 },
    { select: "City2", value: "City2", id: 3 },
  ];
  const regions = [
    { select: "Region", value: "", id: 1 },
    { select: "Region1", value: "Region1", id: 2 },
    { select: "Region2", value: "Region2", id: 3 },
  ];
  const banks = [
    { select: "Bank Name", value: "", id: 1 },
    { select: "Bank1", value: "Bank1", id: 2 },
    { select: "Bank2", value: "Bank2", id: 3 },
  ];
  const sportsOptions = [
    "Football",
    "Cricket",
    "Tennis",
    "Basketball",
    "Race",
    "Volleyball",
    "Swimming",
    "Cycling",
  ];
  const eventTypeOptions = [
    "Tournaments",
    "Friendly Matches",
    "Training Session",
    "Coaching/Workshops",
  ];

  useEffect(() => {
    console.log("User state:", user); // Debug user state
    if (user && user.userId) {
      setFormData((prev) => ({
        ...prev,
        userId: user.userId,
        fullName: user.fullName || "",
        email: user.email || "",
      }));
    }
    if (success) {
      toast.success("Role change request submitted successfully!");
      setFormData({
        userId: user?.userId || "",
        fullName: user?.fullName || "",
        email: user?.email || "",
        phoneNumber1: "",
        phoneNumber2: "",
        organizerType: "",
        city: "",
        region: "",
        address: "",
        sports: [],
        eventTypes: [],
        bankName: "",
        accountNumber: "",
        termsAccepted: false,
      });
      dispatch(clearRoleState());
    }
    if (error) {
      toast.error(`Error: ${error}`);
      dispatch(clearRoleState());
    }
  }, [user, success, error, dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e, field) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  const handleTermsChange = (e) => {
    setFormData({ ...formData, termsAccepted: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const missingFields = [];
    if (!formData.userId)
      missingFields.push(
        "User ID (please log in or complete signup/verification)"
      );
    if (!formData.fullName) missingFields.push("Full Name");
    if (!formData.email) missingFields.push("Email");
    if (!formData.phoneNumber1) missingFields.push("Primary Phone Number");
    if (!formData.phoneNumber2) missingFields.push("Secondary Phone Number");
    if (!formData.organizerType || formData.organizerType === "")
      missingFields.push("Organizer Type");
    if (!formData.city || formData.city === "") missingFields.push("City");
    if (!formData.region || formData.region === "")
      missingFields.push("Region");
    if (!formData.address) missingFields.push("Address");
    if (formData.sports.length === 0) missingFields.push("Sports");
    if (formData.eventTypes.length === 0) missingFields.push("Event Types");
    if (!formData.bankName || formData.bankName === "")
      missingFields.push("Bank Name");
    if (!formData.accountNumber) missingFields.push("Account Number");
    if (!formData.termsAccepted) missingFields.push("Terms and Conditions");

    if (missingFields.length > 0) {
      toast.error(
        `Please fill in the following fields: ${missingFields.join(", ")}`
      );
      return;
    }

    dispatch(submitRoleChangeRequest(formData));
  };

  // Check if user is authenticated and verified
  if (!user || !user.userId) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 text-center">
          <img src={logo} alt="Logo" className="w-20 mx-auto mb-4" />
          <h1 className="text-2xl font-medium mb-4">Authentication Required</h1>
          <p className="text-gray-600 mb-6">
            You must be logged in and have a verified account to submit a role
            change request.
            {user && !user.userId
              ? " Please complete your signup and OTP verification."
              : " Please log in to continue."}
          </p>
          <Link
            to={user && !user.userId ? "/verify-otp" : "/login"}
            className="text-xl bg-[#E45352] py-2 px-4 text-white font-medium rounded-full hover:bg-red-600 transition"
          >
            {user && !user.userId ? "Verify OTP" : "Go to Login"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 p-8 flex flex-col items-center gap-6"
        >
          <img src={logo} alt="Logo" className="w-20 mb-4" />
          <h1 className="text-3xl font-medium text-center">
            Please enter some details to change your role
          </h1>
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName" className="text-lg font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg outline-none border border-gray-300 focus:border-[#E45352] transition"
                placeholder="Enter Full Name"
                disabled={!!user?.fullName}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-lg font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg outline-none border border-gray-300 focus:border-[#E45352] transition"
                placeholder="Enter Email Address"
                disabled={!!user?.email}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="organizerType" className="text-lg font-medium">
                Organizer Type
              </label>
              <select
                id="organizerType"
                name="organizerType"
                value={formData.organizerType}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg outline-none border border-gray-300 focus:border-[#E45352] transition"
              >
                {organizers.map((option) => (
                  <option key={option.id} value={option.value}>
                    {option.select}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phoneNumber1" className="text-lg font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber1"
                name="phoneNumber1"
                value={formData.phoneNumber1}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg outline-none border border-gray-300 focus:border-[#E45352] transition"
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phoneNumber2" className="text-lg font-medium">
                Phone Number 2
              </label>
              <input
                type="tel"
                id="phoneNumber2"
                name="phoneNumber2"
                value={formData.phoneNumber2}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg outline-none border border-gray-300 focus:border-[#E45352] transition"
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg font-medium">Location</label>
              <div className="flex gap-4">
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-1/2 px-4 py-2 rounded-lg outline-none border border-gray-300 focus:border-[#E45352] transition"
                >
                  {cities.map((option) => (
                    <option key={option.id} value={option.value}>
                      {option.select}
                    </option>
                  ))}
                </select>
                <select
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  className="w-1/2 px-4 py-2 rounded-lg outline-none border border-gray-300 focus:border-[#E45352] transition"
                >
                  {regions.map((option) => (
                    <option key={option.id} value={option.value}>
                      {option.select}
                    </option>
                  ))}
                </select>
              </div>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 rounded-lg outline-none border border-gray-300 focus:border-[#E45352] transition"
                placeholder="5809 Evans Fork"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg font-medium">Sports & Events</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {sportsOptions.map((sport) => (
                  <div
                    key={sport}
                    className="flex gap-2 p-2 rounded-lg border border-gray-300"
                  >
                    <input
                      type="checkbox"
                      value={sport}
                      checked={formData.sports.includes(sport)}
                      onChange={(e) => handleCheckboxChange(e, "sports")}
                    />
                    <p className="text-[#9ca3af] text-sm">{sport}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg font-medium">Event Type You Host</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {eventTypeOptions.map((eventType) => (
                  <div
                    key={eventType}
                    className="flex gap-2 p-2 rounded-lg border border-gray-300"
                  >
                    <input
                      type="checkbox"
                      value={eventType}
                      checked={formData.eventTypes.includes(eventType)}
                      onChange={(e) => handleCheckboxChange(e, "eventTypes")}
                    />
                    <p className="text-[#9ca3af] text-sm">{eventType}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="bankName" className="text-lg font-medium">
                Bank Details
              </label>
              <div className="flex gap-4">
                <select
                  id="bankName"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  className="w-1/3 px-4 py-2 rounded-lg outline-none border border-gray-300 focus:border-[#E45352] transition"
                >
                  {banks.map((option) => (
                    <option key={option.id} value={option.value}>
                      {option.select}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  className="w-2/3 px-4 py-2 rounded-lg outline-none border border-gray-300 focus:border-[#E45352] transition"
                  placeholder="IBAN/Account Number"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.termsAccepted}
                onChange={handleTermsChange}
              />
              <p className="text-[#9ca3af] text-sm">
                I agree to the terms and conditions
              </p>
            </div>
            <button
              type="submit"
              disabled={loading || userLoading}
              className="text-xl w-full bg-[#E45352] py-2 px-4 text-white font-medium rounded-full mt-6 hover:bg-red-600 transition disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>
          </div>
        </form>
        <div className="w-full md:w-1/2 h-[400px] md:h-auto flex flex-col md:flex-row">
          <img
            src={Role1}
            alt="Role 1"
            className="w-full h-1/2 md:h-full object-cover rounded-bl-3xl md:rounded-bl-none md:rounded-tr-3xl"
          />
          <img
            src={Role2}
            alt="Role 2"
            className="w-full h-1/2 md:h-full object-cover rounded-br-3xl md:rounded-br-none md:rounded-tr-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ChangeRole;
