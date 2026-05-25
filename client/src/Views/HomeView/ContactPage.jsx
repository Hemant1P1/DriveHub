import React from "react";
import contact from "../../assets/contact.jpg";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6">
      
      {/* Main Container */}
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-6xl grid grid-cols-1 md:grid-cols-2">
        
        {/* Image Section */}
        <div className="bg-blue-100 flex items-center justify-center p-5">
          <img
            src={contact}
            alt="Contact"
            className="
              w-full
              h-[250px]
              sm:h-[350px]
              md:h-full
              object-cover
              rounded-2xl
            "
          />
        </div>

        {/* Form Section */}
        <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
          
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
            Contact Us
          </h2>

          <form className="space-y-5">
            
            {/* Name */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="
                  w-full
                  border border-gray-300
                  rounded-lg
                  px-4 py-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-400
                "
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full
                  border border-gray-300
                  rounded-lg
                  px-4 py-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-400
                "
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Contact Number
              </label>

              <input
                type="tel"
                placeholder="Enter your number"
                className="
                  w-full
                  border border-gray-300
                  rounded-lg
                  px-4 py-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-400
                "
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Message
              </label>

              <textarea
                rows="4"
                placeholder="Write your message..."
                className="
                  w-full
                  border border-gray-300
                  rounded-lg
                  px-4 py-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-400
                  resize-none
                "
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="
                w-full
                bg-blue-500
                hover:bg-blue-600
                text-white
                font-semibold
                py-3
                rounded-lg
                transition duration-300
              "
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}