import React from "react";
import Award from "./Images/Award.png";
import player from "./Images/player.jpeg";
import { FaStar } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Player_Profile_View = () => {
  return (
    <>
      <div className="absolute top-20 right-0  bg-[#FAFAFA]   w-[75%] float-right max-lg:w-[100%] max-lg:mt-10">
        <div className="pt-10 max-lg:pt-8">
          <div
            className="w-[50%] bg-[#333333] pt-5 pb-10 mb-10 rounded-lg flex flex-col gap-5 mx-auto justify-center items-center max-lg:w-[98%] "
            style={{ border: "1px solid #e45352" }}
          >
            <div className="flex justify-between w-[90%]  max-lg:mt-0 ">
              <div></div>
              <NavLink to="/Boost_Player_Profile" className="">
                <RxCross1 className="bg-[#E45352] text-[2.4rem] text-[white] rounded-full p-1" />
              </NavLink>
            </div>
            <img
              src={player}
              alt=""
              className="rounded-full w-28 "
              style={{ border: "1px solid #e45352" }}
            />
            <div className="flex gap-1">
              <FaStar className="text-[#FFFF00] text-lg" />
              <FaStar className="text-[#FFFF00] text-lg" />
              <FaStar className="text-[#FFFF00] text-lg" />
              <FaStar className="text-[#FFFF00] text-lg" />
              <FaStar className="text-[white] text-lg" />
            </div>
            <div className="flex gap-1">
              <img src={Award} alt="" className="w-7  " />
              <h2 className="text-3xl font-semibold text-[white]">Sara Ali</h2>
            </div>
            <p className="text-[white] text-md">Sport Preference:Foot ball</p>
            <div className="flex justify-center items-center gap-2 text-[white]">
              <FaLocationDot className="text-lg" />
              <p className="text-md">Abu Dhabi UAE</p>
            </div>
            <NavLink
              to="/Player_PaymentMethod"
              className="w-[50%] bg-[#405de6] p-2 rounded-lg text-white  cursor-pointer flex justify-center max-lg:w-[60%] "
            >
              Proceed To Pay
            </NavLink>
            <p className="text-white mt-2 px-2 flex justify-center items-center text-center">
              Your profile will be featured once the payment is confirmed and
              approved by admin.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player_Profile_View;
