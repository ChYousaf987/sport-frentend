import React, { useState } from "react";

const Event_Completion = () => {
  const [eventCompleted, setEventCompleted] = useState(null); // null, 'yes', or 'no'

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    console.log("Form submitted:", { eventCompleted });
  };

  return (
    <div className="absolute top-20 right-0 bg-[#FAFAFA] w-[75%] float-right max-lg:w-[100%] max-lg:top-32">
      <div className="p-3">
        <form
          onSubmit={handleSubmit}
          className="rounded-lg shadow-md flex flex-col gap-5 bg-white p-6"
        >
          <p className="text-lg font-semibold">Post Event Completion Form</p>
          <hr className="border-gray-200" />

          <div>
            <label className="block font-semibold mb-1 text-md">
              Event Title
            </label>
            <input
              type="text"
              placeholder="Auto filled from event detail"
              className="w-full border rounded-lg px-3 py-2 bg-gray-100"
              readOnly
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block font-semibold mb-1 text-md">
                Auto Date from event detail
              </label>
              <input
                type="text"
                placeholder="Auto filled from event detail"
                className="w-full border rounded-lg px-3 py-2 bg-gray-100"
                readOnly
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-md">
                Event Location
              </label>
              <input
                type="text"
                placeholder="Auto filled from event detail"
                className="w-full border rounded-lg px-3 py-2 bg-gray-100"
                readOnly
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block font-semibold mb-1 text-md">
                Game Type
              </label>
              <input
                type="text"
                placeholder="Auto filled from event detail"
                className="w-full border rounded-lg px-3 py-2 bg-gray-100"
                readOnly
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-md">
                Organizer Name
              </label>
              <input
                type="text"
                placeholder="Auto filled from event detail"
                className="w-full border rounded-lg px-3 py-2 bg-gray-100"
                readOnly
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-md font-semibold text-gray-700">
              Is the event completed?
            </label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="eventCompleted"
                  value="yes"
                  onChange={() => setEventCompleted("yes")}
                  checked={eventCompleted === "yes"}
                />
                <span className="text-md text-gray-600">Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="eventCompleted"
                  value="no"
                  onChange={() => setEventCompleted("no")}
                  checked={eventCompleted === "no"}
                />
                <span className="text-md text-gray-600">No</span>
              </label>
            </div>
          </div>

          {eventCompleted === "no" && (
            <div>
              <label className="block font-semibold mb-1 text-md">
                Reason why event is not completed?
              </label>
              <textarea
                className="w-full border rounded-lg px-3 py-2"
                rows="4"
                placeholder="Please explain why the event wasn't completed"
              ></textarea>
            </div>
          )}

          {eventCompleted === "yes" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block font-semibold mb-1 text-md">
                  Winning Team Name
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="Enter winning team name"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-md">
                  MVP Player
                </label>
                <select className="w-full border rounded-lg px-3 py-2">
                  <option value="">Select MVP Player</option>
                  <option value="playerA">Player A</option>
                  <option value="playerB">Player B</option>
                  <option value="playerC">Player C</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block font-semibold mb-1 text-md">
                  Best Player
                </label>
                <select className="w-full border rounded-lg px-3 py-2">
                  <option value="">Select Best Player</option>
                  <option value="playerA">Player A</option>
                  <option value="playerB">Player B</option>
                  <option value="playerC">Player C</option>
                </select>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="mt-5 bg-red-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-red-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Event_Completion;
