import React from "react";
import event1 from "./Images/event1.jpg";
import event2 from "./Images/event2.jpg";
import event3 from "./Images/event3.png";
import { Link } from "react-router-dom";
const eventCards = [
  {
    title: "Sports night",
    date: "12-02-2024",
    location: "G11, Islamabad",
    payment: "Not Paid",
    paid: false,
    members: 142,
    img: event1,
  },
  {
    title: "Sports night",
    date: "12-02-2024",
    location: "G11, Islamabad",
    payment: "Paid",
    paid: true,
    members: 142,
    img: event2,
  },
  {
    title: "Sports night",
    date: "12-02-2024",
    location: "G11, Islamabad",
    payment: "Not Paid",
    paid: false,
    members: 142,
    img: event3,
  },
  {
    title: "Sports night",
    date: "12-02-2024",
    location: "G11, Islamabad",
    payment: "Not Paid",
    paid: false,
    members: 142,
    img: event1,
  },
  {
    title: "Sports night",
    date: "12-02-2024",
    location: "G11, Islamabad",
    payment: "Paid",
    paid: true,
    members: 142,
    img: event2,
  },
  {
    title: "Sports night",
    date: "12-02-2024",
    location: "G11, Islamabad",
    payment: "Not Paid",
    paid: false,
    members: 142,
    img: event3,
  },
];

const Event_And_Registration = () => {
  return (
    <>
      <div className="absolute top-20 right-0  bg-[#FAFAFA]   w-[75%] float-right max-lg:w-[100%] max-lg:mt-10">
        <div className="p-3">
          <div className="bg-white flex flex-col gap-5 p-3 rounded-md shadow-md">
           
              <p className="text-lg font-semibold">All Events</p>
              
            
            <hr />
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {eventCards.map((card, index) => (
                <div key={index} className="px-2 my-5  ">
                  <div className="bg-white rounded-b-lg shadow-md overflow-visible relative">
                    <img
                      src={card.img}
                      alt="Event"
                      className="w-full h-32 object-cover rounded-t-lg"
                    />
                    
                    <div className="p-4 text-sm bg-[#FCEEEE] rounded-b-lg">
                      <div className="flex justify-between gap-1">
                        <div className="">
                          <p className="font-semibold">
                            Event Title: {card.title}
                          </p>
                          <p>Date: {card.date}</p>
                          <p>Location: {card.location}</p>
                          <p>
                            Payment:{" "}
                            <span
                              className={
                                card.paid
                                  ? "text-green-600 font-semibold"
                                  : "text-[#08a0e9] font-semibold underline"
                              }
                            >
                              {card.payment}
                            </span>
                          </p>
                        </div>
                        <div
                          className="text-center rounded-lg p-2 w-[5rem] h-[4rem] "
                          style={{ border: "2px solid black" }}
                        >
                          <p className="font-bold text-lg">{card.members}</p>
                          <p className=" text-sm">Members</p>
                        </div>
                      </div>
                      <div className="flex justify-center items-center mt-3">
                        <Link to="/Player_Event_Detail" className="hover:bg-red-400 bg-red-500 text-center text-white w-full px-4 py-2 rounded-full text-md">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event_And_Registration;
