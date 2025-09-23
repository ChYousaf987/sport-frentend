import React from "react";
import {
  FaCalendarAlt,
  FaGamepad,
  FaStar,
  FaTrophy,
  FaMedal,
} from "react-icons/fa";

const Event_History_Overview = () => {
  const stats = [
    {
      icon: <FaCalendarAlt size={20} />,
      label: "Events Attended",
      value: 15,
      color: "bg-blue-100 text-blue-700",
    },
    {
      icon: <FaGamepad size={20} />,
      label: "Games Played",
      value: 50,
      color: "bg-orange-100 text-orange-700",
    },
    {
      icon: <FaStar size={20} />,
      label: "Average Rating",
      value: "4.7",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      icon: <FaTrophy size={20} />,
      label: "MVP",
      value: "50+",
      color: "bg-sky-100 text-sky-700",
    },
    {
      icon: <FaMedal size={20} />,
      label: "Best Player",
      value: "50+",
      color: "bg-amber-100 text-amber-700",
    },
  ];

  const events = new Array(5).fill({
    title: "Tech Summit",
    date: "Jan 15, 2024",
    location: "New York",
    status: "Attended",
    rank: "1st",
    rating: "4.7",
  });

  return (
    <div className="p-4 max-w-full mx-auto">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 p-4 rounded-lg font-semibold ${stat.color}`}
          >
            <div className="bg-white rounded-full p-2 shadow-md text-lg">
              {stat.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-sm">{stat.label}</span>
              <span className="text-lg font-bold">{stat.value}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="p-4 w-full mx-auto">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* Wrap the table inside a div with scroll for smaller screens */}
          <div className="overflow-x-auto max-w-full">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-100 font-semibold text-gray-700">
                <tr>
                  <th className="px-4 py-3 whitespace-nowrap">Event Title</th>
                  <th className="px-4 py-3 whitespace-nowrap">Date</th>
                  <th className="px-4 py-3 whitespace-nowrap">Location</th>
                  <th className="px-4 py-3 whitespace-nowrap">Status</th>
                  <th className="px-4 py-3 whitespace-nowrap">Rank</th>
                  <th className="px-4 py-3 whitespace-nowrap">Rating</th>
                  <th className="px-4 py-3 whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, i) => (
                  <tr key={i} className="border-t">
                    <td className="px-4 py-3">{event.title}</td>
                    <td className="px-4 py-3">{event.date}</td>
                    <td className="px-4 py-3">{event.location}</td>
                    <td className="px-4 py-3">{event.status}</td>
                    <td className="px-4 py-3">{event.rank}</td>
                    <td className="px-4 py-3">{event.rating}</td>
                    <td className="px-4 py-3">
                      <button className="bg-[#E45252] hover:bg-red-600 text-white px-4 py-1.5 rounded-full transition text-sm">
                        Unfollow
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event_History_Overview;
