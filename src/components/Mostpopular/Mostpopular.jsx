import React, { useRef } from "react";
import Slider from "react-slick";
import "./Mostpopular.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import MostpopularItem from "../MostpopularItem/MostpopularItem";
function Mostpopular() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section className="mostpopular__section">
      <h2>MOST POPULAR</h2>
      <Slider ref={sliderRef} {...settings}>
        <MostpopularItem />
        <MostpopularItem />
        <MostpopularItem />
        <MostpopularItem />
        <MostpopularItem />
      </Slider>
      <div className="mostpopular__section__buttons">
        <div onClick={handlePrev} className="mostpopular__section__button left">
          <BsFillArrowLeftCircleFill />
        </div>
        <div
          onClick={handleNext}
          className="mostpopular__section__button right"
        >
          <BsFillArrowRightCircleFill />
        </div>
      </div>
    </section>
  );
}

export default Mostpopular;
