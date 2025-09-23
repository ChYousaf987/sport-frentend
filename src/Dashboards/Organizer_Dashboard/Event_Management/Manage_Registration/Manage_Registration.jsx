import React, { useEffect, useRef, useState } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";
import { MdOutlineSort } from "react-icons/md";
import { Link } from "react-router-dom";

const registrationData = [
  {
    id: "P001",
    name: "John Doe",
    type: "Player",
    registration: "Registered",
    payment: "Paid",
    teamassignment: "Team A",
  },
  {
    id: "P002",
    name: "Alpha",
    type: "Team",
    registration: "Pending",
    payment: "Unpaid",
    teamassignment: "-",
  },
  {
    id: "P003",
    name: "Alex",
    type: "Player",
    registration: "Registered",
    payment: "Paid",
    teamassignment: "Team B",
  },
];

const Manage_Registration = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [data, setData] = useState(registrationData);
  const [showCancelReason, setShowCancelReason] = useState(false);
  const [cancelReason, setCancelReason] = useState("");
  const filterRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilter(false);
      }
    };

    if (showFilter) {
      window.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFilter]);

  // Drag and Drop Handlers
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetTeam) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const updatedData = data.map((item) =>
      item.id === id && item.type === "Player"
        ? { ...item, teamassignment: targetTeam }
        : item
    );
    setData(updatedData);
  };

  const handleCancelEvent = () => {
    setShowCancelReason(true);
  };

  const handleCancelSubmit = () => {
    if (cancelReason.trim()) {
      console.log("Event cancelled. Reason:", cancelReason);
      setShowCancelReason(false);
      setCancelReason("");
      // Add API call or further logic here
    }
  };

  const handleCancelClose = () => {
    setShowCancelReason(false);
    setCancelReason("");
  };

  return (
    <>
      <div className="absolute top-20 right-0 bg-[#FAFAFA] w-[75%] float-right max-lg:w-[100%] max-lg:top-32">
        <div className="p-3">
          <div className="bg-white shadow-md p-3 flex flex-col gap-5 relative">
            <div className="flex justify-between items-center">
              <p className="text-xl fw-semibold">Manage Registration</p>
              <button
                className="border border-[#e45252] py-2 flex items-center gap-2 px-5 rounded-full text-[#e45252]"
                onClick={() => setShowFilter(!showFilter)}
              >
                <MdOutlineSort />
                Filter
              </button>
            </div>

            {showFilter && (
              <div
                ref={filterRef}
                className="absolute top-16 right-5 bg-white border border-gray-200 shadow-lg rounded-lg p-5 z-10 w-[250px]"
              >
                <h3 className="text-md font-semibold mb-2">Choose One</h3>
                <hr className="mb-3 border-gray-300" />

                <div className="mb-4">
                  <p className="font-medium text-sm mb-2">User Type</p>
                  <label className="block text-sm mb-2">
                    <input
                      type="radio"
                      name="userType"
                      value="Player"
                      className="mr-2 accent-[#e45252]"
                    />
                    Players
                  </label>
                  <label className="block text-sm">
                    <input
                      type="radio"
                      name="userType"
                      value="Team"
                      className="mr-2 accent-[#e45252]"
                    />
                    Team
                  </label>
                </div>

                <div>
                  <p className="font-medium text-sm mb-2">Status</p>
                  <label className="block text-sm mb-2">
                    <input
                      type="radio"
                      name="status"
                      value="Registered"
                      className="mr-2 accent-[#e45252]"
                    />
                    Registered
                  </label>
                  <label className="block text-sm">
                    <input
                      type="radio"
                      name="status"
                      value="Paid"
                      className="mr-2 accent-[#e45252]"
                    />
                    Paid
                  </label>
                </div>
              </div>
            )}

            <div className="overflow-x-auto">
              <table className="w-full table-auto text-center">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="p-3">ID Number</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Type</th>
                    <th className="p-3">Registration</th>
                    <th className="p-3">Payment</th>
                    <th className="p-3">Team Assignment</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-gray-100 ${
                        idx !== 0 ? "mt-3" : ""
                      }`}
                    >
                      <td
                        className="p-3 text-sm text-gray-600"
                        draggable={item.type === "Player"}
                        onDragStart={(e) => handleDragStart(e, item.id)}
                      >
                        {item.id}
                      </td>
                      <td className="p-3 text-sm text-gray-600">{item.name}</td>
                      <td className="p-3 text-sm text-gray-600">{item.type}</td>
                      <td className="p-3 text-sm text-gray-600">
                        {item.registration}
                      </td>
                      <td className="p-3 text-sm text-gray-600 max-w-xs">
                        {item.payment}
                      </td>
                      <td
                        className="p-3 text-sm text-gray-600 max-w-xs"
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, "Team A")}
                      >
                        {item.teamassignment}
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <Link to="/Manage_team_Registration">
                            <button className="bg-[#e45252] text-white px-4 py-1 rounded-full">
                              Edit
                            </button>
                          </Link>
                          <button className="rounded-full p-2 bg-[#e45252] text-white ">
                            <RiDeleteBin7Line />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Team Assignment Drop Zones */}
              <div className="mt-5 grid grid-cols-2 gap-4">
                <div
                  className="border-2 border-dashed border-gray-300 p-4 rounded-lg text-center"
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, "Team A")}
                >
                  <h3 className="text-lg font-semibold">Team A</h3>
                  {data
                    .filter((item) => item.teamassignment === "Team A")
                    .map((item) => (
                      <div key={item.id} className="text-sm text-gray-600">
                        {item.name}
                      </div>
                    ))}
                </div>
                <div
                  className="border-2 border-dashed border-gray-300 p-4 rounded-lg text-center"
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, "Team B")}
                >
                  <h3 className="text-lg font-semibold">Team B</h3>
                  {data
                    .filter((item) => item.teamassignment === "Team B")
                    .map((item) => (
                      <div key={item.id} className="text-sm text-gray-600">
                        {item.name}
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 mt-5">
              <button
                className="bg-gray-300 text-gray-600 px-4 py-2 rounded-full cursor-not-allowed"
                disabled
              >
                Start Event (Future Use)
              </button>
              <button
                className="bg-[#e45252] text-white px-4 py-2 rounded-full hover:bg-red-600"
                onClick={handleCancelEvent}
              >
                Cancel Event
              </button>
            </div>

            {showCancelReason && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
                  <h3 className="text-lg font-semibold mb-4">Cancel Event</h3>
                  <textarea
                    className="w-full border rounded-lg px-3 py-2 mb-4"
                    rows="4"
                    placeholder="Enter reason for cancellation"
                    value={cancelReason}
                    onChange={(e) => setCancelReason(e.target.value)}
                  ></textarea>
                  <div className="flex justify-end gap-4">
                    <button
                      className="bg-gray-300 text-gray-600 px-4 py-2 rounded-full"
                      onClick={handleCancelClose}
                    >
                      Close
                    </button>
                    <button
                      className="bg-[#e45252] text-white px-4 py-2 rounded-full hover:bg-red-600"
                      onClick={handleCancelSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Manage_Registration;
