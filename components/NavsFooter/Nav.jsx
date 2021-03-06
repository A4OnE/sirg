import React, { useEffect, useState } from "react";
import NavItems from "./Navigations.json";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import imageLogo from "../../images/vipLogo.jpg";
import { GrFormClose } from "react-icons/gr";
import { useRouter } from "next/router";
import { fadeInLeft, fadeInRight } from "react-animations";
import Radium, { StyleRoot } from "radium";
import Aos from "aos";
import "aos/dist/aos.css";

function Nav() {
  const router = useRouter();
  const fadeLeft = {
    fadeInLeft: {
      animation: "x 1s ",
      animationName: Radium.keyframes(fadeInLeft, "animate__fadeInLeft"),
    },
  };
  useEffect(() => {
    Aos.init({ once: true, duration: 300 });
  }, []);
  // const fadeLeftt = {
  //   fadeInLeft: {
  //     animation: "x 1s",
  //     animationName: Radium.keyframes(fadeInLeft, "animate__fadeInLeft"),
  //   },
  // };
  // const fadeRight = {
  //   fadeInRight: {
  //     animation: "x 1.6s",
  //     animationName: Radium.keyframes(fadeInRight, "animate__fadeInRight"),
  //   },
  // };
  // const [active, setActive] = useState("ALL");

  // function handleClick(newValue) {
  //   alert(newValue);
  //   setActive(newValue);
  // }
  const [mobileNav, setMobileNav] = useState(false);
  const [clicked, setClicked] = useState("");

  return (
    <div className=" h-full bg-white   text-primary z-20 sticky top-0  left-0  shadow-md">
      <div
        className=" container mx-auto px-4 lg:px-8 
        
       text-whit flex items-center  lg:justify-between "
      >
        {mobileNav ? (
          <GrFormClose
            className={`text-xl block z-50   shadow-md border bg-white  translate-x-52  translate-y-  md:translate-x-64  rounded-full ${
              mobileNav
                ? "transform hover:rotate-180 duration-500 delay-200 animate-ulse ease-in-out"
                : null
            } h-12  p-1  w-12 lg:hidden cursor-pointer `}
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
          />
        )}

        {/* <h2 className="font-bold">VIP GROUP</h2> */}
        <div className="flex py-2   w-fit mx-auto lg:mx-0  items-center justify-center">
          <Link href={"/"} passHref>
            <div className="w-36 h-16 relative  cursor-pointer ">
              <Image
                src={imageLogo}
                width={800}
                height={80}
                layout="fill"
                alt="images"
                sizes="min-width(600px) 50vh"
                quality={30}
                objectFit="revert"
                objectPosition={"bottom center"}
                // className="flex items-center justify-items-center"
              />
            </div>
          </Link>
        </div>

        <div
          className="hidden  lg:flex flex-col lg:flex-row  items-center space-x-6"
          data-aos="fade-left"
        >
          {NavItems.map((item, i) => {
            if (!item.subNav) {
              return (
                <Link key={i} href={item.to}>
                  <a
                    className={`text-lg  hover:scale-105   
                    ${
                      item.to === router.route
                        ? "border-b-2 border-black"
                        : null
                    }
                    
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
        className={`${mobileNav ? "fixed  " : "  hidden"}  lg:hidden  flex-col  
        text-whit  top-0  transparent left-0 h-screen z-40 w-full sm:w-full
        grid grid-cols-2 sm:grid-cols-3
        
              `}
      >
        <StyleRoot>
          <div
            className=" col-span-1 z-50  text-primary h-full w-full  py-5 bg-gray-50 shadow-xl "
            style={fadeLeft.fadeInLeft}
          >
            {NavItems.map((item, i) => (
              <Link key={i} href={item.to}>
                <a
                  className={`text-lg font-openSansSix h-10  
                 flex items-center hover:scale-105    m-5
                                ${
                                  router.pathname === item.to
                                    ? " text-black font-openSansFour"
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
            className="    h-full w-screen col-span-1  sm:col-span-2"
            onClick={() => setMobileNav(false)}
            // style={fadeRight.fadeInRight}
            // style={fadeLeftt.fadeInLeft}
          ></div>
        </StyleRoot>
      </div>
    </div>
  );
}

export default Nav;
