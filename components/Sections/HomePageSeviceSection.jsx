import React from "react";
import ServiHomeCard from "../Cards/ServiHomeCard";

function HomePageSeviceSection() {
  const data = [
    {
      image:
        "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Service one",
      description:
        "Lore is an American horror anthology television series developed by the creator of the podcast of the same name, Aaron Mahnke, with Valhalla Entertainment and Propagate Content. The series airs through Amazon Prime Video and follows the podcast's anthology format with each episode featuring a new story.",
    },
    {
      image:
        "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Service two",
      description:
        "Lore is an American horror anthology television series developed by the creator of the podcast of the same name, Aaron Mahnke, with Valhalla Entertainment and Propagate Content. The series airs through Amazon Prime Video and follows the podcast's anthology format with each episode featuring a new story.",
    },
    {
      image:
        "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Service three",
      description:
        "Lore is an American horror anthology television series developed by the creator of the podcast of the same name, Aaron Mahnke, with Valhalla Entertainment and Propagate Content. The series airs through Amazon Prime Video and follows the podcast's anthology format with each episode featuring a new story.",
    },
  ];
  return (
    <div className="py-10">
      <div className="grid grid-cols-3 gap-4 lg:gap-8">
        {data.map((item) => (
          <ServiHomeCard
            img={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePageSeviceSection;
