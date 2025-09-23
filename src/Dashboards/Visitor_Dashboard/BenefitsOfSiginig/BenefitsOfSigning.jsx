import React from "react";
import {
  benefit1,
  benefit2,
  benefit3,
  benefit4,
  benefit5,
} from "../../../Components/Home/Home";

const BenefitsOfSigning = () => {
  return (
    <div>
      <div className="w-[75%] flex flex-col absolute top-20 right-0 p-4 max-lg:top-32   justify-center rounded-lg  mx-auto mb-10 bg-[#f0f0f0] max-lg:w-[100%]">
       <div className="bg-white p-4 rounded-lg flex flex-col gap-5">
       <h1 className="text-xl font-semibold  ">Benefits of Signing Up</h1>
        <hr />
        <div className="w-[100%] flex flex-wrap  gap-8    max-lg:flex-col ">
          <div
            className="w-[30%] max-lg:w-[100%] bg-white rounded-lg"
            style={{ boxShadow: "1px 1px 5px #585858" }}
          >
            <img
              src={benefit1}
              alt=""
              className="rounded-lg w-full h-[8rem] max-lg:h-[12rem] object-cover  "
            />
            <div className="flex flex-col justify-center p-2">
              <p className="text-lg font-bold text-[#e45352]">
                Event Registration
              </p>
              <p className="text-[.8rem] font-semibold">
                Sign up for exclusive events
              </p>
              <p className="text-[.85rem]">
                Easily browse and register for upcoming events. Get instant
                confirmation and event details. Never miss out on exciting
                opportunities.
              </p>
            </div>
          </div>
          <div
            className="w-[30%] max-lg:w-[100%] bg-white rounded-lg"
            style={{ boxShadow: "1px 1px 5px #585858" }}
          >
            <img
              src={benefit2}
              alt=""
              className="rounded-lg w-full h-[8rem] max-lg:h-[12rem] object-cover  "
            />
            <div className="flex flex-col justify-center p-2">
              <p className="text-lg font-bold text-[#e45352]">Chat & Connect</p>
              <p className="text-[.8rem] font-semibold">
                Interact with other participants
              </p>
              <p className="text-[.85rem]">
                Communicate with players and organizers in real time. Share
                updates, ask questions, and build your network. Stay engaged
                with the community.
              </p>
            </div>
          </div>
          <div
            className="w-[30%] max-lg:w-[100%] bg-white rounded-lg"
            style={{ boxShadow: "1px 1px 5px #585858" }}
          >
            <img
              src={benefit3}
              alt=""
              className="rounded-lg w-full h-[8rem] max-lg:h-[12rem] object-cover  "
            />
            <div className="flex flex-col justify-center p-2">
              <p className="text-lg font-bold text-[#e45352]">
                Customize Profile
              </p>
              <p className="text-[.8rem] font-semibold">
                Showcase your unique style
              </p>
              <p className="text-[.85rem]">
                Personalize your profile with photos, bios, and preferences.
                Stand out to other players and organizers. Make your profile
                truly yours.
              </p>
            </div>
          </div>
          <div
            className="w-[30%] max-lg:w-[100%] bg-white rounded-lg"
            style={{ boxShadow: "1px 1px 5px #585858" }}
          >
            <img
              src={benefit4}
              alt=""
              className="rounded-lg w-full h-[8rem] max-lg:h-[12rem] object-cover  "
            />
            <div className="flex flex-col justify-center p-2">
              <p className="text-lg font-bold text-[#e45352]">
                Real-Time Alerts
              </p>
              <p className="text-[.8rem] font-semibold">Never miss an update</p>
              <p className="text-[.85rem]">
                Get instant notifications for new events, messages, and
                announcements. Stay informed about changes and important
                updates. Be the first to know.
              </p>
            </div>
          </div>
          <div
            className="w-[30%] max-lg:w-[100%] bg-white rounded-lg "
            style={{ boxShadow: "1px 1px 5px #585858" }}
          >
            <img
              src={benefit5}
              alt=""
              className="rounded-lg w-full h-[8rem] max-lg:h-[12rem] object-cover  "
            />
            <div className="flex flex-col justify-center p-2">
              <p className="text-lg font-bold text-[#e45352]">Rate & Review</p>
              <p className="text-[.8rem] font-semibold">
                Help improve the experience
              </p>
              <p className="text-[.85rem]">
                Leave feedback on events and participants. Share your
                experiences to help others. Contribute to a better and more
                trusted community.
              </p>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default BenefitsOfSigning;
