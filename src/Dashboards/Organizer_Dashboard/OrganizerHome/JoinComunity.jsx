import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import JoinImage from "./Images/JoinComunity.png";
import CreateAccount from "./CreateAccount";
const JoinComunity = ({ onClose }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-md relative shadow-lg text-center">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-500 hover:text-red-600 text-2xl"
        >
          <RxCross2 className="text-white bg-[#e45252] p-1 text-4xl rounded-full" />
        </button>

        {/* Image */}
        <img src={JoinImage} alt="Join now" className="w-40 mx-auto mt-4" />

        {/* Text */}
        <h2 className="text-2xl font-semibold mt-6">Join The Community</h2>
        <p className="text-gray-600 mt-2 text-sm">
          Join the Community & Unlock Exclusive Features!
        </p>

        {/* Sign up button */}
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#e45252] w-[70%] text-white font-medium py-2 px-6 rounded-full mt-6  transition"
        >
          Sign Up
        </button>
        {showModal && <CreateAccount onClose={() => setShowModal(false)} />}
      </div>
    </div>
  );
};

export default JoinComunity;
