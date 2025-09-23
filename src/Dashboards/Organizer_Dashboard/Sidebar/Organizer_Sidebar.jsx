import React, { useState } from "react";
import "../Sidebar/Style/Organizer.scss";
import logo from "./Images/logo.png";
import { NavLink } from "react-router-dom";
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
import { SlBadge, SlCalender } from "react-icons/sl";
import { IoIosArrowDown, IoMdHome } from "react-icons/io";

const Organizer_Sidebar = () => {
  const [showEventSubmenu, setShowEventSubmenu] = useState(false);

  // Helper for active nav link
  const getNavLinkClass = ({ isActive }) =>
    `flex items-center gap-3 ${isActive ? "text-[#E45252]" : "text-black"}`;

  const getSubmenuLinkClass = ({ isActive }) =>
    `flex items-center gap-2 ${isActive ? "text-[#E45252]" : "text-gray-600"}`;

  return (
    <div className="w-[25%] h-screen fixed top-0 left-0 overflow-y-auto custom-scrollbar py-2 flex flex-col gap-7 z-50 min-h-[120vh] bottom-0 bg-white px-5 max-lg:w-[100%] max-lg:hidden">
      {/* Logo */}
      <a href="/" className="p-5">
        <img src={logo} alt="" className="w-24" />
      </a>

      {/* Welcome */}
      <div className="text-3xl font-semibold">
        <h1>Welcome, Organizers</h1>
      </div>

      {/* Switch Role */}
      <div className="flex items-center my-4 gap-5">
        <p className="text-sm font-semibold text-[black]">Switch To Player</p>
        <NavLink to="/Change_Role" className="flex">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="group peer bg-white rounded-full duration-300 w-16 h-6 ring-2 ring-red-500 after:duration-300 after:bg-red-500 peer-checked:after:bg-green-500 peer-checked:ring-green-500 after:rounded-full after:absolute after:h-5 after:w-5 after:top-0.5 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-hover:after:scale-95"></div>
          </label>
        </NavLink>
        <p className="text-xs font-semibold text-[black]">
          Switch To Organizer
        </p>
      </div>

      {/* Become Member */}
      <div>
        <button className="bg-[#1CC800] hover:bg-green-500 text-white text-[14px] px-6 py-2 mx-auto rounded-full flex items-center gap-[20px]">
          <SlBadge />
          Become Member
        </button>
      </div>

      {/* Menu */}
      <div className="flex flex-col gap-10 cursor-pointer">
        <NavLink to="/OrganizerHome" className={getNavLinkClass}>
          <IoMdHome className="text-2xl" />
          <p className="text-xl font-medium">Dashboard</p>
        </NavLink>

        <NavLink to="/Organizer" className={getNavLinkClass}>
          <VscOrganization className="text-2xl" />
          <p className="text-xl font-medium">Organizers</p>
        </NavLink>

        <NavLink to="/Players" className={getNavLinkClass}>
          <GiAmericanFootballPlayer className="text-2xl" />
          <p className="text-xl font-medium">Players</p>
        </NavLink>

        {/* Events Link */}
        <NavLink to="/organizer-events" className={getNavLinkClass}>
          <MdOutlineEmojiEvents className="text-2xl" />
          <p className="text-xl font-medium">Events</p>
        </NavLink>

        {/* Event Management with submenu */}
        <div>
          <div
            className="flex items-center gap-3"
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
              <NavLink to="/Create_New_Event" className={getSubmenuLinkClass}>
                <MdOutlineEventAvailable />
                <span>Create New Event</span>
              </NavLink>
              <NavLink to="/Event_Completion" className={getSubmenuLinkClass}>
                <MdOutlineCheckCircle />
                <span>Event Completion</span>
              </NavLink>
              <NavLink
                to="/Manage_Registration"
                className={getSubmenuLinkClass}
              >
                <BiUserCheck />
                <span>Manage Registrations</span>
              </NavLink>
              <NavLink to="/Event_Chat" className={getSubmenuLinkClass}>
                <BiMessageRoundedDetail />
                <span>Event Chat</span>
              </NavLink>
              <NavLink to="/Manage_Event" className={getSubmenuLinkClass}>
                <SlCalender />
                <span>Manage Event</span>
              </NavLink>
            </div>
          )}
        </div>

        <NavLink to="/Financial_Management" className={getNavLinkClass}>
          <MdOutlineAutoGraph className="text-2xl" />
          <p className="text-xl font-medium">Financial Management</p>
        </NavLink>

        <NavLink to="/Ratings_And_Feedback" className={getNavLinkClass}>
          <GiAlliedStar className="text-2xl" />
          <p className="text-xl font-medium">Ratings & Feedback</p>
        </NavLink>

        <NavLink to="/Content_Management" className={getNavLinkClass}>
          <BiSolidBookContent className="text-2xl" />
          <p className="text-xl font-medium">Content Management</p>
        </NavLink>

        <NavLink to="/My_Profile" className={getNavLinkClass}>
          <CiUser className="text-2xl" />
          <p className="text-xl font-medium">My Profile</p>
        </NavLink>

        <NavLink to="/Help_Support" className={getNavLinkClass}>
          <IoHelpCircleOutline className="text-2xl" />
          <p className="text-xl font-medium">Help & Support</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Organizer_Sidebar;
export { logo };
