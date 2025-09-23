import React from "react";

import { PiPencilSimpleLine } from "react-icons/pi";

const reviewData = [
  {
    id: "R001",
    by: "User1",
    type: "Comment",
    reason: "Offensive Language",
    status: "Pending",
  },
  {
    id: "R001",
    by: "User2",
    type: "Comment",
    reason: "Offensive Language",
    status: "Pending",
  },
  {
    id: "R001",
    by: "User3",
    type: "Comment",
    reason: "Offensive Language",
    status: "Under Review",
  },
  {
    id: "R001",
    by: "User4",
    type: "Comment",
    reason: "Offensive Language",
    status: "Pending",
  },
  {
    id: "R001",
    by: "User5",
    type: "Comment",
    reason: "Offensive Language",
    status: "Resolved",
  },
];
const contentData = [
  {
    id: "C001",
    event: "Soccer Fest",
    type: "Image",
    by: "Admin",
    status: "Pending",
  },
  {
    id: "C002",
    event: "Chess Open",
    type: "Video",
    by: "User786",
    status: "Pending",
  },
  {
    id: "C003",
    event: "Soccer Fest",
    type: "Text",
    by: "Admin",
    status: "Pending",
  },
 
  {
    id: "C004",
    event: "Marathon Day",
    type: "Image",
    by: "Admin",
    status: "Pending",
  },
];

const Content_Management = () => {
  return (
    <>

      <div className="absolute top-20 right-0  bg-[#FAFAFA]   w-[75%] float-right max-lg:w-[100%] max-lg:top-32">

        <div className="p-5">
          <div className="bg-white p-5 rounded-md shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">
                Review Reports on Abusive Content
              </h2>
              <button className="border border-[#e45252] text-[#e45252] px-4 py-1 rounded-full hover:bg-[#e45252] hover:text-white transition">
                View All
              </button>
            </div>
            <hr className="py-3" />

            <div className="overflow-x-auto">
              <table className="w-full table-auto text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="p-3">Report ID</th>
                    <th className="p-3">Reported By</th>
                    <th className="p-3">Content Type</th>
                    <th className="p-3">Reason For Flagging</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewData.map((item, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-gray-100 ${
                        idx !== 0 ? "mt-3" : ""
                      }`}
                    >
                      <td className="p-3 text-sm text-gray-600">{item.id}</td>
                      <td className="p-3 text-sm text-gray-600">{item.by}</td>
                      <td className="p-3 text-sm text-gray-600">{item.type}</td>
                      <td className="p-3 text-sm text-gray-600">
                        {item.reason}
                      </td>
                      <td className="p-3 text-sm text-gray-600 max-w-xs">
                        {item.status}
                      </td>
                      <td className="p-3">
                        <button className="bg-[#e45252] text-white px-4 py-1 rounded-full">
                          Report
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Manage Content Section */}
        <div className="p-5">
          <div className="bg-white p-5 rounded-md shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Manage Content</h2>
              <button className="border border-[#e45252] text-[#e45252] px-4 py-1 rounded-full hover:bg-[#e45252] hover:text-white transition">
                View All
              </button>
            </div>
            <hr className="py-3" />

            <div className="overflow-x-auto">
              <table className="w-full table-auto text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="p-3">Content ID</th>
                    <th className="p-3">Upcoming Event</th>
                    <th className="p-3">Content Type</th>
                    <th className="p-3">Uploaded By</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {contentData.map((item, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-gray-100 ${
                        idx !== 0 ? "mt-3" : ""
                      }`}
                    >
                      <td className="p-3 text-sm text-gray-600">{item.id}</td>
                      <td className="p-3 text-sm text-gray-600">
                        {item.event}
                      </td>
                      <td className="p-3 text-sm text-gray-600">{item.type}</td>
                      <td className="p-3 text-sm text-gray-600">{item.by}</td>
                      <td className="p-3 text-sm text-gray-600 max-w-xs">
                        {item.status}
                      </td>
                      <td className="p-3">
                        <div className="flex justify-center gap-3">
                          <button className=" text-white p-2 rounded-full bg-[#e45252]">
                            <PiPencilSimpleLine className="text-xl" />
                          </button>
                          <button className="bg-[#e45252] text-white px-4 py-1 rounded-full">
                            Add
                          </button>
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

export default Content_Management;
