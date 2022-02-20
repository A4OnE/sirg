import Head from "next/head";
import Link from "next/link";
import ProjectsHomeCard from "../components/Cards/ProjectsHomeCard";
import ServiHomeCard from "../components/Cards/ServiHomeCard";
import HomePageSeviceSection from "../components/Sections/HomePageSeviceSection";
import HomePageWelcomeSection from "../components/Sections/HomePageWelcomeSection";
import HomeSlider from "../components/Sliders/HomeSlider";
import PageTemplate from "../components/Templates/PageTemplate";
import background from "../images/aboutbg.png";
import { staticAbout } from "../components/staticData/StaticData";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vip Group</title>
        <meta
          name="description"
          content="This is the official site of VIP GROUP PVT.LTd."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTemplate>
        <HomePageWelcomeSection />

        <div className="container mx-auto px-4 lg:px-8">
          {/* <HomeSlider /> */}

          {/* about us section starts  */}
          <div
            className="text-center  md:my-24 py-8 md:py-10 "
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className=" text-left ">
              <div className="flex flex-col mx-auto text-center w-fit items-start ">
                <p className=" text-2xl md:text-4xl  capitalize font-bold ">
                  about us
                </p>
                <p className="w-20 h-1  my-1 md:my-2 bg-blue-600  " />
              </div>
              <p className="my-5 md:my-5 leading-8 lg:p-5 line-clamp-4">
                {staticAbout.aboutUs}
              </p>
            </div>
            <div className="pt-5 ">
              <Link href={"/About"}>
                <button className="btn-primary rounded-full">
                  More About Us
                </button>
              </Link>
            </div>
          </div>

          <ProjectsHomeCard />

          {/* about us section ends  */}
          {/* Service section starts here */}
          <div className="text-center md:py-10">
            <div className="flex flex-col mx-auto text-center w-fit items-start ">
              <p className=" text-2xl md:text-4xl  capitalize font-bold ">
                what do we do?{" "}
              </p>
              <p className="w-20 h-1  my-1 md:my-2 bg-blue-600  " />
            </div>{" "}
            <p className="text-sm font-medium md:text-lg">
              Services we offer to our custormers
            </p>
            <div className="my-8">
              <Link href={"/Services"}>
                <button className="btn-primary rounded-full">View All</button>
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
