import Head from "next/head";
import Link from "next/link";
import ProjectsHomeCard from "../components/Cards/ProjectsHomeCard";
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
        <HomeSlider />

        {/* about us section starts  */}
        <div
          className="text-center my-24 py-10 "
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="">
            <h1>About Us</h1>
            <hr className="w-96 mx-auto border-2" />
            <p className="my-10 leading-8 lg:p-10">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. In publishing
              and graphic design, Lorem ipsum is a placeholder text commonly
              used to demonstrate the visual form of a document or a typeface
              without relying on meaningful content. In publishing and graphic
              design, Lorem ipsum is a placeholder text commonly used to
              demonstrate the visual form of a document or a typeface without
              relying on meaningful content.
            </p>
          </div>
          <div className="my-10">
            <Link href={"/About"}>
              <button className="btn-primary rounded-full">
                More About Us
              </button>
            </Link>
            <ProjectsHomeCard/>
          </div>
        </div>
        {/* about us section ends  */}
      </PageTemplate>
    </div>
  );
}
