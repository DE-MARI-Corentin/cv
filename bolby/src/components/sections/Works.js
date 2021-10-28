import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import Portfolio from "../elements/Portfolio";
import {logDOM} from "@testing-library/react";

const filters = [
  {
    id: 1,
    text: "Everything",
  },
  {
    id: 2,
    text: "WebApp",
  },
  {
    id: 3,
    text: "Console",
  },
  {
    id: 4,
    text: "Android",
  },
  {
    id: 5,
    text: "Divers",
  },
];

const allData = [
  {
    id: 1,
    title: "Tretravex",
    category: "Console",
    image: "images/tetravex.png",
    popupLink: [
      "images/tetravex1.png",
      "images/tetravex2.png",
    ],
    tag1:"Thread",
    tag2:"C++",
  },
  {
    id: 2,
    title: "Site CV",
    category: "WebApp",
    image: "images/works/6.svg",
    popupLink: ["images/cv.png",],
    tag1:"JSX",
    tag2:"React",
  },
  {
    id: 3,
    title: "Spotify like",
    category: "Android",
    image: ["images/works/3.svg",],
    popupLink: ["https://www.youtube.com/watch?v=8H7ylSwuw-0"],
    tag1:"Java",
    tag2:"C++",
  },
  {
    id: 4,
    title: "Jeu de Pirate",
    category: "Console",
    image: "images/lostTresure.png",
    popupLink: [
      "images/Classes.png",
      "images/lostTresure.png",
    ],
    tag1:"",
    tag2:"Java",
  },
  {
    id: 5,
    title: "Quiz&Go",
    category: "WebApp",
    image: "images/quiz1.png",
    popupLink: [
      "images/quiz1.png",
      "images/quiz2.png",
    ],
    tag1:"Angular",
    tag2:"TS",
  },
  {
    id: 6,
    title: "Grafanna",
    category: "WebApp",
    image: "images/grafanna.png",
    popupLink: [
      "images/grafanna.png",
    ],
    tag1:"Python",
    tag2:"Java",
  },
  {
    id: 7,
    title: "Bot Discord ",
    category: "Divers",
    image: "images/botdiscord.png",
    popupLink: ["images/botdiscord.png",],
    tag1:"noSQL",
    tag2:"Node",
  },
  {
    id: 8,
    title: "Api mongoDb",
    category: "Divers",
    image: "images/apibot.png",
    link: ["https://github.com/DE-MARI-Corentin/apiBot"],
    tag1:"NoSQL",
    tag2:"Node",
  },
];

function Works() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  const handleChange = (e) => {
    e.preventDefault();
    setActiveFilter(e.target.textContent.toLowerCase());
    let tempData;
    if (e.target.textContent.toLowerCase() === filters[0].text.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
      console.log("test" + tempData)
    } else {
      tempData = getAllItems.filter(
        (data) =>
          data.category.toLowerCase() === e.target.textContent.toLowerCase()
      );
      console.log("test2" + tempData)
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;
    if (dataVisibleCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].text.toLowerCase()) {
        console.log("they are same");
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        setVisibleItems(
          getAllItems.filter(
            (data) => data.category === activeFilter && data.id <= tempCount
          )
        );
      }
    }
  };

  return (
    <section id="works">
      <div className="container">
        <Pagetitle title="Travaux & Participations" />
        {/* Start Portfolio Filters */}
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <ul className="portfolio-filter list-inline">
            {filters.map((filter) => (
              <li className="list-inline-item" key={filter.id}>
                <button
                  onClick={handleChange}
                  className={
                    filter.text.toLowerCase() === activeFilter
                      ? "text-capitalize current"
                      : "text-capitalize"
                  }
                >
                  {filter.text}
                </button>
              </li>
            ))}
          </ul>
        </ScrollAnimation>
        {/* End Portfolio Filters */}

        {/* Start Portfolio Items */}
        <div className="row portfolio-wrapper">
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </div>
        {/* End Portfolio Items */}

        <div className="load-more text-center mt-4">
          <button
            className="btn btn-default"
            onClick={handleLoadmore}
            disabled={noMorePost ? "disabled" : null}
          >
            {noMorePost ? (
              "No more items"
            ) : (
              <span>
                <i className="fas fa-spinner"></i> Load more
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Works;
