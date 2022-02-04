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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 my-24">
        {/* left section of projects card  */}
        {data.map((item) => (
          <div className="flex flex-col">
            <div className="bg-gray-500 h-44 w-full"></div>
            <div className="my-4 font-bold">
              <h2>{item.title}</h2>
            </div>
            <div className="my-2 text-gray-600 line-clamp-2">
              {item.description}
            </div>
          </div>
        ))}
        {/* left section of projects card ends */}
        {/* rigt side of our project section  */}
        <div className="row-start-1 lg:col-start-3">
          <h1 className="-mt-2">Our Projects </h1>
          <hr className="my-2 border-4 border-primary w-20 rounded-full" />
          <div className="my-4 text-gray-600 leading-7 line-clamp-6">
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. In publishing
              and graphic design, Lorem ipsum is a placeholder text commonly
              used to demonstrate the visual form of a document or a typeface
              without relying on meaningful content. In publishing and graphic
              design, Lorem ipsum is a placeholder text commonly used to
              demonstrate the visual form of a document or a typeface without
              relying on meaningful content.
            </p>
          </div>
          <div className="my-4 mt-10">
            <Link href={"/Projects"}>
              <button className="btn-outline-primary rounded-full">
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
