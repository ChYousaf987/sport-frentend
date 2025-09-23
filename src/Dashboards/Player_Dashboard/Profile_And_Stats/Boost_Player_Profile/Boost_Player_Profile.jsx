import React from "react";

import { NavLink } from "react-router-dom";
import logo2 from "./Images/logo2.png";

const Boost_Player_Profile = () => {
  return (
    <>

      <div className="absolute top-20 right-0  bg-[#FAFAFA]   w-[75%] float-right max-lg:w-[100%] max-lg:mt-10">

        <div className="p-3">
          <div className="rounded-lg shadow-md bg-white p-5">
            <p className="text-lg font-semibold">Boost Your Profile </p>

            <div className="w-[100%] flex mt-8 justify-evenly max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-5 max ">
              <div
                className="bg-black w-[25%] h-[25rem] flex flex-col gap-2 items-center pt-2 max-lg:w-[90%] "
                style={{ border: "2px solid #e45252 " }}
              >
                <div
                  className="bg-white w-[100%] p-5   "
                  style={{
                    borderTop: "2px solid red",
                    borderBottom: "2px solid red",
                    clipPath:
                      "polygon(0% 30.54%, 0% 30.54%, 100% 5%, 100% 74.59%, 0% 100%, 0% 25.54%, 0% 100%)",
                  }}
                >
                  <img
                    src={logo2}
                    alt=""
                    className="w-20 mt-2 flex justify-center items-center mx-auto"
                  />
                </div>
                <p className="text-white text-3xl font-medium mt-10">
                  $<span className="text-[4rem]">5</span>
                </p>
                <p className="text-[#b2acac]">Billed weekly</p>
                <NavLink
                  to="/Player_Profile_View"
                  className="w-[70%] bg-[#405de6] p-2 rounded-lg text-white mt-5 cursor-pointer flex justify-center "
                >
                  Select Plan
                </NavLink>
              </div>
              <div
                className="bg-black w-[25%] h-[25rem] flex flex-col gap-2 items-center pt-2 max-lg:w-[90%] "
                style={{ border: "2px solid #e45252 " }}
              >
                <div
                  className="bg-white w-[100%] p-5   "
                  style={{
                    borderTop: "2px solid red",
                    borderBottom: "2px solid red",
                    clipPath:
                      "polygon(0% 30.54%, 0% 30.54%, 100% 5%, 100% 74.59%, 0% 100%, 0% 25.54%, 0% 100%)",
                  }}
                >
                  <img
                    src={logo2}
                    alt=""
                    className="w-20 mt-2 flex justify-center items-center mx-auto"
                  />
                </div>
                <p className="text-white text-3xl font-medium mt-10">
                  $<span className="text-[4rem]">10</span>
                </p>
                <p className="text-[#b2acac]">Billed 15 Days</p>
                <NavLink
                  to="/Player_Profile_View"
                  className="w-[70%] bg-[#405de6] p-2 rounded-lg text-white mt-5 cursor-pointer flex justify-center "
                >
                  Select Plan
                </NavLink>
              </div>
              <div
                className="bg-black w-[25%] h-[25rem] flex flex-col gap-2 items-center pt-2 max-lg:w-[90%] "
                style={{ border: "2px solid #e45252 " }}
              >
                <div
                  className="bg-white w-[100%] p-5   "
                  style={{
                    borderTop: "2px solid red",
                    borderBottom: "2px solid red",
                    clipPath:
                      "polygon(0% 30.54%, 0% 30.54%, 100% 5%, 100% 74.59%, 0% 100%, 0% 25.54%, 0% 100%)",
                  }}
                >
                  <img
                    src={logo2}
                    alt=""
                    className="w-20 mt-2 flex justify-center items-center mx-auto"
                  />
                </div>
                <p className="text-white text-3xl font-medium mt-10">
                  $<span className="text-[4rem]">20</span>
                </p>
                <p className="text-[#b2acac]">Billed Monthly</p>
                <NavLink
                  to="/Player_Profile_View"
                  className="w-[70%] bg-[#405de6] p-2 rounded-lg text-white mt-5 cursor-pointer flex justify-center "
                >
                  Select Plan
                </NavLink>
              </div>
            </div>
            <p className="w-[80%] flex justify-center items-center my-10  mx-auto text-center text-2xl font-medium max-lg:w-[100%] max-lg:px-3 max-lg:text-justify">
              Your profile will be shown to players looking for matches, making
              you stand out
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Boost_Player_Profile;
