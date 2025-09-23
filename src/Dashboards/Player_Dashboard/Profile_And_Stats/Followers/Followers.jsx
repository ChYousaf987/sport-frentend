import React, { useState } from "react";

const followers = [
  {
    name: "Alice Smith",
    year: 2023,
    status: "Active",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Doe",
    year: 2022,
    status: "Active",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Charlie Brown",
    year: 2021,
    status: "Active",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    name: "David Green",
    year: 2020,
    status: "Active",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emma White",
    year: 2023,
    status: "Active",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Followers = () => {
  return (
    <div className="p-4 w-full mx-auto">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-100 font-semibold text-gray-700">
              <tr>
                <th className="px-4 py-3">Profile Picture</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Joining Year</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {followers.map((follower, i) => (
                <tr key={i} className="border-t">
                  <td className="px-4 py-3">
                    <img
                      src={follower.image}
                      alt={follower.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </td>
                  <td className="px-4 py-3">{follower.name}</td>
                  <td className="px-4 py-3">{follower.year}</td>
                  <td className="px-4 py-3">{follower.status}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2 items-center">
                      <button className="bg-green-600 whitespace-nowrap text-white text-[14px] px-6 py-2 rounded-full">
                        Accept Request
                      </button>
                      <button className="bg-red-500 whitespace-nowrap text-white text-[14px] px-6 py-2 rounded-full">
                        Cancel Request
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
  );
};

export default Followers;
