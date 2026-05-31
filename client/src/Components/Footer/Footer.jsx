import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-900 text-slate-300 mt-20">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Company Info */}
            <div>
              <h1 className="text-3xl font-bold text-white">
                Drive<span className="text-red-500">Hub</span>
              </h1>

              <p className="mt-4 text-slate-400 leading-7">
                Reliable vehicle rental solutions for family trips,
                emergency services, agriculture, construction and
                commercial transportation.
              </p>

              <div className="flex gap-4 mt-6">

                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition">
                  <FaFacebookF />
                </a>

                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition">
                  <FaInstagram />
                </a>

                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition">
                  <FaLinkedinIn />
                </a>

                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition">
                  <FaGithub />
                </a>

              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-white font-semibold text-lg mb-4">
                Quick Links
              </h2>

              <ul className="space-y-3">

                <li><Link to="/" className="hover:text-white">Home</Link></li>

                <li><Link to="/about" className="hover:text-white">About Us</Link></li>

                <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>

                <li><Link to="/team" className="hover:text-white">Our Team</Link></li>

              </ul>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-white font-semibold text-lg mb-4">
                Services
              </h2>

              <ul className="space-y-3">

                <li><Link to="/rentalcars" className="hover:text-white">Car Rental</Link></li>

                <li><Link to="/trip" className="hover:text-white">Mini Bus Travel</Link></li>

                <li><Link to="/emergency" className="hover:text-white">Emergency Vehicles</Link></li>

                <li><Link to="/agriculture" className="hover:text-white">Agriculture Vehicles</Link></li>

                <li><Link to="/construction" className="hover:text-white">Construction Vehicles</Link></li>

                <li><Link to="/heavyload" className="hover:text-white">Heavy Vehicles</Link></li>

              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-white font-semibold text-lg mb-4">
                Contact Info
              </h2>

              <div className="space-y-3 text-slate-400">

                <p>📍 Pune, Maharashtra</p>

                <p>📞 +91 XXXXX XXXXX</p>

                <p>✉ support@drivehub.com</p>

                <p>🕒 Available 24/7</p>

              </div>
            </div>

          </div>

          {/* Bottom Footer */}
          <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-sm text-slate-500 text-center">
              © 2026 DriveHub. All Rights Reserved.
            </p>

            <div className="flex gap-6 text-sm">

              <Link
                to="/privacy-policy"
                className="hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="hover:text-white"
              >
                Terms & Conditions
              </Link>

              <Link
                to="/contact"
                className="hover:text-white"
              >
                Support
              </Link>

            </div>

          </div>

        </div>

      </footer>
    </>
  )
}
