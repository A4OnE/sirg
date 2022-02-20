import React from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
const HappyCustomer = () => {
  const data = [
    {
      nametitle: "MD of my Company Butwal",
      name: "Rabindra nath Taigore",
      img: "https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662__340.jpg",
      title: "Help us in our productivity",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content ",
    },
  ];
  return (
    <div
      className="w-10/12
  h-fit
  mt-10
    md:w-full 
    lg:w-screen lg:mx-10 lg:mt-10

    "
    >
      <div className="ml-8">
        <p
          className="text-primary  
        ml-4
        text-center
        text-3xl font-extrabold my-2 mx-auto tracking-wide sm:text-center  "
        >
          Happy Customer's
        </p>
      </div>
      <div
        className="container mx-auto px-4 lg:px-8 grid grid-cols-1 gap-0 m-10
      md:grid-cols-1
      lg:grid-cols-3 lg:gap-0 lg:ml-4
      sm:gap-0 sm:text-center
      "
      >
        <div
          className="w-full h-72
        md:h-128 md:w-full md:pb-0 sm:pb-4 sm:h-96
        lg:h-fit
        flex
        flex-col
        items-center
        "
        >
          <img
            src={data[0].img}
            alt=""
            className="
          w-56 h-56
          rounded-full
          sm:w-7/12 sm:h-full
          md:w-8/12
          lg:w-10/12 lg:h-80 lg:rounded-full 
          "
          />
          <div className="flex mt-4">
            <FaLongArrowAltLeft className="mr-4 text-4xl cursor-pointer" />
            <FaLongArrowAltRight className=" text-4xl placeholder-opacity-50 cursor-pointer" />
          </div>
        </div>
        <div className="lg:col-span-2 lg:ml-28">
          {/* <p className="text-gray-500 capitalize tracking-wider font-bold mb-6 text-3xl
          md:text-2xl md:mb-3 
          lg:text-4xl lg:mb-8 lg:w-1/2 lg:leading-snug
          
          ">
            {data[0].title}
          </p> */}
          <p
            className="h-fit w-full  object-cover tracking-wider italic mt-8
          md:w-full
          lg:w-11/12 lg:text-lg
          sm:w-full
        
          "
          >
            "{data[0].description}"
          </p>
          <div>
            <p
              className="text-gray-500 font-bold text-xl mt-6 text-center
            md:text-lg
            lg:text-lg lg:mt-4 
            sm:text-base 
            "
            >
              {data[0].name}
            </p>
            <p className=" text-center text-xs  sm:text-xs">
              {data[0].nametitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyCustomer;
