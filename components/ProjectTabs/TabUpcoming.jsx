import React from "react";
import ProjectsComponent from "./ProjectsComponent";

function TabUpcoming() {
  const data = [
    {
      image:
        "https://image.shutterstock.com/image-vector/new-project-start-concept-vector-260nw-1713447478.jpg",
      title: "Upcoming Project",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
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

export default TabUpcoming;
