import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import GallerySlider from "../Sliders/GallerySlider";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import Image from "next/image";
import SliderModel from "../sliderModel/SliderModel";
function EventGallery({ id }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const customStyles = {
    content: {
      backgroundColor: "#383838",
    },
  };
  const [images, setImages] = useState([]);
  console.log("images", images);
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`${process.env.Url}/eventgallery/onEvent/${id}`)
        .then((res) => {
          setImages(res.data.gallery);
        });
    };
    fetch();
  }, [id]);
  return (
    <div className="p-4">
      <h2 className="text-gray-800">Event Gallery</h2>
      <hr className="my-4 " />
      <div className="grid grid-cols-2 gap-4">
        <div className=" col-span-2 w-6/12 mx-auto ">
          {images.map((item) => (
            <div className="  cursor-pointer" key={item.id}>
              <Image
                src={`${process.env.Url}/images/${item.img}`}
                alt="images"
                height={80}
                width={100}
                layout="responsive"
                objectFit="contain"
                objectPosition="center"
                className="rounded-md"
                onClick={() => {
                  setIsOpen(true);
                }}
              />
            </div>
          ))}
        </div>
      </div>
      {/* modal section  */}
      {modalIsOpen ? (
        <div className="  ">
          <SliderModel>
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="absolute font-bold right-1 lg:right-4 top-5 lg:top-5 z-10 "
            >
              <AiOutlineClose className="font-bold text-4xl translate-y-24  md:translate-y-20 -translate-x-8 lg:translate-y-20 shadow-md bg-white rounded-full  lg:-translate-x-5 p-1 " />
            </button>
            <GallerySlider data={images} />
          </SliderModel>
        </div>
      ) : null}
      {/* modal section ends  */}
    </div>
  );
}

export default EventGallery;
