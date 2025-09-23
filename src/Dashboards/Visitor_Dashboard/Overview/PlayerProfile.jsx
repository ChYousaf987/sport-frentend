import React, { useState } from "react";
import playerImg from "./Images/player.jpg";
import Mvp from "./Images/mvp.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { IoIosStar } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import JoinComunity from "./JoinComunity";

const data = [
  { year: "2012", participated: 100, rating: 90 },
  { year: "2013", participated: 80, rating: 60 },
  { year: "2014", participated: 60, rating: 70 },
  { year: "2015", participated: 30, rating: 20 },
  { year: "2016", participated: 90, rating: 50 },
  { year: "2017", participated: 100, rating: 70 },
  { year: "2018", participated: 50, rating: 100 },
  { year: "2019", participated: 120, rating: 90 },
];

const events = new Array(5).fill({
  title: "Tech Summit",
  date: "Jan 15, 2024",
  location: "New York",
  status: "Attended",
  rank: "1st",
  rating: 4.7,
});

const PlayerProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="p-3 w-[75%] absolute top-20 right-0 mx-auto bg-[#fafafa] max-lg:top-32  max-lg:w-[100%]">
      <div className="flex flex-col gap-3">
        <div className="w-full px-3 rounded-lg shadow-md bg-white">
          <p className="text-xl font-semibold p-5">Player Profile</p>
          <hr />
          <div className="flex gap-5 max-lg:flex-wrap">
            <div className="w-full md:w-1/3 flex flex-col gap-2 py-5 items-center">
              <img
                src={playerImg}
                alt=""
                className="w-28 h-28 rounded-full object-cover"
              />
              <div className="flex gap-2">
                <img src={Mvp} alt="" className="w-7 h-auto" />
                <p className="text-xl font-semibold">Esther Horward</p>
              </div>
              <div className="flex gap-1 text-sm font-extralight items-center text-[#585858]">
                <CiLocationOn />
                <p>Bern, Switzerland</p>
              </div>
              <div className="flex">
                <IoIosStar className="text-[#ffdb20]" />
                <IoIosStar className="text-[#ffdb20]" />
                <IoIosStar className="text-[#ffdb20]" />
                <IoIosStar className="text-gray-400" />
                <IoIosStar className="text-gray-400" />
              </div>
              <div className="w-full flex gap-5 mt-3 px-5">
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-[#E45252] text-white w-full p-3 rounded-full whitespace-nowrap"
                >
                  Follow
                </button>
                {showModal && <JoinComunity onClose={() => setShowModal(false)} />}

                <button className="bg-[#E45252] text-white w-full p-3 rounded-full whitespace-nowrap">
                  Message
                </button>
              </div>
            </div>

            <div className="w-full md:w-2/3 py-5 px-5 flex flex-col gap-5">
              <div className="flex flex-col">
                <p className="text-gray-400">Personal Descriptions</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Dolor risus vestibulum elit diam pulvinar hendrerit ipsum cursus at. In massa tempor aliquet massa aliquet mi in. Nisl tortor praesent vivamus senectus ultrices egestas. Velit pulvinar venenatis dignissim faucibus enim gravida.
                </p>
              </div>
              <div className="flex gap-6 max-lg:flex-wrap">
                <div className="w-full sm:w-1/2 flex flex-col gap-5">
                  <div>
                    <p className="text-gray-400">Full Name</p>
                    <p>Esther Horward</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Phone Number</p>
                    <p>+92 00 000 0000</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Country</p>
                    <p>Pakistan</p>
                  </div>
                </div>

                <div className="w-full sm:w-1/2 flex flex-col gap-5">
                  <div>
                    <p className="text-gray-400">Date of Birth</p>
                    <p>20-05-2024</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Email Address</p>
                    <p>estherhorward@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-gray-400">City</p>
                    <p>Islamabad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-5 mt-6">
        <div className="flex flex-wrap justify-between items-center mb-3">
          <div className="flex gap-3 max-lg:gap-7">
            <h3 className="text-lg font-semibold border-b-2 border-black">
              Event History
            </h3>
          </div>
          <button className="text-[#e45252] text-sm px-4 py-1 rounded-full border border-[#e45252] max-lg:mt-5">
            See All
          </button>
        </div>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="participated" fill="#1db0de" name="Total Events Participated" />
            <Bar dataKey="rating" fill="#e45352" name="Rating from Other Users" />
          </BarChart>
        </ResponsiveContainer>

        <div className="overflow-x-auto mt-6">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-3 py-2 max-lg:min-w-[7rem]">Event Title</th>
                <th className="px-3 py-2 max-lg:min-w-[7rem]">Date</th>
                <th className="px-3 py-2 max-lg:min-w-[7rem]">Location</th>
                <th className="px-3 py-2 max-lg:min-w-[7rem]">Status</th>
                <th className="px-3 py-2 max-lg:min-w-[7rem]">Rank</th>
                <th className="px-3 py-2 max-lg:min-w-[7rem]">Rating</th>
                <th className="px-3 py-2 max-lg:min-w-[7rem] flex items-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={index} className="border-t">
                  <td className="px-3 py-2">{event.title}</td>
                  <td className="px-3 py-2">{event.date}</td>
                  <td className="px-3 py-2">{event.location}</td>
                  <td className="px-3 py-2">{event.status}</td>
                  <td className="px-3 py-2">{event.rank}</td>
                  <td className="px-3 py-2">{event.rating}</td>
                  <td className="px-3 py-2">
                    <button
                      onClick={() => setSelectedEvent(event)}
                      className="bg-red-500 max-lg:w-[7rem] text-white px-3 py-2 rounded-full text-md"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedEvent && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-lg">
            <h2 className="text-xl font-bold mb-2">{selectedEvent.title}</h2>
            <p><strong>Date:</strong> {selectedEvent.date}</p>
            <p><strong>Location:</strong> {selectedEvent.location}</p>
            <p><strong>Status:</strong> {selectedEvent.status}</p>
            <p><strong>Rank:</strong> {selectedEvent.rank}</p>
            <p><strong>Rating:</strong> {selectedEvent.rating}</p>
            <button
              onClick={() => setSelectedEvent(null)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerProfile;
