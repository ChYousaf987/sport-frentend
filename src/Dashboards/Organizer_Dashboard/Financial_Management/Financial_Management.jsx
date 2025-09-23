import React, { useState } from "react";
;
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoShareSocialOutline } from "react-icons/io5";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement
);

const Financial_Management = () => {
  const [income] = useState(8189);

  // Refunds Track (Line Chart)
  const refundData = {
    labels: ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00"],
    datasets: [
      {
        label: "Refunds",
        data: [20, 40, 30, 60, 100, 90],
        fill: true,
        backgroundColor: "rgba(255,99,132,0.3)",
        borderColor: "rgba(255,99,132,1)",
        tension: 0.4,
      },
    ],
  };

  // Financial Summary (Bar Chart)
  const financialData = {
    labels: ["User Registrations", "Bookings", "Counter Sale Rate"],
    datasets: [
      {
        label: "Total Income",
        backgroundColor: "#22C55E", // Green
        data: [90, 80, 100],
      },
      {
        label: "Expenses",
        backgroundColor: "#FACC15", // Yellow
        data: [70, 60, 80],
      },
      {
        label: "Net Profit",
        backgroundColor: "#e45252", // Pink
        data: [60, 50, 20],
      },
    ],
  };

  // Event Participation Overview (Pie Chart)
  const eventParticipation = {
    labels: ["Check-Ins", "No-Shows", "Total Teams", "Total Participants"],
    datasets: [
      {
        label: "Participation",
        backgroundColor: ["#3B82F6", "#22C55E", "#FACC15", "#EF4444"],
        data: [40, 30, 10, 20],
      },
    ],
  };

  // Player Statistics (Line Chart)
  const playerStatistics = {
    labels: ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00"],
    datasets: [
      {
        label: "Top Performers",
        data: [70, 75, 80, 85, 90, 95],
        borderColor: "#FACC15", // Yellow
        fill: false,
        tension: 0.4,
      },
      {
        label: "Most Active Players",
        data: [40, 45, 50, 55, 60, 65],
        borderColor: "#22C55E", // Green
        fill: false,
        tension: 0.4,
      },
      {
        label: "Average Player Age",
        data: [10, 12, 15, 17, 20, 22],
        borderColor: "#3B82F6", // Blue
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const tableData = [
    {
      name: "Soccer Fest",
      date: "June 15",
      participants: 150,
      revenue: 2000,
      expenses: 500,
      profit: 1500,
      rating: 5,
    },
    {
      name: "Basketball Bash",
      date: "July 10",
      participants: 120,
      revenue: 1800,
      expenses: 400,
      profit: 1400,
      rating: 4,
    },
    {
      name: "Baseball Bonanza",
      date: "August 20",
      participants: 100,
      revenue: 1600,
      expenses: 300,
      profit: 1300,
      rating: 5,
    },
    {
      name: "Summer Sports",
      date: "September 5",
      participants: 180,
      revenue: 2200,
      expenses: 600,
      profit: 1600,
      rating: 4,
    },
  ];
  const drawLabelsPlugin = {
    id: "drawLabels",
    afterDatasetDraw(chart) {
      const { ctx, chartArea, data } = chart;
      const meta = chart.getDatasetMeta(0);

      const centerX = (chartArea.left + chartArea.right) / 2;
      const centerY = (chartArea.top + chartArea.bottom) / 2;

      const chartWidth = chartArea.right - chartArea.left;
      const chartHeight = chartArea.bottom - chartArea.top;
      const baseRadius = (Math.min(chartWidth, chartHeight) / 2) * 0.55; // Smaller radius to position text inside

      meta.data.forEach((element, index) => {
        const { x, y } = element.tooltipPosition();
        const label = data.labels[index];

        ctx.save();

        const angle = Math.atan2(y - centerY, x - centerX);
        const textRadius = baseRadius - 20; // Text inside the pie, adjust distance from center

        // Position the text inside the pie, centered
        const textX = centerX + Math.cos(angle) * textRadius;
        const textY = centerY + Math.sin(angle) * textRadius;

        ctx.font = `${chartWidth < 400 ? 9 : 11}px Arial`;
        ctx.fillStyle = "white"; // Text color white
        ctx.textAlign = "center"; // Align text to be centered
        ctx.textBaseline = "middle"; // Center the text vertically

        ctx.fillText(label, textX, textY);

        ctx.restore();
      });
    },
  };

  return (
    <>

      <div className="absolute top-20 right-0 bg-[#FAFAFA] w-[75%] max-lg:w-full max-lg:top-32">

        <div className="p-4">
          <div className="space-y-6 min-h-screen">
            {/* Total Income Card */}
            <div className="p-6 bg-white rounded shadow">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Total Income</h2>
                <div className="flex gap-2 mt-2 sm:mt-0">
                  <button className="bg-pink-200 p-2 rounded-full">
                    <LuDownload className="h-5 w-5 text-red-500" />
                  </button>
                  <button className="bg-pink-200 p-2 rounded-full">
                    <IoShareSocialOutline className="h-5 w-5 text-red-500" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-pink-200 p-4 rounded-full mb-2">
                  <FaRegMoneyBill1 className="h-10 w-10 text-red-500" />
                </div>
                <div className="text-3xl font-bold">${income}</div>
                <div className="text-gray-500">Income ${income}</div>
              </div>

              {/* Small Cards */}
              <div className="flex flex-wrap justify-center gap-6 mt-6">
                {["Registrations", "Ticket Sales", "Merchandise"].map(
                  (title, i) => (
                    <div
                      key={i}
                      className="p-4 w-32 bg-pink-200 text-center rounded shadow"
                    >
                      <div className="flex justify-center mb-2">
                        <FaRegMoneyBill1 className="h-6 w-6 text-red-500" />
                      </div>
                      <div>{title}</div>
                      <div className="font-bold">$30</div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded shadow">
                <div className="flex justify-between items-center">
                  <h2 className="text-md font-semibold mb-2">Refunds Track</h2>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <button className="bg-pink-200 p-2 rounded-full">
                      <LuDownload className="h-5 w-5 text-red-500" />
                    </button>
                    <button className="bg-pink-200 p-2 rounded-full">
                      <IoShareSocialOutline className="h-5 w-5 text-red-500" />
                    </button>
                  </div>
                </div>
                <Line data={refundData} />
              </div>
              <div className="p-4 bg-white rounded shadow">
                <div className="flex justify-between items-center">
                  <h2 className="text-md font-semibold mb-2">
                    Financial Summary
                  </h2>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <button className="bg-pink-200 p-2 rounded-full">
                      <LuDownload className="h-5 w-5 text-red-500" />
                    </button>
                    <button className="bg-pink-200 p-2 rounded-full">
                      <IoShareSocialOutline className="h-5 w-5 text-red-500" />
                    </button>
                  </div>
                </div>

                <Bar data={financialData} />

                {/* Legend to show what each color represents */}
                <div className="mt-4 flex justify-between w-full">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#22C55E]"></div>{" "}
                    {/* Total Income color */}
                    <span>Total Income</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#FACC15]"></div>{" "}
                    {/* Expenses color */}
                    <span>Expenses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#e45252]"></div>{" "}
                    {/* Net Profit color */}
                    <span>Net Profit</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white rounded shadow">
                <div className="flex justify-between items-center">
                  <h2 className="text-md font-semibold mb-2">
                    Event Participation Overview
                  </h2>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <button className="bg-pink-200 p-2 rounded-full">
                      <LuDownload className="h-5 w-5 text-red-500" />
                    </button>
                    <button className="bg-pink-200 p-2 rounded-full">
                      <IoShareSocialOutline className="h-5 w-5 text-red-500" />
                    </button>
                  </div>
                </div>
                <div className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] mx-auto h-[250px] md:h-[350px]">
                  <Pie
                    data={eventParticipation}
                    plugins={[drawLabelsPlugin]}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: { display: false },
                      },
                    }}
                  />
                </div>
              </div>
              <div className="p-4 bg-white rounded shadow">
                <div className="flex justify-between items-center">
                  <h2 className="text-md font-semibold mb-2">
                    Player Statistics
                  </h2>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <button className="bg-pink-200 p-2 rounded-full">
                      <LuDownload className="h-5 w-5 text-red-500" />
                    </button>
                    <button className="bg-pink-200 p-2 rounded-full">
                      <IoShareSocialOutline className="h-5 w-5 text-red-500" />
                    </button>
                  </div>
                </div>

                <Line data={playerStatistics} />

                {/* Legend to show what each color represents */}
                <div className="mt-4 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#FACC15]"></div>{" "}
                    {/* Top Performers color */}
                    <span className="whitespace-nowrap">Top Performers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#22C55E]"></div>{" "}
                    {/* Most Active Players color */}
                    <span className="whitespace-nowrap">
                      Most Active Players
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#3B82F6]"></div>{" "}
                    {/* Average Player Age color */}
                    <span className="whitespace-nowrap">
                      Average Player Age
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="p-4 overflow-x-auto bg-white rounded shadow">
              <div className="flex justify-between items-center">
                <h2 className="text-md font-semibold mb-4">Event Data</h2>
                <div className="flex gap-2 mt-2 sm:mt-0">
                  <button className="bg-pink-200 p-2 rounded-full">
                    <LuDownload className="h-5 w-5 text-red-500" />
                  </button>
                  <button className="bg-pink-200 p-2 rounded-full">
                    <IoShareSocialOutline className="h-5 w-5 text-red-500" />
                  </button>
                  <button className="bg-[#e45252] px-5 py-2 rounded-full text-white">
                    View All
                  </button>
                </div>
              </div>

              <table className="min-w-full text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2">Event</th>
                    <th className="p-2">Date</th>
                    <th className="p-2">Participants</th>
                    <th className="p-2">Revenue</th>
                    <th className="p-2">Expenses</th>
                    <th className="p-2">Net Profit</th>
                    <th className="p-2">Feedback Score</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((event, i) => (
                    <tr key={i} className="border-b">
                      <td className="p-2">{event.name}</td>
                      <td className="p-2">{event.date}</td>
                      <td className="p-2">{event.participants}</td>
                      <td className="p-2">${event.revenue}</td>
                      <td className="p-2">${event.expenses}</td>
                      <td className="p-2">${event.profit}</td>
                      <td className="p-2">{event.rating}⭐</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Financial_Management;
