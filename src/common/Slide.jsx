import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export const Slide = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slide">
      <Slider {...settings}>
        <div className="slider-item">
          <div className="slider-item-info">
            <h2 className="slider-item-info-title">
              Giày Thể Thao MLB Chunky Liner Boston Red Sox
            </h2>
            <p className="slider-item-info-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              fugit, illo neque maxime a, consectetur voluptate ullam at earum
              adipisci excepturi vel, vitae eligendi tempore aliquam dolore
              voluptatibus quis? Ad!
            </p>
            <button className="slider-item-info-button">See more</button>
          </div>
          <div className="slider-item-image">
            <img src="https://static.nike.com/a/images/t_default/57dd56da-b069-4c63-bece-4810c1067215/air-zoom-pegasus-39-road-running-shoes-kmZSD6.png" />
          </div>
        </div>
        <div>
          <h3>2</h3>
        </div>
      </Slider>
    </div>
  );
};
