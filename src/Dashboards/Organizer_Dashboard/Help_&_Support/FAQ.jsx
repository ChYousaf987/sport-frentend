/* eslint-disable react/prop-types */
import { IoMdAddCircle } from "react-icons/io";
import { BsFillDashCircleFill } from "react-icons/bs";

export const FAQ = ({ curData, isActive, onToggle }) => {
    const { question, answer } = curData;
  
    return (
      <li className="px-3 py-5 flex flex-col gap-2 bg-[white] rounded-sm" style={{boxShadow:'.1px .1px 3px #585858'}}>
        <div className=" flex justify-between gap-4 " >
          <p className="text-lg font-semibold">{question}</p>
          <button onClick={onToggle} className={isActive ? "active-btn" : ""}>
            {isActive ?  <BsFillDashCircleFill className="text-2xl text-[#E45252] mr-[3px] mt-[1px]" /> :<IoMdAddCircle className="text-3xl text-[#E45252]" />}{" "}
          </button>
        </div>
        {isActive && <p> {answer} </p>}
      </li>
    );
  };