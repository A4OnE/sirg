import React from "react";
import { useForm } from "react-hook-form";
import { BsFillFilePersonFill } from "react-icons/bs";
import { GoDeviceMobile } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
// import Head from "next/head";
import PageTemplate from "../components/Templates/PageTemplate";

function Contact() {
  return (
    <div>
            <PageTemplate>
        <div className=" container ">
          {/* starting of top part of contact */}
          <div
            className="  h-96 bg-blue-800 grid 
       items-center "
          >
            <div className="text-center">
              <div
                className="font-bold text-3xl text-white 
             w-10/12 uppercase ml-14   "
              >
                connect with us
              </div>

              <div className=" text-white mt-3 text-base   normal">
                It is a long established fact that a reader will be distracted
                by the readable content of a text.
              </div>
            </div>
          </div>
          {/*ending of  top part of contact */}

          {/* form div starts */}
          <div
            className="cards  md:w-11/12 lg:w-6/12  
        md:h-96 lg:h-10/12 mb-16
         bg-white shadow-2xl	
      grid items-center mx-auto -my-28 p-4  rounded-md"
          >
            <div
              className="
        grid grid-cols-3 capitalize text-gray-500   
        font-bold lg:text-xl"
            >
              {/* icon wala part in left side starts */}
              <div className="grid grid-rows-4 w-40   ">
                <div className="grid grid-cols-2  lg:w-fit  w-28   m-4 ">
                  <div>
                    <BsFillFilePersonFill className="h-8 w-8" />
                  </div>
                  <div>ssdsdfsdadhd</div>
                </div>
                <div className="grid grid-cols-2 lg:w-fit  w-28   m-4  ">
                  <div>
                    <GoDeviceMobile className="h-8 w-8" />
                  </div>
                  <div>ssdsdfsdadhd</div>
                </div>
                <div className="grid grid-cols-2  lg:w-fit   w-28  m-4 ">
                  <div>
                    <AiOutlineMail className="h-8 w-8" />
                  </div>
                  <div>ssdsdfsdadhd</div>{" "}
                </div>
                <div className="grid grid-cols-2  lg:w-fit  w-28   m-4 ">
                  <div>
                    <AiOutlineMessage className="h-8 w-8" />
                  </div>
                  <div>ssdsdfsdadhd</div>
                </div>
              </div>
              {/* icon wala part in left side ends */}

              <div className="col-span-2  grid   grid-rows-1 border-l border-gray-500">
                <div className="grid  grid-cols-3 w-5/12   m-4 ">
                  <label className=" col-span-2">full name</label>
                  <input
                    type="text"
                    className="bg-gray-300 rounded-md outline-none lg:h-10  h-8 lg:w-80 w-64 px-2"
                  />
                </div>
                <div className="grid grid-cols-3  w-5/12  m-4 ">
                  <label className="col-span-2">phone</label>
                  <input
                    type="text"
                    className="bg-gray-300 rounded-md outline-none lg:h-10 h-8 lg:w-80 w-64 px-2"
                  />
                </div>
                <div className="grid grid-cols-3  w-5/12   m-4 ">
                  <label className="col-span-2 ">email</label>
                  <input
                    type="text"
                    className="bg-gray-300 rounded-md outline-none lg:h-10 h-8 lg:w-80 w-64 px-2"
                  />
                </div>
                <div className="grid grid-cols-3   w-5/12   m-4 ">
                  <label className="col-span-2">message</label>
                  <input
                    type="text"
                    className="bg-gray-300 rounded-md outline-none  lg:h-10 h-8 lg:w-80  w-64 px-2"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* form div closed */}
        </div>
        </PageTemplate>

    </div>
  );
}

export default Contact;
