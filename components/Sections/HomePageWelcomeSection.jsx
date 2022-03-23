import React from "react";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";

function HomePageWelcomeSection(props) {
  return (
    <div>
      <div
        className="h-screen lg:w-full py-32 text-white bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(2,0,36,0.8995973389355743) 20%, rgba(1,85,124,0.6979166666666667) 55%, rgba(0,179,221,0.3029586834733894) 80%, rgba(0,212,255,0) 100%), url(https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
        }}
      >
        <div className="text-center flex flex-col justify-center items-center  h-full ">
          <h1 className=" text-2xl md:text-5xl font-openSansEight">
            {" "}
            WELCOME TO VIP GROUP
          </h1>
          <p className="text-xl  animate-pulse font-openSansFive  -mt-2 md:-mt-8">
            Connecting the youths to inspire the world !!
          </p>
          <div
            className="flex flex-col items-center my-4 md:my-8 
          justify-center "
          >
            <div
              className="bg-white h-10 w-10
              
              rounded-full p-3 transition animate-pulse  cursor-pointer "
              onClick={props.play}
            >
              <FaPlay className="text-primary " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageWelcomeSection;
