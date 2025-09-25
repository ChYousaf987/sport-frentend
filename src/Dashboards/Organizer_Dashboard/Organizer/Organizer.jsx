import React, { useState, useEffect } from "react";
import { IoIosStar } from "react-icons/io";
import { BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";
import Organizer_Navbar from "../Organizer_Navbar/Organizer_Navbar";
import defaultProfile from "../My_Profile/images/myprofile.jpg"; // Import default image

const BACKEND_URL = "http://localhost:3001"; // Define backend base URL

// Helper function to get full image URL
const getFullImageUrl = (path) => {
  if (!path || typeof path !== 'string') {
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

const OrganizerCard = ({ id, name, role, description, image, rating, location }) => {
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
          <p className="text-md font-medium text-[#4D4D4D]">{role}</p>
          <div className="flex items-center">{stars}</div>
        </div>
      </div>
      <p className="text-sm">{description || "No description provided"}</p>
      <div className="flex items-center justify-center gap-3">
        <button
          className="py-1.5 px-5 text-white bg-[#E45252] rounded-full"
          onClick={() => setIsFollowing(!isFollowing)}
          aria-label={isFollowing ? `Unfollow ${name}` : `Follow ${name}`}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </button>
        <Link
          to="/Organizer_Profile"
          state={{ name, role, description, image, rating, location }}
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

 SearchResults = ({ results }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-3">
    {results.length > 0 ? (
      results.map((item) => <OrganizerCard key={item.id} {...item} />)
    ) : (
      <p className="text-center text-gray-500 col-span-3">No organizers found</p>
    )}
  </div>
);

const Organizer = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchType, setSearchType] = useState("organizer");

  useEffect(() => {
    // Fetch organizers from the API
    const fetchOrganizers = async () => {
      try {
        console.log('Fetching organizers from:', `${BACKEND_URL}/api/users/organizers`);
        const response = await fetch(`${BACKEND_URL}/api/users/organizers`);
        if (!response.ok) {
          throw new Error(`Failed to fetch organizers: ${response.status} ${response.statusText}`);
        }
        const organizers = await response.json();
        console.log('Received organizers:', organizers);
        // Map API data to match the component's expected format
        const formattedData = organizers.map((user) => ({
          id: user._id,
          name: user.fullName,
          role: user.role,
          description: user.description,
          image: user.profileImage,
          rating: Math.floor(Math.random() * 5) + 1, // Placeholder: Replace with actual rating
          location: `${user.location}${user.country ? `, ${user.country}` : ""}`,
          eventType: "Tournament", // Placeholder
          accountStatus: "Active", // Placeholder
        }));
        setData(formattedData);
        setFilteredData(formattedData);
      } catch (error) {
        console.error("Error fetching organizers:", error.message);
      }
    };

    fetchOrganizers();
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
      return matchesLocation && matchesEventType && matchesRating && matchesStatus;
    });
    setFilteredData(filtered);
  };

  return (
    <>
      <Organizer_Navbar onSearch={handleSearch} onFilter={handleFilter} />
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

export default Organizer;