import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function ProjectsComponent({ img, title, description }) {
  return (
    <div>
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-2 gap-6 m-10">
        <div className="mr-4 min-h-fit">
          <img src={img} />
          <div className="flex mt-4">
            <AiOutlineArrowLeft className="mr-4 text-3xl" />
            <AiOutlineArrowRight className=" text-3xl placeholder-opacity-50" />
          </div>
        </div>
        <div className="wrap">
          <p className="text-gray-500 tracking-wider font-bold mb-6 text-5xl">
            {title}
          </p>
          <p className="h-30 w-4/5  object-cover tracking-wider">
            {description}
          </p>
          <div>
            <button className="btn-primary rounded-full mt-8">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsComponent;
