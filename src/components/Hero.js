import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const mainProjects = [
    {
      projectTitle: "WeWard - 100 best donators",
      projectImg:
        "https://res.cloudinary.com/db6m8rlzz/image/upload/v1644768769/portfolio/slider-1-weward_loys6z.png",
    },
    {
      projectTitle: "Monsieur Madeleine",
      projectImg:
        "https://res.cloudinary.com/db6m8rlzz/image/upload/v1644855230/portfolio/slider-2-mm_dwjhtb.png",
    },
    // { projectTitle: "slider 3", projectImg: ""},
  ];

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === mainProjects.length - 1 ? 0 : currentSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === mainProjects.length - 1 ? 0 : currentSlide + 1
    );
  };

  console.log("currentSlide", currentSlide);

  return (
    <section className="hero">
      <div className="hero__slider">
        <FontAwesomeIcon
          icon="angle-left"
          size="2xl"
          onClick={prevSlide}
          className="arrow arrow-left"
        />

        <FontAwesomeIcon
          icon="angle-right"
          size="2xl"
          onClick={nextSlide}
          className="arrow arrow-right"
        />
        {mainProjects.map((slider, position) => {
          return (
            <div
              key={position}
              className={position === currentSlide ? "slide-active" : "slide"}
            >
              {position === currentSlide && (
                <Link to={`/project/${slider.projectTitle}`}>
                  <img src={slider.projectImg} alt={slider.projectTitle} />
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
