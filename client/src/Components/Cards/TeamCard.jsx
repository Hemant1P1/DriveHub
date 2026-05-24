import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function TeamCard(props) {

  return (
    <div className="card bg-base-100 shadow-xl hover:scale-105 duration-300">

      <figure className="pt-6">
        <img
          src={props.image}
          alt={props.name}
          className="w-28 h-28 rounded-full object-cover border-4 border-primary"
        />
      </figure>

      <div className="card-body items-center text-center">

        <h2 className="card-title text-2xl">
          {props.name}
        </h2>

        <p className="text-primary font-semibold">
          {props.role}
        </p>

        <p className="text-sm text-gray-500">
          {props.about}
        </p>

        <div className="flex gap-5 mt-4 text-2xl">

          <a
            href={props.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600"
          >
            <FaLinkedin />
          </a>

          <a
            href={props.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-700"
          >
            <FaGithub />
          </a>

        </div>

      </div>

    </div>
  );
}