import React from "react";

import { RiDeleteBin7Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const eventData = [
  {
    events: "Sunday Football",
    type: "Football",
    date: "Feb 10,25",
    numbers: "8",
    status: "Full",
  },
  {
    events: "Sunday Football",
    type: "Football",
    date: "Feb 10,25",
    numbers: "8",
    status: "Full",
  },
  {
    events: "Sunday Football",
    type: "Football",
    date: "Feb 10,25",
    numbers: "8",
    status: "Full",
  },
  {
    events: "Sunday Football",
    type: "Football",
    date: "Feb 10,25",
    numbers: "8",
    status: "Full",
  },
  {
    events: "Sunday Football",
    type: "Football",
    date: "Feb 10,25",
    numbers: "8",
    status: "Full",
  },
  {
    events: "Sunday Football",
    type: "Football",
    date: "Feb 10,25",
    numbers: "8",
    status: "Full",
  },
  {
    events: "Sunday Football",
    type: "Football",
    date: "Feb 10,25",
    numbers: "8",
    status: "Full",
  },
  {
    events: "Sunday Football",
    type: "Football",
    date: "Feb 10,25",
    numbers: "8",
    status: "Full",
  },
  {
    events: "Sunday Football",
    type: "Football",
    date: "Feb 10,25",
    numbers: "8",
    status: "Full",
  },
  {
    events: "Sunday Football",
    type: "Football",
    date: "Feb 10,25",
    numbers: "8",
    status: "Full",
  },
  {
    events: "Sunday Football",
    type: "Football",
    date: "Feb 10,25",
    numbers: "8",
    status: "Full",
  },
  
];

const Manage_Event = () => {
  return (
    <>

      <div className="absolute top-20 right-0  bg-[#FAFAFA]   w-[75%] float-right max-lg:w-[100%] max-lg:top-32">

        <div className="p-3">
          <div className="bg-white shadow-md p-3 flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <p className="text-xl fw-semibold">Organizer Events</p>
              <Link to='/Boost_Profile' className="text-white py-2 px-5 rounded-full bg-[#ffdb20] ">
                Boost Your Profile
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full table-auto text-center">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="p-3">Events</th>
                    <th className="p-3">Sport Type</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Number OF Players</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {eventData.map((item, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-gray-100 ${
                        idx !== 0 ? "mt-3" : ""
                      }`}
                    >
                      <td className="p-3 text-sm text-gray-600">{item.events}</td>
                      <td className="p-3 text-sm text-gray-600">{item.type}</td>
                      <td className="p-3 text-sm text-gray-600">{item.date}</td>
                      <td className="p-3 text-sm text-gray-600">
                        {item.numbers}
                      </td>
                      <td className="p-3 text-sm text-gray-600 max-w-xs">
                        {item.status}
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <button className="rounded-full p-2 bg-[#e45252] text-white ">
                            <RiDeleteBin7Line />
                          </button>
                          <Link to="/Event_Manage_Form">
                          <button className="bg-[#e45252] text-white px-4 py-1 rounded-full">
                            Manage
                          </button>
                          </Link>
                          
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Manage_Event;
