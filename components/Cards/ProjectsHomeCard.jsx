import React from "react";

function ProjectsHomeCard() {
  const data = [
    {
      image: "",
      title: "Title one",
      description: "dlskjflasjfsjfasjf",
    },
    {
      image: "",
      title: "Title one",
      description: "dlskjflasjfsjfasjf",
    },
  ];
  return (
    <div>
      {data.map((item) => (
        <img src={item.image} alt="" />
      ))}
    </div>
  );
}

export default ProjectsHomeCard;
