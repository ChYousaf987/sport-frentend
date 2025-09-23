import React, { useRef, useState } from "react";
import sport from "./Images/sports.png";
import Gaming from "./Images/Gaming.png";
import Outdoor from "./Images/outdoor.jpeg";
import tech_coding from "./Images/tech&coding.png";
import workshop from "./Images/workshop.png";

const CategorySlider = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse Events
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch Events
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => setIsDragging(false);

  const categories = [
    { img: sport, label: "Sports" },
    { img: Gaming, label: "Gaming" },
    { img: tech_coding, label: "Tech & Coding" },
    { img: workshop, label: "Workshop" },
    { img: Outdoor, label: "Outdoor Events" },
  ];

  return (
    <div
      ref={scrollRef}
      className="flex w-full gap-5 overflow-x-hidden py-3 cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {categories.map((item, idx) => (
        <div
          key={idx}
          className="flex-shrink-0 flex flex-col w-[22%] max-lg:w-[60%] justify-center gap-1 items-center py-3 px-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <img
            src={item.img}
            alt={item.label}
            className="w-16 h-16 object-contain"
          />
          <p className="text-md font-medium text-center text-xl">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CategorySlider;
