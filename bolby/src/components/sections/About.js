import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Corentin",
  avatarImage: "/images/avatar-2.svg",
  content:
    "Après 5 ans d’Etude au Centre d’Enseignement et de Recherche Informatique, je souhaiterais continuer à apprendre mais aussi à rejoindre une nouvelle équipe dans laquelle je saurais être rigoureux et ajouter une force dans mes futures tâches.",
};

const progressData = [
  {
    id: 1,
    title: "Development logiciel C# & .NET",
    percantage: 85,
    progressColor: "#FFD15C",
  },
  {
    id: 2,
    title: "Base de donnée SQL & noSQL",
    percantage: 90,
    progressColor: "#FF4C60",
  },
  {
    id: 3,
    title: "Méthodologie Agile SCRUM",
    percantage: 100,
    progressColor: "#6C6CE5",
  },
];

const counterData = [
  {
    id: 1,
    title: "Participation de projets",
    count: 34,
    icon: "icon-event",
  },
  {
    id: 2,
    title: "Tasse de café",
    count: 1208 + Math.random() * (5379 - 1208),
    icon: "icon-cup",
  },
  {
    id: 3,
    title: "Diplôme",
    count: 5,
    icon: "icon-graduation",
  },
  {
    id: 4,
    title: "Année d'expérience",
    count: 6,
    icon: "icon-briefcase",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="Profil" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a href="https://drive.google.com/u/0/uc?id=1aMcrK2nlTl5moKtdBPHU8CQW0hInEad2&export=download" className="btn btn-default" download>
                      Télécharger mon CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
