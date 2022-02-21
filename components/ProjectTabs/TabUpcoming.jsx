import React from "react";
import ProjectsComponent from "./ProjectsComponent";

function TabUpcoming({data}) {
  // const data = [
  //   {
  //     image:
  //       "https://image.shutterstock.com/image-vector/new-project-start-concept-vector-260nw-1713447478.jpg",
  //     title: "Upcoming Project",
  //     description:
  //       "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
  //   },
  // ];
  return (
    <div>
            {data.map((val, i) => {
        let image = `${process.env.Url}/images/${val.img}`;
        return (
          <ProjectsComponent
            key={i}
            img={image}
            title={val.project_title}
            description={val.project_details}
          />
        );
      })}
    </div>
  );
}

export default TabUpcoming;
