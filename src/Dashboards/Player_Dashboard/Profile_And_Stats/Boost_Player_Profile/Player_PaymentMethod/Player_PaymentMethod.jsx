import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { BsCreditCardFill } from "react-icons/bs";

const Player_PaymentMethod = () => {
  const [CardNumber, SetCardNumber] = useState("");
  const [ExpiryDate, SetExpiryDate] = useState("");
  const [CVV, SetCVV] = useState("");
  const [Name, SetName] = useState("");

  const SubmitData = (e) => {
    e.preventDefault();
    const data = {
      CardNumber,
      ExpiryDate,
      CVV,
      Name,
    };
    console.log(data);
    alert("successfully payed");
  };
  return (
    <>
      <div className="absolute top-20 right-0  bg-[#FAFAFA]   w-[75%] float-right max-lg:w-[100%] max-lg:mt-10">
        <div className="pt-10 max-lg:pt-8">
          <form
            onSubmit={SubmitData}
            className="w-[40%] bg-[#000000] pt-5 pb-10 mb-10 rounded-lg flex flex-col gap-5 mx-auto justify-center items-center max-lg:w-[98%] "
            style={{ border: "1px solid #e45352" }}
          >
            <div className="flex justify-between w-[90%]  max-lg:mt-0 ">
              <div></div>
              <div className="text-2xl font-semibold text-white">
                Payment Method
              </div>
              <NavLink to="/Player_Profile_View" className="">
                <RxCross1 className="bg-[#E45352] text-[1.8rem] text-[white] rounded-full p-1" />
              </NavLink>
            </div>
            <div className="flex justify-between w-[100%] px-10">
              <div className="flex items-center gap-3">
                <BsCreditCardFill className="text-white text-xl" />
                <p className="text-[white] text-xl font-medium underline">
                  Credit Card
                </p>
              </div>
              <div className="flex items-center gap-3">
                <BsCreditCardFill className="text-white text-xl " />
                <p className="text-[white] text-xl font-medium underline">
                  Pay Pal
                </p>
              </div>
            </div>
            <div className="w-[90%] px-5 py-8 flex flex-col gap-8 bg-[#191919]">
              <div className="flex flex-col w-[100%] gap-2 ">
                <label htmlFor="" className="text-white text-xl font-medium">
                  Card Number
                </label>
                <input
                  type="number"
                  required
                  name="CardNumber"
                  value={CardNumber}
                  onChange={(e) => SetCardNumber(e.target.value)}
                  className="w-[100%] bg-transparent flex justify-between text-xl outline-none p-2.5 rounded-lg text-white"
                  placeholder="123 234 112 123 1223"
                  style={{ border: "2px solid white" }}
                />
              </div>
              <div className="flex gap-8">
                <div className="flex flex-col w-[65%] gap-2 ">
                  <label htmlFor="" className="text-white text-xl font-medium">
                    Expiration date
                  </label>
                  <input
                    type="date"
                    required
                    name="ExpiryDate"
                    value={ExpiryDate}
                    onChange={(e) => SetExpiryDate(e.target.value)}
                    className="w-[100%] bg-transparent flex justify-between text-xl outline-none p-2.5 rounded-lg text-white"
                    style={{ border: "2px solid white" }}
                  />
                </div>
                <div className="flex flex-col w-[45%] gap-2 ">
                  <label htmlFor="" className="text-white text-xl font-medium">
                    CVV
                  </label>
                  <input
                    type="number"
                    required
                    name="CVV"
                    value={CVV}
                    onChange={(e) => SetCVV(e.target.value)}
                    className="w-[100%] bg-transparent flex justify-between text-xl outline-none p-2.5 rounded-lg text-white"
                    placeholder="144"
                    style={{ border: "2px solid white" }}
                  />
                </div>
              </div>
              <div className="flex flex-col w-[100%] gap-2 ">
                <label htmlFor="" className="text-white text-xl font-medium">
                  Card Holder Name
                </label>
                <input
                  type="text"
                  required
                  name="Name"
                  value={Name}
                  onChange={(e) => SetName(e.target.value)}
                  className="w-[100%] bg-transparent flex justify-between text-xl outline-none p-2.5 rounded-lg text-white"
                  placeholder="lorem ipsum"
                  style={{ border: "2px solid white" }}
                />
              </div>
            </div>
            <button className="w-[80%] text-xl font-semibold bg-[#008000] p-2 rounded-lg text-white  cursor-pointer flex justify-center max-lg:w-[60%] ">
              Confirm & Pay
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Player_PaymentMethod;
