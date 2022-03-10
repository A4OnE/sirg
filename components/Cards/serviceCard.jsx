import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";
function ServiceCard({ id, img, title, description }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="card rounded-md">
      <div
        className="
      h-24 w-24 box-content rounded-full 
      md:h-28 md:w-28 
      lg:h-32 lg:w-32
      "
        style={{
          background: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <p
        className="my-5 text-lg font-medium
      md:font-semibold md:my-4
      lg:text-xl lg:font-bold
      
      "
      >
        {title}
      </p>
      <div
        className="
      mb-6 text-sm 
      md:text-base
      lg:text-base
      text-justify
      line-clamp-4
      "
      >
        {description}
      </div>
      <div>
        <Link href={`service/${id}`}>
          <button
            className="
        btn-outline-gray text-black hover:translate-x-1  hover:text-blue-800 flex flex-row justify-center   rounded-md items-center      
        "
          >
            Find out more{" "}
            <span>
              {" "}
              <IoIosArrowForward className="ml-2" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
