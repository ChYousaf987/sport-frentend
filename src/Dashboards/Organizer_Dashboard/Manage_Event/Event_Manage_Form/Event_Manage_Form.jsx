import React from "react";

import { RiDeleteBin7Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { GoArrowSwitch } from "react-icons/go";
import football from "./Images/football.jpg";
import { NavLink } from "react-router-dom";

const Event_Manage_Form = () => {
  return (
    <>

      <div className="absolute top-20 right-0 bg-[#FAFAFA] w-[75%] float-right max-lg:w-[100%] max-lg:top-32">

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-10 border border-gray-200">
          <div className="relative">
            <img
              src={football}
              alt="Football"
              className="w-full h-64 object-cover"
            />
            <NavLink to='/Boost_Profile' className="absolute top-4 right-4 bg-yellow-400 text-white px-4 py-1 rounded-full font-semibold text-sm">
              Boost Your Profile
            </NavLink>
          </div>

          <div className="p-5">
            <div className="flex justify-between items-center text-sm text-gray-600">
              <h1 className="text-red-500 font-semibold text-lg">
                Sunday Foot Ball
              </h1>
              <span className="text-red-500 font-semibold">Date: 10/22/25</span>
            </div>

            <p className="mt-2 text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur. Non ut dignissim leo odio
              Lorem ipsum dolor sit amet consectetur. Non ut dignissim leo odio.
              Lorem ipsum dolor sit amet consectetur. Non dignissim leo odio.
            </p>

            <div className="flex justify-center items-center gap-3 mt-5">
              <button className="bg-[#e45252] text-white px-5 py-2 rounded-full text-sm hover:bg-red-600">
                Start Event
              </button>
              <button className="bg-[#e45252] text-white px-5 py-2 rounded-full text-sm hover:bg-red-600">
                Cancel Event
              </button>
            </div>

            <table className="w-full mt-6 text-sm">
              <thead>
                <tr className="border-t border-b border-gray-300">
                  <th className="py-2 text-left">ID</th>
                  <th className="py-2 text-left">Teams</th>
                  <th className="py-2 text-left">Players</th>
                  <th className="py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {["P001", "P002", "P003", "P004", "P005"].map((id, index) => (
                  <tr key={id} className="border-b border-gray-200">
                    <td className="py-3">{id}</td>
                    <td className="py-3">
                      Team {String.fromCharCode(65 + index)}
                    </td>
                    <td className="py-3">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <img
                            key={i}
                            src={`https://i.pravatar.cc/30?img=${i + 10}`}
                            alt="avatar"
                            className="w-7 h-7 rounded-full border"
                          />
                        ))}
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="flex space-x-2 text-white text-xs">
                        <button className="rounded-full p-2 bg-[#e45252] text-white ">
                          <GoArrowSwitch />
                        </button>
                        <button className="rounded-full p-2 bg-[#e45252] text-white ">
                          <RiDeleteBin7Line />
                        </button>
                        <button className="rounded-full p-2 bg-[#e45252] text-white ">
                          <FaPlus />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-center items-center gap-3 mt-5">
              <button className="bg-[#e45252] text-white px-5 py-2 rounded-full text-sm hover:bg-red-600">
                Auto Assign Player
              </button>
              <button className="bg-[#e45252] text-white px-5 py-2 rounded-full text-sm hover:bg-red-600">
                Manual Assign Player
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event_Manage_Form;
