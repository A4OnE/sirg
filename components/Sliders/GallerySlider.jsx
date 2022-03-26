import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
function GallerySlider({ data }) {
  var settings = {
    dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
  };
  const [Item, setItem] = useState(1);
  const setData = (value) => {
    console.log(value);
    setItem(value);
  };

  return (
    <div className=" grid grid-cols-12  items-center ">
      <div className="text-white col-span-2 ">
        <button
          className="capitalize  w-fit h-fit"
          onClick={() => setItem(Item - 1)}
        >
          <AiFillLeftCircle className="h-8 w-8" />
        </button>
      </div>
      <div className=" col-span-8">
        {data.map((item, index) => {
          if (index === Item) {
            console.log(index, Item);
            return (
              <div
                // onClick={() => setData(index + 1)}
                className="   "
                key={item.id}
              >
                <div className="width">
                  {/* <img src={`${process.env.Url}/images/${item.img}`} /> */}

                  <Image
                    src={`${process.env.Url}/images/${item.img}`}
                    alt="images"
                    width={640}
                    height={426}
                    layout="responsive"
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="text-white  col-span-2 col-start-12">
        <button
          className="capitalize w-fit h-fit "
          onClick={() => setData(Item + 1)}
        >
          <AiFillRightCircle className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
}

export default GallerySlider;
{
  /* <Image
                    src={`${process.env.Url}/images/${item.img}`}
                    height={100}
                    width={100}
                    objectFit="contain"
                    placeholder="blur"
                    blurDataURL={`${process.env.Url}/images/${item.img}`}
                    quality={40}
                    objectPosition="center"
                    alt={item.img}
                    layout="responsive"
                    className=""
                  /> */
}
