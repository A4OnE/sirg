import { IoLocationSharp } from "react-icons/io5";
import React from "react";

function Event_Card({ index }) {
  return (
    <div className="flex flex-col lg:flex-row border transition cursor-pointer hover:shadow-lg">
      {/* left img section  */}
      <div className=" h-44 w-full lg:h-full lg:w-1/2 bg-stone-500"></div>

      {/* right content section  */}
      <div className="bg-white p-4 lg:p-8">
        <p className="text-2xl font-bold text-zinc-600">
          This is the first event title which goes here
        </p>
        <div className="mt-5 mb-8  flex flex-row text-base items-center ">
          <IoLocationSharp />

          <p className="font-thin ml-1  text-black-400">Event Location</p>
        </div>
        <p className=" ml-1 mr-3 text-base">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </p>
      </div>
    </div>
  );
}
export default Event_Card;
