import React from 'react'
import { Cycling, Hire, Sport } from '../Home/Home'
import { NavLink } from 'react-router-dom'

const Event = () => {
    return (
        <>
            <div className="events -z-50 " >

                <div className="landing-bg bg-[#0000006f] w-[100%]  flex flex-col h-[35rem] justify-center items-center max-lg:min-h-[auto] max-lg:h-[26rem]">

                    <div className="flex flex-col justify-center items-center mx-auto   w-[80%] max-lg:w-[100%] max-lg:px-4">
                        <h1 className="text-[3.4rem] text-white font-semibold max-lg:text-3xl mt-5">All Events</h1>
                        <p className="text-white font-normal text-xl flex justify-center items-center text-center">Lorem ipsum dolor sit amet consectetur. Nibh mauris sed quam nunc magna et diam. <br /> Egestas nibh proin metus vitae aliquam mauris at.</p>
                        <div className="flex justify-center   w-[65%] mt-5 max-lg:w-[100%] max-lg:flex-wrap max-lg:mb-16 max-lg:items-center max-lg:justify-center max-lg:text-center max-lg:gap-5 ">
                            <button className="text-xl  py-1.5 px-3 text-[#ffffff] font-medium rounded-full " style={{ border: '2px solid white' }}>More Info</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-[100%] flex flex-col gap-5 justify-center items-center my-10">
                <h1 className="text-3xl font-bold ">Categories</h1>
                <div className="w-[100%] flex flex-wrap justify-center items-center gap-20 px-24 mt-10 mb-10 max-lg:flex-col max-lg:px-5">
                    <div className="relative w-[28%] h-[22rem] max-lg:w-[100%] ">
                        <img src={Cycling} alt="" className="rounded-lg h-[100%] w-[100%] object-cover " />
                        <div className="absolute bg-[#00000077] top-0  rounded-lg bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-3 text-center mx-auto ">
                            <h1 className="text-xl font-semibold text-white ">Action</h1>
                            <NavLink to='/Eventdetail' className="text-lg bg-[#E45352] py-1 px-4 text-[#ffffff] font-light rounded-full">Learn More</NavLink>
                        </div>

                    </div>
                    <div className="relative w-[28%] -mt-12 h-[22rem] max-lg:w-[100%] max-lg:mt-0 ">
                        <img src={Sport} alt="" className="rounded-lg h-[100%] w-[100%] object-cover " />
                        <div className="absolute bg-[#00000077] top-0    rounded-lg bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-3 text-center mx-auto ">
                            <h1 className="text-xl font-semibold text-white ">Adventure</h1>
                            <NavLink to='/Eventdetail' className="text-lg bg-[#E45352] py-1 px-4 text-[#ffffff] font-light rounded-full">Learn More</NavLink>
                        </div>

                    </div>
                    <div className="relative w-[28%] h-[22rem] max-lg:w-[100%] ">
                        <img src={Hire} alt="" className="rounded-lg h-[100%] w-[100%] object-cover " />
                        <div className="absolute bg-[#00000077] top-0  rounded-lg bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-3 text-center mx-auto ">
                            <h1 className="text-xl font-semibold text-white ">Arcade</h1>
                            <NavLink to='/Eventdetail' className="text-lg bg-[#E45352] py-1 px-4 text-[#ffffff] font-light rounded-full">Learn More</NavLink>
                        </div>

                    </div>
                    <div className="relative w-[28%] h-[22rem] max-lg:w-[100%] ">
                        <img src={Cycling} alt="" className="rounded-lg h-[100%] w-[100%] object-cover " />
                        <div className="absolute bg-[#00000077] top-0  rounded-lg bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-3 text-center mx-auto ">
                            <h1 className="text-xl font-semibold text-white ">FPS</h1>
                            <NavLink to='/Eventdetail' className="text-lg bg-[#E45352] py-1 px-4 text-[#ffffff] font-light rounded-full">Learn More</NavLink>
                        </div>

                    </div>
                    <div className="relative w-[28%]  h-[22rem] max-lg:w-[100%] max-lg:mt-0 ">
                        <img src={Sport} alt="" className="rounded-lg h-[100%] w-[100%] object-cover " />
                        <div className="absolute bg-[#00000077] top-0    rounded-lg bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-3 text-center mx-auto ">
                            <h1 className="text-xl font-semibold text-white ">Fighting</h1>
                            <NavLink to='/Eventdetail' className="text-lg bg-[#E45352] py-1 px-4 text-[#ffffff] font-light rounded-full">Learn More</NavLink>
                        </div>

                    </div>
                    <div className="relative w-[28%] h-[22rem] max-lg:w-[100%] ">
                        <img src={Hire} alt="" className="rounded-lg h-[100%] w-[100%] object-cover " />
                        <div className="absolute bg-[#00000077] top-0  rounded-lg bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-3 text-center mx-auto ">
                            <h1 className="text-xl font-semibold text-white ">RPG</h1>
                            <NavLink to='/Eventdetail' className="text-lg bg-[#E45352] py-1 px-4 text-[#ffffff] font-light rounded-full">Learn More</NavLink>
                        </div>

                    </div>
                    <div className="relative w-[28%] h-[22rem] max-lg:w-[100%] ">
                        <img src={Cycling} alt="" className="rounded-lg h-[100%] w-[100%] object-cover " />
                        <div className="absolute bg-[#00000077] top-0  rounded-lg bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-3 text-center mx-auto ">
                            <h1 className="text-xl font-semibold text-white ">Single Player</h1>
                            <NavLink to='/Eventdetail' className="text-lg bg-[#E45352] py-1 px-4 text-[#ffffff] font-light rounded-full">Learn More</NavLink>
                        </div>

                    </div>
                    <div className="relative w-[28%] mt-12 h-[22rem] max-lg:w-[100%] max-lg:mt-0 ">
                        <img src={Sport} alt="" className="rounded-lg h-[100%] w-[100%] object-cover " />
                        <div className="absolute bg-[#00000077] top-0    rounded-lg bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-3 text-center mx-auto ">
                            <h1 className="text-xl font-semibold text-white ">Strategy</h1>
                            <NavLink to='/Eventdetail' className="text-lg bg-[#E45352] py-1 px-4 text-[#ffffff] font-light rounded-full">Learn More</NavLink>
                        </div>

                    </div>
                    <div className="relative w-[28%] h-[22rem] max-lg:w-[100%] ">
                        <img src={Hire} alt="" className="rounded-lg h-[100%] w-[100%] object-cover " />
                        <div className="absolute bg-[#00000077] top-0  rounded-lg bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-3 text-center mx-auto ">
                            <h1 className="text-xl font-semibold text-white ">VR</h1>
                            <NavLink to='/Eventdetail' className="text-lg bg-[#E45352] py-1 px-4 text-[#ffffff] font-light rounded-full">Learn More</NavLink>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Event
