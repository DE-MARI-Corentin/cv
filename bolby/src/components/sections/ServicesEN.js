import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  {
    id: 1,
    icon: "images/service-2.svg",
    title: "Software development with C#",
    content:
      "I have always been marked by the C# / .NET environment, whether in personal development or professional. I have always known how to adapt with these technologies.",
    color: "#F9D74C",
    contentColor: "dark",
  },
  {
    id: 2,
    icon: "images/service-4.png",
    title: "Database SQL & noSQL",
    content:
      "During my various experiences, I acquired a mastery in the management of SQL or non-relational databases such as noSQL. But also a faculty to carry-out various SQL queries.",
    color: "#6C6CE5",
    contentColor: "light",
  },
  {
    id: 3,
    icon: "images/service-5.png",
    title: "Methodology Agil SCRUM",
    content:
      "Since 3 years from now, I have considered myself like a person who is agile, thanks to the many projects where we have chosen this type of method. In addition, during my work-study program, I took part in setting it up.",
    color: "#F97B8B",
    contentColor: "dark",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Skills" />
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
