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
        <div className="flex flex-col mx-auto  text-center w-fit items-start ">
          <p className=" text-2xl md:text-4xl text-blue-700 capitalize  md:font-bold font-semibold ">
            happy customer's
          </p>
          <p className="w-20 h-1  my-1 md:my-2 bg-blue-600  " />
        </div>
        {/* <p className="text-primary  pt-3
        text-3xl font-bold tracking-wider">
          About us
        </p> */}
      </div>
      <div
        className="container mx-auto px-4 lg:px-8 grid grid-cols-1 gap-0 m-10
      md:grid-cols-1
      lg:grid-cols-3 lg:gap-0 lg:ml-4
      sm:gap-0 sm:text-center
      "
      >
        <div
          className="w-full h-fit
        flex
        flex-col
        items-center
        justify-center
        "
        >
          <img
            src={data[0].img}
            alt=""
            className="
            h-48 w-48
          md:w-80 md:h-80
          lg:h-92 lg:w-92
          rounded-full
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
          sm:w-full line-clamp-10
        
          "
          >
            "{data[0].description}"
          </p>
          <div>
            <p
              className="text-gray-500  capitalize font-bold tg mt-6 text-center
             lg:mt-4  
             md:text-2xl 
             text-base
            "
            >
              {data[0].name}
            </p>
            <p className=" text-center text-xs  md:text-lg">
              {data[0].nametitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyCustomer;
