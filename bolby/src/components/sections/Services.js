import React from "react";
import { Link } from "react-scroll";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  {
    id: 1,
    icon: "images/service-2.svg",
    title: "Development logiciel C# & .NET",
    content:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    color: "#F9D74C",
    contentColor: "dark",
  },
  {
    id: 2,
    icon: "images/service-4.png",
    title: "Base de donnée SQL & noSQL",
    content:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    color: "#6C6CE5",
    contentColor: "light",
  },
  {
    id: 3,
    icon: "images/service-5.png",
    title: "Méthodologie Agile SCRUM",
    content:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    color: "#F97B8B",
    contentColor: "dark",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Compétences" />
        <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
