import React, { useState } from "react";

export default function Notification_And_Alert() {
  const [toggles, setToggles] = useState({
    event1: true,
    event2: true,
    event3: true,
    message1: true,
    message2: true,
    message3: true,
    reg1: true,
    reg2: true,
    reg3: true,
  });

  const handleToggle = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const ToggleSwitch = ({ toggleKey }) => (
    <button
      onClick={() => handleToggle(toggleKey)}
      className={`w-11 h-6 rounded-full p-1 duration-300 focus:outline-none overflow-hidden md:w-9 md:h-5 sm:w-8 sm:h-4 ${
        toggles[toggleKey] ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 md:w-3 md:h-3 sm:w-2 sm:h-2 ${
          toggles[toggleKey]
            ? "translate-x-5 md:translate-x-4 sm:translate-x-3"
            : "translate-x-0"
        }`}
      ></div>
    </button>
  );

  return (
    <div className="absolute top-20 right-0 bg-[#FAFAFA] w-[75%] float-right max-lg:w-full max-lg:mt-10">
      <div className="max-w-3xl mx-auto p-4 sm:p-6 font-sans text-gray-800">
        <h1 className="text-xl font-semibold mb-4">Notification & Alerts</h1>

        {/* Event Updates */}
        <div className="border rounded-lg mb-6">
          <div className="border-b px-4 py-3 font-medium bg-gray-50">
            Event Updates
          </div>
          <div className="p-4 space-y-4">
            <div className="flex justify-between items-center gap-2">
              <span className="text-sm md:text-base flex-1">
                Notify me about new events, cancellations, and schedule changes.
              </span>
              <ToggleSwitch toggleKey="event1" />
            </div>
            <div className="flex justify-between items-center gap-2">
              <span className="text-sm md:text-base flex-1">
                Receive email updates about event changes and new schedules.
              </span>
              <ToggleSwitch toggleKey="event2" />
            </div>
            <div className="flex justify-between items-center gap-2">
              <span className="text-sm md:text-base flex-1">
                Show event update alerts within the app.
              </span>
              <ToggleSwitch toggleKey="event3" />
            </div>
          </div>
        </div>

        {/* Messages Received */}
        <div className="border rounded-lg mb-6">
          <div className="border-b px-4 py-3 font-medium bg-gray-50">
            Messages Received
          </div>
          <div className="p-4 space-y-4">
            <div className="flex justify-between items-center gap-2">
              <span className="text-sm md:text-base flex-1">
                Notify me when I receive new messages.
              </span>
              <ToggleSwitch toggleKey="message1" />
            </div>
            <div className="flex justify-between items-center gap-2">
              <span className="text-sm md:text-base flex-1">
                Send me an email when I get a new message.
              </span>
              <ToggleSwitch toggleKey="message2" />
            </div>
            <div className="flex justify-between items-center gap-2">
              <span className="text-sm md:text-base flex-1">
                Show in-app notifications for new messages.
              </span>
              <ToggleSwitch toggleKey="message3" />
            </div>
          </div>
        </div>

        {/* Registration & Payment Reminders */}
        <div className="border rounded-lg">
          <div className="border-b px-4 py-3 font-medium bg-gray-50">
            Registration & Payment Reminders
          </div>
          <div className="p-4 space-y-4">
            <div className="flex justify-between items-center gap-2">
              <span className="text-sm md:text-base flex-1">
                Notify me about registration status and payment reminders.
              </span>
              <ToggleSwitch toggleKey="reg1" />
            </div>
            <div className="flex justify-between items-center gap-2">
              <span className="text-sm md:text-base flex-1">
                Send email reminders for registration deadlines and payment
                status.
              </span>
              <ToggleSwitch toggleKey="reg2" />
            </div>
            <div className="flex justify-between items-center gap-2">
              <span className="text-sm md:text-base flex-1">
                Show registration and payment alerts within the app.
              </span>
              <ToggleSwitch toggleKey="reg3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}