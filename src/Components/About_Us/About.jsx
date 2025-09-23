import React from 'react'
import '../Style/Home.scss'
import award from './Images/Award.png'
import service from './Images/service.png'
import trust from './Images/trust.png'
import resonable from './Images/reasonable.png'
import gaming_1 from './Images/gaming1.jpeg'
import gaming_2 from './Images/gaming2.png'
import member1 from './Images/member1.jpeg'
import { IoCloudDownloadOutline } from "react-icons/io5";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { Link } from 'react-router-dom'
const About = () => {

    let Team =[
        {
            id:1,
            Img:member1,
            Name:'Seb Goldin',
            Post:'CHIEF EXECUTIVE OFFICER',
            About:'Lorem ipsum dolor sit amet consectetur. Tristique aliquet ut netus fringilla odio at elementum et. Malesuada pellentesque arcu egestas pharetra in enim cursus habitasse semper.',
            LinkedIn:'@jdkjfk'
        },
        {
            id:1,
            Img:member1,
            Name:'Seb Goldin',
            Post:'CHIEF EXECUTIVE OFFICER',
            About:'Lorem ipsum dolor sit amet consectetur. Tristique aliquet ut netus fringilla odio at elementum et. Malesuada pellentesque arcu egestas pharetra in enim cursus habitasse semper.',
            LinkedIn:'@jdkjfk'
        },
        {
            id:1,
            Img:member1,
            Name:'Seb Goldin',
            Post:'CHIEF EXECUTIVE OFFICER',
            About:'Lorem ipsum dolor sit amet consectetur. Tristique aliquet ut netus fringilla odio at elementum et. Malesuada pellentesque arcu egestas pharetra in enim cursus habitasse semper.',
            LinkedIn:'@jdkjfk'
        },
        {
            id:1,
            Img:member1,
            Name:'Seb Goldin',
            Post:'CHIEF EXECUTIVE OFFICER',
            About:'Lorem ipsum dolor sit amet consectetur. Tristique aliquet ut netus fringilla odio at elementum et. Malesuada pellentesque arcu egestas pharetra in enim cursus habitasse semper.',
            LinkedIn:'@jdkjfk'
        },
        {
            id:1,
            Img:member1,
            Name:'Seb Goldin',
            Post:'CHIEF EXECUTIVE OFFICER',
            About:'Lorem ipsum dolor sit amet consectetur. Tristique aliquet ut netus fringilla odio at elementum et. Malesuada pellentesque arcu egestas pharetra in enim cursus habitasse semper.',
            LinkedIn:'@jdkjfk'
        },
        {
            id:1,
            Img:member1,
            Name:'Seb Goldin',
            Post:'CHIEF EXECUTIVE OFFICER',
            About:'Lorem ipsum dolor sit amet consectetur. Tristique aliquet ut netus fringilla odio at elementum et. Malesuada pellentesque arcu egestas pharetra in enim cursus habitasse semper.',
            LinkedIn:'@jdkjfk'
        },
    ]
    return (
        <>
            <div className="about -z-50 " >

                <div className="landing-bg bg-[#0000006f] w-[100%]  flex flex-col h-[35rem] justify-center items-center max-lg:min-h-[auto] max-lg:h-[26rem]">

                    <div className="flex flex-col justify-center items-center mx-auto   w-[80%] max-lg:w-[100%] max-lg:px-4">
                        <h1 className="text-[3.4rem] text-white font-semibold max-lg:text-3xl mt-5">About Us</h1>
                        <p className="text-white font-normal text-xl flex justify-center items-center text-center">Lorem ipsum dolor sit amet consectetur. Nibh mauris sed quam nunc magna et diam. <br /> Egestas nibh proin metus vitae aliquam mauris at.</p>
                        <div className="flex justify-center   w-[65%] mt-5 max-lg:w-[100%] max-lg:flex-wrap max-lg:mb-16 max-lg:items-center max-lg:justify-center max-lg:text-center max-lg:gap-5 ">
                            <button className="text-xl  py-1.5 px-3 text-[#ffffff] font-medium rounded-full " style={{ border: '2px solid white' }}>More Info</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-[85%] flex justify-center items-center gap-10 my-16 mx-auto max-lg:w-[100%] max-lg:my-10 max-lg:flex-col">
                <div className="w-[18%] flex flex-col p-5 justify-center items-center gap-3 rounded-lg max-lg:w-[60%] " style={{ border: '1px solid #585858' }}>
                    <img src={award} alt="" className="w-20" />
                    <p className="flex justify-center items-center text-center font-medium text-lg">Awards for Best Services</p>
                </div>
                <div className="w-[18%] flex flex-col p-5 justify-center items-center gap-3 rounded-lg max-lg:w-[60%] " style={{ border: '1px solid #585858' }}>
                    <img src={service} alt="" className="w-20" />
                    <p className="flex justify-center items-center text-center font-medium text-lg">Services That Put Safety First</p>
                </div>
                <div className="w-[18%] flex flex-col p-5 justify-center items-center gap-3 rounded-lg max-lg:w-[60%] " style={{ border: '1px solid #585858' }}>
                    <img src={trust} alt="" className="w-20" />
                    <p className="flex justify-center items-center text-center font-medium text-lg">Highly Trusted Partners</p>
                </div>
                <div className="w-[18%] flex flex-col p-5 justify-center items-center gap-3 rounded-lg max-lg:w-[60%] " style={{ border: '1px solid #585858' }}>
                    <img src={resonable} alt="" className="w-20" />
                    <p className="flex justify-center items-center text-center font-medium text-lg">Reasonable on the Pocket!</p>
                </div>

            </div>
            <div className="w-[100%] flex flex-col justify-center items-center gap-16 mb-10 max-lg:px-5 max-lg:py-20">
                <h1 className="text-3xl font-semibold flex justify-center items-center text-center ">About Gaming Field Structure</h1>
                <div className="w-[100%] flex justify-center gap-10 max-lg:flex-col  ">
                    <img src={gaming_1} alt="" className="w-[40%] rounded-lg h-[60vh] object-cover max-lg:w-[100%] max-lg:h-auto " />
                    <div className="flex flex-col w-[40%] gap-20  max-lg:w-[100%] max-lg:gap-8">
                        <p className="text-justify">Lorem ipsum dolor sit amet consectetur. Ultricies sed id nulla ornare. Arcu nunc tincidunt cursus convallis diam tortor. Vitae adipiscing donec suspendisse ultricies molestie commodo sed ut. Sem volutpat in volutpat faucibus habitant lacus. Tellus massa augue massa justo. Mauris commodo urna pharetra non eget gravida ut pharetra cras. Lacinia odio at ac eget. Dolor mollis ipsum nisl faucibus ultricies vel cursus dolor.</p>
                        <Link to='/' className='flex w-[30%] float-left text-xl bg-[#E45352] py-1.5 px-3 text-[#ffffff] justify-center font-medium rounded-full max-lg:w-auto '>Read More</Link>
                    </div>
                </div>
                <div className="w-[100%] flex flex-row-reverse mt-10 justify-center gap-10 max-lg:flex-col max-lg:mt-4 ">
                    <img src={gaming_2} alt="" className="w-[40%] rounded-lg h-[60vh] object-cover max-lg:w-[100%] max-lg:h-auto " />
                    <div className="flex flex-col w-[40%] gap-20 max-lg:w-[100%] max-lg:gap-8 ">
                        <p className="text-justify">Lorem ipsum dolor sit amet consectetur. Ultricies sed id nulla ornare. Arcu nunc tincidunt cursus convallis diam tortor. Vitae adipiscing donec suspendisse ultricies molestie commodo sed ut. Sem volutpat in volutpat faucibus habitant lacus. Tellus massa augue massa justo. Mauris commodo urna pharetra non eget gravida ut pharetra cras. Lacinia odio at ac eget. Dolor mollis ipsum nisl faucibus ultricies vel cursus dolor.</p>
                        <Link to='/' className='flex w-[30%] float-left text-xl bg-[#E45352] py-1.5 px-3 text-[#ffffff] justify-center font-medium rounded-full max-lg:w-auto '>Read More</Link>
                    </div>
                </div>
            </div>
         <div className="flex flex-col my-12 py-10 max-lg:my-0 max-lg:py-0">
         <h1 className="text-3xl font-semibold flex justify-center items-center text-center ">Group Management Team</h1>
         <div className="w-[90%] mx-auto flex flex-wrap gap-12 py-12 justify-center items-center ">
         {Team.map((data) => (
                <div key={data.id} className="relative w-[25%] flex flex-col px-5 mt-12 justify-center items-center gap-3 bg-[#ffffff] h-[48vh] rounded-lg max-lg:w-[100%] max-lg:h-[40vh]  " style={{boxShadow:'1px 1px 5px black'}}>
                    <img src={data.Img} alt="" className="w-24 h-24 rounded-lg absolute -top-12 object-cover " />
                    <h1 className="font-bold mt-8 text-xl">{data.Name}</h1>
                    <h1 className="font-semibold ">{data.Post}</h1>
                    <p className="text-center text-[.85rem]">{data.About}</p>
                    <a href={data.LinkedIn} className="absolute -bottom-5 w-[90%] rounded-lg bg-[#E45352] py-2 mx-auto flex justify-center items-center text-white">View LinkedIn</a>
                </div>
         )
        )}
            </div>
         </div>
         <div className="flex flex-col max-lg:mt-10 ">
         <h1 className="text-3xl font-semibold flex justify-center items-center text-center ">Our Values</h1>
         <div className="w-[90%] mx-auto flex flex-wrap gap-12 py-10 justify-center items-center ">
                <div  className="relative w-[30%] flex flex-col px-5 justify-center items-center gap-3 bg-[#ffffff] h-[48vh] rounded-lg max-lg:w-[100%] max-lg:h-[35vh]  " style={{boxShadow:'1px 1px 5px black'}}>
                    <div className="bg-[#ffe5e5] p-3 rounded-full">
                        <IoCloudDownloadOutline className='text-3xl text-[#e45352] '/>
                    </div>
                    <h1 className="font-bold  text-lg">Commitment to the Highest Quality</h1>
                    <p className="text-center ">We are fully committed to providing you with the highest quality of services, guaranteed.</p>
                </div>
                <div  className="relative w-[30%] flex flex-col px-5 justify-center items-center gap-3 bg-[#ffffff] h-[48vh] rounded-lg max-lg:w-[100%] max-lg:h-[35vh]   " style={{boxShadow:'1px 1px 5px black'}}>
                    <div className="bg-[#ffe5e5] p-3 rounded-full">
                        <AiOutlineSafetyCertificate className='text-3xl text-[#e45352] '/>
                    </div>
                    <h1 className="font-bold  text-lg">Commitment to the Highest Quality</h1>
                    <p className="text-center ">We are fully committed to providing you with the highest quality of services, guaranteed.</p>
                </div>
                <div  className="relative w-[30%] flex flex-col px-5 justify-center items-center gap-3 bg-[#ffffff] h-[48vh] rounded-lg max-lg:w-[100%] max-lg:h-[35vh]   " style={{boxShadow:'1px 1px 5px black'}}>
                    <div className="bg-[#ffe5e5] p-3 rounded-full">
                        <AiOutlineMessage  className='text-3xl text-[#e45352] '/>
                    </div>
                    <h1 className="font-bold  text-lg">Commitment to the Highest Quality</h1>
                    <p className="text-center ">We are fully committed to providing you with the highest quality of services, guaranteed.</p>
                </div>
                <div  className="relative w-[30%] flex flex-col px-5 justify-center items-center gap-3 bg-[#ffffff] h-[48vh] rounded-lg max-lg:w-[100%] max-lg:h-[35vh]   " style={{boxShadow:'1px 1px 5px black'}}>
                    <div className="bg-[#ffe5e5] p-3 rounded-full">
                        <IoCloudDownloadOutline className='text-3xl text-[#e45352] '/>
                    </div>
                    <h1 className="font-bold  text-lg">Commitment to the Highest Quality</h1>
                    <p className="text-center ">We are fully committed to providing you with the highest quality of services, guaranteed.</p>
                </div>
                <div  className="relative w-[30%] flex flex-col px-5 justify-center items-center gap-3 bg-[#ffffff] h-[48vh] rounded-lg max-lg:w-[100%] max-lg:h-[35vh]   " style={{boxShadow:'1px 1px 5px black'}}>
                    <div className="bg-[#ffe5e5] p-3 rounded-full">
                        <AiOutlineSafetyCertificate className='text-3xl text-[#e45352] '/>
                    </div>
                    <h1 className="font-bold  text-lg">Commitment to the Highest Quality</h1>
                    <p className="text-center ">We are fully committed to providing you with the highest quality of services, guaranteed.</p>
                </div>
                <div  className="relative w-[30%] flex flex-col px-5 justify-center items-center gap-3 bg-[#ffffff] h-[48vh] rounded-lg max-lg:w-[100%] max-lg:h-[35vh]   " style={{boxShadow:'1px 1px 5px black'}}>
                    <div className="bg-[#ffe5e5] p-3 rounded-full">
                        <AiOutlineMessage  className='text-3xl text-[#e45352] '/>
                    </div>
                    <h1 className="font-bold  text-lg">Commitment to the Highest Quality</h1>
                    <p className="text-center ">We are fully committed to providing you with the highest quality of services, guaranteed.</p>
                </div>
        
            </div>
         </div>
        </>
    )
}

export default About
