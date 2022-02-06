import React from "react";
import { IoIosArrowForward } from "react-icons/io";
function ServiceCard() {
  return (
    <div className="card rounded-md">
      <img
        className="
      h-24 w-24 box-content rounded-full 
      md:h-28 md:w-28 
      lg:h-32 lg:w-32
      "
        src="https://images.unsplash.com/photo-1513064840867-06fb871b30e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        alt="images"
      />
      <p
        className="my-5 text-lg font-medium
      md:font-semibold md:my-4
      lg:text-xl lg:font-bold
      
      "
      >
        {" "}
        Service Secetion Title
      </p>
      <div
        className="
      mb-6 text-sm 
      md:text-base
      lg:text-base
      text-justify
      line-clamp-5
      "
      >
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters,
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
