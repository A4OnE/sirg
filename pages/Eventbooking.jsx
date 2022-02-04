import React from "react";
import { ImLocation } from "react-icons/im";
import { BsCalendar2DateFill } from "react-icons/bs";
import PageTemplate from "../components/Templates/PageTemplate";

const Eventbooking = () => {
  return (
    <PageTemplate>
      <div className="mx-auto m-12 ">
        <p className="text-primary text-5xl font-bold tracking-wider text-center mb-4 sm:text-3xl  ">
          Event Booking
        </p>
        <p className="text-gray-500  text-center text-2xl">
          You Can Book all of the upcoming event here
        </p>
        <div className="border rounded-xl h-80 w-2/5 mx-auto bg-primary  mt-8  text-white">
          <p className="text-4xl font-bold ml-8 tracking-wider mt-8">
            Event Title
          </p>
          <div className="mt-4 ml-8">
            <div className="flex flex-items-center">
              <ImLocation />
              <p className="ml-2">Event Location</p>
            </div>
            <div className="flex flex-items-center">
              <BsCalendar2DateFill />
              <p className="ml-2">2feb,2022</p>
            </div>
          </div>
          <p className="ml-8 mt-4">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            required item
          </p>
          <button className="rounded-full cursor-pointer bg-white text-primary mt-6 w-cover tracking-wider px-5 py-1 font-bold ml-8 transition hover:opacity-70">
            Book Now
          </button>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Eventbooking;
