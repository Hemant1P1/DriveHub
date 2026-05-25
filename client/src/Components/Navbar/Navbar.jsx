import React from "react";

function Navbar() {
  return (

    <>

      <nav className="bg-gradient-to-r from-slate-900 via-gray-900 to-black shadow-2xl px-8 py-4 border-b border-cyan-500">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="text-3xl font-extrabold tracking-wide">
            <span className="text-cyan-400">Drive</span>
            <span className="text-white">Hub</span>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-8">

            {/* Menu Links */}
            <div className="flex gap-8 text-lg font-medium">
              <a
                href="/"
                style={{ textDecoration: "none" }}
                className="text-gray-200 hover:text-cyan-400 transition duration-300 hover:scale-110"
              >
                Home
              </a>

              <a
                href="#"
                style={{ textDecoration: "none" }}
                className="text-gray-200 hover:text-cyan-400 transition duration-300 hover:scale-110"
              >
                About
              </a>

              <a
                href="#"
                style={{ textDecoration: "none" }}
                className="text-gray-200 hover:text-cyan-400 transition duration-300 hover:scale-110"
              >
                Services
              </a>

              <a
                href="./signup"
                style={{ textDecoration: "none" }}
                className="text-gray-200 hover:text-cyan-400 transition duration-300 hover:scale-110"
              >
                Signup
              </a>
            </div>

            {/* Search Box */}
            <div>
              <input
                type="text"
                placeholder="Search rides..."
                className="px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 border border-cyan-400 outline-none focus:ring-2 focus:ring-cyan-400 shadow-lg"
              />
            </div>

          </div>

        </div>
      </nav>
    </>
  );

}

export default Navbar;