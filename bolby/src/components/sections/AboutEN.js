import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";


//calculate age
function calculateAge(birthday){
  //milliseconds in a year 1000*24*60*60*365.24 = 31556736000;
  let today = new Date(),
      //birthay has 'Dec 25 1998'
      dob = new Date(birthday),
      //difference in milliseconds
      diff = today.getTime() - dob.getTime(),
      //convert milliseconds into years
      years = Math.floor(diff / 31556736000)
      //1 day has 86400000 milliseconds
  return `${years} years`;
}

const aboutContent = {
  name: "Corentin",
  avatarImage: "/images/avatar-2.svg",
  content:
    "Soon-to-graduate honors college student with MCS. Developed software since 2+years with apprenticeship. Joined a new team will be great place who I can be rigorous and add strength in my future tasks.",
  languages: ["French native & ", "English B1 "],
  dateBirth: "07-26-1997",
  adress: "84850 - Camaret sur Aigues",
  licence: "Driving licence with car",
};

const progressData = [
  {
    id: 1,
    title: "Software development with C# & .NET",
    percantage: 85,
    progressColor: "#FFD15C",
  },
  {
    id: 2,
    title: "Database SQL & noSQL",
    percantage: 90,
    progressColor: "#FF4C60",
  },
  {
    id: 3,
    title: "Methodology Agil SCRUM",
    percantage: 100,
    progressColor: "#6C6CE5",
  },
];

const counterData = [
  {
    id: 1,
    title: "Project participation",
    count: 34,
    icon: "icon-event",
  },
  {
    id: 2,
    title: "Cup of coffee",
    count: 1208 + Math.random() * (5379 - 1208),
    icon: "icon-cup",
  },
  {
    id: 3,
    title: "Degrees",
    count: 5,
    icon: "icon-graduation",
  },
  {
    id: 4,
    title: "Years of experiences",
    count: 3,
    icon: "icon-briefcase",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="Profil & Carrer Objective" />
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
                  <p><b>Residency place : </b>{aboutContent.adress}</p>
                  <p><b>Date of birth : </b>{aboutContent.dateBirth} - {calculateAge(aboutContent.dateBirth)}</p>
                  <p><b>Travel method : </b>{aboutContent.licence}</p>
                  <p>{aboutContent.content}</p>
                  <p>
                    <b>Language skill : </b>
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
                  <a href="https://drive.google.com/u/0/uc?id=1rUzgoK1Z-Z_y-NHZjt4TAGrumxyo20HA&export=download" className="btn btn-default" download>
                    Download my CV
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
