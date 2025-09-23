import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import event1 from "./Images/event1.jpg";
import event2 from "./Images/event2.jpg";
import event3 from "./Images/event3.png";
import { Link } from "react-router-dom";
// Arrow components with Tailwind styling
const NextArrow = ({ onClick }) => (
  <div
    className="slick-arrow slick-next z-20 "
    style={{
      position: "absolute",
      top: "50%",
      right: "-25px", // Adjust this value as needed
      transform: "translateY(-50%)",
      cursor: "pointer",
    }}
    onClick={onClick}
  >
    <FaArrowRight
      className="text-3xl p-1 text-gray-700 hover:text-black rounded-full"
      style={{ border: "2px solid black" }}
    />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="slick-arrow slick-prev z-20"
    style={{
      position: "absolute",
      top: "50%",
      left: "-33px", // Adjust this value as needed
      transform: "translateY(-50%)",
      cursor: "pointer",
    }}
    onClick={onClick}
  >
    <FaArrowLeft
      className="text-3xl p-1 rounded-full text-gray-700 hover:text-black"
      style={{ border: "2px solid black" }}
    />
  </div>
);

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

const FeaturedEventSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="relative max-w-6xl mx-auto px-0 py-8 max-lg:px-5">
      <Slider {...settings}>
        {eventCards.map((card, index) => (
          <div key={index} className="px-2 my-5  ">
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
                  <div className="">
                    <p className="font-semibold">Event Title: {card.title}</p>
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
                <div className="flex justify-end items-center mt-3">
                  <Link
                    to="/visitorEventdetail"
                    className="hover:bg-red-400 bg-red-500 text-white px-4 py-2 rounded-full text-md"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedEventSlider;
