import React, { useRef } from "react";
import Slider from "react-slick";
import "./categories.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import CategoiresItem from "../CategoiresItem/CategoiresItem";
function Categoryies() {
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
    <section className="categories__section">
      <Slider ref={sliderRef} {...settings}>
        <CategoiresItem />
        <CategoiresItem />
        <CategoiresItem />
        <CategoiresItem />
        <CategoiresItem />
        <CategoiresItem />
      </Slider>
      <div className="categories__section__buttons">
        <div onClick={handlePrev} className="categories__section__button left">
          <BsFillArrowLeftCircleFill />
        </div>
        <div onClick={handleNext} className="categories__section__button right">
          <BsFillArrowRightCircleFill />
        </div>
      </div>
    </section>
  );
}

export default Categoryies;
