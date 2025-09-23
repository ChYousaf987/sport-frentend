import React, { useState, useEffect } from 'react'
import '../Style/Home.scss'
import { GoArrowRight } from "react-icons/go";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import Cycling from './Images/Cycling-Event.jpeg'
import Sport from './Images/Sport-Event.jpeg'
import Hire from './Images/Event-Hire.jpeg'
import Featured_bg from './Images/Featured_bg.jpeg'
import player from './Images/player.jpeg'
import Award from './Images/Award.png'
import { FaStar } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import trending1 from './Images/trending1.jpeg'
import trending2 from './Images/trending-2.jpeg'
import trending3 from './Images/trending3.jpeg'
import trending4 from './Images/trending4.jpeg'
import trending5 from './Images/trending5.jpeg'
import trending6 from './Images/trending6.png'
import benefit1 from './Images/benefit1.jpeg'
import benefit2 from './Images/benefit2.png'
import benefit3 from './Images/benefit3.png'
import benefit4 from './Images/benefit4.jpeg'
import benefit5 from './Images/benefit5.jpeg'
import client1 from './Images/client1.jpeg'
import client2 from './Images/client2.jpeg'
import client3 from './Images/client3.jpeg'
import work1 from './Images/work1.jpeg'
import work2 from './Images/work2.jpeg'
import work3 from './Images/work3.jpeg'
import work4 from './Images/work4.jpeg'
import Fantasy_bg from './Images/Fantasy_bg.jpeg'
import { Link, NavLink } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import defaultProfile from '../../Dashboards/Organizer_Dashboard/My_Profile/images/myprofile.jpg'; // Import default profile image

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState("Players");
    const [profileImage, setProfileImage] = useState(null); // State for profile image

    // Retrieve profile image from localStorage
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("userData"));
        if (userData && userData.profileImage) {
            setProfileImage(userData.profileImage);
        }
    }, []);

    const getData = () => {
        switch (selectedCategory) {
            case "Players":
                return Players;
            case "Organizers":
                return Organizers;
            case "Events":
                return Events;
            default:
                return Players;
        }
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    let Players = [
        {
            id: 1,
            Img: player,
            Name: 'Sara Ali'
        },
        {
            id: 2,
            Img: player,
            Name: 'Sara Ali'
        },
        {
            id: 3,
            Img: player,
            Name: 'Sara Ali'
        },
        {
            id: 4,
            Img: player,
            Name: 'Sara Ali'
        }
    ]
    let Events = [
        {
            id: 1,
            Img: trending1,
            Name: 'FootBall'
        },
        {
            id: 2,
            Img: trending1,
            Name: 'FootBall'
        },
        {
            id: 3,
            Img: trending1,
            Name: 'FootBall'
        },
        {
            id: 4,
            Img: trending1,
            Name: 'FootBall'
        }
    ]
    let Organizers = [
        {
            id: 1,
            Img: client1,
            Name: 'Sara Ali'
        },
        {
            id: 2,
            Img: client1,
            Name: 'Sara Ali'
        },
        {
            id: 3,
            Img: client1,
            Name: 'Sara Ali'
        },
        {
            id: 4,
            Img: client1,
            Name: 'Sara Ali'
        }
    ]
    let Trending = [
        {
            id: 1,
            img: trending1,
            name: 'Path Of Exile 2',
            Price: '16.99€'
        },
        {
            id: 2,
            img: trending2,
            name: 'Path Of Exile 2',
            Price: '16.99€'
        },
        {
            id: 3,
            img: trending3,
            name: 'Path Of Exile 2',
            Price: '16.99€'
        },
        {
            id: 4,
            img: trending4,
            name: 'Path Of Exile 2',
            Price: '16.99€'
        },
        {
            id: 5,
            img: trending5,
            name: 'Path Of Exile 2',
            Price: '16.99€'
        },
        {
            id: 6,
            img: trending6,
            name: 'Path Of Exile 2',
            Price: '16.99€'
        }
    ]

    return (
        <>
            <div className="landing -z-50 " >

                <div className="landing-bg bg-[#0000006f] w-[100%]  flex flex-col h-[40rem] justify-center items-center max-lg:mt-0 max-lg:min-h-[auto] max-lg:h-[30rem]">

                    {/* After Login Than show */}
                    <div id='AfterLogin' className="flex w-[100%] justify-between -mt-28 px-8 max-lg:mt-12 max-lg:flex-col  max-lg:px-3 max-lg:gap-5">
                        <div className="flex items-center gap-5">
                            <img
                                src={profileImage || defaultProfile}
                                alt="Profile"
                                className="w-8 h-8 rounded-full object-cover"
                                onError={(e) => {
                                    console.error("Error loading profile image:", e.target.src);
                                    e.target.src = defaultProfile;
                                }}
                            />
                            <p className="text-md font-medium text-[white]">Switch To Player</p>

                            <NavLink to='/Change_Role' className="flex">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" value="" />
                                    <div
                                        className="group peer bg-white rounded-full duration-300 w-16 h-6 ring-2 ring-red-500 after:duration-300 after:bg-red-500 peer-checked:after:bg-green-500 peer-checked:ring-green-500 after:rounded-full after:absolute after:h-5 after:w-5 after:top-0.5 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-hover:after:scale-95"
                                    ></div>
                                </label>
                            </NavLink>

                            <p className="text-md font-medium text-[white]">Switch To Organizer</p>
                        </div>
                        <NavLink to='/boost' className="bg-[#1cc800] flex p-2 text-xl font-medium text-[white] rounded-3xl cursor-pointer max-lg:w-[60%] max-lg:justify-center max-lg:items-center max-lg:mx-auto max-lg:content-center">Boost Your Profile</NavLink>
                    </div>
                    <div className="flex flex-col justify-center items-center mx-auto   w-[80%] max-lg:w-[100%] max-lg:px-4">
                        <h1 className="text-[3.4rem] text-white font-semibold max-lg:text-3xl mt-5">Event Management</h1>
                        <p className="text-white font-normal text-xl flex justify-center items-center text-center">Lorem ipsum dolor sit amet consectetur. Nibh mauris sed quam nunc magna et diam. <br /> Egestas nibh proin metus vitae aliquam mauris at.</p>
                        <div className="flex justify-between   w-[65%] mt-5 max-lg:w-[100%] max-lg:flex-wrap max-lg:mb-16 max-lg:items-center max-lg:justify-center max-lg:text-center max-lg:gap-5 ">
                            <Link to='/Events' className="flex justify-center items-center text-xl bg-[#E45352] py-1.5 px-3 text-[#ffffff] font-medium rounded-full cursor-pointer ">All Events</Link>
                            <Link to='' className="flex justify-center items-center text-xl  py-1.5 px-3 text-[#ffffff] font-medium rounded-full " style={{ border: '2px solid white' }}>More Info</Link>
                            <NavLink to='/quote' className="flex justify-center items-center gap-4 text-xl bg-[#E45352] py-1.5 cursor-pointer px-3  text-[#ffffff] font-medium rounded-full">Get a Quote <span><GoArrowRight /></span></NavLink>
                        </div>
                    </div>

                </div>
            </div>
            <div className="  flex w-[70%]  mx-auto rounded-xl  absolute top-[33rem] left-0 right-0   max-lg:flex-col bg-[#3D3D3D] max-lg:top-[40rem]" style={{ border: '2px solid #E45352' }}>
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
            <div className="w-[70%] mx-auto flex flex-col justify-center items-center mt-16 gap-5 max-lg:w-[100%] max-lg:px-5 max-lg:mt-[27rem]">
                <div className="flex items-center text-[#E45352] underline gap-2">
                    <Link to='/About_Us' className="text-xl font-medium">View all organizers and players</Link>
                    <GoArrowRight className='text-2xl underline' />
                </div>
                <h1 className="text-3xl font-semibold">Welcome on One Click Arena</h1>
                <p className="text-xl font-medium flex justify-center text-center max-lg:text-justify">Elite event management is an industry leader in sports event management delivery, operations and logistics. </p>
                <p className="text-xl font-medium flex justify-center text-center max-lg:text-justify">We set the standards in the industry for mass participation cycle events, adventure races and corporate cycling experiences. We pride ourselves on producing safe and technically excellent events in iconic locations.</p>
            </div>
            <div className="w-[100%] flex gap-20 px-24 mt-24 mb-10 max-lg:flex-col max-lg:px-5">
                <div className="relative w-[33%] h-[22rem] max-lg:w-[100%] ">
                    <img src={Cycling} alt="" className="rounded-lg h-[100%] w-[100%] max-lg:object-cover " />
                    <div className="absolute bg-[#00000077] top-0  rounded-lg bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-3 text-center mx-auto ">
                        <h1 className="text-xl font-semibold text-white ">Cycling Events</h1>
                        <NavLink to='/Eventdetail' className="text-lg bg-[#E45352] py-1 px-4 text-[#ffffff] font-light rounded-full">Learn More</NavLink>
                    </div>

                </div>
                <div className="relative w-[33%] -mt-12 h-[22rem] max-lg:w-[100%] max-lg:mt-0 ">
                    <img src={Sport} alt="" className="rounded-lg h-[100%] w-[100%] object-cover " />
                    <div className="absolute bg-[#00000077] top-0    rounded-lg bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-3 text-center mx-auto ">
                        <h1 className="text-xl font-semibold text-white ">Sport Events</h1>
                        <NavLink to='/Eventdetail' className="text-lg bg-[#E45352] py-1 px-4 text-[#ffffff] font-light rounded-full">Learn More</NavLink>
                    </div>

                </div>
                <div className="relative w-[33%] h-[22rem] max-lg:w-[100%] ">
                    <img src={Hire} alt="" className="rounded-lg h-[100%] w-[100%] object-cover " />
                    <div className="absolute bg-[#00000077] top-0  rounded-lg bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-3 text-center mx-auto ">
                        <h1 className="text-xl font-semibold text-white ">Events Hire</h1>
                        <NavLink to='/Eventdetail' className="text-lg bg-[#E45352] py-1 px-4 text-[#ffffff] font-light rounded-full">Learn More</NavLink>
                    </div>

                </div>
            </div>
            <div className="w-full mt-16 relative flex flex-col">
                <img
                    src={Featured_bg}
                    alt=""
                    className="Featured_bg w-full h-[45rem] max-lg:object-cover max-lg:h-[45rem]"
                />
                <div className="Featured_bg absolute top-0 left-0 right-0 bottom-0 flex flex-col bg-[#000000a9] items-center pt-10 gap-10 ">
                    <h1 className="text-3xl font-bold text-white ">Featured</h1>
                    <div
                        className="w-[70%] flex justify-between pb-2 max-lg:w-full max-lg:px-3"
                        style={{ borderBottom: "1px solid white" }}
                    >
                        {["Players", "Organizers", "Events"].map((cat) => (
                            <p
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`text-2xl font-bold cursor-pointer ${selectedCategory === cat ? "text-[#E45352]" : "text-white"
                                    }`}
                            >
                                {cat}
                            </p>
                        ))}
                    </div>

                    <div className="w-full px-10 mt-10 max-lg:px-10">
                        <Slider {...sliderSettings} className="gap-4">
                            {getData().map((data, index) => (
                                <div
                                    key={index}
                                    className="!flex !justify-center px-2"
                                >
                                    <div
                                        className="bg-[#0f0f0fc1] py-10 rounded-lg flex flex-col gap-3 justify-center items-center w-full"
                                        style={{ border: "2px solid #e45352" }}
                                    >
                                        <img
                                            src={data.Img}
                                            alt=""
                                            className="rounded-full w-28 h-28 object-cover"
                                            style={{ border: "1px solid #e45352" }}
                                        />
                                        <div className="flex gap-1">
                                            <FaStar className="text-[#FFFF00] text-sm" />
                                            <FaStar className="text-[#FFFF00] text-sm" />
                                            <FaStar className="text-[#FFFF00] text-sm" />
                                            <FaStar className="text-[#FFFF00] text-sm" />
                                            <FaStar className="text-white text-sm" />
                                        </div>
                                        <div className="flex gap-1">
                                            <img src={Award} alt="" className="w-4" />
                                            <h2 className="text-xl font-semibold text-white">{data.Name}</h2>
                                        </div>
                                        <p className="text-white text-sm">{data.Sport || "Sport Preference: Foot ball"}</p>
                                        <div className="flex justify-center items-center gap-2 text-white">
                                            <FaLocationDot />
                                            <p className="text-sm">{data.Location || "Abu Dhabi UAE"}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                 
                </div>
            </div>


            <div className="w-[100%] flex flex-col gap-5 justify-center items-center mb-10">
                <h1 className="text-3xl font-bold ">Trending</h1>
                <div className="w-[100%] flex flex-wrap gap-8 justify-center items-center px-5">
                    {Trending.map((data) => (
                        <div key={data.id} className="w-[25%] max-lg:w-[100%]">
                            <img src={data.img} alt="" className="rounded-lg object-cover w-full h-[13rem]" />
                            <div className="flex justify-between">
                                <p className="text-md font-medium">{data.name}</p>
                                <p className="text-md font-bold">{data.Price}</p>
                            </div>
                        </div>
                    )
                    )}

                </div>
            </div>
            <div className="w-[98%] flex flex-col px-5 py-16 gap-5 justify-center rounded-lg bg-[#e45352] items-center mx-auto mb-10">
                <h1 className="text-3xl font-bold text-white ">Benefits</h1>
                <div className="w-[100%] flex  gap-8 justify-center items-center p-5 max-lg:flex-col ">

                    <div className="w-[20%] max-lg:w-[100%] bg-white rounded-lg">
                        <img src={benefit1} alt="" className="rounded-lg w-full h-[8rem] max-lg:h-[12rem] object-cover  " />
                        <div className="flex flex-col justify-center p-2">
                            <p className="text-lg font-bold text-[#e45352]">Event Registration</p>
                            <p className="text-[.8rem] font-semibold">Sign up for exclusive events</p>
                            <p className="text-[.85rem]">Easily browse and register for upcoming events. Get instant confirmation and event details. Never miss out on exciting opportunities.</p>
                        </div>
                    </div>
                    <div className="w-[20%] max-lg:w-[100%] bg-white rounded-lg">
                        <img src={benefit2} alt="" className="rounded-lg w-full h-[8rem] max-lg:h-[12rem] object-cover  " />
                        <div className="flex flex-col justify-center p-2">
                            <p className="text-lg font-bold text-[#e45352]">Chat & Connect</p>
                            <p className="text-[.8rem] font-semibold">Interact with other participants</p>
                            <p className="text-[.85rem]">Communicate with players and organizers in real time. Share updates, ask questions, and build your network. Stay engaged with the community.</p>
                        </div>
                    </div>
                    <div className="w-[20%] max-lg:w-[100%] bg-white rounded-lg">
                        <img src={benefit3} alt="" className="rounded-lg w-full h-[8rem] max-lg:h-[12rem] object-cover  " />
                        <div className="flex flex-col justify-center p-2">
                            <p className="text-lg font-bold text-[#e45352]">Customize Profile</p>
                            <p className="text-[.8rem] font-semibold">Showcase your unique style</p>
                            <p className="text-[.85rem]">Personalize your profile with photos, bios, and preferences. Stand out to other players and organizers. Make your profile truly yours.</p>
                        </div>
                    </div>
                    <div className="w-[20%] max-lg:w-[100%] bg-white rounded-lg">
                        <img src={benefit4} alt="" className="rounded-lg w-full h-[8rem] max-lg:h-[12rem] object-cover  " />
                        <div className="flex flex-col justify-center p-2">
                            <p className="text-lg font-bold text-[#e45352]">Real-Time Alerts</p>
                            <p className="text-[.8rem] font-semibold">Never miss an update</p>
                            <p className="text-[.85rem]">Get instant notifications for new events, messages, and announcements. Stay informed about changes and important updates. Be the first to know.</p>
                        </div>
                    </div>
                    <div className="w-[20%] max-lg:w-[100%] bg-white rounded-lg ">
                        <img src={benefit5} alt="" className="rounded-lg w-full h-[8rem] max-lg:h-[12rem] object-cover  " />
                        <div className="flex flex-col justify-center p-2">
                            <p className="text-lg font-bold text-[#e45352]">Rate & Review</p>
                            <p className="text-[.8rem] font-semibold">Help improve the experience</p>
                            <p className="text-[.85rem]">Leave feedback on events and participants. Share your experiences to help others. Contribute to a better and more trusted community.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[100%] flex flex-col gap-5 justify-center items-center my-16 max-lg:my-8">
                <div className="flex flex-col justify-center  items-center max-lg:px-5">
                    <h1 className="text-3xl font-bold ">Client Reviews</h1>
                    <p className="text-lg font-light mt-3 max-lg:text-center">Lorem ipsum dolor sit amet consectetur. Ultricies sed id nulla ornare. </p>
                    <p className="text-lg font-light max-lg:text-center">Arcu nunc tincidunt cursus convallis diam tortor</p>
                </div>
                <div className="w-[100%] flex justify-center items-center gap-10 max-lg:flex-col max-lg:px-5">
                    <div className="w-[25%] pt-8 pb-5 rounded-lg flex flex-col justify-center items-center gap-3 max-lg:w-[100%] max-lg:px-3" style={{ border: '1px solid black' }}>
                        <img src={client1} alt="" className="w-28 h-28 rounded-full object-cover  " style={{ border: '2px solid #E45352' }} />
                        <p className="text-xl font-semibold text-[#e45352]">Shaun Cobb</p>
                        <div className="flex gap-1">
                            <FaStar className='text-[#ffdb20] text-sm' />
                            <FaStar className='text-[#ffdb20] text-sm' />
                            <FaStar className='text-[#ffdb20] text-sm' />
                            <FaStar className='text-[#ffdb20] text-sm' />
                            <FaStar className='text-[#ffdb20] text-sm' />
                        </div>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur. Ultricies sed id nulla ornare. Arcu nunc tincidunt cursus convallis diam tortor.</p>
                    </div>
                    <div className="w-[25%] mt-24 pt-8 pb-5 rounded-lg flex flex-col justify-center bg-[#e45352] items-center gap-3 max-lg:w-[100%] max-lg:mt-0 max-lg:px-3" style={{ border: '1px solid black' }}>
                        <img src={client2} alt="" className="w-28 h-28 rounded-full object-cover  " style={{ border: '2px solid black' }} />
                        <p className="text-xl font-semibold text-[white]">Shaun Cobb</p>
                        <div className="flex gap-1">
                            <FaStar className='text-[#ffdb20] text-sm' />
                            <FaStar className='text-[#ffdb20] text-sm' />
                            <FaStar className='text-[#ffdb20] text-sm' />
                            <FaStar className='text-[#ffdb20] text-sm' />
                            <FaStar className='text-[#ffdb20] text-sm' />
                        </div>
                        <p className="text-center text-white">Lorem ipsum dolor sit amet consectetur. Ultricies sed id nulla ornare. Arcu nunc tincidunt cursus convallis diam tortor.</p>
                    </div>
                    <div className="w-[25%] pt-8 pb-5 rounded-lg flex flex-col justify-center items-center gap-3 max-lg:w-[100%] max-lg:px-3" style={{ border: '1px solid black' }}>
                        <img src={client3} alt="" className="w-28 h-28 rounded-full object-cover  " style={{ border: '2px solid #E45352' }} />
                        <p className="text-xl font-semibold text-[#e45352]">Shaun Cobb</p>
                        <div className="flex gap-1">
                            <FaStar className='text-[#ffdb20] text-sm' />
                            <FaStar className='text-[#ffdb20] text-sm' />
                            <FaStar className='text-[#ffdb20] text-sm' />
                            <FaStar className='text-[#ffdb20] text-sm' />
                            <FaStar className='text-[#ffdb20] text-sm' />
                        </div>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur. Ultricies sed id nulla ornare. Arcu nunc tincidunt cursus convallis diam tortor.</p>
                    </div>
                </div>
            </div>
            <div className="w-[100%] flex flex-col gap-5 justify-center items-center my-10">
                <h1 className="text-3xl font-bold ">How It Works</h1>
                <div className="w-[100%] flex justify-center items-center gap-12 max-lg:flex-col max-lg:mt-10">
                    <div className=" relative w-[18%] bg-[white] rounded-lg max-lg:w-[70%]" style={{ boxShadow: '1px 1px 5px black' }}>
                        <img src={work1} alt="" className="w-[100%] object-cover " style={{ borderRadius: '8px 8px 0px 0px' }} />
                        <div className=" p-2">
                            <p className="text-md font-semibold">Lorem ipsum dolor sit</p>
                            <p className="text-[.9rem]">Lorem ipsum dolor sit amet consect. Sed mi amet blandit feugiat vitae in faucibus.</p>
                        </div>
                        <div className="absolute -top-3 -left-3 rounded-full w-11 h-11 bg-[#e45352] text-white text-lg flex justify-center items-center">01</div>
                    </div>
                    <div className="relative w-[18%] bg-[white] rounded-lg mt-20 max-lg:mt-0 max-lg:w-[70%]" style={{ boxShadow: '1px 1px 5px black' }}>
                        <img src={work2} alt="" className="w-[100%] object-cover " style={{ borderRadius: '8px 8px 0px 0px' }} />
                        <div className=" p-2">
                            <p className="text-md font-semibold">Lorem ipsum dolor sit</p>
                            <p className="text-[.9rem]">Lorem ipsum dolor sit amet consect. Sed mi amet blandit feugiat vitae in faucibus.</p>
                            <div className="absolute -top-3 -left-3 rounded-full w-11 h-11 bg-[#e45352] text-white text-lg flex justify-center items-center">02</div>
                        </div>
                    </div>
                    <div className="relative w-[18%] bg-[white] rounded-lg max-lg:w-[70%]" style={{ boxShadow: '1px 1px 5px black' }}>
                        <img src={work3} alt="" className="w-[100%] object-cover " style={{ borderRadius: '8px 8px 0px 0px' }} />
                        <div className=" p-2">
                            <p className="text-md font-semibold">Lorem ipsum dolor sit</p>
                            <p className="text-[.9rem]">Lorem ipsum dolor sit amet consect. Sed mi amet blandit feugiat vitae in faucibus.</p>
                            <div className="absolute -top-3 -left-3 rounded-full w-11 h-11 bg-[#e45352] text-white text-lg flex justify-center items-center">03</div>
                        </div>
                    </div>
                    <div className="relative w-[18%] bg-[white] rounded-lg mt-20 max-lg:mt-0 max-lg:w-[70%]" style={{ boxShadow: '1px 1px 5px black' }}>
                        <img src={work4} alt="" className="w-[100%] object-cover " style={{ borderRadius: '8px 8px 0px 0px' }} />
                        <div className=" p-2">
                            <p className="text-md font-semibold">Lorem ipsum dolor sit</p>
                            <p className="text-[.9rem]">Lorem ipsum dolor sit amet consect. Sed mi amet blandit feugiat vitae in faucibus.</p>
                            <div className="absolute -top-3 -left-3 rounded-full w-11 h-11 bg-[#e45352] text-white text-lg flex justify-center items-center">04</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[100%] flex flex-col gap-5 justify-center items-center my-10">
                <h1 className="text-3xl font-bold ">Best Sellers</h1>
                <div className="w-[100%] flex flex-wrap gap-8 justify-center items-center px-5">
                    <div className="w-[25%] max-lg:w-[100%]">
                        <img src={trending1} alt="" className="rounded-lg w-full h-[13rem] object-cover " />
                        <div className="flex justify-between">
                            <p className="text-md font-medium">Path Of Exile 2</p>
                            <p className="text-md font-bold">16.99€</p>
                        </div>
                    </div>
                    <div className="w-[25%] max-lg:w-[100%]">
                        <img src={trending2} alt="" className="rounded-lg w-full h-[13rem] object-cover " />
                        <div className="flex justify-between">
                            <p className="text-md font-medium">Path Of Exile 2</p>
                            <p className="text-md font-bold">16.99€</p>
                        </div>
                    </div>
                    <div className="w-[25%] max-lg:w-[100%]">
                        <img src={trending3} alt="" className="rounded-lg w-full h-[13rem] object-cover " />
                        <div className="flex justify-between">
                            <p className="text-md font-medium">Path Of Exile 2</p>
                            <p className="text-md font-bold">16.99€</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-[100%] mt-10 Featured_bg">
                <img src={Fantasy_bg} alt="" className="w-[100%] max-lg:object-cover " />
                <div className="absolute top-0 left-0 right-0 bottom-0  bg-[#000000a9] ">
                    <div className="flex flex-col justify-center items-center gap-7 max-lg:gap-5 mt-28 max-lg:mt-5">
                        <h1 className="text-4xl text-white font-semibold max-lg:text-2xl ">Final Fantasy VII Reborn</h1>
                        <p className="text-2xl font-semibold text-white">16.99€</p>
                        <button className="text-lg bg-[#E45352] py-1 px-4 text-[#ffffff] font-light rounded-full">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="w-[100%] flex flex-col gap-5 justify-center items-center mt-10 mb-32">
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
            <div className="w-[100%] flex flex-col gap-5 justify-center items-center mt-10 mb-32">
                <h1 className="text-3xl font-bold ">Weekly Deals</h1>
                <div className="w-[100%] flex flex-wrap gap-8 justify-center items-center px-5">
                    <div className="w-[25%] max-lg:w-[100%]">
                        <img src={trending1} alt="" className="rounded-lg w-full h-[13rem] object-cover " />
                        <div className="flex justify-between">
                            <p className="text-md font-medium">Path Of Exile 2</p>
                            <p className="text-md font-bold">16.99€</p>
                        </div>
                    </div>
                    <div className="w-[25%] max-lg:w-[100%]">
                        <img src={trending2} alt="" className="rounded-lg w-full h-[13rem] object-cover " />
                        <div className="flex justify-between">
                            <p className="text-md font-medium">Path Of Exile 2</p>
                            <p className="text-md font-bold">16.99€</p>
                        </div>
                    </div>
                    <div className="w-[25%] max-lg:w-[100%]">
                        <img src={trending3} alt="" className="rounded-lg w-full h-[13rem] object-cover " />
                        <div className="flex justify-between">
                            <p className="text-md font-medium">Path Of Exile 2</p>
                            <p className="text-md font-bold">16.99€</p>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Home
export { Award, player, Cycling, Sport, Hire, FaStar, benefit1, benefit2, benefit3, benefit4, benefit5 }