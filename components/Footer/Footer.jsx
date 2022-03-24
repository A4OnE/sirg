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
    <div className="bg-gray-800  pt-16 lg:pt-24 pb-10 text-white">
      <div className="grid sm:grid-cols-12  items-center  mx-4 sm:mx-0 sm:justify-items-center">
        <div className="col-span-2 sm:col-span-5 z-50  w-full flex  sm:justify-end  ">
          <div className="p-4 lg:px-12">
            <p className="font-openSansSix  text-center border-b-2 sm:mx-auto md:mx-0 w-fit text-xs md:text-xl lg:text-2xl">
              Contact Information
            </p>

            <div className="flex space-x-2 sm:space-x-4 my-1 font-openSansFour lg:my-3  text-xs md:text-base lg:text-xl items-center">
              <IoCall />
              <p>+977-9857074929</p>
            </div>
            <div className="flex space-x-2 sm:space-x-4 my-1 font-openSansFour  lg:my-3  text-xs md:text-base lg:text-xl items-center">
              <IoMdMail />
              <a href="">info@vipgroupnepal.com</a>
            </div>
            <div className="flex space-x-2 sm:space-x-4 my- lg:my-3 font-openSansFour  text-xs md:text-base lg:text-xl items-center">
              <BiCurrentLocation />
              <p>Butwal Rupandehi</p>
            </div>
          </div>
        </div>
        <Link href={"/"} passHref>
          <div
            className="sm:w-36 lg:w-8/12 cursor-pointer sm:h-80 lg:h-96 relative row-start-3 sm:row-start-1 
          sm:col-start-6  sm:col-span-2   sm:mx-14  "
          >
            <Image
              src={imageLogo}
              width={"100%"}
              height={"80%"}
              layout="responsive"
              alt="images"
              sizes="100vw"
              quality={60}
              // objectFit="cover"
              objectPosition={" center"}
              className=" bg-gray-800  "
            />
          </div>
        </Link>

        <div className="  w-full flex z-50 justify-start      sm:col-span-5">
          <div className="flex p-4 flex-col capitalize items-start sm:mx-5 lg:mx-10">
            <div className="font-openSansSix  my-1  border-b-2 w-fit text-sm md:text-xl lg:text-2xl">
              quick links
            </div>
            <Link href={"/Projects"} passHref>
              <div className="flex space-x-4 my-1 lg:my-2 cursor-pointer font-openSansFour text-xs md:text-base lg:text-xl">
                Finished Projects
              </div>
            </Link>
            <Link href={"/Projects"} passHref>
              <div className=" flex space-x-4 my-1  cursor-pointer font-openSansFour text-xs md:text-base lg:text-xl">
                Running Projects
              </div>
            </Link>
            <Link href={"/Projects"} passHref>
              <div className="flex space-x-4 my-1 cursor-pointer font-openSansFour text-xs md:text-base lg:text-xl">
                Upcoming Projects
              </div>
            </Link>
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
