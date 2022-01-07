import Pagetitle from "../elements/Pagetitle";

const brandlogoData = [
  {
    id: 1,
    image: "images/csharp.svg",
  },
  {
    id: 2,
    image: "images/dot-net-core.svg",
  },
  {
    id: 3,
    image: "images/docker.svg",
  },
  {
    id: 4,
    image: "images/java.svg",
  },
  {
    id: 5,
    image: "images/angular.svg",
  },
  {
    id: 6,
    image: "images/nodejs.svg",
  },
  {
    id: 7,
    image: "images/react.svg",
  },
  {
    id: 8,
    image: "images/python.svg",
  },
  {
    id: 9,
    image: "images/gitlab.svg",
  },
  {
    id: 10,
    image: "images/android.svg",
  },
  {
    id: 11,
    image: "images/grafana.svg",
  },
  {
    id: 12,
    image: "images/kubernetes.svg",
  },
];

function Brandlogos() {
  return (
    <section id="branglogos">
      <div className="container">
        <Pagetitle title="Framework & Technology" />
        <div className="row">
          {brandlogoData.map((brandlogo) => (
            <div className="col-md-3 col-6" key={brandlogo.id}>
              <div className="client-item">
                <div className="inner">
                  <img  src={brandlogo.image} alt="dev-name" style={
                    {
                      width:'30%',
                      height:'30%',
                    }
                  }/>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Brandlogos;
