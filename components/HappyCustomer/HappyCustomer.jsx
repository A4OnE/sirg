import React from "react";
import { FaLongArrowAltLeft,FaLongArrowAltRight } from "react-icons/fa";
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
    <div className="py-10 w-10/12 first-letter:
    md:w-full
    lg:w-screen lg:mx-10
    ">
      <div className='ml-8'>
        <p className="text-primary  
    
        text-4xl font-bold  tracking-wider ">
          Happy Customer's
        </p>
        <p className="text-primary  pt-3
        text-3xl font-bold tracking-wider">
          About us
        </p>
      </div>
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 gap-6 m-10
      md:grid-cols-1
      lg:grid-cols-2 lg:gap-0
      ">
        <div className="w-full h-128 pb-5
        md:h-fit md:pb-0
        " >
          <img src={data[0].img} alt="" className="w-full
          md:w-full md:h-96
          lg:w-10/12 lg:h-128
          "/>
          <div className="flex mt-4">
            <FaLongArrowAltLeft className="mr-4 text-4xl cursor-pointer" />
            <FaLongArrowAltRight className=" text-4xl placeholder-opacity-50 cursor-pointer" />
          </div>
        </div>
        <div>
          <p className="text-gray-500 capitalize tracking-wider font-bold mb-6 text-3xl
          md:text-2xl md:mb-3 
          lg:text-4xl lg:mb-8 lg:w-1/2 lg:leading-snug
          
          ">
            {data[0].title}
          </p>
          <p className="h-30 w-4/5  object-cover tracking-wider
          md:w-full
          lg:w-11/12 lg:text-lg
        
          ">
            {data[0].description}
          </p>
          <div>
            <p className="text-gray-500 font-bold text-3xl mt-6
            md:text-2xl
            lg:text-3xl lg:mt-8
            ">
              {data[0].name}
            </p>
            <p className="mt-2 md:text-lg lg:text-xl">{data[0].nametitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyCustomer;
