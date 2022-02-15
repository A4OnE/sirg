import React, { useState } from "react";

import Head from "next/head";
import Link from "next/link";
import PageTemplate from "../components/Templates/PageTemplate";

import HappyCustomer from "../components/HappyCustomer/HappyCustomer";
import OurClients from "../components/Ourclients/OurClients";
import EventBooking from "./Eventbooking";

function About() {
  const [Data, setData] = useState([
    {
      title: "Our Vision",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without  relying on meaningful content",
    },
    {
      title: "Our Mission",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without  relying on meaningful content",
    },
  ]);
  return (
    <div>
      <Head>
        <title>About us</title>
        <meta
          name="description"
          content="This is the official site of VIP GROUP PVT.LTd."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTemplate>
        <div className="container mx-auto px-4 lg:px-8">
          {/* About us introduction */}
          <div className="h-fit flex flex-col lg:flex-row w-full mt-5 ">
            <div className="lg:flex-1 ">
              <div className="bg-grayD h-96 lg:h-full lg:m-10 flex justify-center items-center">
                <p className="text-white ">Video modal</p>
              </div>
            </div>
            {/* right section  */}
            <div className="flex-1 mt-10 p-2">
              {/* <p className="text-base text-gray-400 my-2 mt-0 ">About us</p> */}
              <div className="flex flex-col mx-auto text-center  w-fit items-start ">
                <p className=" text-2xl md:text-4xl text-blue-700 capitalize font-bold ">
                  who we are?{" "}
                </p>
                <p className="w-20 h-1  my-1 md:my-2 bg-blue-600  " />
              </div>
              <p className="w-full my-4 line-clamp-10 -tracking-tight leading-7 lg:leading-7 text-lg">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. In
                publishing and graphic design, Lorem ipsum is a placeholder text
                commonly used to demonstrate the visual form of a document or a
                typeface without relying on meaningful content. In publishing
                and graphic design,
              </p>
              <div className="pt-10  h-fit flex justify-center md:justify-center sm:justify-center lg:justify-start">
                <Link href={"/Contact"}>
                  <div
                    className="btn-primary rounded-full
                                  inline t-4 shadow hover:shadow-md hover:shadow-gray-500 hover:scale-100"

                  >
                    Contact us
                  </div>
                </Link>
              </div>
            </div>
            {/* right section ends  */}
          </div>

          {/* our Vision  and our mission sections */}
          <div className=" w-full h-fit mt-20">
            {Data.map((val, i) => {
              return (
                <div
                  key={i}
                  className={`m-4 ${
                    i === 1
                      ? "ml-10 pl-0 mt-14 sm:pl-0  sm:ml-10 md:pl-0 md:ml-10 lg:ml-96 lg:pl-44"
                      : "ml-10"
                  } `}
                >
                  <div className="flex flex-col mx-auto lg:mx-0 text-center w-fit items-start ">
                    <p className=" text-2xl md:text-4xl text-blue-700 capitalize font-bold ">
                      {val.title}
                    </p>
                    <p className="w-20 h-1  my-1 md:my-2 bg-blue-600  " />
                  </div>
                  <div
                    className={`text-base leading-6 line-clamp-10
                  ${
                    i === 0
                      ? "w-full  sm:w-full lg:w-6/12 "
                      : "max-w-screen-xl sm:w-full"
                  } 
                  `}
                  >
                    {val.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full flex justify-center items-center flex-col">
          <HappyCustomer />
          <OurClients />
        </div>
      </PageTemplate>
      {/* Happy Customer Section */}
    </div>
  );
}

export default About;
