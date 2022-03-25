import { IoLocationSharp } from "react-icons/io5";
import React from "react";
import Link from "next/link";
import { MdDateRange } from "react-icons/md";

function Event_Card({ id, title, date, location, img }) {
  return (
    <div className="border rounded-md overflow-hidden cursor-text shadow-lg transition-transform duration-500  hover:scale-105">
      {/* main section */}
      <div
        className="h-96 bg-cover"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(2,0,36,0.8995973389355743) 20%, rgba(1,85,124,0.6979166666666667) 55%, 
          rgba(0,179,221,0.3029586834733894) 80%, rgba(0,212,255,0) 100%), url(${process.env.Url}/images/${img})`,
        }}
      >
        {/* content section  */}
        <div className="p-4 pt-52">
          <Link href={"/Event/" + id} passHref>
            <p className="text-2xl font-bold  cursor-pointer text-white line-clamp-2">
              {title}
            </p>
          </Link>
          <div className="my-4">
            {/* date section  */}
            <div className="text-white  flex flex-row text-base items-center my-2 ">
              <MdDateRange />

              <p className="ml-1  text-black-400">{date}</p>
            </div>
            {/* location section  */}
            <div className="text-white flex flex-row text-base items-center my-2 ">
              <IoLocationSharp />

              <p className="ml-1  text-black-400">{location}</p>
            </div>
          </div>

          {/* <p className=" ml-1 mr-3 text-base line-clamp-2 t00">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p> */}
        </div>
      </div>
    </div>
  );
}
export default Event_Card;
