import React, { useState } from "react";
import ProjectsComponent from "./ProjectsComponent";

function TabFinished({ data }) {
  // const [Index, setIndex] = useState(1)
  // const data = [
  //   {
  //     image:
  //       "https://thumbs.dreamstime.com/b/finished-label-round-band-sign-stamp-171559531.jpg",
  //     title: "finished Projects",
  //     description:
  //       "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content ",
  //   },
  // ];
  console.log(data);
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

export default TabFinished;
