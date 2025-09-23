import { RxCross2 } from "react-icons/rx";
import CreateAccountImg from './Images/CreateAccount.png'
import { NavLink } from "react-router-dom";
import JoinComunity from './JoinComunity';
const CreateAccount = ({ onClose }) => {
    
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
       <div className="bg-white flex flex-col justify-center items-center rounded-xl p-6 w-[90%] max-w-md relative shadow-lg text-center">
         {/* Close button */}
         <button
           onClick={onClose}
           className="absolute top-4 right-4 text-red-500 hover:text-red-600 text-2xl"
         >
           <RxCross2 className="text-white bg-[#e45252] p-1 text-4xl rounded-full" />
         </button>
   
         {/* Image */}
         <img src={CreateAccountImg} alt="Join now" className="w-auto h-72 mx-auto mt-4" />
   
         {/* Text */}
         <h2 className="text-2xl font-semibold mt-6">Create Your Account</h2>
         <p className="text-gray-600 mt-2 text-sm">
           Join the Community & Unlock Exclusive Features!
         </p>
   
         {/* Sign up button */}
         <NavLink to='/signup'
           className="bg-[#e45252]  w-[70%] text-white font-medium py-2 px-6 rounded-full mt-6  transition"
         >
           Sign Up
         </NavLink>
         
       </div>
     </div>
  )
}

export default CreateAccount
