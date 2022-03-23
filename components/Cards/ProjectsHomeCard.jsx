import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "../../AXIOS/Axios-create";
import Image from "next/image";
function ProjectsHomeCard({ id }) {
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
    {
      title: "project two",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deserunt enim nulla voluptatem ullam sit reiciendis ipsam placeat? Odit quae veniam ut fugiat expedita blanditiis ab mollitia consectetur, voluptatibus sit",
    },
  ];
  return (
    <div className="bg-gray-50 ">
      <div className={` grid  grid-cols-2   pt-2 `}>
        {/* left section of projects card  */}
        <div className=" col-span-2 grid  grid-cols-2 mx-auto w-11/12  lg:grid-cols-3   gap-5 lg:gap-8">
          {Data.slice(0, 2).map((item, i) => {
            let image = `${process.env.Url}/images/${item.img}`;

            return (
              <div
                className={` flex flex-col space-y-3 md:space-y-5   my-4 pb-10
           }
          `}
                key={i}
                id={item.id}
              >
                <div
                  className={` h-44 w-full   relative`}
                  // style={{
                  //   backgroundImage: `url(${image})`,
                  //   backgroundRepeat: "no-repeat",
                  //   backgroundSize: "cover",
                  //   backgroundPosition: "center",
                  //   backgroundPositiony: "10px",
                  // }}
                >
                  <Image
                    layout="fill"
                    src={image}
                    // placeholder="blur"
                    alt="Picture of the projects"
                    width={500}
                    objectFit={"cover"}
                    objectPosition={"center"}
                    height={350}
                    quality={30}
                    loading={i === 0 ? "eager" : "lazy"}
                    className=" rounded-md"
                  />
                </div>
                <div className="my-4  font-openSansFive  md:font-openSansSix">
                  <Link href={`/Project/details/${item.id}`} passHref>
                    <p
                      className="capitalize   
                     flex  text-base
                     md:text-2xl cursor-pointer"
                    >
                      {item.project_title}
                    </p>
                  </Link>
                </div>
                <div className="text-gray-600 font-openSansFive line-clamp-2">
                  {item.project_details}
                </div>
                <Link href={`/Project/details/${item.id}`} passHref>
                  <button className="btn-outline-primary   capitalize hover:bg-blue-900 hover:text-white  rounded-full w-fit">
                    view more
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
        {/* left section of projects card ends */}
        {/* rigt side of our project section  */}

        <div className={`col-span-2  row-start-1 py-2 `}>
          <div className="flex flex-col  mx-auto text-center  w-fit  ">
            <p className=" text-2xl md:text-3xl lg:text-4xl  capitalize font-openSansSeven ">
              our projects
            </p>
            <p className="lg:w-64 lg:my-3 md:w-56 w-44 h-1  my-1 md:my-2 rounded-md bg-primary  " />

            {/* <p className="lg:w-56 md:w-32 w-20 h-1  my-3 lg:my-4 md:bg-blue-600  " /> */}
          </div>

          <div className="  font-openSansFive leading-7 line-clamp-6">
            <p className="  lg:text-center py-3 lg:py-8 mx-auto w-11/12 lg:w-9/12 leading-8 line-clamp-6 font-openSansFive  md:line-clamp-4 lg:line-clamp-6">
              We have been working on several fields such as event management,
              event organizer, entrepreneurship development, business
              development orientation, motivational seminar, skill based
              training, vocational training, personality development training,
              leadership training, job placement & so on.
            </p>
          </div>

          <div className=" my-3 lg:my-4  py-2 lg:py-0  flex justify-center lg:justify-center  ">
            <Link href={`/Projects`} passHref>
              <button className="btn-primary font-openSansFive  hover:text-white  rounded-full ">
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
