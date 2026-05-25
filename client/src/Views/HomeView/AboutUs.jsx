import React from "react";
import TeamCard from "../../Components/Cards/TeamCard";

export default function AboutUs() {

  return (
    <div className="py-12 px-5 bg-base-200">

      <h1 className="text-4xl font-bold text-center mb-10">
        About Our Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <TeamCard
          name="Aniket Tikkal"
          role="Software Engineer"
          image="https://github.com/anikettikkal.png"
          about="Works on frontend and backend."
          linkedin="https://www.linkedin.com/in/aniket-tikkal/"
          github="https://github.com/anikettikkal"
        />

        <TeamCard
          name="Rahul Koli"
          role="Backend Developer"
          image="https://github.com/Rahulkoli3344.png"
          about="Handles APIs and MongoDB."
          linkedin="https://www.linkedin.com/in/rahul-koli-031039221/"
          github="https://github.com/Rahulkoli3344"
        />

        <TeamCard
          name="Amita Dongardive"
          role="UI/UX Designer"
          image="https://github.com/amita-codess.png"
          about="Creates modern UI designs."
          linkedin="https://www.linkedin.com/in/amita-dongardive-9a3840266/"
          github="https://github.com/amita-codess"
        />

        <TeamCard
          name="Hemant Pathare"
          role="Full Stack Developer"
          image="https://github.com/Hemant1P1.png"
          about="Works on frontend and APIs."
          linkedin="https://www.linkedin.com/in/hemant-pathare-79288b292/"
          github="https://github.com/Hemant1P1/"
        />

      </div>

    </div>
  );
}