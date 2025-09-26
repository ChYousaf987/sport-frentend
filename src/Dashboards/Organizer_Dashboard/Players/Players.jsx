import React, { useState, useEffect } from "react";
import { IoIosStar } from "react-icons/io";
import { BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";
import Organizer_Navbar from "../Organizer_Navbar/Organizer_Navbar";
import defaultProfile from "./Images/user.jpg"; // Updated to match your import

const BACKEND_URL = "http://localhost:3001"; // Define backend base URL

// Helper function to get full image URL
const getFullImageUrl = (path) => {
  if (!path || typeof path !== 'string' || path.trim() === '') {
    console.warn('Invalid or missing image path, using default profile');
    return defaultProfile;
  }
  if (path.startsWith('http') || path.startsWith('https')) {
    return path; // Return full URLs as-is
  }
  const fullUrl = `${BACKEND_URL}${path.startsWith('/') ? path : `/${path}`}`; // Ensure leading slash
  console.log(`Constructed image URL: ${fullUrl}`);
  return fullUrl;
};

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
          src={getFullImageUrl(image) || defaultProfile}
          alt={name}
          onError={(e) => {
            console.error(`Failed to load image for ${name}: ${e.target.src}`);
            e.target.src = defaultProfile;
          }}
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
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchType, setSearchType] = useState("user");
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    // Fetch players from the API
    const fetchPlayers = async () => {
      try {
        console.log('Fetching players from:', `${BACKEND_URL}/api/users/players`);
        const response = await fetch(`${BACKEND_URL}/api/users/players`);
        if (!response.ok) {
          throw new Error(`Failed to fetch players: ${response.status} ${response.statusText}`);
        }
        const players = await response.json();
        console.log('Received players:', players);
        // Map API data to match PlayerCard props
        const formattedData = players.map((user) => ({
          id: user._id,
          name: user.fullName,
          location: `${user.location}${user.country ? `, ${user.country}` : ""}`,
          description: user.description || "No description provided",
          image: user.profileImage,
          rating: Math.floor(Math.random() * 5) + 1, // Placeholder: Replace with actual rating
        }));
        setData(formattedData);
        setFilteredData(formattedData);
        setError(null);
      } catch (error) {
        console.error("Error fetching players:", error.message);
        setError(error.message);
      } finally {
        setLoading(false); // End loading after fetch
      }
    };

    fetchPlayers();
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
              {loading ? (
                <p className="text-center text-gray-500 col-span-3">
                  Loading players...
                </p>
              ) : error ? (
                <p className="text-center text-red-500 col-span-3">
                  {error}
                </p>
              ) : filteredData.length > 0 ? (
                filteredData.map((player) => (
                  <PlayerCard key={player.id} {...player} />
                ))
              ) : (
                <p className="text-center text-gray-500 col-span-3">
                  No players found
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