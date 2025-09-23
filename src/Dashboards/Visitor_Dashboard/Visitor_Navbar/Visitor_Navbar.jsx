import React, { useState, useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { IoFilterSharp } from "react-icons/io5";
import { BsGear, BsChatDots, BsBell, BsBoxArrowRight } from "react-icons/bs";
import { SlMenu } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { TfiViewListAlt } from "react-icons/tfi";
import { PiHandCoinsLight } from "react-icons/pi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { logo } from "../Sidebar/Visitor_Sidebar";
import { FaPhone } from "react-icons/fa";

const Visitor_Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // NEW
  const dropdownRef = useRef(null);
  const filtersRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close filters if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filtersRef.current && !filtersRef.current.contains(event.target)) {
        setShowFilters(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close the sidebar when a NavLink is clicked
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      {/* Sidebar toggle for mobile/tablet */}
      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-[9999999] transform transition-transform duration-300 w-[90%] lg:block ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="w-[25%] flex flex-col gap-7 relative z-50 top-0 py-2 min-h-[120vh]  bottom-0 bg-white px-5 max-lg:w-[100%]">
          <a href="/" className="">
            <img src={logo} alt="" className="w-24" />
          </a>
          <h1 className="text-3xl font-semibold">Welcome, Visitor</h1>
          <NavLink
            to="/signup"
            className="w-[100%] text-xl bg-[#E45352] py-1.5 px-3 text-[#ffffff] font-medium rounded-full flex items-center justify-center"
            onClick={closeSidebar} // Close sidebar when clicked
          >
            Sign Up
          </NavLink>
          <div className="flex flex-col gap-10">
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#E45352" : "black",
                };
              }}
              className="flex items-center gap-3 text-[#E45352]"
              onClick={closeSidebar} // Close sidebar when clicked
            >
              <TfiViewListAlt className="text-xl" />
              <p className="text-xl font-medium">Overview</p>
            </NavLink>
            <NavLink
              to="/BenefitsSigning"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#E45352" : "black",
                };
              }}
              className="flex items-center gap-3"
              onClick={closeSidebar} // Close sidebar when clicked
            >
              <PiHandCoinsLight className="text-2xl" />
              <p className="text-xl font-medium">Benefits of Signing Up</p>
            </NavLink>
            <NavLink
              to="/HelpSupport"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#E45352" : "black",
                };
              }}
              className="flex items-center gap-3"
              onClick={closeSidebar} // Close sidebar when clicked
            >
              <IoMdHelpCircleOutline className="text-2xl" />
              <p className="text-xl font-medium">Help & Support</p>
            </NavLink>
            <NavLink
              to="/ContactUs"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#E45352" : "black",
                };
              }}
              className="flex items-center gap-3"
              onClick={closeSidebar} // Close sidebar when clicked
            >
              <FaPhone className="text-2xl" />
              <p className="text-xl font-medium">Help & Support</p>
            </NavLink>
            
            
          </div>
        </div>
      </div>

      <div className="w-[75%] absolute top-0 right-0 z-50 flex flex-col gap-2 bg-[#fafafa] max-lg:w-[100%]">
        <div className="w-[100%] float-right flex items-center py-3 px-6 justify-between bg-white max-lg:px-3 shadow-sm ">
          {/* Left: Profile & Role */}
          <SlMenu
            className="text-2xl hidden max-lg:flex cursor-pointer"
            onClick={() => setSidebarOpen(!sidebarOpen)} // Toggle sidebar on menu click
          />
          <div className="flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <h1 className="font-semibold text-sm sm:text-base">Visitor</h1>
          </div>

          {/* Center: Search Bar */}
          <div
            className="flex items-center border rounded-full px-4 py-2 w-[60%] max-w-xl bg-[#f9f9f9] max-lg:hidden relative"
            ref={dropdownRef}
          >
            <FiSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search for players, events, or other organizers"
              className="flex-grow outline-none bg-transparent text-sm placeholder:text-gray-400"
              onClick={() => setShowDropdown(true)}
            />
            {showDropdown && (
              <div className="absolute top-12 left-0 bg-white border rounded-lg shadow-lg w-full z-50">
                <div className="p-4 border-b text-sm font-semibold">
                  Search for
                </div>
                <ul className="text-sm">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                    <FiSearch className="text-gray-500" /> For Player
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                    <FiSearch className="text-gray-500" /> For Organizer
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                    <FiSearch className="text-gray-500" /> For Event
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                    <FiSearch className="text-gray-500" /> Advance Search
                  </li>
                </ul>
              </div>
            )}
            <div
              className="flex items-center relative bg-[#E45252] text-white p-2 rounded-full ml-2 cursor-pointer"
              onClick={() => setShowFilters(true)}
            >
              <IoFilterSharp size={16} />
            </div>
            {showFilters && (
              <div
                ref={filtersRef}
                className="absolute top-12 right-0 bg-white border rounded-lg shadow-lg w-80 z-50 p-4"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-sm font-semibold">Filter Options</h2>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="text-xl font-bold text-gray-500"
                  >
                    ×
                  </button>
                </div>
                <div className="space-y-3 text-sm">
                  <p className="text-black text-sm font-semibold">Location</p>
                  <input
                    type="text"
                    className="w-full border border-black rounded px-3 py-2"
                  />
                  <p className="text-black text-sm font-semibold">Event Type</p>
                  <input
                    type="text"
                    className="w-full border border-black rounded px-3 py-2"
                  />
                  <p className="text-black text-sm font-semibold">Ratings</p>
                  <input
                    type="text"
                    className="w-full border border-black rounded px-3 py-2"
                  />
                  <p className="text-black text-sm font-semibold">
                    Account Status
                  </p>
                  <input
                    type="text"
                    className="w-full border border-black rounded px-3 py-2"
                  />
                  <button className="w-full bg-red-500 text-white py-2 rounded mt-2">
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-4 ml-4">
            <div className="p-2 border rounded-full cursor-pointer hover:bg-gray-100">
              <BsGear className="text-gray-500" />
            </div>
            <div className="p-2 border rounded-full cursor-pointer hover:bg-gray-100">
              <BsChatDots className="text-gray-500" />
            </div>
            <div className="p-2 border rounded-full cursor-pointer hover:bg-gray-100">
              <BsBell className="text-gray-500" />
            </div>
            <div className="p-2 border rounded-full cursor-pointer hover:bg-gray-100">
              <BsBoxArrowRight className="text-gray-500" />
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div
          className="hidden w-[95%] mx-auto items-center z-40 border rounded-full px-4 py-2 bg-[#ffffff] max-w-xl max-lg:flex relative"
          ref={dropdownRef}
        >
          <FiSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search for players, events, or other organizers"
            className="flex-grow outline-none bg-transparent text-sm placeholder:text-[.8rem] placeholder:text-gray-400"
            onClick={() => setShowDropdown(true)}
          />
          {showDropdown && (
            <div className="absolute top-12 left-0 bg-white border rounded-lg shadow-lg w-full z-50">
              <div className="p-4 border-b text-sm font-semibold">
                Search for
              </div>
              <ul className="text-sm">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                  <FiSearch className="text-gray-500" /> For Player
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                  <FiSearch className="text-gray-500" /> For Organizer
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                  <FiSearch className="text-gray-500" /> For Event
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                  <FiSearch className="text-gray-500" /> Advance Search
                </li>
              </ul>
            </div>
          )}
          <div
            className="flex items-center relative bg-[#E45252] text-white p-2 rounded-full ml-2 cursor-pointer"
            onClick={() => setShowFilters(true)}
          >
            <IoFilterSharp size={16} />
          </div>
          {showFilters && (
            <div
              ref={filtersRef}
              className="absolute top-12 right-0 bg-white border rounded-lg shadow-lg w-80 z-50 p-4"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm font-semibold">Filter Options</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-xl font-bold text-gray-500"
                >
                  ×
                </button>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-black text-sm font-semibold">Location</p>
                <input
                  type="text"
                  className="w-full border border-black rounded px-3 py-2"
                />
                <p className="text-black text-sm font-semibold">Event Type</p>
                <input
                  type="text"
                  className="w-full border border-black rounded px-3 py-2"
                />
                <p className="text-black text-sm font-semibold">Ratings</p>
                <input
                  type="text"
                  className="w-full border border-black rounded px-3 py-2"
                />
                <p className="text-black text-sm font-semibold">
                  Account Status
                </p>
                <input
                  type="text"
                  className="w-full border border-black rounded px-3 py-2"
                />
                <button className="w-full bg-red-500 text-white py-2 rounded mt-2">
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right: Icons */}
      </div>
    </>
  );
};

export default Visitor_Navbar;
