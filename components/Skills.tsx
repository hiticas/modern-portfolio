"use client";

import React from "react";
import { companies } from "./data";

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h1 className="heading">
        Areas of
        <span className="text-purple"> Expertise</span>
      </h1>

      <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {companies.map((company) => (
          <React.Fragment key={company.id}>
            <div className="flex items-center w-[25%] lg:my-6 md:max-w-60 max-w-32 gap-2">
              <img src={company.img} alt={company.name} className="w-[100px]" />
              <h1 className="text-3xl font-bold">{company.name}</h1>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Skills;
