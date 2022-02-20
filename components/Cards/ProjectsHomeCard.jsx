import Link from "next/link";
import React from "react";

function ProjectsHomeCard() {
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10  lg:gap-8 my-24">
        {/* left section of projects card  */}
        {data.map((item) => (

          <div className="flex flex-col  ">
            <div className="bg-gray-500 h-44 w-full"></div>
            <div className="my-4 font-bold">
              <p className="capitalize  text-xl md:text-2xl">{item.title}</p>

            </div>
            <div className="text-gray-600 line-clamp-2">{item.description}</div>
          </div>
        ))}
        {/* left section of projects card ends */}
        {/* rigt side of our project section  */}

        <div className="row-start-1 lg:col-start-3">
          <div className="flex flex-col mx-auto text-center  w-fit items-start ">
            <p className=" text-2xl md:text-4xl  capitalize font-bold ">
              our projects
            </p>
            <p className="w-20 h-1  my-1 md:my-2 bg-blue-600  " />
          </div>
          <div className="my-4   leading-7 line-clamp-6">
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
              <button className="btn-primary rounded-full ">
                Our Projects
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
