import React, { useState, useEffect } from "react";
import { IoIosStar } from "react-icons/io";
import { BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";

import userImage from "./Images/user.jpg";
import Organizer_Navbar from "../Organizer_Navbar/Organizer_Navbar";

const players = [
  {
    name: "Alison Thomas",
    location: "Bern, Switzerland",
    description: "Enthusiastic player competing in local tournaments.",
    image: userImage,
    rating: 3,
    role: "Player",
  },
  {
    name: "John Doe",
    location: "Zurich, Switzerland",
    description: "Casual player with a passion for community events.",
    image: userImage,
    rating: 4,
    role: "Player",
  },
  {
    name: "Emma Wilson",
    location: "Geneva, Switzerland",
    description: "Competitive player aiming for national rankings.",
    image: userImage,
    rating: 5,
    role: "Player",
  },
  {
    name: "Michael Brown",
    location: "Lausanne, Switzerland",
    description: "Beginner player learning the ropes.",
    image: userImage,
    rating: 2,
    role: "Player",
  },
  {
    name: "Sarah Davis",
    location: "Basel, Switzerland",
    description: "Experienced player in regional leagues.",
    image: userImage,
    rating: 4,
    role: "Player",
  },
];

const PlayerCard = ({ name, location, description, image, rating }) => {
  const [isFollowing, setIsFollowing] = useState(false);

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
          className="rounded-full w-[84px] h-[84px] object-cover"
          src={image}
          alt={name}
        />
        <div className="flex flex-col gap-1">
          <p className="text-xl font-semibold">{name}</p>
          <p className="text-md font-medium text-[#4D4D4D]">{location}</p>
          <div className="flex items-center">{stars}</div>
        </div>
      </div>
      <p className="text-lg text-gray-500">Personal Descriptions</p>
      <p className="text-sm">{description}</p>
      <div className="flex items-center justify-center gap-3">
        <button
          className="py-1.5 px-5 text-white bg-[#E45252] rounded-full"
          onClick={() => setIsFollowing(!isFollowing)}
          aria-label={isFollowing ? `Unfollow ${name}` : `Follow ${name}`}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </button>
        <Link
          to="/Player_Profile"
          state={{ name, location, description, image, rating }}
        >
          <button
            className="py-1.5 px-5 text-white bg-[#E45252] rounded-full whitespace-nowrap"
            aria-label={`View ${name}'s profile`}
          >
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

const Players = () => {
  const [data, setData] = useState(players);
  const [filteredData, setFilteredData] = useState(players);
  const [searchType, setSearchType] = useState("");

  useEffect(() => {
    // Simulate API call
    // Replace with: fetch("/api/players").then(res => res.json()).then(setData);
    setData(players);
    setFilteredData(players);
  }, []);

  const handleSearch = (query, type = searchType) => {
    setSearchType(type);
    const filtered = data.filter((item) => {
      const matchesQuery = query
        ? item.name.toLowerCase().includes(query.toLowerCase())
        : true;
      const matchesType = type ? item.role === type : true;
      return matchesQuery && matchesType;
    });
    setFilteredData(filtered);
  };

  const handleFilter = (filters) => {
    const filtered = data.filter((item) => {
      const matchesLocation = filters.location
        ? item.location.toLowerCase().includes(filters.location.toLowerCase())
        : true;
      const matchesRating = filters.rating
        ? item.rating >= parseInt(filters.rating)
        : true;
      return matchesLocation && matchesRating;
    });
    setFilteredData(filtered);
  };

  return (
    <>
      <Organizer_Navbar
        onSearch={handleSearch}
        onFilter={handleFilter}
        isPlayersPage={true}
      />
      <div className="absolute top-20 right-0 bg-[#FAFAFA] w-[75%] float-right max-lg:w-[100%] max-lg:top-32">
        <div className="flex flex-col gap-3">
          <div className="rounded-lg shadow-md bg-white">
            <p className="text-xl font-semibold p-5">All Players</p>
            <hr className="my-2" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-3">
              {filteredData.length > 0 ? (
                filteredData.map((player, index) => (
                  <PlayerCard key={index} {...player} />
                ))
              ) : (
                <p className="text-center text-gray-500 col-span-3">
                  No results found
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Players;
