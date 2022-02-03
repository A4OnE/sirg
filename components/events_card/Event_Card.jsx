import { IoLocationSharp } from "react-icons/io5";
import React from "react";

function Event_Card({ index }) {
  return (
<<<<<<< HEAD
    <div className={`border border-black rounded-r-lg h-80
    w-5/12 mt-20 ml-5 bg-stone-500  ${index%2===0?'mr-28':null}
    flex flex-row  shadow-base shadow-zinc-500 md:w-5/12 h-64 ml-12 mr-0
    
    `}>
      <div className="h-5/5 w-1/5 bg-stone-500"></div>

      <div className="h-5/5 w-4/5 rounded-r-lg pl-5  bg-white ">
        <p className="text-2xl font-bold mt-10 ml-1 text-zinc-600 md:text-xl md:mt-5 ">
=======
    <div className="flex flex-col lg:flex-row border transition cursor-pointer hover:shadow-lg">
      {/* left img section  */}
      <div className=" h-44 w-full lg:h-full lg:w-1/2 bg-stone-500"></div>

      {/* right content section  */}
      <div className="bg-white p-4 lg:p-8">
        <p className="text-2xl font-bold text-zinc-600">
>>>>>>> c86362ade8c8bf1273c5a19dab2d8766949d4383
          This is the first event title which goes here
        </p>
        <div className="mt-5 mb-8  flex flex-row text-base items-center md:mt-2 md:mb-2 ">
          <IoLocationSharp />

          <p className="font-thin ml-1  text-black-400">Event Location</p>
        </div>
        <p className=" ml-1 mr-3 text-base md:text-sm">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </p>
      </div>
    </div>
  );
}
export default Event_Card;
