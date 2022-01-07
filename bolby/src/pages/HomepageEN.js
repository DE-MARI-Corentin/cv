import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import ReactCursorPosition from "react-cursor-position";
import { Element } from "react-scroll";
import Header from "../components/layouts/HeaderEN";
import About from "../components/sections/AboutEN";
import Brandlogos from "../components/sections/BrandlogosEN";
import Contact from "../components/sections/ContactEN";
import Experiences from "../components/sections/ExperiencesEN";
import Herosection from "../components/sections/HerosectionEN";
import Services from "../components/sections/ServicesEN";
import Works from "../components/sections/WorksEN";
import Loisirs from "../components/sections/loisirEN";

function Homepage() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const headerToggler = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  document.addEventListener("click", function (e) {
    if (e.target.closest(".content")) {
      setToggleMenu(false);
    }
  });
  const [content, setContent] = useState("");
  return (
    <>
      <Header
        logoSource="/images/logo_large.png"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <main className={toggleMenu ? "content open" : "content"}>
        <Element name="section-home">
          <ReactCursorPosition>
            <Herosection />
          </ReactCursorPosition>
        </Element>
        <Element name="section-about">
          <About />
        </Element>
        <Element name="section-services">
          <Services />
        </Element>
        <Element name="section-experiences">
          <Experiences />
        </Element>
        <Element name="section-brandlogos">
          <Brandlogos />
        </Element>
        <Element name="section-works">
          <Works />
        </Element>
        <Element name="section-loisir">
          <Loisirs setTooltipContent={setContent} />
          <ReactTooltip >{content}</ReactTooltip>
        </Element>
        <Element name="section-contact">
          <Contact />
        </Element>
        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
}

export default Homepage;
