import React from "react";

const Edit_Player_Profile = () => {
  return (
    <div className="absolute top-20 right-0 bg-[#FAFAFA] w-[75%] float-right max-lg:w-[100%] max-lg:mt-10">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Esther Horward"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              User Name
            </label>
            <input
              type="text"
              placeholder="Auto Generated from registration"
              className="w-full p-2 border rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Auto Filled from registration"
              className="w-full p-2 border rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Date of Birth
            </label>
            <input
              type="text"
              placeholder="Auto Generated from registration"
              className="w-full p-2 border rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-1">Gender</label>
            <select className="w-full p-2 border rounded">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+92 00 000 0000"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <h2 className="text-lg font-semibold mt-6 mb-4">Location Detail</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600 block mb-1">Country</label>
            <select className="w-full p-2 border rounded">
              <option>Select Country</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              City/Region
            </label>
            <select className="w-full p-2 border rounded">
              <option>Enter or Select City/Region</option>
            </select>
          </div>
          <div className="col-span-2">
            <label className="text-sm text-gray-600 block mb-1">
              Playing Venue
            </label>
            <input
              type="text"
              placeholder="Enter your preferred location where you usually play"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <h2 className="text-lg font-semibold mt-6 mb-4">
          Sports & Preferences
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Preferred Sport
            </label>
            <select className="w-full p-2 border rounded">
              <option>Select Sport</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Skill Level
            </label>
            <select className="w-full p-2 border rounded">
              <option>Select Skill</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Playing Position
            </label>
            <select className="w-full p-2 border rounded">
              <option>Select your position</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Choose Your Availability
            </label>
            <select className="w-full p-2 border rounded">
              <option>Select your time and day</option>
            </select>
          </div>
        </div>

        <h2 className="text-lg font-semibold mt-6 mb-4">
          Player Stats & Achievements (Optional, Can Be Updated Over Time)
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Total Match Played
            </label>
            <input
              type="text"
              placeholder="Auto Filled"
              className="w-full p-2 border rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Win/Loses
            </label>
            <input
              type="text"
              placeholder="Auto Filled"
              className="w-full p-2 border rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Trophies and Medal Won
            </label>
            <input
              type="text"
              placeholder="Enter Your Winning trophies or medals"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Ranking and Rating
            </label>
            <input
              type="text"
              placeholder="Please Enter Your ranking and rating"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <h2 className="text-lg font-semibold mt-6 mb-4">
          Event Participation Preferences (Optional)
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Team Size
            </label>
            <select className="w-full p-2 border rounded">
              <option>Select Size of team</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Max Player per Team
            </label>
            <input
              type="text"
              placeholder="Enter the limit of player"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Participation Type
            </label>
            <select className="w-full p-2 border rounded">
              <option>Select your participation type</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Registration limit
            </label>
            <input
              type="text"
              placeholder="Enter the limit of event you want to join per Month"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <h2 className="text-lg font-semibold mt-6 mb-4">
          Payment & Transactions
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Payment Method
            </label>
            <select className="w-full p-2 border rounded">
              <option>Select Payment Method</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Transaction History
            </label>
            <input
              type="text"
              placeholder="Auto Tracked"
              className="w-full p-2 border rounded bg-gray-100"
              disabled
            />
          </div>
        </div>

        <h2 className="text-lg font-semibold mt-6 mb-4">Additional Settings</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="text-sm text-gray-600 block mb-2">
              Additional Settings
            </label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="profileVisible"
                  value="yes"
                  className="mr-2"
                />{" "}
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="profileVisible"
                  value="no"
                  className="mr-2"
                />{" "}
                No
              </label>
              <span className="text-sm text-gray-600">
                Allow profile visible to others
              </span>
            </div>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="notification"
                  value="yes"
                  className="mr-2"
                />{" "}
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="notification"
                  value="no"
                  className="mr-2"
                />{" "}
                No
              </label>
              <span className="text-sm text-gray-600">
                Allow notification of invitation
              </span>
            </div>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="organizerRole"
                  value="yes"
                  className="mr-2"
                />{" "}
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="organizerRole"
                  value="no"
                  className="mr-2"
                />{" "}
                No
              </label>
              <span className="text-sm text-gray-600">
                Can switch to organizer role
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-[#e45252] text-white px-6 py-2 rounded-full">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit_Player_Profile;
