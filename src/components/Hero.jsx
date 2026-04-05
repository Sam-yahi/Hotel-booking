import React from "react";
import bg from "../assets/heroImage.png";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
     
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32 flex flex-col gap-10 justify-center min-h-screen pt-32">

        {/* Badge */}
        <span className="inline-block w-fit bg-blue-500/90 backdrop-blur text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
          The Ultimate Hotel Experience
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl">
          Discover Your Perfect <br /> Getaway Destination
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-white/90 mb-16 max-w-2xl leading-relaxed">
          Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today.
        </p>

        {/* 🔥 SEARCH FORM */}
        <form className="bg-white rounded-2xl shadow-2xl px-8 py-6 flex flex-col md:flex-row items-stretch md:items-end gap-6 max-w-6xl">

          {/* Destination */}
          <div className="flex flex-col flex-1">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              Destination
            </span>
            <input
              type="text"
              placeholder="Dubai"
              className="text-sm text-gray-800 placeholder-gray-400 outline-none"
            />
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-200"></div>

          {/* Check in */}
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              Check in
            </span>
            <input
              type="date"
              className="text-sm text-gray-800 outline-none"
            />
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-200"></div>

          {/* Check out */}
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              Check out
            </span>
            <input
              type="date"
              className="text-sm text-gray-800 outline-none"
            />
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-200"></div>

          {/* Guests */}
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              Guests
            </span>
            <input
              type="number"
              min={1}
              max={6}
              placeholder="2"
              className="w-16 text-sm text-gray-800 outline-none"
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="bg-black text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition md:self-center max-md:w-full"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" />
            </svg>
            Search
          </button>

        </form>
      </div>
    </section>
  );
};

export default Hero;
