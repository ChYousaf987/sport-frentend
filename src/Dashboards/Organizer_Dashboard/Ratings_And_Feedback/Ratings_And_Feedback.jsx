import React from "react";

import user4 from "./Images/user4.jpg";
const feedbackData = [
  {
    name: "Alison Thomas",
    location: "Bern, Switzerland",
    rating: 4,
    date: "12 Jan 2024",
    review: "Very professional and skilled. Great communication throughout.",
  },
  {
    name: "Michael Rodriguez",
    location: "Barcelona, Spain",
    rating: 5,
    date: "10 Feb 2024",
    review: "Outstanding performance! Always gives 100% on the field.",
  },
  {
    name: "Sophie Müller",
    location: "Berlin, Germany",
    rating: 3,
    date: "05 Mar 2024",
    review: "Good effort overall, but could improve in coordination.",
  },
  {
    name: "James Patel",
    location: "London, UK",
    rating: 4,
    date: "18 Jan 2024",
    review: "Consistent and reliable player. Always punctual and respectful.",
  },
  {
    name: "Layla Khan",
    location: "Dubai, UAE",
    rating: 2,
    date: "22 Feb 2024",
    review: "Has potential but needs to focus more during practice sessions.",
  },
  {
    name: "Carlos Mendes",
    location: "Lisbon, Portugal",
    rating: 5,
    date: "15 Mar 2024",
    review:
      "A team player with strong leadership qualities. Highly recommended!",
  },
  {
    name: "Emma Dupont",
    location: "Paris, France",
    rating: 4,
    date: "27 Jan 2024",
    review:
      "Positive attitude and great energy. Very cooperative with teammates.",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={i < rating ? "text-yellow-400" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
};
const Ratings_And_Feedback = () => {
  return (
    <>
      <div className="absolute top-20 right-0  bg-[#FAFAFA]   w-[75%] float-right max-lg:w-[100%] max-lg:top-32">
        <div className="bg-white p-5 rounded-md shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Feedback From Players</h2>
            <button className="border border-[#e45252] text-[#e45252] px-4 py-1 rounded-full hover:bg-[#e45252] hover:text-white transition">
              Give Review
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full table-auto text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="p-3">Players</th>
                  <th className="p-3">Location</th>
                  <th className="p-3">Rating</th>
                  <th className="p-3">Joining Date</th>
                  <th className="p-3">Reviews</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {feedbackData.map((item, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-100 items-center ${
                      idx !== 0 ? "mt-3" : ""
                    }`}
                  >
                    <td className="p-3 flex items-center gap-2">
                      <img
                        src={user4}
                        alt="user"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-400">
                          alison@email.com
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-8 text-sm text-gray-600">
                      {item.location}
                    </td>
                    <td className="p-3">
                      <StarRating rating={item.rating} />
                    </td>
                    <td className="p-3 text-sm text-gray-600">{item.date}</td>
                    <td className="p-3 text-sm text-gray-600 max-w-xs">
                      {item.review}
                    </td>
                    <td className="p-3">
                      <button className="bg-[#e45252] text-white px-4 py-1 rounded-full">
                        Report
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ratings_And_Feedback;
