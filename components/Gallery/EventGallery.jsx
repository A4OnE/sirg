import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import GallerySlider from "../Sliders/GallerySlider";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

function EventGallery({ id }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      height: "90%",
      width: "90%",
      bottom: "auto",
      padding: "0px",
      background: "transparent",
      marginRight: "-50%",
      border: "none",
      transform: "translate(-50%, -50%)",
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
      <hr className="my-4" />
      <div className="grid grid-cols-2 gap-4">
        {images.map((item) => (
          <div className="bg-gray-600 h-32 w-full cursor-pointer" key={item.id}>
            <img
              src={`${process.env.Url}/images/${item.img}`}
              alt=""
              className="w-full h-full object-cover rounded shadow-md "
              onClick={() => {
                setIsOpen(true);
              }}
            />
          </div>
        ))}
      </div>
      {/* modal section  */}
      <div>
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          contentLabel="Example Modal"
          className=""
        >
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className="absolute font-bold right-1 lg:right-4 top-5 lg:top-5 z-10 bg-white p-1 rounded-full shadow-md"
          >
            <AiOutlineClose className="font-bold text-4xl" />
          </button>
          <GallerySlider data={images} />
        </Modal>
      </div>
      {/* modal section ends  */}
    </div>
  );
}

export default EventGallery;
