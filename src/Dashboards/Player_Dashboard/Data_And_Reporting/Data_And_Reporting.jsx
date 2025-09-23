import React from "react";

const Data_And_Reporting = () => {
  return (
    <div className="absolute top-20 right-0 bg-[#FAFAFA] w-[75%] float-right max-lg:w-full max-lg:mt-10 p-6 rounded-md shadow-sm">
      <div className="bg-white p-6 rounded-lg shadow border">
        <h2 className="font-semibold text-sm mb-6">Data & Reporting</h2>

        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2">
            Choose the Data to Export:
          </h3>
          <div className="flex flex-col space-y-2 text-sm text-gray-700">
            <label className="flex items-center space-x-2">
              <input type="radio" name="data" defaultChecked />
              <span>Participation History</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="data" />
              <span>Reviews</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="data" />
              <span>Payments</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="data" />
              <span>Event History</span>
            </label>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2">Choose Format:</h3>
          <div className="flex flex-col space-y-2 text-sm text-gray-700">
            <label className="flex items-center space-x-2">
              <input type="radio" name="format" defaultChecked />
              <span>PNG</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="format" />
              <span>PDF</span>
            </label>
          </div>
        </div>

        <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition">
          Download
        </button>
      </div>
    </div>
  );
};

export default Data_And_Reporting;
