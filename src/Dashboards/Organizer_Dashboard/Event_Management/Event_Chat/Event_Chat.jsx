import React from "react";
import { useNavigate } from "react-router-dom";

import { IoIosArrowDown } from "react-icons/io";
import { RiDeleteBin7Line } from "react-icons/ri";
import { PiPencilSimpleLine } from "react-icons/pi";
import ad from "./Images/ad.jpg";
import ad2 from "./Images/ad2.jpg";
import ad3 from "./Images/ad3.jpg";

const events = [
  {
    id: 1,
    title: "Path Of Exile 2",
    location: "📍 New Boston",
    date: "20-Oct-2024",
    time: "06:30 pm",
    image: ad,
  },
  {
    id: 2,
    title: "Elden Ring Tournament",
    location: "📍 Chicago Arena",
    date: "25-Oct-2024",
    time: "05:00 pm",
    image: ad2,
  },
  {
    id: 3,
    title: "Cyberpunk Night",
    location: "📍 Night City Lounge",
    date: "28-Oct-2024",
    time: "08:00 pm",
    image: ad3,
  },
];

const Event_Chat = () => {
  const navigate = useNavigate();

  const openChatPage = (eventId) => {
    navigate(`/event-chat/${eventId}`);
  };

  return (
    <>

      <div className="absolute top-20 right-0 bg-[#FAFAFA] w-[75%] float-right max-lg:w-[100%] max-lg:top-32">

        <div className="p-3">
          <div className="rounded-lg shadow-md bg-white p-3 flex flex-col gap-5">
            <p className="text-lg font-semibold">Event Chat</p>
            <hr />
            <div className="flex justify-between items-center">
              <p className="text-md font-semibold">All Events</p>
              <button className="border flex items-center gap-2 border-[#e45252] text-[#e45252] px-5 py-2 rounded-full">
                Upcoming Event
                <IoIosArrowDown />
              </button>
            </div>

            {events.map((event) => (
              <div
                key={event.id}
                className="flex flex-col border border-gray-200 shadow-md rounded px-4 py-3 mx-auto mt-4 w-full sm:max-w-6xl overflow-x-auto"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
                  {/* Left */}
                  <div className="flex items-center gap-3 min-w-[200px]">
                    <img
                      src={event.image}
                      alt="event"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h2 className="font-semibold text-sm">{event.title}</h2>
                      <p className="text-xs text-gray-500">{event.location}</p>
                    </div>
                  </div>

                  {/* Participants */}
                  <div className="flex items-center flex-wrap gap-2 min-w-[250px]">
                    <p className="text-sm font-semibold mr-2">Participants</p>
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((_, i) => (
                        <img
                          key={i}
                          className="w-8 h-8 rounded-full border-2 border-white"
                          src={`https://i.pravatar.cc/150?img=${i + 1}`}
                          alt={`Participant ${i + 1}`}
                        />
                      ))}
                      <div className="w-8 h-8 bg-gray-200 text-gray-600 text-xs rounded-full flex items-center justify-center border-2 border-white">
                        +
                      </div>
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="text-sm text-right sm:text-left min-w-[120px]">
                    <p>{event.date}</p>
                    <p className="text-gray-500">{event.time}</p>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 items-center justify-end flex-wrap">
                    <button className="bg-red-400 text-white p-2 rounded-full hover:bg-red-500">
                      <PiPencilSimpleLine className="text-xl" />
                    </button>
                    <button className="bg-red-400 text-white p-2 rounded-full hover:bg-red-500">
                      <RiDeleteBin7Line className="text-xl" />
                    </button>
                    <button
                      onClick={() => openChatPage(event.id)}
                      className="bg-red-400 text-white px-4 py-2 rounded-full hover:bg-red-500 text-sm font-medium"
                    >
                      Chat
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Event_Chat;
