import React from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import profile4 from "./Images/profile4.jpg";

const Profile_Rating = () => {
  return (
    <>
      <div className="rounded-lg shadow-md bg-white pb-10">
        <div className="p-4 flex flex-col gap-5">
          <div className="">
            <p className="text-xl font-semibold">Ratings</p>
            <div className="flex items-center justify-start">
              <IoIosStar className="text-yellow-400" size={20} />
              <IoIosStar className="text-yellow-400" size={20} />
              <IoIosStar className="text-yellow-400" size={20} />
              <IoIosStarOutline className="text-gray-300" size={20} />
              <IoIosStarOutline className="text-gray-300" size={20} />
            </div>
          </div>
          <p className="text-lg font-semibold">Reviews</p>
          <div className="flex items-center gap-3 max-lg:flex-col">
            <div className="border border-gray-400 rounded-lg p-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <img
                    className="rounded-full w-[40px] h-[40px] object-cover"
                    src={profile4}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold">Renee Watson</p>
                    <div className="flex items-center">
                      4.5
                      <IoIosStar className="text-yellow-400" size={15} />
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 whitespace-nowrap text-sm">
                  April 12,2024
                </p>
              </div>
              <p className="text-gray-700">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate nostrum beatae doloremque ducimus numquam facere, iste
                maxime optio modi. Rerum recusandae sint iure delectus incidunt
                nam facere, culpa qui neque?
              </p>
            </div>
            <button className="px-5 py-2 text-white rounded-full bg-[#e45252]">
              Report
            </button>
          </div>
          <div className="flex items-center gap-3 max-lg:flex-col">
            <div className="border border-gray-400 rounded-lg p-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <img
                    className="rounded-full w-[40px] h-[40px] object-cover"
                    src={profile4}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold">Renee Watson</p>
                    <div className="flex items-center">
                      4.5
                      <IoIosStar className="text-yellow-400" size={15} />
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 whitespace-nowrap text-sm">
                  April 12,2024
                </p>
              </div>
              <p className="text-gray-700">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate nostrum beatae doloremque ducimus numquam facere, iste
                maxime optio modi. Rerum recusandae sint iure delectus incidunt
                nam facere, culpa qui neque?
              </p>
            </div>
            <button className="px-5 py-2 text-white rounded-full bg-[#e45252]">
              Report
            </button>
          </div>
          <div className="flex items-center gap-3 max-lg:flex-col">
            <div className="border border-gray-400 rounded-lg p-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <img
                    className="rounded-full w-[40px] h-[40px] object-cover"
                    src={profile4}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold">Renee Watson</p>
                    <div className="flex items-center">
                      4.5
                      <IoIosStar className="text-yellow-400" size={15} />
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 whitespace-nowrap text-sm">
                  April 12,2024
                </p>
              </div>
              <p className="text-gray-700">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate nostrum beatae doloremque ducimus numquam facere, iste
                maxime optio modi. Rerum recusandae sint iure delectus incidunt
                nam facere, culpa qui neque?
              </p>
            </div>
            <button className="px-5 py-2 text-white rounded-full bg-[#e45252]">
              Report
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile_Rating;
