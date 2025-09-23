import React, { useState } from "react";


import { Accordain } from "./Accordian";
import Privacy_policy from "./Privacy_policy";


const Help_Support = () => {
  const [selected, setSelected] = useState("FAQ");

  return (
    <>

      <div className="p-3 w-[75%] absolute top-20 right-0 mx-auto bg-[#fafafa] max-lg:top-32 max-lg:w-[100%] ">

        <div className="w-full px-5 rounded-lg shadow-md bg-white py-5 gap-3 flex flex-col">
          <p className="text-xl font-semibold ">Help & Support</p>
          <hr />
          <div className="flex text-lg font-medium gap-10 mt-3">
            <button
              onClick={() => setSelected("FAQ")}
              className={`text-lg  border-b-2 ${
                selected === "FAQ"
                  ? "text-black border-black font-semibold"
                  : "border-transparent text-gray-400 "
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => setSelected("PrivacyPolicy")}
              className={`text-lg  border-b-2 ${
                selected === "PrivacyPolicy"
                  ? "text-black border-black font-semibold"
                  : "border-transparent text-gray-400"
              }`}
            >
              Privacy Policy
            </button>
          </div>
          <hr />
          {selected === "FAQ" && <Accordain />}
          {selected === "PrivacyPolicy" && <Privacy_policy />}
        </div>
      </div>
    </>
  );
};

export default Help_Support;
