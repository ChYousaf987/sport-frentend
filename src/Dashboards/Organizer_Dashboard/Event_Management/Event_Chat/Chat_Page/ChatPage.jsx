import React from "react";
import { useParams } from "react-router-dom";
import { IoMdSend } from "react-icons/io";

const ChatPage = () => {
  const { eventId } = useParams();

  return (
    <>
      <div className="absolute top-20 right-0 bg-[#FAFAFA] w-[75%] min-h-screen float-right max-lg:w-[100%] max-lg:top-32">
        <div className="p-5">
          <div className="bg-white rounded-lg shadow-md p-5">
            <p className="text-lg font-bold mb-4">Event Chat #{eventId}</p>

            <div className="flex gap-5">
              {/* Left - Members */}
              <div className="w-1/4 bg-[#f9f9f9] p-3 rounded-lg">
                <p className="font-semibold mb-3">Team Members</p>
                <div className="flex flex-col gap-4">
                  {["John", "Mike", "Sara", "David"].map((name, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <img
                        src={`https://i.pravatar.cc/150?img=${i + 10}`}
                        className="w-8 h-8 rounded-full"
                        alt="member"
                      />
                      <p className="text-sm">{name}</p>
                      <span className="w-2 h-2 bg-green-500 rounded-full ml-auto"></span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Chat */}
              <div className="w-3/4 flex flex-col">
                {/* Chat Header */}
                <div className="flex items-center gap-2 mb-3">
                  <img
                    src="https://i.pravatar.cc/150?img=15"
                    className="w-10 h-10 rounded-full"
                    alt="chat"
                  />
                  <p className="font-semibold">General Chat</p>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 bg-gray-100 p-3 rounded-lg overflow-y-auto h-[400px]">
                  {/* Messages */}
                  <div className="flex flex-col gap-4">
                    <div className="self-start bg-red-300 text-white p-2 rounded-xl max-w-xs">
                      Hello team!
                    </div>
                    <div className="self-end bg-red-400 text-white p-2 rounded-xl max-w-xs">
                      Hello organizer!
                    </div>
                    <div className="self-start bg-red-300 text-white p-2 rounded-xl max-w-xs">
                      Ready for the event?
                    </div>
                  </div>
                </div>

                {/* Input Box */}
                <div className="flex mt-3">
                  <input
                    type="text"
                    className="flex-1 border border-gray-300 rounded-l-lg p-2 focus:outline-none"
                    placeholder="Type a message..."
                  />
                  <button className="bg-red-400 p-3 rounded-r-lg text-white hover:bg-red-500">
                    <IoMdSend className="text-xl" />
                  </button>
                </div>
              </div>
            </div>

            {/* Latest Trends Section */}
            <div className="bg-[#f9f9f9] rounded-lg p-4 mt-6">
              <p className="font-semibold text-lg mb-2">Latest Trends</p>
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                <li>New tournament announced</li>
                <li>Major update coming</li>
                <li>Exclusive rewards</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatPage;
