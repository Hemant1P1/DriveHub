import React from "react";

export default function FeatureCard({
  image,
  title,
  info,
  button,
  onClick,
}) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:-translate-y-2 flex flex-col">

      {/* Image */}
      <div className="h-56 bg-gray-100 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">

        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {title}
        </h2>

        <p className="text-gray-600 text-sm leading-6 flex-grow">
          {info}
        </p>

        <button
          onClick={onClick}
          className="mt-5 w-full bg-black hover:bg-red-700 text-white font-semibold py-3 rounded-xl transition-all duration-300"
        >
          {button}
        </button>

      </div>
    </div>
  );
}