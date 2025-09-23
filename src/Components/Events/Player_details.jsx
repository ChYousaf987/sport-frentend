import React from 'react'
import { NavLink } from 'react-router-dom'
import { RxCross1 } from "react-icons/rx";
import { player1 } from './EventDetail';
import { FaStar } from 'react-icons/fa6';
import { IoIosArrowDown } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { Cycling, Hire, Sport } from '../Home/Home';
import { MdLocationOn } from "react-icons/md";
import { CgCalendarDates } from "react-icons/cg";

const Player_details = () => {
    return (
        <div>
            <div className=" -z-50 " >

                <div className="landing-bg bg-[#333333] w-[100%]  flex flex-col h-[48rem]  max-lg:min-h-[auto] max-lg:h-[42rem]">
                    <div className="flex mt-32 justify-between px-10 max-lg:mt-3 max-lg:px-3">
                        <p className="text-3xl font-bold text-white">Player Details</p>
                        <NavLink to='/Eventdetail' className="">
                            <RxCross1 className='bg-[#E45352] text-[2.2rem] text-white rounded-full p-1' />
                        </NavLink>
                    </div>
                    <div className="w-[100%] flex flex-col justify-center items-center mt-5 ">
                        <img src={player1} alt="" className="w-24 rounded-full" />
                        <p className="text-xl font-semibold text-white mt-5">Atif Aslam</p>
                        <p className="text-[#999999] -ml-14">Player</p>
                        <div className="flex mt-2 ">
                            <FaStar className='text-[#ffdb20]' />
                            <FaStar className='text-[#ffdb20]' />
                            <FaStar className='text-[#ffdb20]' />
                            <FaStar className='text-[#ffdb20]' />
                            <FaStar className='text-[white]' />
                        </div>
                        <div className="flex gap-5 items-center mt-8">
                            <button className="bg-[#E45352] py-1.5 px-4 rounded-full gap-2 text-lg  flex justify-center items-center text-white">Follow <IoIosArrowDown className='text-xl font-semibold' /> </button>
                            <button className="bg-[#E45352] py-1.5 px-4 rounded-full  text-white text-lg ">Give Review</button>
                            <MdMessage className='text-[#E45352] text-[2rem] ml-16 max-lg:ml-4' />
                        </div>
                        <div className="flex justify-between w-[80%] mt-8 max-lg:flex-wrap max-lg:gap-5 max-lg:justify-evenly max-lg:w-[100%] max-lg:px-3 ">
                            <div className="flex flex-col  items-center ">
                                <p className="text-[#E45352]">2000+</p>
                                <p className="text-white font-semibold text-xl">Followers</p>
                            </div>
                            <div className="flex flex-col  items-center ">
                                <p className="text-[#E45352]">100+</p>
                                <p className="text-white font-semibold text-xl">Best Player</p>
                            </div>
                            <div className="flex flex-col  items-center ">
                                <p className="text-[#E45352]">100+</p>
                                <p className="text-white font-semibold text-xl">MVP Player</p>
                            </div>
                            <div className="flex flex-col  items-center ">
                                <p className="text-[#E45352]">4.5</p>
                                <p className="text-white font-semibold text-xl">Reviews</p>
                            </div>
                            <div className="flex flex-col  items-center ">
                                <p className="text-[#E45352]">2000+</p>
                                <p className="text-white font-semibold text-xl">Connections</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-[100%] flex gap-20 px-24 -mt-40 mb-10 max-lg:flex-col max-lg:px-5 max-lg:-mt-28">
                <div className="relative w-[33%] h-[22rem] max-lg:w-[100%] rounded-lg " style={{ border: '3px solid #e45352' }}>
                    <img src={Cycling} alt="" className="rounded-md h-[100%] w-[100%]  object-cover " />
                    <div className="w-[100%] flex justify-between absolute top-3 left-0 right-0 z-20 px-2">
                        <div className="flex items-center gap-2">
                            <MdLocationOn className='text-[#E45352] text-xl' />
                            <p className="text-white font-medium text-md">Location</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <CgCalendarDates className='text-[#E45352] text-xl' />
                            <p className="text-white font-medium text-md">1/22/2020</p>
                        </div>
                    </div>
                    <div className="absolute bg-[#00000077] top-0  rounded-lg bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-3 text-center mx-auto ">
                        <h1 className="text-xl font-semibold text-white ">Event Name</h1>
                        <p className="text-white -mt-3 text-sm -ml-5">Registered</p>
                        <NavLink to='/Eventdetail' className="text-lg bg-[#E45352] py-1 px-4 text-[#ffffff] font-light rounded-full">View More</NavLink>
                    </div>

                </div>
                <div className="relative w-[33%] mt-12 h-[22rem] max-lg:w-[100%] max-lg:mt-0 rounded-lg " style={{ border: '3px solid #e45352' }}>
                    <img src={Sport} alt="" className="rounded-md h-[100%] w-[100%] object-cover " />
                    <div className="w-[100%] flex justify-between absolute top-3 left-0 right-0 z-20 px-2">
                        <div className="flex items-center gap-2">
                            <MdLocationOn className='text-[#E45352] text-xl' />
                            <p className="text-white font-medium text-md">Location</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <CgCalendarDates className='text-[#E45352] text-xl' />
                            <p className="text-white font-medium text-md">1/22/2020</p>
                        </div>
                    </div>
                    <div className="absolute bg-[#00000077] top-0    rounded-lg bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-3 text-center mx-auto ">
                        <h1 className="text-xl font-semibold text-white ">Event Name</h1>
                        <p className="text-white -mt-3 text-sm -ml-5">Completed</p>
                        <NavLink to='/Eventdetail' className="text-lg bg-[#E45352] py-1 px-4 text-[#ffffff] font-light rounded-full">View More</NavLink>
                    </div>

                </div>
                <div className="relative w-[33%] h-[22rem] max-lg:w-[100%] rounded-lg " style={{ border: '3px solid #e45352' }}>
                    <img src={Hire} alt="" className="rounded-md h-[100%] w-[100%]  object-cover " />
                    <div className="w-[100%] flex justify-between absolute top-3 left-0 right-0 z-20 px-2">
                        <div className="flex items-center gap-2">
                            <MdLocationOn className='text-[#E45352] text-xl' />
                            <p className="text-white font-medium text-md">Location</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <CgCalendarDates className='text-[#E45352] text-xl' />
                            <p className="text-white font-medium text-md">1/22/2020</p>
                        </div>
                    </div>
                    <div className="absolute bg-[#00000077] top-0  rounded-lg bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-3 text-center mx-auto ">
                        <h1 className="text-xl font-semibold text-white ">Event Name</h1>
                        <p className="text-white -mt-3 text-sm -ml-5">Registered</p>
                        <NavLink to='/Eventdetail' className="text-lg bg-[#E45352] py-1 px-4 text-[#ffffff] font-light rounded-full">View More</NavLink>
                    </div>

                </div>
            </div>
            <div className="flex flex-col w-[100%] px-4 justify-center items-center gap-7">
                <h1 className="text-3xl underline font-bold text-[#e45352]">View More Events</h1>
                <div className="flex flex-col gap-2">
                    <p className="text-3xl font-bold">Description</p>
                    <p className=" text-lg font-extralight tracking-[.09rem] text-justify mb-10">Lorem ipsum dolor sit amet consectetur. Dictumst risus cras consectetur eget accumsan scelerisque. Lacus consectetur nullam faucibus sed integer tristique in in rhoncus. Eget non fames tempus amet sed morbi in purus. Pellentesque lacus pretium non vulputate massa dictumst nisl eget.Lorem ipsum dolor sit amet consectetur. Dictumst risus cras consectetur eget accumsan scelerisque. Lacus consectetur nullam faucibus sed integer tristique in in rhoncus. Eget non fames tempus amet sed morbi in purus. Pellentesque lacus pretium non vulputate massa dictumst nisl eget.Lorem ipsum dolor sit amet consectetur. Dictumst risus cras consectetur eget accumsan scelerisque. Lacus consectetur nullam faucibus sed integer tristique in in rhoncus. Eget non fames tempus amet sed morbi in purus. Pellentesque lacus pretium non vulputate massa dictumst nisl eget.</p>
                </div>
            </div>
        </div>
    )
}

export default Player_details
