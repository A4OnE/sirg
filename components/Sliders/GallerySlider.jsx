import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
function GallerySlider({ data, index }) {
  var settings = {
    dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
  };
  const [Item, setItem] = useState(0);
  const setData = (value) => {
    console.log(value);
    setItem(value);
  };
  const Increment = () => {
    setItem(Item !== data.length - 1 ? Item + 1 : data.length - 1);

    console.log(data.length);
  };
  const Decrement = () => {
    setItem(Item !== 0 ? Item - 1 : Item);
  };

  return (
    <div className=" grid grid-cols-12  items-center w-full  top-10 left-0">
      <div className="text-white col-span-2 ">
        <button
          className="capitalize ml-5 md:ml-3 w-fit h-fit"
          onClick={() => setItem(Decrement)}
        >
          <AiFillLeftCircle className="h-8 w-8" />
        </button>
      </div>
      <div className=" col-span-8">
        {data.map((item, index) => {
          console.log(data);
          if (index === Item) {
            console.log(index, Item);
            return (
              <div
                // onClick={() => setData(index + 1)}
                className=""
                key={item.id}
                index={item.index}
              >
                <div className="width ">
                  {/* <img src={`${process.env.Url}/images/${item.img}`} /> */}

                  {/* <Image
                    src={`${process.env.Url}/images/${item.img}`}
                    alt="images"
                    width={640}
                    height={426}
                    layout="responsive"
                  /> */}
                  <Image
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
                    className=" "
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="text-white ml-2 col-span-2  md:col-start-12">
        <button
          className="capitalize  w-fit h-fit "
          onClick={() => setData(Increment)}
        >
          <AiFillRightCircle className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
}

export default GallerySlider;
{
}
