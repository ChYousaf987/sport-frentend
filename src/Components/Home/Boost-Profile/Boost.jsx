import React from 'react'
import { logo } from '../../Navbar/Navbar'
import { NavLink } from 'react-router-dom'

const Boost = () => {
    return (
        <>
            <div className="boost -z-50  " >
                <div className="landing-bg bg-[#0000006f] w-[100%]  flex flex-col  h-[35rem] justify-center items-center max-lg:min-h-[auto] max-lg:h-[22rem]">
                    <div className="flex flex-col justify-center items-center mx-auto   w-[80%] max-lg:w-[100%] max-lg:px-4">
                        <h1 className="text-[3.4rem] text-white font-semibold max-lg:text-3xl mt-5">Boost Your Profile</h1>
                        <p className="w-[90%] text-white font-medium text-3xl flex justify-center items-center text-center max-lg:text-2xl max-lg:mt-5">Your profile will be highlighted and shown to organizers and players within your country</p>
                    </div>
                </div>
            </div>
            <div className="w-[100%] flex mt-8 justify-evenly max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-5 ">
            <div className="bg-black w-[25%] h-[25rem] flex flex-col gap-2 items-center pt-2 max-lg:w-[90%] " style={{border:'2px solid #e45252 '}}>
                <div className="bg-white w-[100%] p-5   " style={{borderTop:'2px solid red',borderBottom:'2px solid red',clipPath: 'polygon(0% 30.54%, 0% 30.54%, 100% 5%, 100% 74.59%, 0% 100%, 0% 25.54%, 0% 100%)'}}>
                    <img src={logo} alt="" className='w-20 mt-2 flex justify-center items-center mx-auto' />
                </div>
                <p className="text-white text-3xl font-medium mt-10">$<span className="text-[4rem]">5</span></p>
                <p className="text-[#b2acac]">Billed weekly</p>
                <NavLink to='/ProfileView' className='w-[70%] bg-[#405de6] p-2 rounded-lg text-white mt-5 cursor-pointer flex justify-center '>Select Plan</NavLink>
            </div>
            <div className="bg-black w-[25%] h-[25rem] flex flex-col gap-2 items-center pt-2 max-lg:w-[90%] " style={{border:'2px solid #e45252 '}}>
                <div className="bg-white w-[100%] p-5   " style={{borderTop:'2px solid red',borderBottom:'2px solid red',clipPath: 'polygon(0% 30.54%, 0% 30.54%, 100% 5%, 100% 74.59%, 0% 100%, 0% 25.54%, 0% 100%)'}}>
                    <img src={logo} alt="" className='w-20 mt-2 flex justify-center items-center mx-auto' />
                </div>
                <p className="text-white text-3xl font-medium mt-10">$<span className="text-[4rem]">10</span></p>
                <p className="text-[#b2acac]">Billed 15 Days</p>
                <NavLink to='/ProfileView' className='w-[70%] bg-[#405de6] p-2 rounded-lg text-white mt-5 cursor-pointer flex justify-center '>Select Plan</NavLink>
            </div>
            <div className="bg-black w-[25%] h-[25rem] flex flex-col gap-2 items-center pt-2 max-lg:w-[90%] " style={{border:'2px solid #e45252 '}}>
                <div className="bg-white w-[100%] p-5   " style={{borderTop:'2px solid red',borderBottom:'2px solid red',clipPath: 'polygon(0% 30.54%, 0% 30.54%, 100% 5%, 100% 74.59%, 0% 100%, 0% 25.54%, 0% 100%)'}}>
                    <img src={logo} alt="" className='w-20 mt-2 flex justify-center items-center mx-auto' />
                </div>
                <p className="text-white text-3xl font-medium mt-10">$<span className="text-[4rem]">20</span></p>
                <p className="text-[#b2acac]">Billed Monthly</p>
                <NavLink to='/ProfileView' className='w-[70%] bg-[#405de6] p-2 rounded-lg text-white mt-5 cursor-pointer flex justify-center '>Select Plan</NavLink>
            </div>
            </div>
            <p className="w-[80%] flex justify-center items-center my-10  mx-auto text-center text-2xl font-medium max-lg:w-[100%] max-lg:px-3 max-lg:text-justify">Lorem ipsum dolor sit amet consectetur. Aliquam sapien scelerisque id ut etiam quis netus accumsan. Lectus nibh nulla vestibulum tristique ac amet sagittis.</p>
        </>
    )
}

export default Boost
