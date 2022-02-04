import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";

function GallerySlider({ data }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="p-10">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id}>
            <img
              src={item.img}
              className="h-96 lg:h-128 w-full object-cover"
              srcset=""
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default GallerySlider;
