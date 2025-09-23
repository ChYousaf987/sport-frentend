import React, { useState, useEffect } from "react";
import { IoIosStar } from "react-icons/io";
import { BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";
import Player_Navbar from "../Player_Navbar/Player_Navbar";
import user from "./Images/user.jpg";

const mockData = [
  {
    id: 1,
    name: "Alison Thomas",
    role: "Player",
    location: "Bern, Switzerland",
    description: "Passionate player competing in weekly tournaments in Bern.",
    image: user,
    rating: 3,
    eventType: "Tournament",
    accountStatus: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Player",
    location: "Zurich, Switzerland",
    description: "Enjoys casual and competitive events.",
    image: user,
    rating: 4,
    eventType: "Casual",
    accountStatus: "Active",
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Player",
    location: "Geneva, Switzerland",
    description: "Active in community-driven casual events.",
    image: user,
    rating: 5,
    eventType: "Casual",
    accountStatus: "Inactive",
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
          to="/Player_Profile_Section"
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

const SearchResults = ({ results }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-3">
    {results.length > 0 ? (
      results.map((item) => <PlayerCard key={item.id} {...item} />)
    ) : (
      <p className="text-center text-gray-500 col-span-3">No results found</p>
    )}
  </div>
);

const Player_Section = () => {
  const [data, setData] = useState(mockData);
  const [filteredData, setFilteredData] = useState(mockData);
  const [searchType, setSearchType] = useState("");

  useEffect(() => {
    // Simulate API call
    setData(mockData);
    setFilteredData(mockData);
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
      const matchesEventType = filters.eventType
        ? item.eventType === filters.eventType
        : true;
      const matchesRating = filters.rating
        ? item.rating >= parseInt(filters.rating)
        : true;
      const matchesStatus = filters.accountStatus
        ? item.accountStatus === filters.accountStatus
        : true;
      return (
        matchesLocation && matchesEventType && matchesRating && matchesStatus
      );
    });
    setFilteredData(filtered);
  };

  return (
    <>
      <Player_Navbar onSearch={handleSearch} onFilter={handleFilter} />
      <div className="absolute top-20 right-0 bg-[#FAFAFA] w-[75%] float-right max-lg:w-[100%] max-lg:top-32">
        <div className="flex flex-col gap-3">
          <div className="rounded-lg shadow-md bg-white">
            <p className="text-xl font-semibold p-5">Search Results</p>
            <hr className="my-2" />
            <SearchResults results={filteredData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Player_Section;
