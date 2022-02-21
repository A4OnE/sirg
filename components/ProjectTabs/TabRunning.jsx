import React from "react";
import ProjectsComponent from "./ProjectsComponent";

function TabRunning({data}) {
  // const data = [
  //   {
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnlJ_CFO5P-NDOOB-faA0_WWZFRVicMU5RfDvAoyuDOw4XaVFbGcZ0h_wA1S2PIxZ0IVE&usqp=CAU",
  //     title: "Running Project",
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

export default TabRunning;
