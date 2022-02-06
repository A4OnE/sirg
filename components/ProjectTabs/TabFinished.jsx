import React from "react";
import ProjectsComponent from "./ProjectsComponent";

function TabFinished() {
  const data = [
    {
      image:
        "https://thumbs.dreamstime.com/b/finished-label-round-band-sign-stamp-171559531.jpg",
      title: "finished Projects",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content ",
    },
  ];
  return (
    <div>
      <ProjectsComponent
        img={data[0].image}
        title={data[0].title}
        description={data[0].description}
      />
    </div>
  );
}

export default TabFinished;
