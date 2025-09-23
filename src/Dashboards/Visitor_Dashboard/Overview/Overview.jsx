import React, { useState } from 'react';
import Visitor_Navbar from '../Visitor_Navbar/Visitor_Navbar';
import FeaturedEventSlider from './FeaturedEventSlider';
import CategorySlider from './CategorySlider';
import player from "./Images/player.jpg";
import { IoIosStar } from "react-icons/io";
import { BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";
import JoinComunity from './JoinComunity';

const organizers = new Array(10).fill({
  name: "Alison Thomas",
  location: "Bern, Switzerland",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo blanditiis esse debitis suscipit repudiandae quisquam nobis expedita distinctio, inventore alias.",
  image: player,
  rating: 3,
});

const OrganizerCard = ({ name, location, description, image, rating, onFollow }) => {
  const stars = Array.from({ length: 5 }, (_, i) =>
    i < rating ? (
      <IoIosStar key={i} size={20} className="text-[#FFDB20]" />
    ) : (
      <BsStar key={i} size={20} className="text-gray-300" />
    )
  );

  return (
    <div className="shadow-md shadow-gray-300 rounded-lg p-5 flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <img
          className="rounded-full w-16 h-16 object-cover"
          src={image}
          alt={name}
        />
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-md font-medium text-[#4D4D4D]">{location}</p>
          <div className="flex items-center">{stars}</div>
        </div>
      </div>
      <p className="text-lg text-gray-500">Personal Descriptions</p>
      <p className="text-sm">{description}</p>
      <div className="flex items-center justify-center gap-3">
        <button
          className="py-1.5 px-5 text-white bg-[#E45252] rounded-full whitespace-nowrap"
          onClick={onFollow}
        >
          Follow
        </button>
        <Link
          to="/PlayerProfile"
          state={{ name, location, description, image, rating }}
        >
          <button className="py-1.5 px-5 text-white bg-[#E45252] rounded-full whitespace-nowrap">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

const Overview = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Visitor_Navbar />

      <div className="w-[75%] float-right bg-[#fafafa] px-3 overflow-hidden absolute top-20 max-lg:top-32 right-0 max-lg:w-[100%]">
        <CategorySlider />

        <div className="w-full bg-white px-10 mt-10 rounded-lg max-lg:px-5">
          <div className="flex w-full justify-between items-center py-4">
            <p className="text-xl font-semibold">Featured Events</p>
            <button
              className="rounded-full px-6 py-2 text-[#e45352]"
              style={{ border: '1.5px solid #E45352' }}
            >
              See All
            </button>
          </div>
          <hr />
          <FeaturedEventSlider />
        </div>

        <div className="w-full bg-white px-3 mt-10 rounded-lg max-lg:px-3">
          <div className="flex flex-col gap-3">
            <div className="rounded-lg shadow-md bg-white">
              <p className="text-xl font-semibold p-5">
                Popular Players & Organizers
              </p>
              <hr className="my-2" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-3">
                {organizers.map((org, index) => (
                  <OrganizerCard
                    key={index}
                    {...org}
                    onFollow={() => setShowModal(true)} // Trigger modal from Follow
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal on Follow Click */}
        {showModal && <JoinComunity onClose={() => setShowModal(false)} />}

        <hr />
      </div>
    </>
  );
};

export default Overview;
