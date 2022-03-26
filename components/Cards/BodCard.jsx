import React from "react";
import Image from "next/image";
function BodCard({ img, title, name }) {
  return (
    <div className=" m-5  ">
      <div className="shadow-sm shadow-gray-500 rounded-lg hover:scale-105   w-3/5   py-8 md:w-6/12 cursor-pointer lg:w-10/12 mx-auto  h-full    ">
        <div className="w-10/12 hover:bg-black rounded-md   hover:opacity-90   mx-auto ">
          <Image
            src={img}
            alt="image"
            srcSet=""
            height={"100%"}
            width={"80%"}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            quality={30}
            className="rounded-md hover:opacity-75 "
          />
        </div>
        <div className="">
          <p className="text-2xl font-openSansSix text-center py-2  gap-2">
            {name}
          </p>
          <p className="text-lg font-openSansFive  text-center gap-2">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BodCard;
