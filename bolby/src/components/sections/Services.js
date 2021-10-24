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
      "J'ai toujours été attiré par l'environnement C# / .NET, que ce soit en développement personnel, ou professionnel. J'ai toujours su m'adapter avec ces technologies.",
    color: "#F9D74C",
    contentColor: "dark",
  },
  {
    id: 2,
    icon: "images/service-4.png",
    title: "Base de donnée SQL & noSQL",
    content:
      "Au cours de mes différentes experiences, j'ai acquis une maitrise dans la gestion de base de donnée SQL ou non-relationnelle tel que le noSQL. Mais aussi une faculté à effectuer différentes requetes SQL.",
    color: "#6C6CE5",
    contentColor: "light",
  },
  {
    id: 3,
    icon: "images/service-5.png",
    title: "Méthodologie Agile SCRUM",
    content:
      "Depuis maintenant 3 ans je me considère comme agile, grâce au nombreux projets où nous avons choisi ce type de méthologie. De plus lors de mon alternance, j'ai participé à la mise en place de celui-ci.",
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
