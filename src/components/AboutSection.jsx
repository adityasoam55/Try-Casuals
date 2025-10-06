import React from "react";

function AboutSection() {
  return (
    <div className="relative box-border py-28 max-md:py-16 px-10 max-md:px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Decorative Background Accent */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.15),transparent_60%)] pointer-events-none"></div>

      {/* Main Content */}
      <div
        className="relative text-center w-3/4 max-md:w-full mx-auto text-gray-800 italic font-light text-2xl max-md:text-lg leading-relaxed tracking-wide animate-fadeInUp"
        style={{ animation: "fadeInUp 1.5s ease-out" }}
      >
        <p>
          Curators of ethical fashion and New Zealand designed,{" "}
          <span className="font-semibold not-italic text-teal-500">
            TryCasuals
          </span>{" "}
          is a destination concept store and an online haven for style-seekers.
          A fashion selection lovingly handpicked for you — sealed with a
          personal touch. Open six days a week.
        </p>

        {/* Decorative Divider */}
        <div className="mt-8 mx-auto w-24 h-[2px] bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"></div>

        {/* Optional Tagline */}
        <p className="mt-6 text-gray-600 not-italic text-base font-light tracking-wider">
          “Where comfort meets conscious design.”
        </p>
      </div>

      {/* Custom CSS Animation */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default AboutSection;
