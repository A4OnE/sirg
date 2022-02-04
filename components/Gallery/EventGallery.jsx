import React from "react";
import Modal from "react-modal";
import GallerySlider from "../Sliders/GallerySlider";
import { AiOutlineClose } from "react-icons/ai";

function EventGallery() {
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
  const images = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/2083179/pexels-photo-2083179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2113562/pexels-photo-2113562.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
  ];
  return (
    <div className="p-4">
      <h2 className="text-gray-800">Event Gallery</h2>
      <hr className="my-4" />
      <div className="grid grid-cols-2 gap-4">
        {images.map((item) => (
          <div className="bg-gray-600 h-32 w-full cursor-pointer">
            <img
              src={item.img}
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
