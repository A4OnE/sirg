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
    <div>
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
        <HomePageWelcomeSection />

        <div className="container mx-auto px-4 lg:px-8">
          {/* <HomeSlider /> */}

          {/* about us section starts  */}
          <div
            className="text-center  my-48  py-8 md:py-10 "
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className=" text-left ">
              <div className="flex flex-col mx-auto text-center w-fit items-center ">
                <p className=" text-2xl md:text-4xl  capitalize font-bold ">
                  about us
                </p>
                <p className="lg:w-80 lg:my-3 md:w-56 w-36 h-1  my-1 md:my-2 border-2 bg-gray-300  " />
              </div>
              <p className="my-5 md:my-5  md:text-center  mx-auto w-9/12 leading-8 lg:p-5 line-clamp-6  md:line-clamp-4 lg:line-clamp-6">
                {staticAbout.aboutUs}
              </p>
            </div>
            <div className="pt-5 ">
              <Link href={"/About"}>
                <button className="btn-outline-primary rounded-full">
                  More About Us
                </button>
              </Link>
            </div>
          </div>

          <ProjectsHomeCard />

          {/* about us section ends  */}
          {/* Service section starts here */}
          <div className="text-center  my-48 ">
            <div className="flex flex-col mx-auto text-center w-fit items-start ">
              <p className=" text-2xl md:text-3xl  capitalize font-semibold mb-3">
                what do we do?{" "}
              </p>
              {/* <p className="w-20 h-1  my-1 md:my-2 bg-blue-600  " /> */}
            </div>{" "}
            <p className="text-sm font-medium text-gray-600 md:text-lg">
              Services we offer to our custormers
            </p>
            <div className="mt-8">
              <Link href={"/Services"}>
                <button className="btn-outline-primary rounded-full  ">
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
