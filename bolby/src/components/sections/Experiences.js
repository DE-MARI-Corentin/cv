import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Master Informatique",
    years: "2019 - 2022",
    content:
      "Spécialité ILSEN(Ingénieurie Logicielle de la Société et du Numérique) Option E-commerce.",
  },
  {
    id: 2,
    title: "Licence Informatique",
    years: "2015 - 2019",
    content:
      "Spécialité ILSEN(Ingénieurie Logicielle de la Société et du Numérique).",
  },
  {
    id: 3,
    title: "BACCALAUREAT Scientifique",
    years: "2015",
    content:
      "Option Science de l’ingénieur.",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Developpeur Logiciel CERFRANCE AFGA - APPRENTISSAGE",
    years: "2019 - 2022",
    content:
      "Siege social Avignon - Chargé du développement et de la mise en production des logiciels.",
  },
  {
    id: 2,
    title: "Livreur Chronodrive",
    years: "2017 - 2019",
    content:
      " Orange – Relation avec le client pendant ces 2 ans.",
  },
  {
    id: 3,
    title: "Stagiaire LOGI SYSTEM INFORMATIQUE",
    years: "2015",
    content:
      "Orange – Apprentissage des composant physique de L’ordinateur.",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
