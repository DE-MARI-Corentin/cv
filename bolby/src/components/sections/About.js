import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";
import Timeline from "../elements/Timeline";

//make years and days array
function generateArray(start,end){
  let arr = [];
  for(start; start <= end; start++){
    arr.push(start);
  }
  return arr;
}

//1900-today
const years = generateArray(1900,(new Date).getFullYear());

//calculate age
function calculateAge(birthday){
  //milliseconds in a year 1000*24*60*60*365.24 = 31556736000;
  let today = new Date(),
      //birthay has 'Dec 25 1998'
      dob = new Date(birthday),
      //difference in milliseconds
      diff = today.getTime() - dob.getTime(),
      //convert milliseconds into years
      years = Math.floor(diff / 31556736000),
      //1 day has 86400000 milliseconds
      days_diff= Math.floor((diff % 31556736000) / 86400000)
      //1 month has 30.4167 days
  return `${years} ans`;
}

const aboutContent = {
  name: "Corentin",
  avatarImage: "/images/avatar-2.svg",
  content:
    "Après 5 ans d’Etude au Centre d’Enseignement et de Recherche Informatique, je souhaiterais continuer à apprendre mais aussi à rejoindre une nouvelle équipe dans laquelle je saurais être rigoureux et ajouter une force dans mes futures tâches.",
  languages: ["Anglais & ", "Français "],
  dateBirth: "26-07-1997",
  adress: "84850 - Camaret sur Aigues",
  licence: "Permis B + Véhicule",
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
    title: "Participations de projets",
    count: 34,
    icon: "icon-event",
  },
  {
    id: 2,
    title: "Tasses de café",
    count: 1208 + Math.random() * (5379 - 1208),
    icon: "icon-cup",
  },
  {
    id: 3,
    title: "Diplômes",
    count: 5,
    icon: "icon-graduation",
  },
  {
    id: 4,
    title: "Années d'expérience",
    count: 3,
    icon: "icon-briefcase",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="Profil" />
        <div className="row">
          {/*
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>*/}

          <div className="col triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p><b>Lieu de résidence : </b>{aboutContent.adress}</p>
                  <p><b>Date de naissance : </b>{aboutContent.dateBirth} - {calculateAge(aboutContent.dateBirth.split("-").reverse().join("-"))}</p>
                  <p><b>Type de déplacement : </b>{aboutContent.licence}</p>
                  <p>{aboutContent.content}</p>
                  <p>
                    <b>Langues : </b>
                    {aboutContent.languages.map((langue) => (
                        <span>{langue} </span>
                    ))}

                  </p>

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
                <div className="mt-5 d-flex justify-content-center">
                  <a href="https://drive.google.com/u/0/uc?id=1aMcrK2nlTl5moKtdBPHU8CQW0hInEad2&export=download" className="btn btn-default" download>
                    Télécharger mon CV
                  </a>
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
