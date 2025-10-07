import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NoticePage() {
  const navigate = useNavigate();

  const sections = [
    {
      title: "New Arrivals",
      image: "/images/newarrivals.jpg",
      link: "/newarrivals/",
    },
    { title: "Hand Bags", image: "/images/handbag.avif", link: "/comingsoon/" },
    { title: "Body Care", image: "/images/sale.avif", link: "/bodycare/" },
  ];

  function handleNavigate(link) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(link);
  }

  return (
    <div className="w-screen grid gap-8 px-10 max-md:px-5 max-md:pb-16 pb-28 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {sections.map((item, index) => (
        <div
          key={index}
          onClick={() => handleNavigate(item.link)}
          className="relative h-96 overflow-hidden group rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
        >
          <img
            className="h-full w-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            src={item.image}
            alt={item.title}
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-500"></div>
          <div className="flex justify-center items-center w-full h-full absolute top-0 z-10 text-white font-black text-3xl font-mono">
            <p className="relative transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:underline underline-offset-8">
              {item.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NoticePage;
