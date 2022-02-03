import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

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
    <div>
      <div>
        <h3 className="text-primary  text-3xl font-medium ml-10 h-10 tracking-wider gap-4">
          Happy Customer's
          <br />
          About us
        </h3>
      </div>
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-2 gap-6 m-10">
        <div className=" mr-4">
          <img src={data[0].img} alt="" />
          <div className="flex mt-4">
            <AiOutlineArrowLeft className="mr-4 text-3xl" />
            <AiOutlineArrowRight className=" text-3xl placeholder-opacity-50" />
          </div>
        </div>
        <div className="wrap">
          <p className="text-gray-500 tracking-wider font-bold mb-6 text-3xl">
            {data[0].title}
          </p>
          <p className="h-30 w-4/5  object-cover tracking-wider">
            {data[0].description}
          </p>
          <div>
            <p className="text-gray-500 font-bold text-3xl mt-6 ">
              {data[0].name}
            </p>
            <p className="mb-4">{data[0].nametitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyCustomer;
