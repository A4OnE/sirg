import React from "react";
import { ImLocation } from "react-icons/im";
import { BsCalendar2DateFill } from "react-icons/bs";
import PageTemplate from "../components/Templates/PageTemplate";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

import { useState } from "react";
import BookingEventModal from "../components/Modal/BookingEventModal";

const Eventbooking = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <PageTemplate>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto my-24 ">
          <h1 className="text-primary lg:text-4xl text-3xl font-bold tracking-wider text-center mb-4  ">
            Event Booking
          </h1>

          <p className="text-gray-500  text-center text-lg">
            You Can Book all of the upcoming event here
          </p>
          <div className="border rounded-md  h-full lg:w-3/5 mx-auto bg-primary  mt-8  text-white p-4 lg:p-6 shadow-lg">
            <p className=" text-2xl md:text-4xl font-bold  tracking-wider ">
              Event Title
            </p>
            <div className="mt-4 ">
              <div className="flex items-center">
                <ImLocation />
                <p className="ml-2">Event Location</p>
              </div>
              <div className="flex items-center my-3">
                <BsCalendar2DateFill />
                <p className="ml-2">2feb,2022</p>
              </div>
            </div>
            <p className="  leading-7 ">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a required item
            </p>
            <button
              className="rounded-full cursor-pointer bg-white text-primary mt-6 w-cover tracking-wider px-5 py-2 font-bold transition hover:opacity-70"
              onClick={() => setModalIsOpen(true)}
            >
              Book Now
            </button>
            <Modal isOpen={modalIsOpen}>
              <button
                className="gap-4 text-2xl  rounded-md  font-bold mb-4 text-red-500  "
                onClick={() => setModalIsOpen(false)}
              >
                <AiOutlineClose />
              </button>
              <BookingEventModal />
            </Modal>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Eventbooking;
