import React, { useState } from "react";
import "./carousel.css";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  return (
    <div className="sliderContainer">
      <button className="prevBtn" onClick={prevSlide}>
        <i class="fa-solid fa-backward"></i> Previous
      </button>

      <div className="slider">
        {images.map((image) => (
          <div
            style={{
              transform: `translateX(${-400 * currentIndex}px)`,
              transition: "1s",
            }}
          >
            <img className="sliderImage" src={image.url} alt="" />
          </div>
        ))}
      </div>

      <button className="nextBtn" onClick={nextSlide}>
        Next <i class="fa-solid fa-forward"></i>
      </button>
    </div>
  );
}

export default Carousel;
