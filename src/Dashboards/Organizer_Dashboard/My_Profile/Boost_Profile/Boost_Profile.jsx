import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo2 from "./Images/logo2.png";

const Boost_Profile = () => {
  const plans = [
    { name: "Basic", duration: "7 Days", price: 10 },
    { name: "Standard", duration: "15 Days", price: 20 },
    { name: "Premium", duration: "30 Days", price: 40 },
  ];

  // State for toggling between Featured and Non-Featured preview
  const [isFeatured, setIsFeatured] = useState(true);

  // Toggle function
  const handleTogglePreview = () => {
    setIsFeatured(!isFeatured);
  };

  return (
    <div className="absolute top-20 right-0 bg-[#FAFAFA] w-[75%] float-right max-lg:w-[100%] max-lg:top-32">
      <div className="p-3">
        <div className="rounded-lg shadow-md bg-white p-5">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Feature Your Profile Now, Be the Go-To Organizer in Your Country
            </h1>
            <p className="text-lg text-gray-600 mt-2">
              Your profile will be shown to players looking for matches, making
              you stand out.
            </p>
            <NavLink
              to="/ProfileViewOrganizer"
              className="inline-block bg-yellow-500 text-white font-semibold py-2 px-6 rounded-lg mt-4 hover:bg-yellow-600"
            >
              Feature My Profile
            </NavLink>
          </div>

          {/* Feature Options */}
          <div className="flex justify-evenly max-lg:flex-col max-lg:items-center max-lg:gap-5">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-white w-[25%] max-lg:w-[90%] shadow-lg rounded-lg p-5 flex flex-col items-center border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {plan.name}
                </h3>
                <img
                  src={logo2}
                  alt={`${plan.name} plan logo`}
                  className="w-20 my-4"
                />
                <p className="text-3xl font-medium text-gray-800">
                  $<span className="text-4xl">{plan.price}</span>
                </p>
                <p className="text-gray-500">Featured for {plan.duration}</p>
                <NavLink
                  to={`/ProfileViewOrganizer?plan=${plan.name.toLowerCase()}`}
                  className="w-[70%] bg-blue-600 text-white p-2 rounded-lg mt-5 hover:bg-blue-700 text-center"
                >
                  Select Plan
                </NavLink>
              </div>
            ))}
          </div>

          {/* Preview Section */}
          <div className="mt-10 p-5 bg-gray-100 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
              See How You’ll Appear
            </h2>
            <div className="mt-4 p-4 bg-white rounded-lg shadow-md max-w-md mx-auto">
              <div className="flex items-center gap-4">
                <img
                  src={logo2}
                  alt="Organizer logo"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">Organizer Name</h3>
                  <p className="text-gray-600">Location, Country</p>
                </div>
                {isFeatured && (
                  <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                    Featured
                  </span>
                )}
              </div>
              <p className="mt-2 text-gray-600">
                Hosted Sports:{" "}
                {isFeatured ? "Football, Basketball, Tennis" : "Football"}
              </p>
              <p className="text-gray-600">
                Upcoming Events: {isFeatured ? "5" : "2"}
              </p>
              <p className="text-gray-600">
                ⭐ {isFeatured ? "4.8 (120 Reviews)" : "4.2 (50 Reviews)"}
              </p>
              <button
                onClick={handleTogglePreview}
                className="mt-4 text-blue-600 underline hover:text-blue-800 focus:outline-none"
                aria-label={
                  isFeatured
                    ? "Show Non-Featured Preview"
                    : "Show Featured Preview"
                }
              >
                {isFeatured
                  ? "Show Non-Featured Preview"
                  : "Show Featured Preview"}
              </button>
            </div>
          </div>

          {/* Payment & Confirmation Section */}
          <div className="mt-10 text-center">
            <NavLink
              to="/Payment"
              className="inline-block bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700"
            >
              Proceed to Payment
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boost_Profile;
