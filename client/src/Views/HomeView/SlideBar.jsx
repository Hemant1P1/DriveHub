import React from 'react'
import CarBlue from '../../Assets/HomeImages/CarBlue.png'
import CarGreen from '../../Assets/HomeImages/CarGreen.png'
import CarViolet from '../../Assets/HomeImages/CarViolet.png'
import CarYellow from '../../Assets/HomeImages/CarYellow.png'

export default function SlideBar() {
  return (
    <>
      <div className="carousel w-full bg-gray-50">

        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <div className="hero min-h-[600px] px-6 lg:px-16">
            <div className="hero-content flex-col lg:flex-row-reverse gap-12">

              <img
                src={CarYellow}
                className="max-w-sm lg:max-w-lg rounded-3xl shadow-2xl"
                alt="car"
              />

              <div>
                <span className="text-red-500 font-semibold uppercase tracking-wider">
                  Premium Car Rentals
                </span>

                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mt-3">
                  Find Your Perfect Ride
                </h1>

                <p className="py-6 text-gray-600 text-lg">
                  Explore a wide range of verified vehicles for business trips,
                  family vacations, and everyday travel.
                </p>

                <button className="btn bg-red-600 hover:bg-red-700 border-none text-white rounded-full px-8">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex justify-between">
            <a href="#slide4" className="btn btn-circle bg-gray-900 border-none text-white">❮</a>
            <a href="#slide2" className="btn btn-circle bg-red-600 border-none text-white">❯</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <div className="hero min-h-[600px] px-6 lg:px-16">
            <div className="hero-content flex-col lg:flex-row gap-12">

              <img
                src={CarGreen}
                className="max-w-sm lg:max-w-lg rounded-3xl shadow-2xl"
                alt="car"
              />

              <div>
                <span className="text-red-500 font-semibold uppercase tracking-wider">
                  Best Deals
                </span>

                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mt-3">
                  Affordable Rental Plans
                </h1>

                <p className="py-6 text-gray-600 text-lg">
                  Transparent pricing with no hidden charges. Rent cars at
                  competitive rates and travel stress-free.
                </p>

                <button className="btn bg-red-600 hover:bg-red-700 border-none text-white rounded-full px-8">
                  Explore Cars
                </button>
              </div>
            </div>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex justify-between">
            <a href="#slide1" className="btn btn-circle bg-gray-900 border-none text-white">❮</a>
            <a href="#slide3" className="btn btn-circle bg-red-600 border-none text-white">❯</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <div className="hero min-h-[600px] px-6 lg:px-16">
            <div className="hero-content flex-col lg:flex-row-reverse gap-12">

              <img
                src={CarViolet}
                className="max-w-sm lg:max-w-lg rounded-3xl shadow-2xl"
                alt="car"
              />

              <div>
                <span className="text-red-500 font-semibold uppercase tracking-wider">
                  Trusted Service
                </span>

                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mt-3">
                  Drive With Confidence
                </h1>

                <p className="py-6 text-gray-600 text-lg">
                  Verified vehicles, secure bookings, and dedicated customer support
                  available whenever you need it.
                </p>

                <button className="btn bg-red-600 hover:bg-red-700 border-none text-white rounded-full px-8">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex justify-between">
            <a href="#slide2" className="btn btn-circle bg-gray-900 border-none text-white">❮</a>
            <a href="#slide4" className="btn btn-circle bg-red-600 border-none text-white">❯</a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <div className="hero min-h-[600px] px-6 lg:px-16">
            <div className="hero-content flex-col lg:flex-row gap-12">

              <img
                src={CarBlue}
                className="max-w-sm lg:max-w-lg rounded-3xl shadow-2xl"
                alt="car"
              />

              <div>
                <span className="text-red-500 font-semibold uppercase tracking-wider">
                  Easy Booking
                </span>

                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mt-3">
                  Book Your Car In Minutes
                </h1>

                <p className="py-6 text-gray-600 text-lg">
                  Simple booking process, instant confirmation, and flexible rental
                  options designed for your convenience.
                </p>

                <button className="btn bg-red-600 hover:bg-red-700 border-none text-white rounded-full px-8">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex justify-between">
            <a href="#slide3" className="btn btn-circle bg-gray-900 border-none text-white">❮</a>
            <a href="#slide1" className="btn btn-circle bg-red-600 border-none text-white">❯</a>
          </div>
        </div>

      </div>
    </>
  )
}
