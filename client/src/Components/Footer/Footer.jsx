import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-cyan-500">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Horizontal Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">

          {/* Logo Section */}
          <div className="lg:w-[30%]">
            <h1 className="text-4xl font-extrabold">
              <span className="text-cyan-400">Drive</span>
              <span className="text-white">Hub</span>
            </h1>

            <p className="text-gray-400 mt-4 leading-7 text-sm">
              DriveHub provides Agriculture Vehicles, Car Rental,
              Emergency Services, and Mini Bus Trip Travel
              with affordable and trusted transportation solutions.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <div className="w-10 h-10 rounded-full bg-gray-800 hover:bg-cyan-500 flex items-center justify-center cursor-pointer transition">
                🌐
              </div>

              <div className="w-10 h-10 rounded-full bg-gray-800 hover:bg-cyan-500 flex items-center justify-center cursor-pointer transition">
                📘
              </div>

              <div className="w-10 h-10 rounded-full bg-gray-800 hover:bg-cyan-500 flex items-center justify-center cursor-pointer transition">
                📸
              </div>

              <div className="w-10 h-10 rounded-full bg-gray-800 hover:bg-cyan-500 flex items-center justify-center cursor-pointer transition">
                🐦
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap gap-10 md:gap-16">

            {/* Services */}
            <div>
              <h2 className="text-xl font-bold text-cyan-400 mb-4">
                Services
              </h2>

              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-cyan-400 cursor-pointer transition">
                  🚜 Agriculture Vehicles
                </li>

                <li className="hover:text-cyan-400 cursor-pointer transition">
                  🚗 Car Rental
                </li>

                <li className="hover:text-cyan-400 cursor-pointer transition">
                  🚑 Emergency Services
                </li>

                <li className="hover:text-cyan-400 cursor-pointer transition">
                  🚌 Mini Bus Travel
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-xl font-bold text-cyan-400 mb-4">
                Quick Links
              </h2>

              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-cyan-400 cursor-pointer transition">
                  Home
                </li>

                <li className="hover:text-cyan-400 cursor-pointer transition">
                  About
                </li>

                <li className="hover:text-cyan-400 cursor-pointer transition">
                  Services
                </li>

                <li className="hover:text-cyan-400 cursor-pointer transition">
                  Contact
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-xl font-bold text-cyan-400 mb-4">
                Contact
              </h2>

              <div className="space-y-3 text-gray-400 text-sm">
                <p>📍 Mumbai, Maharashtra</p>
                <p>📞 +91 98765 43210</p>
                <p>✉ drivehub@gmail.com</p>
                <p>⏰ 24/7 Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm text-center">
            © 2026 DriveHub. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-gray-400 text-sm">
            <p className="hover:text-cyan-400 cursor-pointer transition">
              Privacy Policy
            </p>

            <p className="hover:text-cyan-400 cursor-pointer transition">
              Terms & Conditions
            </p>

            <p className="hover:text-cyan-400 cursor-pointer transition">
              Help Center
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}