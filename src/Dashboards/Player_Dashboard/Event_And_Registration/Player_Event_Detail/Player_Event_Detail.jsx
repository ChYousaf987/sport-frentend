import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import player from "./Images/player.jpg"
import { FiCopy } from "react-icons/fi";
import map from "./Images/map.png";
import event1 from "./Images/event1.jpg";
import { IoIosStar } from "react-icons/io";


const Player_Event_Detail = () => {
  const textRef = useRef();

  const copyToClipboard = () => {
    const text = textRef.current?.innerText;
    if (text) {
      navigator.clipboard.writeText(text).then(() => {
        alert("Copied:", text);
      });
    }
  };
  return (
    <>
      <div className="flex w-[75%] float-right absolute top-20 right-0 gap-3 bg-[#fafafa] p-3 max-lg:w-[100%] max-lg:top-32  max-lg:flex-col">
        <div className="w-[30%] flex flex-col py-8 gap-5 bg-[#ffffff] rounded-lg max-lg:w-[100%]">
          <p className="text-xl font-semibold px-3">Event Details</p>
          <hr />
          <NavLink
            to="/EventRegistration"
            className="w-[90%] text-xl bg-[#E45352] mx-auto py-1.5 px-3 text-[#ffffff] font-medium rounded-full flex items-center justify-center"
          >
            Register
          </NavLink>
          <div className="flex flex-col gap-1 px-3">
            <p className="text-lg font-semibold">Sports Tournament Night</p>
            <p className="text-lg font-medium">12-04-2024</p>
            <p className="text-lg font-medium">10:00am-11:00am</p>
          </div>
          <div className="px-3 flex flex-col gap-6">
            <p className="text-lg font-semibold">Organizer Details</p>
            <div className="flex gap-3 items-center justify-between">
              <img
                src={player}
                alt=""
                className="w-24 h-24 rounded-lg object-cover"
              />
              <p className="text-lg font-medium">The Entertainer</p>
            </div>
            <div className="flex flex-col gap-0">
              <p className="text-lg font-semibold">About The Host:</p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consecte. Sed nulla nascetur volutpat
                enim eget tincidunt sed enim. Lacus cursus proin ut luctus risus
                nisl. Suspendisse tellus egestas dictum accumsan.
              </p>
            </div>
            <div className="flex flex-col gap-0">
              <p className="text-lg font-semibold">Operational Hours:</p>
              <p className="text-sm text-justify">9:00am-5:00pm</p>
            </div>
            <div className="flex flex-col gap-0">
              <p className="text-lg font-semibold">Website Link:</p>
              <p className="text-sm text-justify">http://www.thetoyshop.pk</p>
            </div>
            <div className="flex flex-col gap-0">
              <p className="text-lg font-semibold">Location</p>
              <p className="text-sm ">
                Lorem ipsum dolor sit amet consectetur. In quisque sollicitudin
                blandit sed velit elit augue eget.
              </p>
            </div>
            <div className="flex flex-col gap-0">
              <p className="text-lg font-semibold">Spread the Word</p>
              <div className="relative">
                <p
                  className="text-[.7rem] p-2 rounded-full "
                  ref={textRef}
                  style={{ border: "1px solid black" }}
                >
                  https://www.figma.com/design/sKGgrv
                </p>
                <div
                  onClick={copyToClipboard}
                  className="bg-[#e55936] p-2 w-9 h-9 flex items-center rounded-full absolute -top-[1px] -right-[1px] cursor-pointer"
                >
                  <FiCopy className=" text-xl text-white  block " />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold">Open in Google Map</p>
              <img
                src={map}
                alt=""
                className="rounded-lg object-cover cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="w-[70%] bg-[#ffffff] flex flex-col gap-3 max-lg:w-[100%]">
          <img
            src={event1}
            alt=""
            className="w-[100%] h-[17rem] object-cover rounded-lg max-lg:h-[13rem]"
          />
          <div className="flex flex-col gap-3 px-3 mt-5">
            <p className="text-lg font-semibold ">Description</p>
            <p className="text-md ">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem.{" "}
            </p>
            <p className="text-md ">
              Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi.{" "}
            </p>
            <p className="text-md ">
              Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
              consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
              in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
              metus varius laoreet. Quisque rutrum. Aenean imperdiet.{" "}
            </p>
            <p className="text-md ">
              Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
              nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
              condimentum rhoncus, sem quam semper libero, sit amet adipiscing
              sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar
            </p>
          </div>
          <div className="flex flex-col gap-2 px-3">
            <p className="text-lg font-semibold">Important Points</p>
            <ul className="flex flex-col px-3">
              <li className="text-md list-disc">
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
              </li>
              <li className="text-md list-disc">
                Vivamus elementum semper nisi.
              </li>
              <li className="text-md list-disc">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim.
              </li>
              <li className="text-md list-disc">
                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
              </li>
              <li className="text-md list-disc">
                Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                augue.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5 px-3">
            <p className="text-lg font-semibold">Reviews</p>
            <div
              className="flex flex-col px-3 py-2 rounded-lg "
              style={{
                border: ".1px solid #dadada",
              }}
             >
              <div className="flex justify-between ">
                <div className="flex gap-2">
                  <img
                    src={player}
                    alt=""
                    className="w-12 h-12 object-cover rounded-3xl"
                  />
                  <div className="">
                    <p className="text-lg font-semibold">Renee Watson</p>
                    <p className="flex items-center gap-1 font-semibold">
                      4.5 <IoIosStar className="text-[#ffdb20]" />
                    </p>
                  </div>
                </div>
                <p className="text-md">April 12, 2024</p>
              </div>
              <p className="text-md">
                Lorem ipsum dolor sit amet consectetur. Aenean ligula accumsan
                ut nec et tempor. Ut amet curabitur elit aliquam. Varius
                faucibus vel imperdiet nascetur urna. Facilisi ullamcorper
                aliquet auctor turpis volutpat adipiscing elementum etiam nulla.
              </p>
            </div>
            <div
              className="flex flex-col px-3 py-2 rounded-lg "
              style={{
                border: ".1px solid #dadada",
              }}
             >
              <div className="flex justify-between ">
                <div className="flex gap-2">
                  <img
                    src={player}
                    alt=""
                    className="w-12 h-12 object-cover rounded-3xl"
                  />
                  <div className="">
                    <p className="text-lg font-semibold">Renee Watson</p>
                    <p className="flex items-center gap-1 font-semibold">
                      4.5 <IoIosStar className="text-[#ffdb20]" />
                    </p>
                  </div>
                </div>
                <p className="text-md">April 12, 2024</p>
              </div>
              <p className="text-md">
                Lorem ipsum dolor sit amet consectetur. Aenean ligula accumsan
                ut nec et tempor. Ut amet curabitur elit aliquam. Varius
                faucibus vel imperdiet nascetur urna. Facilisi ullamcorper
                aliquet auctor turpis volutpat adipiscing elementum etiam nulla.
              </p>
            </div>
            <div
              className="flex flex-col px-3 py-2 rounded-lg "
              style={{
                border: ".1px solid #dadada",
              }}
             >
              <div className="flex justify-between ">
                <div className="flex gap-2">
                  <img
                    src={player}
                    alt=""
                    className="w-12 h-12 object-cover rounded-3xl"
                  />
                  <div className="">
                    <p className="text-lg font-semibold">Renee Watson</p>
                    <p className="flex items-center gap-1 font-semibold">
                      4.5 <IoIosStar className="text-[#ffdb20]" />
                    </p>
                  </div>
                </div>
                <p className="text-md">April 12, 2024</p>
              </div>
              <p className="text-md">
                Lorem ipsum dolor sit amet consectetur. Aenean ligula accumsan
                ut nec et tempor. Ut amet curabitur elit aliquam. Varius
                faucibus vel imperdiet nascetur urna. Facilisi ullamcorper
                aliquet auctor turpis volutpat adipiscing elementum etiam nulla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player_Event_Detail;
