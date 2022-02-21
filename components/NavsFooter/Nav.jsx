import React, { useState } from "react";
import NavItems from "./Navigations.json";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

function Nav() {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <div className="bg-blue-800 h-full">
      <div className=" container mx-auto px-4 lg:px-8  text-white flex items-center justify-between">
        <FaBars
          className="text-xl block lg:hidden"
          onClick={() => {
            setMobileNav(!mobileNav);
          }}
        />
        <h2 className="font-bold">VIP GROUP</h2>
        <div className="hidden lg:block flex flex-col lg:flex-row items-center space-x-6">
          {NavItems.map((item,i) => (
            <Link key={i} href={item.to}>
              <a className="text-lg">{item.title}</a>
            </Link>
          ))}
        </div>
      </div>
      {/* mobile nav section */}
      <div
        className={`${
          mobileNav ? "block" : "hidden"
        } lg:hidden flex flex-col space-y-8 p-5 text-white`}
      >
        {NavItems.map((item,i) => (
          <Link key={i} href={item.to}>
            <a className="text-lg">{item.title}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Nav;
