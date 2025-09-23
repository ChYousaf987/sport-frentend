import React, { useState } from "react";
import ad from "../images/ad.jpg";
import ad2 from "../images/ad2.jpg";
import ad3 from "../images/ad3.jpg";

const eventsData = [
  {
    id: 1,
    title: "Path Of Exile 2",
    location: "New Boston",
    date: "20-Oct-2024",
    time: "06:30 pm",
    img: ad,
    rank: "1st",
    rating: "4.7",
  },
  {
    id: 2,
    title: "Path Of Exile 2",
    location: "New Boston",
    date: "20-Oct-2024",
    time: "06:30 pm",
    img: ad2,
    rank: "1st",
    rating: "4.7",
  },
  {
    id: 3,
    title: "Path Of Exile 2",
    location: "New Boston",
    date: "20-Oct-2024",
    time: "06:30 pm",
    img: ad3,
    rank: "1st",
    rating: "4.7",
  },
  {
    id: 4,
    title: "Path Of Exile 2",
    location: "New Boston",
    date: "20-Oct-2024",
    time: "06:30 pm",
    img: ad,
    rank: "1st",
    rating: "4.7",
  },
  {
    id: 5,
    title: "Path Of Exile 2",
    location: "New Boston",
    date: "20-Oct-2024",
    time: "06:30 pm",
    img: ad2,
    rank: "1st",
    rating: "4.7",
  },
];

const Profile_Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleBack = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="rounded-lg shadow-md bg-white p-4">
      {!selectedEvent ? (
        eventsData.map((event) => (
          <div
            key={event.id}
            onClick={() => setSelectedEvent(event)}
            className="cursor-pointer flex flex-col sm:flex-row sm:items-center border border-gray-200 justify-between shadow-md rounded px-4 py-3 mx-auto mt-4 space-y-4 sm:space-y-0 sm:space-x-4 max-w-full sm:max-w-6xl hover:bg-gray-50 transition"
          >
            {/* Left Section */}
            <div className="flex items-center gap-3 min-w-[200px]">
              <img
                src={event.img}
                alt="event"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h2 className="font-semibold text-sm">{event.title}</h2>
                <p className="text-xs text-gray-500">📍 {event.location}</p>
              </div>
            </div>

            {/* Middle Section */}
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
              <button className="bg-red-400 text-white px-4 py-2 rounded-full hover:bg-red-500 text-sm font-medium">
                View Details
              </button>
              <button className="bg-red-400 text-white px-4 py-2 rounded-full hover:bg-red-500 text-sm font-medium">
                Feedback
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="border border-gray-300 rounded-lg shadow-md max-w-3xl mx-auto p-6">
          <button
            onClick={handleBack}
            className="mb-4 text-sm text-blue-600 hover:underline"
          >
            ← Back to events
          </button>
          <div className="flex items-center gap-4">
            <img
              src={selectedEvent.img}
              alt="event"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h2 className="text-lg font-semibold">{selectedEvent.title}</h2>
              <p className="text-sm text-gray-500">
                📍 {selectedEvent.location}
              </p>
            </div>
          </div>

          <div className="mt-4 space-y-3 text-sm">
            <p>
              <strong>Date:</strong> {selectedEvent.date}
            </p>
            <p>
              <strong>Time:</strong> {selectedEvent.time}
            </p>
            <p>
              <strong>Location:</strong> {selectedEvent.location}
            </p>

            {/* Participant Avatars */}
            <div className="flex items-center gap-2">
              <strong>Participants:</strong>
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

            <p>
              <strong>Status:</strong> Attended
            </p>
            <p>
              <strong>Rank:</strong> {selectedEvent.rank}
            </p>
            <p>
              <strong>Rating:</strong> {selectedEvent.rating}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile_Events;
