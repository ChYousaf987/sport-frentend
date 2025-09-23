import React from 'react'
import logo from './Images/logo.png'
import instagram from './Images/insta.png'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="bg-[#E5E5E5] flex py-28 items-center text-center justify-center gap-10 w-[100%] max-lg:flex-col">
                    <h1 className="text-4xl font-bold text-[#E45252]">Newsletter Subscribe</h1>
                    <form className="bg-white rounded-lg flex w-[35%] justify-between max-lg:w-[90%] ">
                        <input type="email" placeholder='Your Email Address' required className='w-[90%] outline-none  px-2 py-4' style={{ borderRadius: '8px 0px 0px 8px' }} />
                        <button className='text-xl font-normal bg-[#E45352] text-white py-1.5 px-3' style={{ borderRadius: '0px 8px 8px 0px' }}>Subscribe</button>
                    </form>
                </div>
                <div className="bg-[#E45252] py-24 flex w-[100%] items-center justify-between px-28 max-lg:flex-col max-lg:px-5 max-lg:py-10 max-lg:gap-10">
                        <a href="/">
                            <img src={logo} alt="" className="w-40 bg-white rounded-lg" />
                        </a>
                    <div className="flex flex-col justify-center items-center gap-10">
                        <ul className="flex gap-10 max-lg:gap-7 max-lg:w-[100%] max-lg:justify-between max-sm:gap-5 ">
                            <NavLink to='/' className="text-lg font-semibold text-white cursor-pointer max-sm:text-sm">Home</NavLink>
                            <NavLink to='/Events' className="text-lg font-semibold text-white cursor-pointer max-sm:text-sm">Events</NavLink>
                            <NavLink to='/About_Us' className="text-lg font-semibold text-white cursor-pointer max-sm:text-sm">About Us</NavLink>
                            <NavLink to='/News' className="text-lg font-semibold text-white cursor-pointer max-sm:text-sm">News</NavLink>
                            <NavLink to='/Contact' className="text-lg font-semibold text-white cursor-pointer max-sm:text-sm">Contact Us</NavLink>
                        </ul>
                        <div className="flex flex-col gap-10">
                            <div className="w-[100%] flex gap-8">
                                <a href="#" >
                                    <img src={instagram} alt="" className="w-8 h-auto bg-white rounded-lg hover:bg-[#2686b3]" />
                                </a>
                                <a href="">
                                    <FaLinkedinIn className='bg-[white] text-[2rem] text-[#0077B5] hover:text-[white] hover:bg-[#2686b3] p-1 rounded-lg' />
                                </a>
                                <a href="">
                                    <FaFacebookF  className='bg-[white] text-[2rem] text-[#007BF7] hover:text-[white] hover:bg-[#2686b3] p-1 rounded-lg' />
                                </a>
                                <a href="">
                                    <FaTwitter className='bg-[white] text-[2rem] text-[#2EC6F4] hover:text-[white] hover:bg-[#2686b3] p-1 rounded-lg' />
                                </a>
                            </div>
                            <h2 className="text-md font-semibold text-white">Email: support@DSP.co</h2>
                        </div>
                    </div>
                    <div className="">
                        <NavLink to='/signup' className="bg-white px-16 py-2 text-xl font-medium rounded-full">Sign Up </NavLink>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer
