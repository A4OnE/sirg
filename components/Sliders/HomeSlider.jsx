import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import Slider from "react-slick";
import Link from "next/link";

function HomeSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const data = [
    {
      title: "title 1",
      content:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      Image:
        "https://images.pexels.com/photos/2310641/pexels-photo-2310641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      title: "title 2",
      content:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      Image:
        "https://images.pexels.com/photos/2310714/pexels-photo-2310714.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ];
  return (
    <div>
      <Slider {...settings}>
        {data.map((item) => (
          <div>
            <div className="grid grid-cols-2 ">
              {/* left section of slider  */}
              <div className="bg-gray-100 p-8  lg:pt-24">
                <h1 className="lg:text-6xl">{item.title}</h1>
                <p className="my-2 text-xl">{item.content}</p>
                <div className="mt-4">
                  <Link href="/">
                    <button className="btn-primary mt-8 rounded-md shadow-md">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
              {/* right section of grid  */}
              <img
                src={item.Image}
                alt={item.title}
                className="max-h-screen w-full object-cover"
                srcset=""
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomeSlider;
