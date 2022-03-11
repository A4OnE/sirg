import React, { useEffect, useState } from "react";
import axios from "../../AXIOS/Axios-create";
import ServiHomeCard from "../Cards/ServiHomeCard";

function HomePageSeviceSection() {
  const [Data, setData] = useState([]);
  const getProjects = () => {
    axios
      .get("/service")
      .then((res) => {
        setData(res.data);
        // data.push(res)
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="">
      <div className="grid mb-24 md:grid-cols-3 gap-4 pb-8 lg:gap-8">
        {Data.slice(0, 3).map((item, i) => {
          let image = `${process.env.Url}/images/${item.img}`;
          return (
            <ServiHomeCard
              key={i}
              img={image}
              title={item.service_title}
              description={item.service_details}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomePageSeviceSection;
