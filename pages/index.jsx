import Head from "next/head";
import HomePageSeviceSection from "../components/Sections/HomePageSeviceSection";
import HomePageWelcomeSection from "../components/Sections/HomePageWelcomeSection";
import Link from "next/link";
import PageTemplate from "../components/Templates/PageTemplate";
import ProjectsHomeCard from "../components/Cards/ProjectsHomeCard";
import ServiHomeCard from "../components/Cards/ServiHomeCard";
import background from "../images/aboutbg.png";
import { staticAbout } from "../components/staticData/StaticData";
import { useRef, useState } from "react";

export default function Home() {
  const nextVideo = useRef(null);
  const [show, setshow] = useState(false);
  const play = (e) => {
    setshow(true);
    // nextVideo.play();
  };
  return (
    <div className="">
      <Head>
        <title>Vip Group</title>
        {/* primary meta tags  */}
        <meta
          name="title"
          content="This is the official site of VIP GROUP PVT.LTD."
        />
        <meta
          name="description"
          content="VIP Group Pvt. Ltd (Visionary Idealist Personnel) is a company of dedicated and energetic youth Entreprenuers. Since 2019, we have been working on several fields such asEvent Management, Event Orgainzers, Entrepreneurship Development, Business Development Orientation, Motivational Seminars,Skills based training, Vocational trainings, Personality Development trainings, Leadership trainings, Job placements, Website Development & so on."
        />
        <link rel="icon" href="/logo.png" />

        {/* facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vipgroupnepal.com/" />
        <meta
          property="og:title"
          content="VIP Group Pvt. Ltd (Visionary Idealist Personnel)"
        />
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
        <meta property="twitter:url" content="https://vipgroupnepal.com/" />
        <meta
          property="twitter:title"
          content="VIP Group Pvt. Ltd (Visionary Idealist Personnel)"
        />
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
        <div>
          {show ? (
            <video
              ref={nextVideo}
              autoPlay={show ? true : false}
              onPause={() => setshow(false)}
              loop
              controls
              style={{
                zIndex: -1,
                height: "100%",
              }}
            >
              <source src={"aboutus.mp4"} type="video/mp4" />
            </video>
          ) : (
            <HomePageWelcomeSection play={(e) => play(e)} />
          )}
        </div>

        <div className="container mx-auto  px-4 lg:px-8">
          {/* <HomeSlider /> */}

          {/* about us section starts  */}
          <div
            className="text-center  my-10  py-6  "
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className=" text-left ">
              <div className="flex flex-col mx-auto text-center w-fit items-center ">
                <p className=" text-2xl md:text-4xl  capitalize font-openSansSeven">
                  about us
                </p>
                <p className="lg:w-64 lg:my-3 md:w-56 w-36 h-1  my-1 md:my-2 rounded-md bg-primary  " />
              </div>
              <p className="my-5 md:my-3  lg:text-center  mx-auto md:w-11/12 lg:w-9/12 leading-8 lg:p-5 line-clamp-6 font-openSansFive  md:line-clamp-4 lg:line-clamp-6">
                {staticAbout.aboutUs}
              </p>
            </div>
            <div className=" py-4">
              <Link href={"/About"} passHref>
                <button className="btn-primary  hover:text-white font-openSansFive rounded-full">
                  More About Us
                </button>
              </Link>
            </div>
          </div>

          <ProjectsHomeCard />

          {/* about us section ends  */}
          {/* Service section starts here */}
          <div className="text-center  pt-14 pb-10 ">
            <div className="flex flex-col mx-auto text-center w-fit items-start ">
              <p className=" text-2xl md:text-3xl  capitalize font-openSansSeven mb-1">
                what do we do?{" "}
              </p>
              {/* <p className="w-20 h-1  my-1 md:my-2 bg-blue-600  " /> */}
            </div>{" "}
            <p className="text-sm font-openSansFive text-gray-600 md:text-lg">
              Services we offer to our custormers
            </p>
            <div className="mt-4">
              <Link href={"/Services"} passHref>
                <button className="btn-primary font-openSansFive hover:bg-blue-900 hover:text-white  rounded-full  ">
                  View All
                </button>
              </Link>
            </div>
          </div>
          <HomePageSeviceSection />
          {/* service section ends here  */}
        </div>
      </PageTemplate>
    </div>
  );
}
