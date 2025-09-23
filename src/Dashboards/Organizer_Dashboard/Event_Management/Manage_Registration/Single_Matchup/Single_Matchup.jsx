import React from "react";
import Organizer_Sidebar from "../../../Sidebar/Organizer_Sidebar";
import Organizer_Navbar from "../../../Organizer_Navbar/Organizer_Navbar";
import { GoArrowSwitch } from "react-icons/go";
import { RiDeleteBin7Line } from "react-icons/ri";

const Single_Matchup = () => {
  return (
    <>

      <div className="absolute top-20 right-0 bg-[#FAFAFA] w-[75%] float-right max-lg:w-[100%] max-lg:top-32">

        <div className="p-3">
          <div className="bg-white rounded-lg shadow-md p-3">
            <div className="p-4 space-y-6">
              {/* Event Info */}
              <div className="flex flex-wrap justify-between gap-5 items-center text-sm font-semibold border-b pb-2">
                <div>Match Assignment</div>

                <div className="space-x-2">
                  <button className="border border-[#e45252] text-[#e45252] px-5 py-2 rounded-full">
                    Start Event
                  </button>
                  <button className="border border-[#e45252] text-[#e45252] px-5 py-2 rounded-full">
                    Cancel Event
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap justify-between items-center text-sm font-semibold border-b pb-2">
                <div>Date: 10/22/25</div>
                <div>Sport: Chess</div>
                <div>Status: Full</div>
              </div>

              {/* Players Section */}
              <div className="border rounded-lg p-4 shadow-md bg-white">
                <h2 className="text-lg font-bold mb-2">Player List:</h2>
                <hr />
                <div className="mt-2 space-y-1">
                  <div className="flex whitespace-nowrap  border p-3 rounded-xl gap-20 justify-start text-sm max-lg:gap-2">
                    <p className="text-lg">Player A</p>
                    <p className="text-lg">Player B</p>
                    <p className="text-lg">Player C</p>

                    <p className="text-lg">Player D</p>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-4 mt-4 max-lg:flex-col">
                  <button className="bg-[#e45252] text-white whitespace-nowrap px-4 py-2 rounded-full">
                    Auto Assign
                  </button>
                  <button className="bg-[#e45252] text-white whitespace-nowrap px-4 py-2 rounded-full">
                    Manual Assign
                  </button>
                  <div className="flex items-center gap-1">
                    <button className="rounded-full p-2 bg-[#e45252] text-white ">
                      <GoArrowSwitch />
                    </button>
                    <button className="rounded-full p-2 bg-[#e45252] text-white ">
                      <RiDeleteBin7Line />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col  gap-5">
                  <p className="text-md font-semibold">Create Matchup’s:</p>
                  <hr />
                  <div className="flex items-center gap-5 justify-center max-lg:flex-col">
                    <p className="text-md font-semibold">Match 1:</p>
                    <div className="border border-gray-400 py-1 px-5 rounded-full">
                      <p className="text-md  text-gray-600">Player A</p>
                    </div>
                    <p className="text-lg  text-gray-600">V/S</p>

                    <div className="border border-gray-400 py-1 px-5 rounded-full">
                      <p className="text-md  text-gray-600">Player B</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 justify-center max-lg:flex-col">
                    <p className="text-md font-semibold">Match 2:</p>
                    <div className="border border-gray-400 py-1 px-5 rounded-full">
                      <p className="text-md  text-gray-600">Player D</p>
                    </div>
                    <p className="text-lg  text-gray-600">V/S</p>

                    <div className="border border-gray-400 py-1 px-5 rounded-full">
                      <p className="text-md  text-gray-600">Player F</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pending Players */}
              <div className="border rounded-lg p-4 shadow-md bg-white">
                <h2 className="text-lg font-bold mb-2">Pending Players:</h2>

                <div className="mt-2 space-y-1">
                  <hr />
                  <div className="flex items-center my-5 gap-5 max-lg:flex-col">
                    <div className="border rounded-xl py-2 px-3 bg-gray-300">
                      <p className="text-md">Player F</p>
                    </div>
                    <div className="border rounded-xl py-2 px-3 bg-gray-300">
                      <p className="text-md">Player E</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-4 mt-4 max-lg:flex-col">
                  <button className="bg-[#e45252] text-white whitespace-nowrap px-4 py-2 rounded-full">
                    Auto Assign
                  </button>
                  <button className="bg-[#e45252] text-white whitespace-nowrap px-4 py-2 rounded-full">
                    Manual Assign
                  </button>
                  <div className="flex items-center gap-1">
                    <button className="rounded-full p-2 bg-[#e45252] text-white ">
                      <GoArrowSwitch />
                    </button>
                    <button className="rounded-full p-2 bg-[#e45252] text-white ">
                      <RiDeleteBin7Line />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Single_Matchup;
