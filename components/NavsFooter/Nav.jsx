import React, { useState } from "react";
import NavItems from "./Navigations.json";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import imageLogo from "../../images/Asset 1.png";
import { GrFormClose } from "react-icons/gr";
import { useRouter } from "next/router";
import { fadeInLeft, fadeInRight } from "react-animations";
import Radium, { StyleRoot } from "radium";

function Nav() {
  const fadeLeft = {
    fadeInLeft: {
      animation: "x 1.6s ",
      animationName: Radium.keyframes(fadeInLeft, "animate__fadeInLeft"),
    },
  };
  const fadeLeftt = {
    fadeInLeft: {
      animation: "x 1.5s",
      animationName: Radium.keyframes(fadeInLeft, "animate__fadeInLeft"),
    },
  };
  const fadeRight = {
    fadeInRight: {
      animation: "x 1.6s",
      animationName: Radium.keyframes(fadeInRight, "animate__fadeInRight"),
    },
  };
  const router = useRouter();
  // const [active, setActive] = useState("ALL");

  // function handleClick(newValue) {
  //   alert(newValue);
  //   setActive(newValue);
  // }
  const [mobileNav, setMobileNav] = useState(false);
  const [clicked, setClicked] = useState("");
  return (
    <div className=" h-full bg-white sticky top-0 left-0  shadow-md">
      <div
        className=" container mx-auto px-4 lg:px-8 
        
       text-whit flex items-center justify-between "
      >
        {mobileNav ? (
          <GrFormClose
            className={`text-xl block   bg-white  translate-x-56  translate-y-14  md:translate-x-64 z-50 rounded-full ${
              mobileNav
                ? "transform hover:rotate-180 duration-500 delay-200 ease-in-out"
                : null
            } h-11  p-1  w-11 lg:hidden cursor-pointer `}
            onClick={() => {
              setMobileNav(false);
            }}
          />
        ) : (
          <FaBars
            className="text-xl block lg:hidden h-8 w-8 p-1 cursor-pointer"
            onClick={() => {
              setMobileNav(true);
            }}
            style={fadeLeft.fadeInLeft}
          />
        )}

        {/* <h2 className="font-bold">VIP GROUP</h2> */}
        <div className="flex py-2 ">
          <Image
            src={imageLogo}
            alt="images"
            className="flex items-center justify-items-center"
          />
        </div>

        <div className="hidden  lg:flex flex-col lg:flex-row  items-center space-x-6">
          {NavItems.map((item, i) => {
            if (!item.subNav) {
              return (
                <Link key={i} href={item.to}>
                  <a
                    className={`text-lg  
                    ${item.to === router.route ? "text-red-500" : null}
                    
                    `}
                  >
                    {item.title}
                  </a>
                  {/* data(link); */}
                </Link>
              );
            } else {
              return (
                <div className="relative" onClick={() => setClicked(i)}>
                  <div>{item.title} </div>
                  {i == clicked && item.subNav ? (
                    <div className="flex flex-col divide-y-2 justify-center absolute  bg-primary shadow-md w-16 mx-auto border  gap-1 m-2 text-center active:bg-transparent">
                      {i == clicked && item.subNav
                        ? item.subNav.map((val, i) => {
                            return (
                              <Link key={i} href={val.to}>
                                {val.title}
                              </Link>
                            );
                          })
                        : null}
                    </div>
                  ) : null}
                </div>
              );
            }
          })}
        </div>
      </div>
      {/* mobile nav section */}
      <div
        className={`${mobileNav ? "fixed " : "hidden "}  lg:hidden  flex-col  
        text-whit top-0   justify- left-0 h-full z-40 w-full
        grid grid-cols-2 sm:grid-cols-3
        
              `}
      >
        <StyleRoot>
          <div
            className=" col-span-1 z-50 h-full w-full black overflow-y-scroll"
            style={fadeLeft.fadeInLeft}
          >
            {NavItems.map((item, i) => (
              <Link key={i} href={item.to} onClick={() => handleClick}>
                <a
                  className={`text-lg h-10 md:hover:shadow-md my-4   
                md:hover:bg-white 4 flex items-center  px-5
                                ${
                                  router.pathname === item.to
                                    ? "text-red-500"
                                    : null
                                }
                                `}
                >
                  {item.title}
                </a>
              </Link>
            ))}
          </div>
        </StyleRoot>
        <StyleRoot>
          <div
            className="transparent h-full w-screen col-span-1  sm:col-span-2"
            onClick={() => setMobileNav(false)}
            // style={fadeRight.fadeInRight}
            style={fadeLeftt.fadeInLeft}
          ></div>
        </StyleRoot>
      </div>
    </div>
  );
}

export default Nav;
