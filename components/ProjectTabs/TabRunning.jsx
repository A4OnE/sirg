import React from "react";
import ProjectsComponent from "./ProjectsComponent";

function TabRunning() {
  const data = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnlJ_CFO5P-NDOOB-faA0_WWZFRVicMU5RfDvAoyuDOw4XaVFbGcZ0h_wA1S2PIxZ0IVE&usqp=CAU",
      title: "Running Project",
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

export default TabRunning;
