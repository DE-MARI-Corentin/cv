import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "MCS(Master's degree on computer science)",
    years: "2019 - 2022",
    content:
      "Specialization SEDS(Software Engineering of the Digital Society) - Option e-commerce.",
  },
  {
    id: 3,
    title: "PADI(Professional Association of Diving Instructors)",
    years: "July 2019",
    content:
      "Open Water Advanced level.",
  },
  {
    id: 2,
    title: "BCS(Bachelor's degree on computer science)",
    years: "2015 - 2019",
    content:
      "Specialization SEDS(Software Engineering of the Digital Society).",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Software developer - CERFRANCE AFGA - Apprenticeship",
    years: "2019 - 2022",
    content:
      "Headquarters Avignon - Responsible for the development and production of software.",
  },
  {
    id: 2,
    title: "Delivery man - Chronodrive",
    years: "2017 - 2019",
    content:
      " Orange – Relationship with the client during these 2 years.",
  },
  {
    id: 3,
    title: "Trainee - LOGI SYSTEM INFORMATIC ",
    years: "2015",
    content:
      "Orange – Learning physical component in the computer.",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experiences" />
        <div className="row">
          <div className="col-md-6">
            <div className=" bg-white rounded shadow-dark padding-30 overflow-hidden">
            <h3 className="title">Education.</h3>
            <div className="timeline edu">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className=" bg-white rounded shadow-dark padding-30 overflow-hidden">
            <h3 className="title">Work.</h3>
            <div className="timeline exp">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
