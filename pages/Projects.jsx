import React from "react";
import PageTemplate from "../components/Templates/PageTemplate";

import TabFinished from "../components/ProjectTabs/TabFinished";
import TabRunning from "../components/ProjectTabs/TabRunning";
import TabUpcoming from "../components/ProjectTabs/TabUpcoming";

function Projects() {
  const data = [
    {
      img: "https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662__340.jpg",
      title: "Project Sikkai",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content ",
    },
  ];

  const [tab, setTab] = React.useState("finished");
  let TabLayout;
  if (tab === "finished") {
    TabLayout = <TabFinished />;
  }
  if (tab === "running") TabLayout = <TabRunning />;
  if (tab === "upcoming") TabLayout = <TabUpcoming />;

  return (
    <PageTemplate>
      <div>
        <div className="container mx-auto px-4 lg:px-8 my-24">
          <div>
            <p className="text-5xl lg:text-6xl text-center font-bold text-primary py-8">
              Our Projects
            </p>
          </div>
          <div className=" flex text-xl mt-6">
            <div className=" flex space-x-6  mx-auto ">
              <p
                className={`text-gray-500 font-semibold  tracking-wider cursor-pointer  ${
                  tab === "finished" && "text-primary"
                }`}
                onClick={() => {
                  setTab("finished");
                }}
              >
                Finished Projects
              </p>
              <hr className=" border-4 border-black mx- auto w-20 rounded-full" />{" "}
              <p
                className={`text-gray-500 font-semibold  tracking-wider cursor-pointer  ${
                  tab === "running" && "text-primary"
                }`}
                onClick={() => {
                  setTab("running");
                }}
              >
                Running Projects
              </p>
              <p
                className={`text-gray-500 font-semibold  tracking-wider cursor-pointer  ${
                  tab === "upcoming" && "text-primary"
                }`}
                onClick={() => {
                  setTab("upcoming");
                }}
              >
                Upcoming Projects
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 lg:px-8">{TabLayout}</div>
      </div>
    </PageTemplate>
  );
}

export default Projects;
