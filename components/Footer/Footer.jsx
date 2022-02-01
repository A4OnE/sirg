import Link from "next/link";
import React from "react";
import NavItems from "../NavsFooter/Navigations.json";
import SocialMedia from "../PageEssentials/SocialMedia";

function Footer() {
  return (
    <div className="bg-gray-800 text-center pt-24 pb-10 text-white">
      <h1>VIP GROUP</h1>
      <div className="my-8">
        <div className="flex items-center space-x-4 lg:space-x-8 justify-center">
          <Link href={"/Projects"}>
            <p className="cursor-pointer font-semibold">Finished Projects</p>
          </Link>
          <Link href={"/Projects"}>
            <p className="cursor-pointer font-semibold">Running Projects</p>
          </Link>
          <Link href={"/Projects"}>
            <p className="cursor-pointer font-semibold">Upcoming Projects</p>
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 my-8 opacity-30">
        <hr />
      </div>

      {/* nav section footer  starts */}
      <div className="grid grid-cols-2 gap-4 lg:flex lg:items-center lg:space-x-6 lg:justify-center">
        {NavItems.map((item) => (
          <Link href={item.to}>
            <a className="text-lg font-normal">{item.title}</a>
          </Link>
        ))}
      </div>
      {/* nav section footer ends  */}

      {/* social media section  */}
      <div className="flex justify-center my-10 text-3xl">
        <SocialMedia />
      </div>
      {/* social media section ends  */}

      {/* footer final seciton terms and condition starts  */}
      <div className="opacity-80 text-sm">
        <div className="flex items-center space-x-4 justify-center">
          <Link href={"/"}>
            <a className="">Terms & Conditions</a>
          </Link>
          <Link href={"/"}>
            <a className="">Privacy Policy</a>
          </Link>
        </div>

        <p className="mt-4">&copy; Copyright 2022 under VIP GROP PVT. LTD.</p>
      </div>
    </div>
  );
}

export default Footer;
