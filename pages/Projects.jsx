import React, { useState } from "react";

import PageTemplate from "../components/Templates/PageTemplate";
import { BiCategory } from "react-icons/bi";
import PageNavInfo from "../components/Page Info/PageNavInfo";
import ProjectCard from "../components/Cards/ProjectCard";
import Link from "next/link";
import ProjectCategory from "../components/Cards/ProjectCategory";
import Head from "next/head";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { fadeInDown, fadeInLeft, fadeInRight } from "react-animations";
import Radium, { StyleRoot } from "radium";

export async function getServerSideProps() {
  const [categoryRes, projectRes] = await Promise.all([
    fetch(`${process.env.Url}/projectcategory`),
    fetch(`${process.env.Url}/project`),
  ]);
  const [category, project] = await Promise.all([
    categoryRes.json(),
    projectRes.json(),
  ]);
  return { props: { category, project } };
}

function Projects({ category, project }) {
  const [showCategories, setShowCategories] = useState(false);
  // const handleClickk = () => {
  //   // if(active){

  //   // }
  //   setActive(name);
  //   alert("hh");
  // };

  function handleChange(newValue) {
    alert(newValue);
    setActive(newValue);
  }
  const fadeLeft = {
    fadeInLeft: {
      animation: "x 0.7s ",
      animationName: Radium.keyframes(fadeInLeft, "animate__fadeInLeft"),
    },
  };
  const fadeRight = {
    fadeInRight: {
      animation: "x 0.5s ",
      animationName: Radium.keyframes(fadeInRight, "animate__fadeInRight"),
    },
  };
  return (
    <div>
      <Head>
        <title>Projects</title>
        {/* primary meta tags  */}
        <meta name="title" content="Projects of VIP GROUP PVT.LTD." />
        <meta
          name="description"
          content="VIP Group has worked in different projects on diffrent fields. We've categorized our projects based on time i.e. Finished Projects, Running Projects and Upcoming Projects"
        />
        <link rel="icon" href="/logo.png" />

        {/* facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vipgroupnepal.com/Projects" />
        <meta property="og:title" content="Projects of VIP Group Pvt. Ltd " />
        <meta
          property="og:description"
          content="VIP Group has worked in different projects on diffrent fields. We've categorized our projects based on time i.e. Finished Projects, Running Projects and Upcoming Projects"
        />
        <meta
          property="og:image"
          content="https://api.vipgroupnepal.com/images/vip.jpg"
        />
        {/* twitter  */}
        <meta property="twitter:type" content="website" />
        <meta
          property="twitter:url"
          content="https://vipgroupnepal.com/Projects"
        />
        <meta
          property="twitter:title"
          content="Projects of VIP Group Pvt. Ltd"
        />
        <meta
          property="twitter:description"
          content="VIP Group has worked in different projects on diffrent fields. We've categorized our projects based on time i.e. Finished Projects, Running Projects and Upcoming Projects"
        />
        <meta
          property="twitter:image"
          content="https://api.vipgroupnepal.com/images/vip.jpg"
        />
      </Head>

      <PageTemplate>
        <div className="pb-14">
          {/* top section  */}
          <PageNavInfo page={"Projects"} page_nav="Home / Projects" />
          <div>
            <div className="container mx-auto my-6 px-1 sm:px-2 md:px-4 lg:px-8">
              {/* top grid for category and project starts  */}
              <div className="lg:grid lg:grid-cols-8 lg:gap-8">
                {/* category section  */}
                <div className="lg:col-span-2 my-8 p-4 lg:p-6  ">
                  <div
                    className="flex bg-white w-56 sm:w-64 items-center space-x-4 shadow-sm p-2 shadow-gray-500  text-xl "
                    onClick={() => setShowCategories(!showCategories)}
                  >
                    <BiCategory
                      className={`${showCategories ? "text-primary" : null}`}
                    />
                    <p
                      className={`font-openSansEight ${
                        showCategories ? "text-primary " : null
                      } `}
                    >
                      Categories
                    </p>
                    <div>
                      {showCategories ? (
                        <RiArrowUpSFill className={`text-primary h-7 w-7`} />
                      ) : (
                        <RiArrowDownSFill className="h-7 w-7" />
                      )}
                    </div>
                  </div>

                  <Link href={`/Projects`} passHref>
                    <p className="cursor-pointer font-openSansSeven  text-xl">
                      {/* All */}
                    </p>
                  </Link>
                  <StyleRoot>
                    {showCategories ? (
                      <div
                        className="bg-white w-56 sm:w-64 absolute z-10 shadow-sm shadow-gray-500  p-2 sm:p-5"
                        // style={fadeDown.fadeInDown}
                        style={fadeLeft.fadeInLeft}
                      >
                        {category.map((item) => (
                          <ProjectCategory
                            key={item.id}
                            // ided={item.id}
                            // values={handleChange}
                            handleClick={() => handleClickk()}
                            category={item.type}
                            link={`Project/${item.id}`}
                          />
                        ))}
                      </div>
                    ) : null}
                  </StyleRoot>
                </div>
                {/* category section ends  */}

                {/* projects section starts  */}
                <div className="lg:col-span-6 ">
                  <StyleRoot>
                    <div
                      className="grid sm:grid-cols-2 gap-6   lg:gap-8 "
                      style={fadeRight.fadeInRight}
                    >
                      {project.map((item) => (
                        <ProjectCard
                          key={item.id}
                          id={item.id}
                          title={item.project_title}
                          desc={item.project_s_des}
                          img={`${process.env.Url}/images/${item.img}`}
                        />
                      ))}
                    </div>
                  </StyleRoot>
                </div>
                {/* project section ends  */}
              </div>
              {/* grid ends  */}
            </div>
          </div>
        </div>
      </PageTemplate>
    </div>
  );
}

export default Projects;
