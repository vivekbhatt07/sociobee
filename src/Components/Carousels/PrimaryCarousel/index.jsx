import React, { useState, useEffect } from "react";

import "./PrimaryCarousel.css";
import {
  PrimaryOne,
  PrimaryTwo,
  PrimaryThree,
  PrimaryFour,
  PrimaryFive,
} from "../../../Assets/PrimaryCarousel";

const PrimaryCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const primaryCarouselData = [
    { id: "0", thumbnail: PrimaryOne },
    { id: "1", thumbnail: PrimaryTwo },
    { id: "2", thumbnail: PrimaryThree },
    { id: "3", thumbnail: PrimaryFour },
    { id: "4", thumbnail: PrimaryFive },
  ];

  const maxSlide = primaryCarouselData.length - 1;

  const incrementSlide = () => {
    if (maxSlide === activeSlide) {
      return setActiveSlide(0);
    }
    setActiveSlide(activeSlide + 1);
  };

  const decrementSlide = () => {
    if (activeSlide === 0) {
      return setActiveSlide(maxSlide);
    }
    setActiveSlide(activeSlide - 1);
  };

  useEffect(() => {
    setTimeout(() => {
      incrementSlide();
    }, 4000);
  }, [activeSlide]);

  return (
    <div className="primary_carousel">
      <div className="primary_carousel_slider">
        {primaryCarouselData.map((currentSlide, index) => {
          return (
            <div
              className="primary_carousel_slide"
              key={currentSlide.id}
              style={{
                transform: `translateX(${(index - activeSlide) * 100}%)`,
                transition: "transform 0.5s ease",
              }}
            >
              <img
                className="primary_carousel_img"
                src={currentSlide.thumbnail}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PrimaryCarousel;
