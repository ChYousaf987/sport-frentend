import React, { useEffect, useRef, useState } from "react";
import logo from "./Images/logo.png";
import { FiSearch, FiLogOut } from "react-icons/fi";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Link, NavLink, useNavigate } from "react-router-dom";
import profile from "./Images/profile.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/users/userSlice";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showProfileData, setShowProfileData] = useState(false);
  const dropdownRef = useRef(null);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
        setShowProfileData(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    setShowProfileData(false);
    navigate("/login");
  };

  // Determine dashboard path based on user role
  const getDashboardPath = () => {
    if (!user) return "/visitor-dashboard"; // Visitors go to visitor dashboard (Overview)
    if (user.role === "organizer") return "/OrganizerHome"; // Organizers go to OrganizerHome
    return "/"; // Players go to player dashboard (Player_Overview)
  };

  // Navigation items
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/Events", label: "Events" },
    { path: "/About_Us", label: "About Us" },
    { path: "/News", label: "News" },
    { path: "/Contact", label: "Contact Us" },
    { path: getDashboardPath(), label: "Dashboard" }, // Dynamic dashboard link
  ];

  return (
    <div className="flex flex-col z-50 w-full fixed bg-[#bfbfbfc8] items-center px-5 pb-1 gap-5 max-lg:px-2 max-lg:py-2 max-lg:relative">
      <div className="w-full flex items-center justify-between">
        <a href="/">
          <img src={logo} alt="Logo" className="w-24" />
        </a>
        <ul className="flex gap-10 max-lg:hidden">
          {navItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              className={({ isActive }) =>
                `text-lg font-medium cursor-pointer hover:text-[#E45352] ${
                  isActive ? "text-[#E45352]" : "text-black"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </ul>

        <div
          className="relative flex w-[25%] gap-3 rounded-3xl p-1.5 items-center max-lg:hidden"
          style={{ border: "2px solid black" }}
        >
          <FiSearch className="text-2xl text-[#585858]" />
          <input
            onFocus={() => setShowDropdown(true)}
            type="text"
            placeholder="Search for Player/Organizer/Events"
            className="outline-none bg-transparent w-full"
          />
          {showDropdown && (
            <div
              ref={dropdownRef}
              className="absolute w-[100%] top-12 left-0 bg-white border rounded-lg shadow-lg z-50"
            >
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
        </div>

        {user ? (
          <div className="relative w-[18%] flex gap-4 max-lg:w-auto max-lg:gap-5 items-center">
            <p className="text-lg font-semibold">Welcome {user.fullName}</p>
            <img
              src={profile}
              alt="Profile"
              onClick={() => setShowProfileData(!showProfileData)}
              className="w-[4.2rem] h-[4.2rem] object-cover rounded-full cursor-pointer"
              style={{ border: "2px solid #1cc800" }}
            />

            {showProfileData && (
              <div className="absolute top-16 right-0 bg-white shadow-md border rounded-md p-4 z-50 w-64">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold text-lg text-[#1cc800]">
                    Profile
                  </p>
                  <RxCross1
                    onClick={() => setShowProfileData(false)}
                    className="cursor-pointer text-2xl p-[.2rem] rounded-full text-white bg-red-500"
                  />
                </div>
                <div className="text-sm mb-3 flex flex-col gap-1">
                  <p>
                    <strong>Name:</strong> {user.fullName}
                  </p>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>City:</strong> {user.location}
                  </p>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center mx-auto gap-2 px-4 py-2 border rounded-md bg-red-500 text-white text-sm hover:bg-red-600"
                >
                  <FiLogOut /> Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-8 max-lg:gap-2">
            <Link
              to="/login"
              className="bg-[#E45352] py-2 px-6 text-lg max-lg:px-2 font-medium text-white rounded-full"
            >
              LOGIN
            </Link>
            <Link
              to="/signup"
              className="bg-[#E45352] py-2 px-6 text-lg max-lg:px-2 font-medium text-white rounded-full"
            >
              SIGN UP
            </Link>
          </div>
        )}

        <div onClick={toggleMenu} className="max-lg:flex hidden">
          {menuOpen ? (
            <RxCross1 className="text-3xl" />
          ) : (
            <RxHamburgerMenu className="text-3xl" />
          )}
        </div>
      </div>

      <div
        className="w-[90%] gap-3 rounded-3xl p-1.5 items-center lg:hidden flex relative"
        style={{ border: "2px solid black" }}
      >
        <FiSearch className="text-2xl text-[#585858]" />
        <input
          type="text"
          placeholder="Search for Player/Organizer/Events"
          className="outline-none bg-transparent w-full"
          onFocus={() => setShowDropdown(true)}
        />
        {showDropdown && (
          <div
            ref={dropdownRef}
            className="absolute w-full top-12 left-0 bg-white border rounded-lg shadow-lg z-50"
          >
            <div className="p-4 border-b text-sm font-semibold">Search for</div>
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
      </div>

      {menuOpen && (
        <ul className="w-full flex flex-col items-center gap-5 max-lg:flex">
          {navItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-lg font-semibold cursor-pointer hover:text-[#E45352] ${
                  isActive ? "text-[#E45352]" : "text-black"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
export { logo };
