import React, { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Head from "next/head";
import Link from "next/link";
import PageTemplate from "../components/Templates/PageTemplate";
import HappyCustomer from "../components/HappyCustomer/HappyCustomer";
import OurClients from "../components/Ourclients/OurClients";
import { staticAbout } from "../components/staticData/StaticData";
import image from "../images/vip.jpg";
import Image from "next/image";
// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.Url}/bod`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
import BodCard from "../components/Cards/BodCard";
import AboutVideoSection from "../components/Sections/AboutVideoSection";
function About({ data }) {
  const [Data, setData] = useState([]);

  return (
    <div>
      <Head>
        <title>About Us</title>
        {/* primary meta tags  */}
        <meta name="title" content="About VIP GROUP PVT.LTD." />
        <meta
          name="description"
          content="VIP Group Pvt. Ltd (Visionary Idealist Personnel) is a company of dedicated and energetic youth Entreprenuers. Since 2019, we have been working on several fields such asEvent Management, Event Orgainzers, Entrepreneurship Development, Business Development Orientation, Motivational Seminars,Skills based training, Vocational trainings, Personality Development trainings, Leadership trainings, Job placements, Website Development & so on."
        />
        <link rel="icon" href="/logo.png" />

        {/* facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vipgroupnepal.com/About" />
        <meta property="og:title" content="About VIP Group Pvt. Ltd " />
        <meta
          property="og:description"
          content="VIP Group Pvt. Ltd (Visionary Idealist Personnel) is a company of dedicated and energetic youth Entreprenuers. Since 2019, we have been working on several fields such asEvent Management, Event Orgainzers, Entrepreneurship Development, Business Development Orientation, Motivational Seminars,Skills based training, Vocational trainings, Personality Development trainings, Leadership trainings, Job placements, Website Development & so on."
        />
        <meta
          property="og:image"
          content="https://api.vipgroupnepal.com/images/vip.jpg"
        />

        {/* twitter  */}
        <meta property="twitter:type" content="website" />
        <meta
          property="twitter:url"
          content="https://vipgroupnepal.com/About"
        />
        <meta property="twitter:title" content="About VIP Group Pvt. Ltd" />
        <meta
          property="twitter:description"
          content="VIP Group Pvt. Ltd (Visionary Idealist Personnel) is a company of dedicated and energetic youth Entreprenuers. Since 2019, we have been working on several fields such asEvent Management, Event Orgainzers, Entrepreneurship Development, Business Development Orientation, Motivational Seminars,Skills based training, Vocational trainings, Personality Development trainings, Leadership trainings, Job placements, Website Development & so on."
        />
        <meta
          property="twitter:image"
          content="https://api.vipgroupnepal.com/images/vip.jpg"
        />
      </Head>
      <PageTemplate>
        <div className="container mx-auto px-4 lg:px-8">
          {/* About us introduction */}

          <div className=" flex flex-col lg:flex-row w-full mt-16 ">
            <div className="lg:flex-1 mb-8 ">
              <div
                className="  w-11/12 mx-auto  
                h-full lg:m-10 "
              >
                {/* <p className="text-white ">Video modal</p> */}
                <Image
                  src={image}
                  alt="images"
                  height={70}
                  width={100}
                  layout="responsive"
                  objectFit="contain"
                  objectPosition="center"
                  placeholder="blur"
                  // blurDataURL={`${process.env.Url}/images/${item.img}`}
                  blurDataURL={`${process.env.Url}/images/${image}`}
                  quality={70}
                />

                {/* <ReactPlayer  url={require('../images/aboutus.mp4')} /> */}
              </div>
            </div>
            {/* right section  */}
            <div className="flex-1  md:mt-10 mx-5 w-full  px-2 ">
              {/* <p className="text-base text-gray-400 my-2 mt-0 ">About us</p> */}
              <div className="flex flex-col mx-auto  lg:mx-0 text-center  w-fit items-start  ">
                <p className=" text-2xl md:text-4xl md:pt-10 lg:pt-0 font-openSansEight  text-primary capitalize font-bold ">
                  who we are?{" "}
                </p>
                {/* <p className="w-20 md:w-32 lg:w-40 h-1  my-1 md:my-2 bg-blue-600  " /> */}
              </div>

              <p className=" w-full my-4 font-openSansFive  leading-5 md:leading-7">
                {staticAbout.aboutUs}
                {/* VIP Group Pvt. Ltd (Visionary Idealist Personnel) is a company
                of dedicated and energetic youth Entreprenuers. Since 2019, we
                have been working on several fields such as
                <span className=" ml-1 font-openSansSix text-justify">
                  Event Management, Event Orgainzers, Entrepreneurship
                  Development, Business Development Orientation, Motivational
                  Seminars,Skills based training, Vocational trainings,
                  Personality Development trainings, Leadership trainings, Job
                  placements, Website Development & so on.
                </span>
                We Believe the concept of Learn, Earn, & Own. We train and
                provide platform for people to learn, provide multiple
                opportunities to Earn & also are providing different
                opportunities for Ownership of Dream life. */}
              </p>

              {/* <div className="pt-10  h-fit flex justify-center md:justify-center sm:justify-center lg:justify-start"> */}
              {/* <Link href={"/Contact"}>
                  <div className="border-2 font-semibold hover:bg-blue-900 hover:text-white  border-blue-700 w-fit flex items-center  px-4 h-10 text-blue-700 rounded-full cursor-pointer">

                    Contact us
                  </div>
                </Link> */}
              {/* </div> */}
            </div>
            {/* right section ends  */}
          </div>

          {/* our Vision  and our mission sections */}

          <div className="bg-gray-50 p-4   lg:py-16 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 lg:my-16 my-14">
            <div className="">
              <h1 className="text-5xl font-openSansEight lg:text-8xl text-primary">
                Our <br /> Mission <br /> & Vision
              </h1>
            </div>
            <div className="lg:mt-16 ">
              <p className=" font-openSansSeven text-gray-700 text-2xl">
                Our Mission
              </p>
              <p className="my-5 md:my-6 lg:my-8 font-openSansFive text-gray-800 text-left">
                To provide a platform for youths to learn desired skills, assist
                them in putting those skills to work, and guide in taking
                control of their dream lives.
              </p>
              <p className=" font-openSansSeven text-gray-700 text-2xl">
                Our Vision
              </p>
              <p className="my-5 md:my-6 lg:my-8 font-openSansFive text-gray-800 text-left">
                To establish as a leading company of Nepal in our specific field
                by connecting, inspiring youths and transforming them to live a
                life of entrepreneurial on their own terms.
              </p>
            </div>
          </div>

          {/* BOD SECTION  */}
          <div id="Bod" className="">
            <h1 className="text-primary font-openSansEight text-center gap-8 my-9 md:text-4xl tracking-wider ">
              Board of Directors
            </h1>

            {/* Bod body section */}
            <div className="py-2">
              <Link href={"/Aboutus/BOD"} passHref>
                <div className="pb-14">
                  <a className=" text-center cursor-pointer font-openSansFive btn-primary rounded-full flex items-center justify-center w-32 mx-auto">
                    view all <BsFillArrowRightCircleFill className="ml-2" />
                  </a>
                </div>
              </Link>
              <div className="grid lg:grid-cols-3 gap-8">
                {data.slice(0, 3)?.map((item) => (
                  <BodCard
                    key={item.id}
                    img={`${process.env.Url}/images/${item.img}`}
                    name={item.name}
                    title={item.job_title}
                  />
                ))}
              </div>
            </div>

            <div className="w-full flex  flex-col justify-center items-center">
              <HappyCustomer />
              <OurClients />
            </div>
          </div>
          {/* BOD SECITON ENDS  */}
        </div>
      </PageTemplate>
      {/* Happy Customer Section */}
    </div>
  );
}

export default About;
