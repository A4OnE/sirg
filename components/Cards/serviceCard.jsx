import React from "react";
import { IoIosArrowForward } from "react-icons/io";
function ServiceCard({ img, title, description }) {
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
      h-28
      line-clamp-4
      "
      >
        {description}
      </div>
      <div
        className="
      btn-outline-gray flex flex-row justify-center  items-center      
      "
      >
        Find out more{" "}
        <span>
          {" "}
          <IoIosArrowForward className="ml-2" />
        </span>
      </div>
    </div>
  );
}

export default ServiceCard;
