import React, { useState } from "react";
import event1 from "./Images/event1.jpg";
import event2 from "./Images/event2.jpg";
import event3 from "./Images/event3.png";
import { Link } from "react-router-dom";

const eventCards = [
  {
    title: "Sports night",
    date: "12-02-2024",
    location: "G11, Islamabad",
    payment: "1000",
    members: 142,
    img: event1,
  },
  {
    title: "Sports night",
    date: "12-02-2024",
    location: "G11, Islamabad",
    payment: "2000",
    members: 142,
    img: event2,
  },
  {
    title: "Sports night",
    date: "12-02-2024",
    location: "G11, Islamabad",
    payment: "1000",
    members: 142,
    img: event3,
  },
  {
    title: "Sports night",
    date: "12-02-2024",
    location: "G11, Islamabad",
    payment: "2000",
    members: 142,
    img: event1,
  },
  {
    title: "Sports night",
    date: "12-02-2024",
    location: "G11, Islamabad",
    payment: "1000",
    members: 142,
    img: event2,
  },
  {
    title: "Sports night",
    date: "12-02-2024",
    location: "G11, Islamabad",
    payment: "2000",
    members: 142,
    img: event3,
  },
];

const contentData = [
  {
    title: "Tech Summit",
    date: "Jan 15, 2024",
    loaction: "New York",
    status: "Attended",
  },
  {
    title: "Tech Summit",
    date: "Jan 15, 2024",
    loaction: "New York",
    status: "Attended",
  },
  {
    title: "Tech Summit",
    date: "Jan 15, 2024",
    loaction: "New York",
    status: "Attended",
  },
];

const Player_Overview = () => {
  const [registeredEvents, setRegisteredEvents] = useState([]);

  const handleRegister = (index) => {
    if (registeredEvents.includes(index)) {
      // If already registered, you could optionally allow un-registering
      setRegisteredEvents(registeredEvents.filter((i) => i !== index));
    } else {
      setRegisteredEvents([...registeredEvents, index]);
    }
  };

  return (
    <div className="absolute top-20 right-0 bg-[#FAFAFA] w-[75%] float-right max-lg:w-[100%] max-lg:mt-10">
      <div className="p-3">
        <div className="bg-white flex flex-col gap-5 p-3 rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold">Upcoming Events</p>
            <button className="py-2 px-5 rounded-full border border-[#e45252] text-[#e45252]">
              See All
            </button>
          </div>
          <hr />
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {eventCards.map((card, index) => {
              const isRegistered = registeredEvents.includes(index);
              return (
                <div key={index} className="px-2 my-5">
                  <div className="bg-white rounded-b-lg shadow-md overflow-visible relative">
                    <img
                      src={card.img}
                      alt="Event"
                      className="w-full h-32 object-cover rounded-t-lg"
                    />
                    <span className="absolute top-2 right-2 bg-green-500 cursor-pointer text-black text-md font-medium px-3 py-1 rounded-full">
                      Join Chat
                    </span>
                    <div className="p-4 text-sm bg-[#FCEEEE] rounded-b-lg">
                      <div className="flex justify-between gap-1">
                        <div>
                          <p className="font-semibold">
                            Event Title: {card.title}
                          </p>
                          <p>Date: {card.date}</p>
                          <p>Location: {card.location}</p>
                          <p>
                            Payment:{" "}
                            <span className="text-[#08a0e9] font-semibold underline">
                              {card.payment}
                            </span>
                          </p>
                        </div>
                        <div
                          className="text-center rounded-lg p-2 w-[5rem] h-[4rem]"
                          style={{ border: "2px solid black" }}
                        >
                          <p className="font-bold text-lg">{card.members}</p>
                          <p className="text-sm">Members</p>
                        </div>
                      </div>
                      <div className="flex justify-center items-center mt-3">
                        <button
                          onClick={() => handleRegister(index)}
                          className={`w-full text-center px-4 py-2 rounded-full text-md transition-all duration-300 ${
                            isRegistered
                              ? "border border-[#E45252] text-[#E45252] bg-transparent"
                              : "bg-red-500 text-white hover:bg-red-400"
                          }`}
                        >
                          {isRegistered ? "Registered" : "Register"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="my-3">
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
                    <th className="p-3">Event Title</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Loacation</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Actions</th>
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
                      <td className="p-3 text-sm text-gray-600">{item.title}</td>
                      <td className="p-3 text-sm text-gray-600">
                        {item.date}
                      </td>
                      <td className="p-3 text-sm text-gray-600">{item.loaction}</td>

                      <td className="p-3 text-sm text-gray-600 max-w-xs">
                        {item.status}
                      </td>
                      <td className="p-3">
                        <div className="flex justify-center gap-3">
                          <button className=" text-white whitespace-nowrap px-5 py-2 rounded-full bg-[#e45252]">
                            Leave a Review
                          </button>
                          <button className="bg-[#e45252] whitespace-nowrap text-white px-5 py-2 rounded-full">
                            View Results
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
    </div>
  );
};

export default Player_Overview;
