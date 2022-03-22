import Link from "next/link";
import React from "react";
import Image from "next/image";
function ProjectCard({ id, title, desc, img }) {
  return (
    <div className="bg-white shadow-lg transition transform hover:shadow-xl hover:scale-105">
      <Link href={`/Project/details/${id}`} passHref>
        <Image
          src={img}
          layout="responsive"
          height={80}
          width={100}
          quality={30}
          objectFit="cover"
          objectPosition="center"
          alt="images"
          className="h-72 w-full object-cover cursor-pointer"
        />
      </Link>
      <div className="p-4 ">
        <Link href={`/Project/details/${id}`} passHref>
          <h2 className="text-gray-800 cursor-pointer font-openSansSeven">
            {title}
          </h2>
        </Link>
        <p className="my-3 line-clamp-4 text-gray-600 font-openSansFive">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
