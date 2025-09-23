import React from 'react'
import '../Style/Home.scss'
import database from './Images/database.jpeg'
import cyber from './Images/cyber.jpeg'
import protection from './Images/Protection.jpeg'
import {Link} from 'react-router-dom'
const News = () => {
    return (
        <>
            <div className="news -z-50 " >

                <div className="landing-bg bg-[#0000002d] w-[100%]  flex flex-col h-[35rem] justify-center items-center max-lg:min-h-[auto] max-lg:h-[60vh]">

                    <div className="flex flex-col justify-center items-center mx-auto   w-[80%] max-lg:w-[100%] max-lg:px-4">
                        <h1 className="text-[3.4rem] text-white font-semibold max-lg:text-3xl mt-5">News</h1>
                        <p className="text-white font-normal text-xl flex justify-center items-center text-center">Lorem ipsum dolor sit amet consectetur. Nibh mauris sed quam nunc magna et diam. <br /> Egestas nibh proin metus vitae aliquam mauris at.</p>
                        <div className="flex justify-center   w-[65%] mt-5 max-lg:w-[100%] max-lg:flex-wrap max-lg:mb-16 max-lg:items-center max-lg:justify-center max-lg:text-center max-lg:gap-5 ">
                            <button className="text-xl  py-1.5 px-3 text-[#ffffff] font-medium rounded-full " style={{ border: '2px solid white' }}>More Info</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-[100%] flex flex-wrap gap-10 justify-center items-center my-10 px-5 ">
                <div className="w-[25%] flex flex-col p-5 bg-white gap-2 rounded-lg max-lg:w-[100%]" style={{boxShadow:'1px 1px 5px #585858'}}>
                    <img src={database} alt="" className="w-full rounded-lg h-[10rem] object-cover " />
                    <p className="">Oct 01, 2024</p>
                    <h1 className="font-semibold">Moving your database to Perfect Panel: a step-by-step guide</h1>
                    <p className="text-[.87rem]">Thinking of switching to Perfect Panel but unsure about the data migration process? This guide has all the details you need for a smooth data import process.</p>
                    <Link to='/' className="w-[100%] rounded-full bg-[#E45352] py-2 mx-auto flex justify-center items-center text-white">Read More</Link>

                </div>
                <div className="w-[25%] flex flex-col p-5 bg-white gap-2 rounded-lg max-lg:w-[100%]" style={{boxShadow:'1px 1px 5px #585858'}}>
                    <img src={cyber} alt="" className="w-full rounded-lg h-[10rem] object-cover " />
                    <p className="">Oct 01, 2024</p>
                    <h1 className="font-semibold">How to recognize and address fake cyber threats</h1>
                    <p className="text-[.87rem]">Even though Perfect Panel provides high security measures, there's a world beyond where scammers operate. Read about the typical fraudulent tactics to keep.</p>
                    <Link to='/' className="w-[100%] rounded-full bg-[#E45352] py-2 mx-auto flex justify-center items-center text-white">Read More</Link>

                </div>
                <div className="w-[25%] flex flex-col p-5 bg-white gap-2 rounded-lg max-lg:w-[100%]" style={{boxShadow:'1px 1px 5px #585858'}}>
                    <img src={protection} alt="" className="w-full rounded-lg h-[10rem] object-cover " />
                    <p className="">Oct 01, 2024</p>
                    <h1 className="font-semibold">How DDoS protection works on SMM panels</h1>
                    <p className="text-[.87rem]">DDoS attacks are a serious threat to modern businesses. Learn how to spot and handle them effectively to keep your SMM panel protected.</p>
                    <Link to='/' className="w-[100%] rounded-full bg-[#E45352] py-2 mx-auto flex justify-center items-center text-white">Read More</Link>

                </div>
                <div className="w-[25%] flex flex-col p-5 bg-white gap-2 rounded-lg max-lg:w-[100%]" style={{boxShadow:'1px 1px 5px #585858'}}>
                    <img src={database} alt="" className="w-full rounded-lg h-[10rem] object-cover " />
                    <p className="">Oct 01, 2024</p>
                    <h1 className="font-semibold">Moving your database to Perfect Panel: a step-by-step guide</h1>
                    <p className="text-[.87rem]">Thinking of switching to Perfect Panel but unsure about the data migration process? This guide has all the details you need for a smooth data import process.</p>
                    <Link to='/' className="w-[100%] rounded-full bg-[#E45352] py-2 mx-auto flex justify-center items-center text-white">Read More</Link>

                </div>
                <div className="w-[25%] flex flex-col p-5 bg-white gap-2 rounded-lg max-lg:w-[100%]" style={{boxShadow:'1px 1px 5px #585858'}}>
                    <img src={cyber} alt="" className="w-full rounded-lg h-[10rem] object-cover " />
                    <p className="">Oct 01, 2024</p>
                    <h1 className="font-semibold">How to recognize and address fake cyber threats</h1>
                    <p className="text-[.87rem]">Even though Perfect Panel provides high security measures, there's a world beyond where scammers operate. Read about the typical fraudulent tactics to keep.</p>
                    <Link to='/' className="w-[100%] rounded-full bg-[#E45352] py-2 mx-auto flex justify-center items-center text-white">Read More</Link>

                </div>
                <div className="w-[25%] flex flex-col p-5 bg-white gap-2 rounded-lg max-lg:w-[100%]" style={{boxShadow:'1px 1px 5px #585858'}}>
                    <img src={protection} alt="" className="w-full rounded-lg h-[10rem] object-cover " />
                    <p className="">Oct 01, 2024</p>
                    <h1 className="font-semibold">How DDoS protection works on SMM panels</h1>
                    <p className="text-[.87rem]">DDoS attacks are a serious threat to modern businesses. Learn how to spot and handle them effectively to keep your SMM panel protected.</p>
                    <Link to='/' className="w-[100%] rounded-full bg-[#E45352] py-2 mx-auto flex justify-center items-center text-white">Read More</Link>

                </div>
            </div>
        </>
    )
}

export default News
