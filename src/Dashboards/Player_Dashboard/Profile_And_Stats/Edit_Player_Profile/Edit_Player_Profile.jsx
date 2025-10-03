import React, { useState } from "react";

const Edit_Player_Profile = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const citiesByCountry = {
    'United States': ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Other'],
    'Canada': ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 'Winnipeg', 'Quebec City', 'Hamilton', 'Other'],
    'United Kingdom': ['London', 'Birmingham', 'Manchester', 'Glasgow', 'Leeds', 'Liverpool', 'Edinburgh', 'Sheffield', 'Bristol', 'Other'],
    'Australia': ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Newcastle', 'Canberra', 'Other'],
    'India': ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Surat', 'Pune', 'Other'],
    'Pakistan': ['Karachi', 'Lahore', 'Faisalabad', 'Rawalpindi', 'Multan', 'Hyderabad', 'Gujranwala', 'Peshawar', 'Other'],
    'Germany': ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Leipzig', 'Other'],
    'France': ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Montpellier', 'Strasbourg', 'Bordeaux', 'Other'],
    'Other': ['Other']
  };

  const availableCities = selectedCountry && citiesByCountry[selectedCountry] ? citiesByCountry[selectedCountry] : [];

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
            <select 
              className="w-full p-2 border rounded"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option>Select Country</option>
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
              <option>Australia</option>
              <option>India</option>
              <option>Pakistan</option>
              <option>Germany</option>
              <option>France</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              City/Region
            </label>
            <select 
              className="w-full p-2 border rounded"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option>{selectedCountry ? 'Select City/Region' : 'Enter or Select City/Region'}</option>
              {availableCities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
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
              <option>Soccer</option>
              <option>Basketball</option>
              <option>Tennis</option>
              <option>Cricket</option>
              <option>Volleyball</option>
              <option>Badminton</option>
              <option>Golf</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Skill Level
            </label>
            <select className="w-full p-2 border rounded">
              <option>Select Skill</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
              <option>Professional</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Playing Position
            </label>
            <select className="w-full p-2 border rounded">
              <option>Select your position</option>
              <option>Goalkeeper</option>
              <option>Defender</option>
              <option>Midfielder</option>
              <option>Forward</option>
              <option>Point Guard</option>
              <option>Shooting Guard</option>
              <option>Center</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Choose Your Availability
            </label>
            <select className="w-full p-2 border rounded">
              <option>Select your time and day</option>
              <option>Monday Morning</option>
              <option>Tuesday Afternoon</option>
              <option>Wednesday Evening</option>
              <option>Thursday Morning</option>
              <option>Friday Afternoon</option>
              <option>Saturday All Day</option>
              <option>Sunday Evening</option>
              <option>Weekdays Only</option>
              <option>Weekends Only</option>
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
              <option>Individual</option>
              <option>2 Players</option>
              <option>5 Players</option>
              <option>7 Players</option>
              <option>11 Players</option>
              <option>Custom</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Max Player per Team
            </label>
            <select className="w-full p-2 border rounded">
              <option>Select the limit of players</option>
              <option>5</option>
              <option>10</option>
              <option>15</option>
              <option>20</option>
              <option>Unlimited</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Participation Type
            </label>
            <select className="w-full p-2 border rounded">
              <option>Select your participation type</option>
              <option>Solo</option>
              <option>Team</option>
              <option>Mixed</option>
              <option>League</option>
              <option>Tournament</option>
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
              <option>Credit Card</option>
              <option>Debit Card</option>
              <option>PayPal</option>
              <option>Bank Transfer</option>
              <option>Cryptocurrency</option>
              <option>Other</option>
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