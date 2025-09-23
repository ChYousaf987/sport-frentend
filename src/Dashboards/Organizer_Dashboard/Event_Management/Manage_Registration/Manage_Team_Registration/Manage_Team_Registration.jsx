import React from "react";

import { GoArrowSwitch } from "react-icons/go";
import { RiDeleteBin7Line } from "react-icons/ri";

const Manage_Team_Registration = () => {
  const teamA = Array(5).fill({ id: "P001", name: "John Wick" });
  const teamB = Array(5).fill({ id: "P001", name: "John Wick" });
  const pendingPlayers = Array(6).fill({ id: "P001", name: "John Wick" });
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
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 shadow-md bg-white">
                  <h2 className="text-lg font-bold mb-2">Team A</h2>
                  <div className="flex font-semibold justify-between border-b pb-1">
                    <span>ID</span>
                    <span>Name</span>
                  </div>
                  <div className="mt-2 space-y-1">
                    {teamA.map((player, idx) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <span>{player.id}</span>
                        <span>{player.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border rounded-lg p-4 shadow-md bg-white">
                  <h2 className="text-lg font-bold mb-2">Team B</h2>
                  <div className="flex font-semibold justify-between border-b pb-1">
                    <span>ID</span>
                    <span>Name</span>
                  </div>
                  <div className="mt-2 space-y-1">
                    {teamB.map((player, idx) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <span>{player.id}</span>
                        <span>{player.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Assign Buttons */}
              <div className="flex items-center justify-center gap-4">
                <button className="bg-[#e45252] text-white whitespace-nowrap px-4 py-2 rounded-full">
                  Auto Assign
                </button>
                <button className="bg-[#e45252] text-white whitespace-nowrap px-4 py-2 rounded-full">
                  Manual Assign
                </button>
                <button className="rounded-full p-2 bg-[#e45252] text-white ">
                  <GoArrowSwitch />
                </button>
                <button className="rounded-full p-2 bg-[#e45252] text-white ">
                  <RiDeleteBin7Line />
                </button>
              </div>

              {/* Pending Players */}
              <div className="border rounded-lg p-4 shadow-md bg-white">
                <h2 className="text-lg font-bold mb-2">Pending Players</h2>
                <div className="flex font-semibold justify-between border-b pb-1">
                  <span>ID</span>
                  <span>Name</span>
                </div>
                <div className="mt-2 space-y-1">
                  {pendingPlayers.map((player, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span>{player.id}</span>
                      <span>{player.name}</span>
                    </div>
                  ))}
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

export default Manage_Team_Registration;
