import Link from "next/link";
import React from "react";
import NavItems from "../NavsFooter/Navigations.json";
import SocialMedia from "../PageEssentials/SocialMedia";
import Image from "next/image";
import imageLogo from "../../images/vipV2_1.webp";
import { IoCall } from "react-icons/io5";
import { BiCurrentLocation } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
function Footer() {
  return (
    <div className="bg-gray-800  pt-10 lg:pt-15 pb-10 text-white ">
      <div className="sm:grid sm:grid-cols-12 items-center lg:items-start  ">
        <div
          className=" sm:col-span-12 px-4 py-2 sm:py-4 lg:col-span-2 lg:w- cursor-pointer   relative 
     "
        >
          {" "}
          <Link href={"/"} passHref>
            <div className="lg:w-10/12 -mx-8 sm:w-4/12 w-3/5 sm:-my-1">
              <Image
                src={imageLogo}
                width={100}
                height={50}
                layout="responsive"
                alt="images"
                sizes="100vw"
                quality={60}
                objectFit="contain"
                objectPosition={" center"}
                className=" bg-gray-800  "
              />
            </div>
          </Link>
          <div className="text-left  font-openSansFour  lg:font-openSansFive text-gray-200  md:text-sm text-xs">
            Connecting the youths to inspire the world !!
          </div>
        </div>

        <div className=" z-50 lg:col-span-3 col-span-4    ">
          <div className="px-4 py-2 sm:py-4 lg:px-12 ">
            <div className="font-openSansFive capitalize my-2  border-b-2 w-fit text-sm md:text-lg lg:text-xl">
              quick links
            </div>

            <Link href={"/Projects"} passHref>
              <div className="flex space-x-2 sm:space-x-4 text-gray-200 my-1 font-openSansThree lg:my-2  text-xs md:text-sm lg:text-lg items-center">
                Finished Projects
              </div>
            </Link>
            <Link href={"/Projects"} passHref>
              <div className="flex space-x-2 sm:space-x-4 text-gray-200 my-1 font-openSansThree  lg:my-2  text-xs md:text-sm lg:text-lgitems-center">
                Running Projects
              </div>
            </Link>
            <Link href={"/Projects"} passHref>
              <div className="flex space-x-2 sm:space-x-4 text-gray-200 my-1  font-openSansThree lg:my-2 text-xs md:text-sm lg:text-lgitems-center">
                Upcoming Projects
              </div>
            </Link>
          </div>
        </div>
        <div className=" z-50 lg:col-span-5 w-full col-span-5  ">
          <div className="px-4 py-2 sm:py-4 lg:px-12">
            <div className="font-openSansFive my-2 text-center  border-b-2  md:mx-0 w-fit text-xs md:text-lg lg:text-xl">
              Contact Information
            </div>

            <div className="flex space-x-2 sm:space-x-4 my-1 font-openSansThree lg:my-2 text-gray-200  text-xs md:text-sm lg:text-lg items-center">
              <IoCall />
              <p>+977-9857074929</p>
            </div>
            <div className="flex space-x-2 sm:space-x-4 my-1 font-openSansThree text-gray-200 lg:my-2  text-xs md:text-sm lg:text-lg items-center">
              <IoMdMail />
              <a href="">info@vipgroupnepal.com</a>
            </div>
            <div className="flex space-x-2 sm:space-x-4 my-1  text-gray-200 font-openSansThree lg:my-2 text-xs md:text-sm lg:text-lg items-center">
              <BiCurrentLocation />
              <p>Butwal Rupandehi</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 my-8 opacity-30">
        <hr />
      </div>

      {/* nav section footer  starts */}
      {/* <div className="grid grid-cols-2 gap-4 lg:flex lg:items-center lg:space-x-6 lg:justify-center">
        {NavItems.map((item,i) => (
          <Link key={i} href={item.to}>
            <a className="text-lg font-normal">{item.title}</a>
          </Link>
        ))}
      </div> */}
      {/* nav section footer ends  */}
      {/* social media section  */}
      <div className="flex justify-center my-10 text-3xl">
        <SocialMedia />
      </div>
      {/* social media section ends  */}
      {/* footer final seciton terms and condition starts  */}
      <div className="opacity-80 text-center text-sm">
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
