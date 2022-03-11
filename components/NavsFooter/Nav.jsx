import React, { useState } from "react";
import NavItems from "./Navigations.json";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

function Nav() {
  const [mobileNav, setMobileNav] = useState(false);
  const [clicked, setClicked] = useState("");
  return (
    <div className="bg-primary h-full">
      <div className=" container mx-auto px-4 lg:px-8  text-white flex items-center justify-between">
        <FaBars
          className="text-xl block lg:hidden"
          onClick={() => {
            setMobileNav(!mobileNav);
          }}
        />
        <Link href="/">
          <h2 className="font-bold cursor-pointer">VIP GROUP</h2>
        </Link>
        <div className="hidden  lg:flex flex-col lg:flex-row items-center space-x-6">
          {NavItems.map((item, i) => {
            if (!item.subNav) {
              return (
                <Link key={i} href={item.to}>
                  <a className="text-lg hover:text-blue-300">{item.title}</a>
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
        className={`${
          mobileNav ? "block" : "hidden"
        } lg:hidden flex flex-col space-y-8 p-5 text-white`}
      >
        {NavItems.map((item, i) => (
          <Link key={i} href={item.to}>
            <a className="text-lg">{item.title}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Nav;
