import { Link } from "react-scroll";
import Logo from "../elements/Logo";



function Header({ light, logoSource, toggleMenu, headerToggler }) {
  const handleClasses = () => {
    let classes = "desktop-header-1 d-flex align-items-start flex-column";
    if (light & toggleMenu) {
      classes += " light open";
    } else if (toggleMenu) {
      classes += " open";
    } else if (light) {
      classes += " light";
    }
    return classes;
  };
  const handleMobileClasses = () => {
    let classes = "mobile-header-1";
    if (light & toggleMenu) {
      classes += " light open";
    } else if (toggleMenu) {
      classes += " open";
    } else if (light) {
      classes += " light";
    }
    return classes;
  };
  return (
    <>
      <header className={handleMobileClasses()}>
        <div className="container">
          <div className="menu-icon d-inline-flex mr-4">
            <button onClick={headerToggler}>
              <span></span>
            </button>
          </div>
          <Logo logoSource={logoSource} />
        </div>
      </header>
      <header className={handleClasses()}>
      <div className="dropdown show">
          <a class="dropdown-toggle" href="" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img className="icon h-75" src="/images/flagEN.png" alt="English" />
          </a>
          <div class="dropdown-menu langue " aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item h-75" href="/fr-FR"><img className="icon h-50" src="/images/flagFR.png" alt="French" /></a>
          </div>
        </div><br/><br/>
        <Logo logoSource={logoSource} />
        <nav>
          <ul className="vertical-menu scrollspy">
            <li>
              <Link
                activeClass="active"
                to="section-home"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-home"></i>Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-about"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-user-following"></i>Profil
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-services"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-briefcase"></i>Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-experiences"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-graduation"></i>Experiences
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-works"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-layers"></i>Works
              </Link>
            </li>
            <li>
              <Link
                  activeClass="active"
                  to="section-loisir"
                  spy={true}
                  smooth={true}
                  duration={500}
              >
                <i className="icon-game-controller"></i>Hobbies
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-bubbles"></i>Contact me
              </Link>
            </li>
          </ul>
        </nav>

        <div className="footer">
          <span className="copyright">
            &copy; {new Date().getFullYear()} Corentin DE MARI.
          </span>
        </div>
      </header>
    </>
  );
}

export default Header;
