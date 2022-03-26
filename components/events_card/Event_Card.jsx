import { IoLocationSharp } from "react-icons/io5";
import React from "react";
import Link from "next/link";
import { MdDateRange } from "react-icons/md";

function Event_Card({ id, title, date, location, img }) {
  return (
    <div className="border rounded-md overflow-hidden cursor-text shadow-lg transition-transform duration-500  hover:scale-105">
      {/* main section */}
      <Link href={"/Event/" + id} passHref>
        <div
          className="h-96 bg-cover cursor-pointer"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.8995973389355743) 10%, rgba(0,0,0,0.6979166666666667) 25%, 
          rgba(0,0,0,0.3029586834733894) 80%, rgba(0,0,0,0) 100%), url(${process.env.Url}/images/${img})`,
          }}
        >
          {/* content section  */}
          <div className="p-4 pt-52">
            <p className="text-2xl font-bold  cursor-pointer text-white line-clamp-2">
              {title}
            </p>
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
      </Link>
    </div>
  );
}
export default Event_Card;
