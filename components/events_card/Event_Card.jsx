import { IoLocationSharp } from "react-icons/io5";
import React from "react";
import Link from "next/link";
import { MdDateRange } from "react-icons/md";

function Event_Card({ index }) {
  return (
    <div className="border rounded-md overflow-hidden cursor-text shadow-lg transition-transform duration-500  hover:scale-105">
      {/* main section */}
      <div
        className="h-96 bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(2,0,36,0.8995973389355743) 20%, rgba(1,85,124,0.6979166666666667) 55%, rgba(0,179,221,0.3029586834733894) 80%, rgba(0,212,255,0) 100%), url(https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
        }}
      >
        {/* content section  */}
        <div className="p-4 pt-52">
          <Link href={"/Event/" + "skladjf"}>
            <p className="text-2xl font-bold  cursor-pointer text-white line-clamp-2">
              This is the first event title which goes here
            </p>
          </Link>
          <div className="my-4">
            {/* date section  */}
            <div className="text-white  flex flex-row text-base items-center my-2 ">
              <MdDateRange />

              <p className="ml-1  text-black-400">6 Feb, 2022</p>
            </div>
            {/* location section  */}
            <div className="text-white flex flex-row text-base items-center my-2 ">
              <IoLocationSharp />

              <p className="ml-1  text-black-400">Event Location</p>
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
