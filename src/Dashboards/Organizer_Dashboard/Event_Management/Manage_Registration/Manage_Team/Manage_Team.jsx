import React from "react";

import { GoArrowSwitch } from "react-icons/go";
import { RiDeleteBin7Line } from "react-icons/ri";

const Manage_Team = () => {
  return (
    <>

      <div className="absolute top-20 right-0 bg-[#FAFAFA] w-[75%] float-right max-lg:w-[100%] max-lg:top-32">

        <div className="p-3">
          <div className="bg-white rounded-lg shadow-md p-3">
            <div className="p-4 space-y-6">
              {/* Event Info */}
              <div className="flex flex-wrap justify-between gap-5 items-center text-sm font-semibold border-b pb-2">
                <div>Sunday Foot Ball</div>

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
                <div>Sport: Foot Ball</div>
                <div>Status: Full</div>
              </div>

              {/* Teams Section */}
              <div className="border rounded-lg p-4 shadow-md bg-white">
                <h2 className="text-lg font-bold mb-2">Team List:</h2>
                <hr />
                <div className="mt-2 space-y-1">
                  <div className="flex flex-col gap-2 justify-between text-sm">
                    <p className="text-lg">Team A</p>
                    <p className="text-lg">Team B</p>
                    <p className="text-lg">Team C</p>
                    <p className="text-lg">Team D</p>
                    <p className="text-lg">Team E</p>
                    <p className="text-lg">Team F</p>
                    <p className="text-lg">Team G</p>
                    <p className="text-lg">Team H</p>
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

              {/* Pending Players */}
              <div className="border rounded-lg p-4 shadow-md bg-white">
                <h2 className="text-lg font-bold mb-2">Pending Teams</h2>

                <div className="mt-2 space-y-1">
                  <div className="flex justify-between text-sm">
                    <div className="flex  gap-5 bg-gray-200 justify-between text-sm max-lg:gap-2">
                      <p className="text-lg">Team I</p>
                      <p className="text-lg">Team J</p>
                      <p className="text-lg">Team K</p>
                      <p className="text-lg">Team L</p>
                      <p className="text-lg">Team M</p>
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

export default Manage_Team;
