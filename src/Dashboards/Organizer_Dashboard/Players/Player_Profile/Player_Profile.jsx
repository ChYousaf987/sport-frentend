import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { IoIosArrowDown, IoIosStar } from "react-icons/io";
import { BsChatLeftTextFill } from "react-icons/bs";


const Player_Profile = () => {
  const location = useLocation();
  const player = location.state || {};

  const {
    name = "Unknown Player",
    location: playerLocation = "Unknown",
    description = "No description available.",
    image,
    rating = 0,
  } = player;

  const [isFollowing, setIsFollowing] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleFollowClick = () => {
    if (!isFollowing) setIsFollowing(true);
    setShowDropdown(!showDropdown);
  };

  const handleUnfollow = () => {
    setIsFollowing(false);
    setShowDropdown(false);
  };

  const stars = Array.from({ length: 5 }, (_, i) => (
    <IoIosStar
      key={i}
      size={20}
      className={i < rating ? "text-[#FFDB20]" : "text-gray-300"}
    />
  ));

  // Dummy events data
  const events = [
    {
      name: "Event 1",
      location: "Location 1",
      date: "12/22/2020",
      status: "Registered",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    },
    {
      name: "Event 2",
      location: "Location 2",
      date: "12/23/2020",
      status: "Completed",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    },
    {
      name: "Event 3",
      location: "Location 3",
      date: "12/24/2020",
      status: "Registered",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    },
    {
      name: "Event 4",
      location: "Location 4",
      date: "12/25/2020",
      status: "Completed",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    },
  ];

  return (
    <>
      <div className="absolute top-20 right-0 bg-[#FAFAFA] w-[75%] float-right max-lg:w-[100%] max-lg:top-32">

        <div className="flex flex-col gap-3">
          <div className="rounded-lg shadow-md bg-white pb-20">
            <p className="text-xl font-semibold p-5">Player Profile</p>
            <hr className="my-2" />

            <div className="flex justify-center">
              <div className="flex flex-col gap-3 w-[50%] justify-center items-center max-lg:w-[100%]">
                <img
                  className="rounded-full w-[84px] h-[84px] object-cover"
                  src={image}
                  alt={name}
                />
                <div>
                  <p className="text-2xl font-semibold">{name}</p>
                  <p className="text-md font-medium text-[#4D4D4D]">
                    {playerLocation}
                  </p>
                  <div className="flex items-center">{stars}</div>
                </div>

                <div className="flex gap-10 justify-center items-center">
                  <div className="relative">
                    <button
                      onClick={handleFollowClick}
                      className="bg-[#e45252] text-white text-[14px] px-6 py-2 rounded-full flex items-center gap-2"
                    >
                      {isFollowing ? "Following" : "Follow"}
                      <IoIosArrowDown />
                    </button>

                    {isFollowing && showDropdown && (
                      <div className="absolute mt-1 bg-white border border-gray-200 rounded-md shadow-md z-10">
                        <button
                          onClick={handleUnfollow}
                          className="px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                        >
                          Unfollow
                        </button>
                      </div>
                    )}
                  </div>
                  <button className="py-2 px-5 text-white bg-[#E45252] rounded-full">
                    Give Review
                  </button>
                  <BsChatLeftTextFill size={35} className="text-[#e45252]" />
                </div>

                <div className="flex gap-10 justify-center items-center mt-5">
                  <div className="flex flex-col items-center gap-1">
                    <p className="text-[#e45252] font-semibold">2000+</p>
                    <p className="font-semibold">Followers</p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <p className="text-[#e45252] font-semibold">1000+</p>
                    <p className="font-semibold whitespace-nowrap">
                      Best Player
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <p className="text-[#e45252] font-semibold">1000+</p>
                    <p className="font-semibold whitespace-nowrap">
                      MVP Player
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <p className="text-[#e45252] font-semibold">4.5</p>
                    <p className="font-semibold">Reviews</p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <p className="text-[#e45252] font-semibold">1000+</p>
                    <p className="font-semibold">Connections</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="flex flex-col p-3">
                    <p className="text-medium">Descriptions</p>
                    <p className="text-lg">{description}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ✅ Events Section */}
            <p className="text-xl p-5">Events</p>
            <div className="flex items-center justify-center bg-gray-100 py-5 max-lg:px-3">
              <div className="flex gap-4 flex-wrap justify-center max-lg:gap-10">
                {events.length > 0 ? (
                  events.map((event, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-md border-2 border-red-400 overflow-hidden w-[240px] shadow-md relative max-lg:w-[100%]"
                    >
                      <div className="relative">
                        <img
                          src={event.image}
                          alt={event.name}
                          className="w-full h-40 object-cover"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
                          <div className="flex justify-between text-xs mb-2">
                            <span>📍 {event.location}</span>
                            <span>📅 {event.date}</span>
                          </div>
                          <h2 className="text-lg font-semibold">
                            {event.name}
                          </h2>
                          <p className="text-sm">{event.status}</p>
                          <button className="mt-2 bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-full text-sm">
                            View More
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-lg">No events available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player_Profile;
