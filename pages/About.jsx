import React, { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Head from "next/head";
import Link from "next/link";
import PageTemplate from "../components/Templates/PageTemplate";

import HappyCustomer from "../components/HappyCustomer/HappyCustomer";
import OurClients from "../components/Ourclients/OurClients";

import BodCard from "../components/Cards/BodCard";
function About() {
  const data = [
    {
      img: "https://static.generated.photos/vue-static/face-generator/landing/wall/23.jpg",
      name: "Sunder Darji",
      title: "Manager",
    },

    {
      img: "https://media.istockphoto.com/photos/smiling-mixed-race-mature-man-on-grey-background-picture-id1319763895?b=1&k=20&m=1319763895&s=170667a&w=0&h=jhqKyg62cQVZ-NjDQjpcenCdHDrprkN4caRjk4K76E8=",
      name: "Raj Kumar Darji",
      title: "Investor & Advisor",
    },

    {
      img: "https://us.123rf.com/450wm/vadymvdrobot/vadymvdrobot2003/vadymvdrobot200300051/142744663-image-of-a-young-strong-happy-cheery-sports-man-posing-outdoors-in-nature-green-park-looking-camera-.jpg?ver=6",
      name: "",
      title: "Project Manager",
    },
  ];
  const [Data, setData] = useState([
    {
      title: "Our Vision",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without  relying on meaningful content",
    },
    {
      title: "Our Mission",
      description:
        " To create a platform for  youths to learn their desired skills, help them to utilize their skills to Earn and Guide youths for ownership of their dream life. ",
    },
  ]);
  return (
    <div>
      <Head>
        <title>About us</title>
        <meta
          name="description"
          content="This is the official site of VIP GROUP PVT.LTd."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTemplate>
        <div className="container mx-auto px-4 lg:px-8">
          {/* About us introduction */}
          <div className="h-fit flex flex-col lg:flex-row w-full mt-5 ">
            <div className="lg:flex-1 ">
              <div className="bg-grayD h-96 lg:h-full lg:m-10 flex justify-center items-center">
                <p className="text-white ">Video modal</p>
              </div>
            </div>
            {/* right section  */}
            <div className="flex-1 mt-10 p-2">
              {/* <p className="text-base text-gray-400 my-2 mt-0 ">About us</p> */}
              <div className="flex flex-col mx-auto text-center  w-fit items-start ">
                <p className=" text-2xl md:text-4xl text-blue-700 capitalize font-bold ">
                  who we are?{" "}
                </p>
                <p className="w-20 h-1  my-1 md:my-2 bg-black  " />
              </div>
              <p className="w-full my-4 line-clamp-10 -tracking-tight leading-7 lg:leading-7 text-lg">
                {/* {staticAbout.aboutUs} */}
                VIP Group Pvt. Ltd (Visionary Idealist Personnel) is a company
                of dedicated and energetic youth Entreprenuers. Since 2019, we
                have been working on several fields such as
                <span className=" ml-1 font-medium text-left">
                  Event Management, Event Orgainzers, Entrepreneurship
                  Development, Business Development Orientation, Motivational
                  Seminars,Skills based training, Vocational trainings,
                  Personality Development trainings, Leadership trainings, Job
                  placements, Website Development & so on.
                </span>
                We Believe the concept of Learn, Earn, & Own. We train and
                provide platform for people to learn, provide multiple
                opportunities to Earn & also are providing different
                opportunities for Ownership of Dream life.
              </p>
              <div className="pt-10  h-fit flex justify-center md:justify-center sm:justify-center lg:justify-start">
                <Link href={"/Contact"}>
                  <div
                    className="btn-primary rounded-full
                                  inline t-4 shadow hover:shadow-md hover:shadow-gray-500 hover:scale-100"
                  >
                    Contact us
                  </div>
                </Link>
              </div>
            </div>
            {/* right section ends  */}
          </div>

          {/* our Vision  and our mission sections */}

          <div className=" w-full h-fit mt-20">
            {Data.map((val, i) => {
              return (
                <div
                  key={i}
                  className={`m-4 ${
                    i === 1
                      ? "ml-10  pl-0 mt-14 sm:pl-0  sm:ml-10 md:pl-0 md:ml-10 lg:ml-96 lg:pl-44"
                      : "ml-10"
                  } `}
                >
                  <div className="flex flex-col mx-auto lg:mx-0 text-center w-fit items-start ">
                    <p className=" text-2xl md:text-4xl text-blue-700 capitalize font-bold ">
                      {val.title}
                    </p>
                    <p className="w-20 h-1  my-1 md:my-2 bg-black " />
                  </div>
                  <div
                    className={`text-lg   leading-6 line-clamp-10
                  ${
                    i === 0
                      ? "w-full  sm:w-full lg:w-6/12 "
                      : "max-w-screen-xl sm:w-full"
                  } 
                  `}
                  >
                    {val.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container mx-auto px-4  mt-8 lg:px-8">
          <div>
            <h1 className="text-primary text-center gap-8 my-14 text-4xl tracking-wider font-bold">
              Board of Directors
            </h1>
          </div>
          {/* Bod body section */}
          <div className="container  mx-auto px-4  lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {data.map((item) => (
                <BodCard img={item.img} name={item.name} title={item.title} />
              ))}
            </div>
          </div>
        </div>

        <Link href={"/Aboutus/BOD"}>
          <div className="flex justify-center">
            <button className="btn-primary rounded-full flex items-center justify-between">
              view all <BsFillArrowRightCircleFill className="ml-2" />
            </button>
          </div>
        </Link>
        <div className="w-full flex justify-center items-center flex-col">
          <HappyCustomer />
          <OurClients />
        </div>
      </PageTemplate>
      {/* Happy Customer Section */}
    </div>
  );
}

export default About;
