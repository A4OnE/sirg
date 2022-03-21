import Link from "next/link";
import React from "react";

function ProjectCard({ id, title, desc, img }) {
  return (
    <div className="bg-white shadow-lg transition transform hover:shadow-xl hover:scale-105">
      <Link href={`/Project/details/${id}`}>
        <img
          src={img}
          alt=""
          className="h-72 w-full object-cover cursor-pointer"
        />
      </Link>
      <div className="p-4 ">
        <Link href={`/Project/details/${id}`}>
          <h2 className="text-gray-800 cursor-pointer">{title}</h2>
        </Link>
        <p className="my-3 line-clamp-4 text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
