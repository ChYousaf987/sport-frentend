import React, { useState } from 'react'
import '../Style/Home.scss'
import quote_bg from './Images/quote_bg.jpeg'
import { RxCross1 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';

const Quote = () => {
    const [EventName, SetEventName] = useState('')
    const [EventType, SetEventType] = useState('')
    const [EventDateTime, SetEventDateTime] = useState('')
    const [EventDuration, SetEventDuration] = useState('')
    const [Participants, SetParticipants] = useState('')
    const [Location, SetLocation] = useState('')
    const [SpecialRequirements, SetSpecialRequirements] = useState('')
    const [ServiceSelection, SetServiceSelection] = useState('')
    const [OrganizerName, SetOrganizerName] = useState('')
    const [Email, SetEmail] = useState('')
    const [PhoneNumber, SetPhoneNumber] = useState('')
    const [CompanyName, SetCompanyName] = useState('')

    let EventTypes = [
        { select: 'Select Event Type', value: 'Select Event Type', id: 1, },
        { select: 'Type 1', value: 'Type 1', id: 2, },
        { select: 'Type 2', value: 'Type 2', id: 3, },
        { select: 'Type 3', value: 'Type 3', id: 4, },
    ]
    const submit = (e) => {
        e.preventDefault();
        const data = {
            EventName,
            EventType,
            EventDateTime,
            EventDuration,
            Participants,
            Location,
            SpecialRequirements,
            ServiceSelection,
            OrganizerName,
            Email,
            PhoneNumber,
            CompanyName,
        }
        console.log(data);
        alert('Submitted Successfully SuccessFully')
    }
    return (
        <>
            <div className="quote -z-50 " >

                <div className="landing-bg bg-[#0000006f] w-[100%]  flex flex-col h-[35rem] justify-center items-center max-lg:min-h-[auto] max-lg:h-[22rem]">
                    <div className="flex justify-between w-[90%] -mt-16 max-lg:-mt-10 ">
                        <div></div>
                        <NavLink to='/' className="">
                            <RxCross1 className='bg-[#E45352] text-[2.4rem] rounded-full p-1' />
                        </NavLink>
                    </div>
                    <div className="flex flex-col justify-center items-center mx-auto   w-[80%] max-lg:w-[100%] max-lg:px-4">
                        <h1 className="text-[3.4rem] text-white font-semibold max-lg:text-3xl mt-5">Request A Quote</h1>
                        <p className="text-white font-normal text-xl flex justify-center items-center text-center">Lorem ipsum dolor sit amet consectetur. Nibh mauris sed quam nunc magna et diam. <br /> Egestas nibh proin metus vitae aliquam mauris at.</p>

                    </div>

                </div>
            </div>
            <form action="" onSubmit={submit} className='py-28 max-lg:py-0 max-lg:pb-28 max-lg:pt-10'>
                <div className="w-[45%] flex flex-col mx-auto gap-5 max-lg:w-[100%] px-5">
                    <div className="flex flex-col w-[100%] gap-1">
                        <label htmlFor="" className='text-sm font-semibold'>Event Name</label>
                        <input type="text" name='EventName' required value={EventName} onChange={(e) => SetEventName(e.target.value)} className='px-3 py-1.5 rounded-lg outline-none' placeholder='Corporate Football Tournament' style={{ border: '1.5px solid black' }} />
                    </div>
                    <div className="flex flex-col w-[100%] gap-1">
                        <label htmlFor="" className='text-sm font-semibold'>Event Type</label>
                        <select name="" id="" required onChange={(e) => SetEventType(e.target.value)} className='px-3 py-2 rounded-lg outline-none' style={{ border: '1.5px solid black' }}>
                            {EventTypes.map((option) => (
                                <option key={option.id} value={option.value}>{option.select}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col w-[100%] gap-1">
                        <label htmlFor="" className='text-sm font-semibold'>Event Date/Time</label>
                        <input type="datetime-local" name='EventDateTime' required value={EventDateTime} onChange={(e) => SetEventDateTime(e.target.value)} className='px-3 py-1.5 rounded-lg outline-none max-lg:py-2 w-[100%]' placeholder='Corporate Football Tournament' style={{ border: '1.5px solid black' }} />
                    </div>
                    <div className="flex flex-col w-[100%] gap-1">
                        <label htmlFor="" className='text-sm font-semibold'>Event Duration</label>
                        <input type="text" name='EventDuration' required value={EventDuration} onChange={(e) => SetEventDuration(e.target.value)} className='px-3 py-1.5 rounded-lg outline-none' placeholder='2 Days' style={{ border: '1.5px solid black' }} />
                    </div>
                    <div className="flex flex-col w-[100%] gap-1">
                        <label htmlFor="" className='text-sm font-semibold'>Number of Participants</label>
                        <input type="text" name='Participants' required value={Participants} onChange={(e) => SetParticipants(e.target.value)}  className='px-3 py-1.5 rounded-lg outline-none' placeholder='Number of attendees: players, teams, audience' style={{ border: '1.5px solid black' }} />
                    </div>
                    <div className="flex flex-col w-[100%] gap-1">
                        <label htmlFor="" className='text-sm font-semibold'>Venue Location</label>
                        <input type="text" name='Location' required value={Location} onChange={(e) => SetLocation(e.target.value)}  className='px-3 py-1.5 rounded-lg outline-none' placeholder='Select your venue location' style={{ border: '1.5px solid black' }} />
                    </div>
                    <div className="flex flex-col w-[100%] gap-1">
                        <label htmlFor="" className='text-sm font-semibold'>Special Requirements</label>
                        <input type="text" name='SpecialRequirements' required value={SpecialRequirements} onChange={(e) => SetSpecialRequirements(e.target.value)}  className='px-3 py-1.5 rounded-lg outline-none' placeholder='Additional needs like catering, A/V setup, extra seating, etc' style={{ border: '1.5px solid black' }} />
                    </div>
                    <div className="flex flex-col w-[100%] gap-1">
                        <label htmlFor="" className='text-sm font-semibold'>Service Selection</label>
                        <input type="text" name='ServiceSelection' value={ServiceSelection} onChange={(e) => SetServiceSelection(e.target.value)}  required className='px-3 py-1.5 rounded-lg outline-none' placeholder='Range for the organizer to provide their budget' style={{ border: '1.5px solid black' }} />
                    </div>
                    <div className="flex flex-col w-[100%] gap-1">
                        <label htmlFor="" className='text-sm font-semibold'>Organizer’s Name</label>
                        <input type="text" name='OrganizerName' value={OrganizerName} onChange={(e) => SetOrganizerName(e.target.value)}  required className='px-3 py-1.5 rounded-lg outline-none' placeholder='John Smith' style={{ border: '1.5px solid black' }} />
                    </div>
                    <div className="flex flex-col w-[100%] gap-1">
                        <label htmlFor="" className='text-sm font-semibold'>Email Address</label>
                        <input type="email" name='Email' value={Email} onChange={(e) => SetEmail(e.target.value)}  required className='px-3 py-1.5 rounded-lg outline-none' placeholder='johnsmith@gmail.com' style={{ border: '1.5px solid black' }} />
                    </div>
                    <div className="flex flex-col w-[100%] gap-1">
                        <label htmlFor="" className='text-sm font-semibold'>Phone Number</label>
                        <input type="number" name='PhoneNumber' value={PhoneNumber} onChange={(e) => SetPhoneNumber(e.target.value)}  required className='px-3 py-1.5 rounded-lg outline-none' placeholder='+000000000000' style={{ border: '1.5px solid black' }} />
                    </div>
                    <div className="flex flex-col w-[100%] gap-1">
                        <label htmlFor="" className='text-sm font-semibold'>Company Name</label>
                        <input type="text" name='CompanyName' value={CompanyName} onChange={(e) => SetCompanyName(e.target.value)}  required className='px-3 py-1.5 rounded-lg outline-none' placeholder='Enter Your Company Name' style={{ border: '1.5px solid black' }} />
                    </div>
                    <button className='text-xl w-[100%] bg-[#E45352] py-1.5 px-3 text-[#ffffff] font-medium rounded-full'>Submit</button>
                </div>
            </form>
        </>
    )
}

export default Quote
