import React from "react";
import logo from "./Images/logo.png";
import { NavLink } from "react-router-dom";
import { TfiViewListAlt } from "react-icons/tfi";
import { PiHandCoinsLight } from "react-icons/pi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

const Visitor_Sidebar = () => {
  return (
    <div className="w-[25%] flex flex-col gap-7 fixed z-50 top-0 py-2 min-h-[120vh] bottom-0 bg-white px-5 max-lg:w-[100%] max-lg:hidden">
      <a href="/" className="">
        <img src={logo} alt="" className="w-24" />
      </a>
      <h1 className="text-3xl font-semibold">Welcome, Visitor</h1>
      <NavLink
        to="/signup"
        className="w-[100%] text-xl bg-[#E45352] py-1.5 px-3 text-[#ffffff] font-medium rounded-full flex items-center justify-center"
      >
        Sign Up
      </NavLink>
      <div className="flex flex-col gap-10">
        <NavLink
          to="/visitor-dashboard"
          style={({ isActive }) => ({
            color: isActive ? "#E45352" : "black",
          })}
          className="flex items-center gap-3"
        >
          <TfiViewListAlt className="text-xl" />
          <p className="text-xl font-medium">Overview</p>
        </NavLink>
        <NavLink
          to="/BenefitsSigning"
          style={({ isActive }) => ({
            color: isActive ? "#E45352" : "black",
          })}
          className="flex items-center gap-3"
        >
          <PiHandCoinsLight className="text-2xl" />
          <p className="text-xl font-medium">Benefits of Signing Up</p>
        </NavLink>
        <NavLink
          to="/HelpSupport"
          style={({ isActive }) => ({
            color: isActive ? "#E45352" : "black",
          })}
          className="flex items-center gap-3"
        >
          <IoMdHelpCircleOutline className="text-2xl" />
          <p className="text-xl font-medium">Help & Support</p>
        </NavLink>
        <NavLink
          to="/ContactUs"
          style={({ isActive }) => ({
            color: isActive ? "#E45352" : "black",
          })}
          className="flex items-center gap-3"
        >
          <FaPhone className="text-2xl" />
          <p className="text-xl font-medium">Contact Us</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Visitor_Sidebar;
export { logo };
