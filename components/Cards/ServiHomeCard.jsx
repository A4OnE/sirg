import React from "react";
import Link from "next/link";
import Image from "next/image";
function ServiHomeCard({ id, img, title, description }) {
  return (
    <div className=" md:text-center px-1 flex flex-col justify-around ">
      <div className=" ">
        <Image
          src={img}
          alt="image"
          srcSet=""
          height={500}
          width={800}
          layout="intrinsic"
          objectFit="contain"
          objectPosition="center"
          quality={30}
        />
      </div>
      <h1 className="text-lg lg:text-2xl font-openSansSix font-normal text-left   flex justify-start items-center ">
        {title}
      </h1>
      <p className=" line-clamp-5 text-left font-openSansFive text-gray-600">
        {description}
      </p>

      <div className="flex items-center  font-openSansFive justify-start my-5 pb-4">
        <Link href={`service/${id}`} passHref>
          <button className="btn-outline-primary capitalize hover:bg-blue-900 hover:text-white  rounded-full w-fit">
            read more
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ServiHomeCard;
