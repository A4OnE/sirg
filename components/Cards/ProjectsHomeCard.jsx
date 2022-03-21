import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "../../AXIOS/Axios-create";
function ProjectsHomeCard() {
  const [Data, setData] = useState([]);
  const getProjects = () => {
    axios
      .get("/project")
      .then((res) => {
        setData(res.data);
        // data.push(res)
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getProjects();
  }, []);

  const data = [
    {
      title: "project one",
      description:
        "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deserunt enim nulla voluptatem ullam sit reiciendis ipsam placeat? Odit quae veniam ut fugiat expedita blanditiis ab mollitia consectetur, voluptatibus sit",
    },
    {
      title: "project two",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deserunt enim nulla voluptatem ullam sit reiciendis ipsam placeat? Odit quae veniam ut fugiat expedita blanditiis ab mollitia consectetur, voluptatibus sit",
    },
  ];
  return (
    <div>
      <div className={`grid md:grid-cols-3  gap-10   lg:gap-8 my-28`}>
        {/* left section of projects card  */}
        {Data.slice(0, 2).map((item, i) => {
          let image = `${process.env.Url}/images/${item.img}`;

          return (
            <div
              className={`flex flex-col 
          lg:items-center}
          `}
              key={i}
            >
              <div
                className={`bg-gray-500 h-44 w-full`}
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundPositiony: "10px",
                }}
              ></div>
              <div className="my-4 font-openSansSix">
                <Link href={`/Project/details/${item.id}`}>
                  <p className="capitalize  text-xl md:text-2xl cursor-pointer">
                    {item.project_title}
                  </p>
                </Link>
              </div>
              <div className="text-gray-600 font-openSansFive line-clamp-2">
                {item.project_details}
              </div>
            </div>
          );
        })}
        {/* left section of projects card ends */}
        {/* rigt side of our project section  */}

        <div className={`row-start-1 lg:col-start-3`}>
          <div className="flex flex-col lg:mx-0 mx-auto text-center  w-fit items-start ">
            <p className=" text-2xl md:text-3xl lg:text-4xl  capitalize font-openSansSeven ">
              our projects
            </p>
            <p className="lg:w-32 md:w-32 w-20 h-1  my-3 lg:my-4 md:bg-blue-600  " />
          </div>
          <div className="my-2  font-openSansFive leading-7 line-clamp-6">
            <p>
              We have been working on several fields such as Event Management,
              Event Orgainzers, Entrepreneurship Development, Business
              Development Orientation, Motivational Seminars,Skills based
              training, Vocational trainings, Personality Development trainings,
              Leadership trainings, Job placements & so on.
            </p>
          </div>

          <div className="my-4 flex justify-center lg:justify-start  mt-10">
            <Link href={"/Projects"}>
              <button className="btn-outline-primary font-openSansFive hover:bg-blue-900 hover:text-white  rounded-full ">
                View Projects
              </button>
            </Link>
          </div>
        </div>
        {/* ends  */}
      </div>
    </div>
  );
}

export default ProjectsHomeCard;
