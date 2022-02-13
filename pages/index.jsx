import Head from "next/head";
import Link from "next/link";
import ProjectsHomeCard from "../components/Cards/ProjectsHomeCard";
import ServiHomeCard from "../components/Cards/ServiHomeCard";
import HomePageSeviceSection from "../components/Sections/HomePageSeviceSection";
import HomePageWelcomeSection from "../components/Sections/HomePageWelcomeSection";
import HomeSlider from "../components/Sliders/HomeSlider";
import PageTemplate from "../components/Templates/PageTemplate";
import background from "../images/aboutbg.png";

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
            className="text-center my-24 py-10 "
            style={{ backgroundImage: `url(${background})` }}
          >
            <div>
              <h1 className="text-primary">About Us</h1>
              <hr className=" border-4 border-black mx-auto  w-20 rounded-full" />
              <p className="my-10 leading-8 lg:p-10">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. In
                publishing and graphic design, Lorem ipsum is a placeholder text
                commonly used to demonstrate the visual form of a document or a
                typeface without relying on meaningful content. In publishing
                and graphic design, Lorem ipsum is a placeholder text commonly
                used to demonstrate the visual form of a document or a typeface
                without relying on meaningful content.
              </p>
            </div>
            <div className="my-10">
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
          <div className="text-center py-10">
            <h1 className="text-primary">What do we Do ?</h1>
            <hr className=" border-4 mb-2  border-black mx-auto w-20 rounded-full" />
            <p className="">Services we offer to our custormers</p>
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
