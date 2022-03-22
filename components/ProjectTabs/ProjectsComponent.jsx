import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
function ProjectsComponent({ img, title, description }) {
  return (
    <div>
      <div className="container mx-auto px-4  lg:px-8 grid md:grid-cols-2 md:gap-6 py-8 ">
        <div className="mr-4 min-h-fit   flex flex-col justify-center ">
          <Image
            src={img}
            alt="images"
            height={100}
            width={100}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
          <div className="flex justify-around m-4">
            <AiOutlineArrowLeft className="text-3xl" />
            <AiOutlineArrowRight className=" text-3xl placeholder-opacity-50" />
          </div>
        </div>
        <div className="wrap">
          <p
            className="text-gray-600 tracking-wider  
           font-bold mb-6  text-xl  capitalize md:text-4xl"
          >
            {title}
          </p>
          <p className=" lg:w-4/5  line-clamp-10  leading-7 md:line-clamp-none object-cover tracking-wider">
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
