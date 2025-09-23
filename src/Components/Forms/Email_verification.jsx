import React, { useState } from 'react'
import { logo } from '../Navbar/Navbar'
import Email_img from './Images/email.jpeg'

const Email_verification = () => {
    const [Verification, SetVerification] = useState('')
    const submitdata = (e) => {
        e.preventDefault();
        const data = {
            Verification,
        }
        console.log(data);
        alert('Verify SuccessFully')
    }
    return (
        <>
            <div className="bg-black absolute top-0 -bottom-30 left-0 right-0  w-[100%] z-[999999] max-lg:-bottom-80 ">
                <div className="w-[90%] flex rounded mx-auto max-lg:flex-col-reverse">
                    <form onSubmit={submitdata} action="" className="w-[50%] bg-[#ffffff] flex flex-col py-28  items-center gap-5 rounded-l-3xl max-lg:py-8 max-lg:w-[100%] max-lg:rounded-l-none max-lg:rounded-bl-3xl max-lg:rounded-b-3xl ">
                        <img src={logo} alt="" className="w-20" />
                        <h1 className="text-4xl font-medium">Email Verification</h1>
                        <h2 className="text-[.9rem]">Please enter the OTP from your email</h2>
                        <div className="flex flex-col w-[50%] gap-1">
                            <input type="text" name='Verification' required value={Verification} onChange={(e) => SetVerification(e.target.value)} className='px-3 py-1.5 ' style={{ border: '1.5px solid #9ca3af' }} />
                        </div>

                        <button className='text-xl w-[50%] bg-[#E45352] py-1.5 px-3 text-[#ffffff] font-medium rounded-full'>Verify</button>
                        <p className="text-[.9rem]">Don't <span className='underline'> Receive</span> ? <span className='underline pl text-[#08A0E9] cursor-pointer'> Resend code</span></p>

                    </form>
                    <div className="w-[50%] max-lg:w-[100%]">
                        <img src={Email_img} alt="" className="w-[100%] h-[115vh] object-cover rounded-r-3xl max-lg:rounded-r-none max-lg:rounded-t-3xl max-lg:h-[20rem] max-lg:object-cover " />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Email_verification
