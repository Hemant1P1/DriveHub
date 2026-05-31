import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function TeamCard({
  image,
  name,
  role,
  about,
  linkedin,
  github,
}) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

      {/* Profile Image */}
      <div className="flex justify-center pt-8">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 rounded-full object-cover border-4 border-slate-200 group-hover:border-slate-400 transition-all duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-center">

        <h2 className="text-2xl font-bold text-slate-800">
          {name}
        </h2>

        <p className="text-slate-600 font-medium mt-1">
          {role}
        </p>

        <div className="w-16 h-1 bg-slate-300 mx-auto my-4 rounded-full"></div>

        <p className="text-sm text-slate-500 leading-6 min-h-[80px]">
          {about}
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mt-6">

          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-800 hover:text-white transition-all duration-300"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-800 hover:text-white transition-all duration-300"
          >
            <FaGithub size={18} />
          </a>

        </div>

      </div>
    </div>
  );
}