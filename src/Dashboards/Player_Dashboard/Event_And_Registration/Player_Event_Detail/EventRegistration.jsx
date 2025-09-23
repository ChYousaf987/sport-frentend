import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const EventRegistration = ({ profile = {} }) => {
  return (
    <div className="absolute top-20 right-0 bg-[#FAFAFA] w-[75%] max-lg:w-[100%] max-lg:mt-10">
      <div className="p-3">
        <form className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6">
          <p className="text-lg font-semibold">Event Registration</p>

          {/* Profile Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border rounded-full px-3 py-2"
                defaultValue={profile.fullName || ""}
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full border rounded-full px-3 py-2"
                defaultValue={profile.username || ""}
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Profile Picture</label>
              <input type="file" className="w-full border rounded-full px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full border rounded-full px-3 py-2"
                defaultValue={profile.email || ""}
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Contact Number</label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full border rounded-full px-3 py-2"
                defaultValue={profile.contact || ""}
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Date of Birth</label>
              <input
                type="date"
                className="w-full border rounded-full px-3 py-2"
                defaultValue={profile.dob || ""}
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Gender</label>
              <select
                className="w-full border rounded-full px-3 py-2"
                defaultValue={profile.gender || ""}
              >
                <option value="" disabled>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">Country</label>
              <input
                type="text"
                placeholder="Enter country"
                className="w-full border rounded-full px-3 py-2"
                defaultValue={profile.country || ""}
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">City/Region</label>
              <input
                type="text"
                placeholder="Enter city or region"
                className="w-full border rounded-full px-3 py-2"
                defaultValue={profile.city || ""}
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Preferred Player Venues</label>
              <input
                type="text"
                placeholder="e.g., Turf, Stadium"
                className="w-full border rounded-full px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Skill</label>
              <input
                type="text"
                placeholder="Beginner / Intermediate / Pro"
                className="w-full border rounded-full px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Player Position</label>
              <input
                type="text"
                placeholder="Goalkeeper / Midfielder / etc."
                className="w-full border rounded-full px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Total Matches Played</label>
              <input
                type="number"
                placeholder="e.g., 50"
                className="w-full border rounded-full px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Win/Loss</label>
              <input
                type="text"
                placeholder="e.g., 30/20"
                className="w-full border rounded-full px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Trophies/Medals Won</label>
              <input
                type="text"
                placeholder="List awards"
                className="w-full border rounded-full px-3 py-2"
              />
            </div>
          </div>

          {/* Event Info */}
          <hr className="my-4" />
          <p className="text-lg font-semibold">Event Information</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Event Title</label>
              <input type="text" placeholder="e.g., Summer Cup 2025" className="w-full border rounded-full px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Event Date</label>
              <input type="date" className="w-full border rounded-full px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Event Location</label>
              <input type="text" placeholder="City, Country" className="w-full border rounded-full px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Game Type</label>
              <input type="text" placeholder="e.g., Football" className="w-full border rounded-full px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Organizer Name</label>
              <input type="text" placeholder="Name" className="w-full border rounded-full px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Organizer Gender</label>
              <select className="w-full border rounded-full px-3 py-2">
                <option value="" disabled selected>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">Organizer Contact</label>
              <input type="text" placeholder="Phone Number" className="w-full border rounded-full px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Team Size</label>
              <input type="number" placeholder="e.g., 10" className="w-full border rounded-full px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Max Player Per Team</label>
              <input type="number" placeholder="e.g., 11" className="w-full border rounded-full px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Participation Type</label>
              <input type="text" placeholder="e.g., Open, Invite Only" className="w-full border rounded-full px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Registration Limit</label>
              <input type="number" placeholder="Max registrations" className="w-full border rounded-full px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Participation Fee</label>
              <input type="number" placeholder="e.g., 100 USD" className="w-full border rounded-full px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Payment Method</label>
              <select className="w-full border rounded-full px-3 py-2">
                <option value="" disabled selected>Select Method</option>
                <option value="paypal">PayPal</option>
                <option value="stripe">Stripe</option>
                <option value="cash">Cash</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">Transaction History</label>
              <textarea
                rows={3}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Add notes or reference IDs"
              />
            </div>
          </div>

          {/* Privacy Options */}
          <div className="mt-4">
            <label className="flex items-center gap-2 mb-2">
              <input type="checkbox" className="w-5 h-5 rounded-full accent-[#e45252]" />
              Make profile visible to others
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-5 h-5 rounded-full accent-[#e45252]" />
              Allow notifications
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-center items-center gap-10 mt-6">
            <Link to="/Player_Payment" >
            <button
              type="submit"
              className="bg-red-500 rounded-full hover:bg-red-600 text-white font-semibold px-6 py-3"
            >
              Submit Registration
            </button>
            </Link>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventRegistration;
