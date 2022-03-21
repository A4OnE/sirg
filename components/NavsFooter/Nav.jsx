import React, { useState } from "react";
import NavItems from "./Navigations.json";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import imageLogo from "../../images/Asset 1.png";
import { GrClose } from "react-icons/gr";
import { useRouter } from "next/router";
function Nav() {
  const router = useRouter();
  const [active, setActive] = useState("ALL");

  function handleClick(newValue) {
    alert(newValue);
    setActive(newValue);
  }
  const [mobileNav, setMobileNav] = useState(false);
  const [clicked, setClicked] = useState("");
  return (
    <div className=" h-full bg-white sticky top-0 left-0  shadow-md">
      <div
        className=" container mx-auto px-4 lg:px-8 
        
       text-whit flex items-center justify-between "
      >
        {mobileNav ? (
          <GrClose
            className="text-xl block lg:hidden cursor-pointer"
            onClick={() => {
              setMobileNav(false);
            }}
          />
        ) : (
          <FaBars
            className="text-xl block lg:hidden cursor-pointer"
            onClick={() => {
              setMobileNav(true);
            }}
          />
        )}
        {/* <h2 className="font-bold">VIP GROUP</h2> */}
        <div className="flex py-2 ">
          <Image
            src={imageLogo}
            className="flex items-center justify-items-center"
          />
        </div>

        <div className="hidden  lg:flex flex-col lg:flex-row items-center space-x-6">
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
                            return <Link href={val.to}>{val.title}</Link>;
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
        className={`${
          mobileNav ? "fixed" : "hidden"
        } bg-gray-50 lg:hidden flex flex-col space-y-8 p-5 
        text-whit top-18  left-0 h-full z-50 w-64   `}
      >
        {NavItems.map((item, i) => (
          <Link key={i} href={item.to} onClick={() => handleClick}>
            <a
              className={`text-lg h-10 hover:shadow-md    hover:bg-white flex items-center  px-5
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
    </div>
  );
}

export default Nav;
