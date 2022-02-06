import React from "react";
import { FaPlay } from "react-icons/fa";

function HomePageWelcomeSection() {
  return (
    <div>
      <div
        className="h-screen lg:w-full py-32 text-white bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(2,0,36,0.8995973389355743) 20%, rgba(1,85,124,0.6979166666666667) 55%, rgba(0,179,221,0.3029586834733894) 80%, rgba(0,212,255,0) 100%), url(https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
        }}
      >
        <div className="text-center">
          <h1 className="text-8xl font-bold">VIP GROUP</h1>
          <p className="text-xl font-semibold -mt-8">Slogon Goes Here !</p>
          <div className="flex flex-col items-center my-8 justify-center animate-pulse">
            <div className="bg-white h-10 w-10 rounded-full p-3 transition ">
              <FaPlay className="text-primary" />
            </div>
            <p className="tracking-widest mt-2 font-thin">PLAY NOW</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageWelcomeSection;