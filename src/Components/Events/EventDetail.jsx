import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoCloudDownloadOutline } from "react-icons/io5";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import player1 from './Images/player1.jpeg'
import player2 from './Images/player2.jpeg'
import player3 from './Images/player3.jpeg'
import { FaStar } from 'react-icons/fa6';

const EventDetail = () => {

    let Organizers = [
        {
            Name: 'Saram Ali',
            img: player1,
            About: 'Lorem ipsum dolor sit amet consectetur. Viverra morbi elit lacus mauris pretium.Lorem ipsum dolor sit',
            
        },
        {
            Name: 'Saram Ali',
            img: player2,
            About: 'Lorem ipsum dolor sit amet consectetur. Viverra morbi elit lacus mauris pretium.Lorem ipsum dolor sit',
            
        },
        {
            Name: 'Saram Ali',
            img: player3,
            About: 'Lorem ipsum dolor sit amet consectetur. Viverra morbi elit lacus mauris pretium.Lorem ipsum dolor sit',
            
        },
        {
            Name: 'Saram Ali',
            img: player1,
            About: 'Lorem ipsum dolor sit amet consectetur. Viverra morbi elit lacus mauris pretium.Lorem ipsum dolor sit',
            
        },
        {
            Name: 'Saram Ali',
            img: player2,
            About: 'Lorem ipsum dolor sit amet consectetur. Viverra morbi elit lacus mauris pretium.Lorem ipsum dolor sit',
            
        },
        {
            Name: 'Saram Ali',
            img: player3,
            About: 'Lorem ipsum dolor sit amet consectetur. Viverra morbi elit lacus mauris pretium.Lorem ipsum dolor sit',
            
        },
        {
            Name: 'Saram Ali',
            img: player1,
            About: 'Lorem ipsum dolor sit amet consectetur. Viverra morbi elit lacus mauris pretium.Lorem ipsum dolor sit',
            
        },
        {
            Name: 'Saram Ali',
            img: player2,
            About: 'Lorem ipsum dolor sit amet consectetur. Viverra morbi elit lacus mauris pretium.Lorem ipsum dolor sit',
            
        }
    ]

    
    
    return (
        <>
            <div className="eventdetail -z-50 " >

                <div className="landing-bg bg-[#0000006f] w-[100%]  flex flex-col h-[35rem] justify-center items-center max-lg:min-h-[auto] max-lg:h-[25rem]">

                    {/* After Login Than show */}
                    <div className="flex justify-between w-[95%] -mt-[5.5rem] max-lg:mt-0 ">
                        <div></div>
                        <NavLink to='/Events' className="">
                            <RxCross1 className='bg-[#E45352] text-[2.4rem] rounded-full p-1' />
                        </NavLink>
                    </div>
                    <div className="flex flex-col justify-center items-center mx-auto   w-[80%] max-lg:w-[100%] max-lg:px-4">

                        <h1 className="text-[3.4rem] text-white font-semibold max-lg:text-3xl mt-5">Cricket Event</h1>
                        <p className="text-white font-normal text-xl flex justify-center items-center text-center">Lorem ipsum dolor sit amet consectetur. Nibh mauris sed quam nunc magna et diam. <br /> Egestas nibh proin metus vitae aliquam mauris at.</p>
                        <div className="flex justify-between   w-[40%] mt-5 max-lg:w-[100%] max-lg:flex-wrap max-lg:mb-16 max-lg:items-center max-lg:justify-center max-lg:text-center max-lg:gap-5 ">
                            <NavLink to='/Events' className="text-xl bg-[#E45352] py-1.5 px-3 text-[#ffffff] font-medium rounded-full cursor-pointer ">All Events</NavLink>
                            <button className="text-xl  py-1.5 px-3 text-[#ffffff] font-medium rounded-full " style={{ border: '2px solid white' }}>More Info</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="  flex w-[70%]  mx-auto rounded-xl  absolute top-[28rem] left-0 right-0   max-lg:flex-col bg-[#3D3D3D] max-lg:top-[36rem]" style={{ border: '2px solid #E45352' }}>
                <div className="flex flex-col gap-2 justify-center  items-center py-6 w-[34%]  max-lg:w-[100%]" >
                    <IoCloudDownloadOutline className='text-[#E45352] rounded-full p-2 bg-white text-[2.6rem] ' />

                    <h1 className="text-white">Super Fast</h1>
                    <p className="text-white">Instant Digital Download</p>
                </div>
                <div className="bg-[#E45352] w-[.15rem] max-lg:w-[100%] max-lg:h-[.1rem]"></div>
                <div className="flex flex-col gap-2 justify-center  items-center py-6 w-[34%]  max-lg:w-[100%]" >
                    <AiOutlineSafetyCertificate className='text-[#E45352] rounded-full p-2 bg-white text-[2.6rem] ' />

                    <h1 className="text-white">Reliable & Safe</h1>
                    <p className="text-white">Over 10,000 games</p>
                </div>
                <div className="bg-[#E45352] w-[.15rem] max-lg:w-[100%] max-lg:h-[.1rem]"></div>
                <div className="flex flex-col gap-2 justify-center  items-center py-6 w-[34%]  max-lg:w-[100%]" >
                    <AiOutlineMessage className='text-[#E45352] rounded-full p-2 bg-white text-[2.6rem] ' />

                    <h1 className="text-white">Customer Support</h1>
                    <p className="text-white">Human support 24/7</p>
                </div>
            </div>
            <div className="bg-[#e5e5e5] w-[100%] mt-20 mb-10 flex flex-col justify-center items-center p-4 max-lg:mt-[30rem]">
                <h1 className="text-3xl font-semibold">Players</h1>
                <div className="w-[100%] p-20 flex flex-wrap justify-between items-center mt-24 max-lg:p-2 max-lg:mt-10 max-lg:gap-16   ">
                   
                    <div className="w-[30%] bg-[#ffffff] flex flex-col rounded-md max-lg:w-[100%] ">
                        <img src={player1} alt="" className="rounded-b-full w-[100%] h-[16rem] object-cover" style={{ borderBottom: '4px solid #E45352' }} />
                        <div className="flex justify-between items-center px-3">
                            <p className="text-2xl font-bold ">Saram Ali</p>
                            <div className="flex">
                                <FaStar className='text-[#ffdb20]' />
                                <FaStar className='text-[#ffdb20]' />
                                <FaStar className='text-[#ffdb20]' />
                                <FaStar className='text-[#ffdb20]' />
                            </div>
                        </div>
                        <p className="text-[.8rem] px-3 text-[#808080]">Player</p>
                        <p className="text-[.75rem] px-3 mt-4">Lorem ipsum dolor sit amet consectetur. Viverra morbi elit lacus mauris pretium.Lorem ipsum dolor sit</p>
                        <div className="flex px-3 justify-between mt-5 mb-3 ">
                            <button className="rounded-full text-[white] bg-[#e45352] p-2 w-[40%]">Follow</button>
                            <NavLink to='/Playerdetail' className="rounded-full text-[white] text-center bg-[#e45352] p-2 w-[40%]">View Details</NavLink>
                        </div>
                    </div>
                    <div className="w-[30%] bg-[#ffffff] flex flex-col -mt-40 rounded-md max-lg:w-[100%] max-lg:mt-0 ">
                        <img src={player2} alt="" className="rounded-b-full w-[100%] h-[16rem] object-cover" style={{ borderBottom: '4px solid #E45352', }} />
                        <div className="flex justify-between items-center px-3">
                            <p className="text-2xl font-bold ">Saram Ali</p>
                            <div className="flex">
                                <FaStar className='text-[#ffdb20]' />
                                <FaStar className='text-[#ffdb20]' />
                                <FaStar className='text-[#ffdb20]' />
                                <FaStar className='text-[#ffdb20]' />
                            </div>
                        </div>
                        <p className="text-[.8rem] px-3 text-[#808080]">Player</p>
                        <p className="text-[.75rem] px-3 mt-4">Lorem ipsum dolor sit amet consectetur. Viverra morbi elit lacus mauris pretium.Lorem ipsum dolor sit</p>
                        <div className="flex px-3 justify-between mt-5 mb-3 ">
                            <button className="rounded-full text-[white] bg-[#e45352] p-2 w-[40%]">Follow</button>
                            <NavLink to='/Playerdetail' className="rounded-full text-[white] text-center bg-[#e45352] p-2 w-[40%]">View Details</NavLink>
                        </div>
                    </div>
                    <div className="w-[30%] bg-[#ffffff] flex flex-col rounded-md max-lg:w-[100%] ">
                        <img src={player3} alt="" className="rounded-b-full w-[100%] h-[16rem] object-cover" style={{ borderBottom: '4px solid #E45352' }} />
                        <div className="flex justify-between items-center px-3">
                            <p className="text-2xl font-bold ">Saram Ali</p>
                            <div className="flex">
                                <FaStar className='text-[#ffdb20]' />
                                <FaStar className='text-[#ffdb20]' />
                                <FaStar className='text-[#ffdb20]' />
                                <FaStar className='text-[#ffdb20]' />
                            </div>
                        </div>
                        <p className="text-[.8rem] px-3 text-[#808080]">Player</p>
                        <p className="text-[.75rem] px-3 mt-4">Lorem ipsum dolor sit amet consectetur. Viverra morbi elit lacus mauris pretium.Lorem ipsum dolor sit</p>
                        <div className="flex px-3 justify-between mt-5 mb-3 ">
                            <button className="rounded-full text-[white] bg-[#e45352] p-2 w-[40%]">Follow</button>
                            <NavLink to='/Playerdetail' className="rounded-full text-[white] text-center bg-[#e45352] p-2 w-[40%]">View Details</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            {/* Organizers */}
            <div className=" w-[100%] mt-10 mb-10 flex flex-col justify-center items-center p-4 max-lg:mt-[0rem]">
                <h1 className="text-3xl font-semibold">Organizer</h1>
                <div className="w-[100%] p-20 flex flex-wrap items-center gap-16 justify-center  max-lg:p-2 max-lg:mt-10 max-lg:gap-16   ">
                    {
                        Organizers.map((data, idx) => (
                            <div key={idx} className="w-[20%] bg-[#ffffff] flex flex-col rounded-md max-lg:w-[75%] " style={{ boxShadow: '1px 1px 5px #808080' }}>
                                <img src={data.img} alt="" className="rounded-b-full w-[100%] h-[9rem] max-lg:h-[13rem] object-cover" style={{ borderBottom: '4px solid #E45352' }} />
                                <div className="flex justify-between items-center px-3">
                                    <p className="text-xl font-bold ">{data.Name}</p>
                                    <div className="flex">
                                        <FaStar className='text-[#ffdb20]' />
                                        <FaStar className='text-[#ffdb20]' />
                                        <FaStar className='text-[#ffdb20]' />
                                        <FaStar className='text-[#ffdb20]' />
                                    </div>
                                </div>
                                <p className="text-[.8rem] px-3 text-[#808080]">Organizer</p>
                                <p className="text-[.5rem] px-3 mt-4">{data.About}</p>
                                <div className="flex px-3 justify-between mt-5 mb-3 gap-2 ">
                                    <button className="rounded-full text-[white] bg-[#e45352] p-1 text-sm  w-[50%]">Follow</button>
                                    <NavLink to='/Organizerdetail' className="rounded-full text-[white] text-center bg-[#e45352] p-1 text-sm  w-[50%]">View Details</NavLink>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default EventDetail
export {player1}