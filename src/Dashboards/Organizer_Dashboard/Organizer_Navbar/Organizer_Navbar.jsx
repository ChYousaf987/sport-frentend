import React, { useState, useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { IoFilterSharp } from "react-icons/io5";
import { BsGear, BsChatDots, BsBell, BsBoxArrowRight } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { SlBadge, SlCalender } from "react-icons/sl";
import { IoIosArrowDown, IoMdHome } from "react-icons/io";
import {
  MdOutlineEmojiEvents,
  MdOutlineEventNote,
  MdOutlineEventAvailable,
  MdOutlineCheckCircle,
  MdOutlineAutoGraph,
} from "react-icons/md";
import { VscOrganization } from "react-icons/vsc";
import { GiAmericanFootballPlayer, GiAlliedStar } from "react-icons/gi";
import {
  BiSolidBookContent,
  BiUserCheck,
  BiMessageRoundedDetail,
} from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { IoHelpCircleOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import logo from "./Images/logo.png";
import { useDispatch } from "react-redux";
import { logout } from "../../../features/users/userSlice";
import defaultProfile from "../My_Profile/images/myprofile.jpg"; // Import default profile image

const SearchBar = ({
  isMobile,
  searchQuery,
  setSearchQuery,
  onSearch,
  onFilter,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    location: "",
    eventType: "",
    rating: "",
    accountStatus: "",
  });
  const dropdownRef = useRef(null);
  const filtersRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const isOutsideDropdown =
        dropdownRef.current && !dropdownRef.current.contains(e.target);
      const isOutsideFilter =
        filtersRef.current && !filtersRef.current.contains(e.target);
      if (isOutsideDropdown && isOutsideFilter) {
        console.log("Closing both dropdown and filters");
        setShowDropdown(false);
        setShowFilters(false);
      } else if (isOutsideDropdown) {
        console.log("Closing dropdown");
        setShowDropdown(false);
      } else if (isOutsideFilter) {
        console.log("Closing filters");
        setShowFilters(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchInputClick = (e) => {
    e.preventDefault();
    console.log("Opening search dropdown");
    setShowDropdown(true);
  };

  const handleFilterButtonClick = (e) => {
    e.preventDefault();
    console.log("Opening filter");
    setShowFilters(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.value;
    setSearchQuery(query);
    console.log("Search query:", query);
    onSearch(query);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const applyFilters = (e) => {
    e.preventDefault();
    console.log("Applying filters:", filters);
    onFilter(filters);
    setShowFilters(false);
  };

  const handleSearchType = (e, type) => {
    e.preventDefault();
    console.log("Search type:", type, "Query:", searchQuery);
    onSearch(searchQuery, type);
    setShowDropdown(false);
  };

  return (
    <div
      className={`flex items-center border rounded-full px-4 py-2 w-full max-w-xl bg-[#f9f9f9] ${
        isMobile ? "mx-auto" : ""
      } relative z-50`}
      ref={dropdownRef}
    >
      <FiSearch className="text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Search players or other organizers"
        className="flex-grow outline-none bg-transparent text-sm text-gray-800 placeholder:text-gray-500 placeholder:text-[0.875rem] sm:text-sm"
        value={searchQuery}
        onChange={handleSearch}
        onClick={handleSearchInputClick}
        aria-label="Search players or organizers"
      />
      {showDropdown && (
        <div className="absolute top-12 left-0 bg-white rounded-lg shadow-lg w-full z-50 border border-gray-200">
          <div className="p-4 border-b text-sm font-semibold text-gray-800">
            Quick Search
          </div>
          <ul className="text-sm">
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
              onClick={(e) => handleSearchType(e, "Player")}
            >
              <FiSearch className="text-gray-500" /> For Players
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2"
              onClick={(e) => handleSearchType(e, "Organizer")}
            >
              <FiSearch className="text-gray-500" /> For Organizers
            </li>
          </ul>
        </div>
      )}
      <div
        className="flex items-center bg-[#E45252] text-white p-2 rounded-full ml-2 cursor-pointer"
        onClick={handleFilterButtonClick}
        aria-label="Open filters"
      >
        <IoFilterSharp size={16} />
      </div>
      {showFilters && (
        <div
          ref={filtersRef}
          className="absolute top-12 right-0 bg-white rounded-lg shadow-lg w-80 max-w-full z-50 p-4 border border-gray-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-semibold text-gray-800">
              Filter Results
            </h2>
            <button
              className="text-xl font-semibold text-gray-500"
              onClick={() => setShowFilters(false)}
              aria-label="Close filters"
            >
              ×
            </button>
          </div>
          <div className="space-y-3 text-sm">
            <p className="text-black text-sm font-semibold">Location</p>
            <input
              type="text"
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800"
              placeholder="Enter location"
              aria-label="Filter by location"
            />
            <p className="text-black text-sm font-semibold">Event Type</p>
            <select
              name="eventType"
              value={filters.eventType}
              onChange={handleFilterChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800"
              aria-label="Filter by event type"
            >
              <option value="">All</option>
              <option value="Tournament">Tournament</option>
              <option value="Casual">Casual</option>
            </select>
            <p className="text-black text-sm font-semibold">Rating</p>
            <input
              type="number"
              name="rating"
              value={filters.rating}
              onChange={handleFilterChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800"
              min="0"
              max="5"
              placeholder="0-5"
              aria-label="Filter by rating"
            />
            <p className="text-black text-sm font-semibold">Account Status</p>
            <select
              name="accountStatus"
              value={filters.accountStatus}
              onChange={handleFilterChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800"
              aria-label="Filter by account status"
            >
              <option value="">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <button
              className="w-full bg-[#E45252] text-white py-2 rounded mt-2 hover:bg-[#c94040] text-sm"
              onClick={applyFilters}
              aria-label="Apply filters"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Organizer_Navbar = ({ onSearch, onFilter }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showEventSubmenu, setShowEventSubmenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Retrieve profile image from localStorage
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData && userData.profileImage) {
      setProfileImage(userData.profileImage);
    }
  }, []);

  const getNavLinkClass = ({ isActive }) =>
    `flex items-center gap-3 ${isActive ? "text-[#E45252]" : "text-black"}`;

  const getSubmenuLinkClass = ({ isActive }) =>
    `flex items-center gap-2 ${isActive ? "text-[#E45252]" : "text-gray-600"}`;

  const handleLogout = () => {
    console.log("Logging out and navigating to main page");
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-[9999] transform transition-transform duration-300 w-[90%] lg:w-[25%] lg:block ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 overflow-y-auto`}
      >
        <div className="flex flex-col gap-7 py-2 min-h-screen px-5">
          <a href="/" className="p-5">
            <img src={logo} alt="Logo" className="w-24" />
          </a>
          <h1 className="text-3xl font-semibold">Welcome, Organizers</h1>
          <div className="flex items-center my-4 gap-5">
            <p className="text-sm font-semibold text-black">Switch To Player</p>
            <NavLink
              onClick={() => setSidebarOpen(false)}
              to="/Change_Role"
              className="flex"
            >
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="group peer bg-white rounded-full duration-300 w-16 h-6 ring-2 ring-red-500 after:duration-300 after:bg-red-500 peer-checked:after:bg-green-500 peer-checked:ring-green-500 after:rounded-full after:absolute after:h-5 after:w-5 after:top-0.5 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-hover:after:scale-95"></div>
              </label>
            </NavLink>
            <p className="text-xs font-semibold text-black">
              Switch To Organizer
            </p>
          </div>
          <div>
            <button className="bg-[#1CC800] hover:bg-green-500 text-white text-[14px] px-6 py-2 mx-auto rounded-full flex items-center gap-[20px]">
              <SlBadge />
              Become Member
            </button>
          </div>
          <div className="flex flex-col gap-10 cursor-pointer">
            <NavLink
              onClick={() => setSidebarOpen(false)}
              to="/OrganizerHome"
              className={getNavLinkClass}
            >
              <IoMdHome className="text-2xl" />
              <p className="text-xl font-medium">Home</p>
            </NavLink>
            <NavLink
              onClick={() => setSidebarOpen(false)}
              to="/"
              className={getNavLinkClass}
            >
              <MdOutlineEmojiEvents className="text-2xl" />
              <p className="text-xl font-medium">Events</p>
            </NavLink>
            <NavLink
              onClick={() => setSidebarOpen(false)}
              to="/Organizer"
              className={getNavLinkClass}
            >
              <VscOrganization className="text-2xl" />
              <p className="text-xl font-medium">Organizers</p>
            </NavLink>
            <NavLink
              onClick={() => setSidebarOpen(false)}
              to="/Players"
              className={getNavLinkClass}
            >
              <GiAmericanFootballPlayer className="text-2xl" />
              <p className="text-xl font-medium">Players</p>
            </NavLink>
            <div>
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => setShowEventSubmenu(!showEventSubmenu)}
              >
                <MdOutlineEventNote className="text-2xl" />
                <div className="flex items-center gap-3">
                  <p className="text-xl font-medium">Event Management</p>
                  <IoIosArrowDown size={20} />
                </div>
              </div>
              {showEventSubmenu && (
                <div className="ml-10 mt-3 flex flex-col gap-3 text-sm">
                  <NavLink
                    onClick={() => setSidebarOpen(false)}
                    to="/Create_New_Event"
                    className={getSubmenuLinkClass}
                  >
                    <MdOutlineEventAvailable />
                    <span>Create New Event</span>
                  </NavLink>
                  <NavLink
                    onClick={() => setSidebarOpen(false)}
                    to="/Event_Completion"
                    className={getSubmenuLinkClass}
                  >
                    <MdOutlineCheckCircle />
                    <span>Event Completion</span>
                  </NavLink>
                  <NavLink
                    onClick={() => setSidebarOpen(false)}
                    to="/Manage_Registration"
                    className={getSubmenuLinkClass}
                  >
                    <BiUserCheck />
                    <span>Manage Registrations</span>
                  </NavLink>
                  <NavLink
                    onClick={() => setSidebarOpen(false)}
                    to="/Event_Chat"
                    className={getSubmenuLinkClass}
                  >
                    <BiMessageRoundedDetail />
                    <span>Event Chat</span>
                  </NavLink>
                  <NavLink
                    onClick={() => setSidebarOpen(false)}
                    to="/Manage_Event"
                    className={getSubmenuLinkClass}
                  >
                    <SlCalender />
                    <span>Manage Event</span>
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              onClick={() => setSidebarOpen(false)}
              to="/Financial_Management"
              className={getNavLinkClass}
            >
              <MdOutlineAutoGraph className="text-2xl" />
              <p className="text-xl font-medium">Financial Management</p>
            </NavLink>
            <NavLink
              onClick={() => setSidebarOpen(false)}
              to="/Ratings_And_Feedback"
              className={getNavLinkClass}
            >
              <GiAlliedStar className="text-2xl" />
              <p className="text-xl font-medium">Ratings & Feedback</p>
            </NavLink>
            <NavLink
              onClick={() => setSidebarOpen(false)}
              to="/Content_Management"
              className={getNavLinkClass}
            >
              <BiSolidBookContent className="text-2xl" />
              <p className="text-xl font-medium">Content Management</p>
            </NavLink>
            <NavLink
              onClick={() => setSidebarOpen(false)}
              to="/My_Profile"
              className={getNavLinkClass}
            >
              <CiUser className="text-2xl" />
              <p className="text-xl font-medium">My Profile</p>
            </NavLink>
            <NavLink
              onClick={() => setSidebarOpen(false)}
              to="/Help_Support"
              className={getNavLinkClass}
            >
              <IoHelpCircleOutline className="text-2xl" />
              <p className="text-xl font-medium">Help & Support</p>
            </NavLink>
            <NavLink
              onClick={() => setSidebarOpen(false)}
              to="/ContactUs"
              className={getNavLinkClass}
            >
              <FaPhone className="text-2xl" />
              <p className="text-xl font-medium">Contact Us</p>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="fixed top-0 right-0 w-[75%] flex items-center justify-between px-6 py-3 bg-white shadow-sm z-[9998] max-lg:w-full">
        <div className="flex items-center gap-3">
          <div className="lg:hidden">
            <SlMenu
              className="text-2xl cursor-pointer"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle sidebar"
            />
          </div>
          <img
            src={profileImage || defaultProfile}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
            onError={(e) => {
              console.error("Error loading profile image:", e.target.src);
              e.target.src = defaultProfile;
            }}
          />
          <h1 className="font-semibold text-sm sm:text-base">
            Organizer Dashboard
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex flex-grow justify-center">
            <SearchBar
              isMobile={false}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSearch={onSearch}
              onFilter={onFilter}
            />
          </div>
        </div>
        <div className="flex items-center gap-4 ml-4 max-lg:gap-1">
          <div
            className="p-2 border rounded-full cursor-pointer hover:bg-gray-100"
            aria-label="Settings"
          >
            <BsGear className="text-gray-500" />
          </div>
          <div
            className="p-2 border rounded-full cursor-pointer hover:bg-gray-100"
            aria-label="Messages"
          >
            <BsChatDots className="text-gray-500" />
          </div>
          <div
            className="p-2 border rounded-full cursor-pointer hover:bg-gray-100"
            aria-label="Notifications"
          >
            <BsBell className="text-gray-500" />
          </div>
          <div
            className="p-2 border rounded-full cursor-pointer hover:bg-gray-100"
            onClick={handleLogout}
            aria-label="Return to Main Page"
          >
            <BsBoxArrowRight className="text-gray-500" />
          </div>
        </div>
      </div>
      <div className="lg:hidden fixed top-16 w-full px-4 py-2 bg-white z-[9997]">
        <SearchBar
          isMobile={true}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={onSearch}
          onFilter={onFilter}
        />
      </div>
    </>
  );
};

export default Organizer_Navbar;