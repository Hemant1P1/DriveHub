// FeatureCard.jsx

import React from 'react'

export default function FeatureCard({
  image,
  title,
  info,
  button,
  onClick
}) {
  return (
    <>
      <div className="card bg-base-100 shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300">

        {/* Card Image */}
        <figure>
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover"
          />
        </figure>

        {/* Card Body */}
        <div className="card-body">

          <h2 className="card-title text-lg font-bold">
            {title}
          </h2>

          <p className="text-sm text-gray-600 leading-6">
            {info}
          </p>

          {/* Button */}
          <div className="card-actions justify-end mt-4">

            <button
              onClick={onClick}
              className="btn btn-primary w-full"
            >
              {button}
            </button>

          </div>

        </div>

      </div>
    </>
  )
}