import React, { useRef } from "react";
import "./Collections.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import CollectionsItem from "../CollectionsItem/CollectionsItem";
function Collections() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section className="collections__section">
      <h2>COLLECTİONS</h2>
      <Slider ref={sliderRef} {...settings}>
        <CollectionsItem />
        <CollectionsItem />
        <CollectionsItem />
        <CollectionsItem />
      </Slider>
      <div className="collections__section__buttons">
        <div onClick={handlePrev} className="collections__section__button left">
          <BsFillArrowLeftCircleFill />
        </div>
        <div
          onClick={handleNext}
          className="collections__section__button right"
        >
          <BsFillArrowRightCircleFill />
        </div>
      </div>
    </section>
  );
}

export default Collections;
