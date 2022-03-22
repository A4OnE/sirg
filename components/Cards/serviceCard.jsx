import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
function ServiceCard({ id, img, title, description }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="card rounded-md space-y-2 sm:space-y-3 lg:space-y-4">
      <div
        className=""
        // style={{
        //   background: `url(${img})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <Image
          src={img}
          alt="image"
          srcSet=""
          height={150}
          width={150}
          layout="intrinsic"
          // objectFit="center"
          objectPosition="center"
          quality={30}
          className="rounded-full"
        />
      </div>
      <p className=" font-openSansSeven">{title}</p>
      <div
        className="
      line-clamp-3
       font-openSansFive
      "
      >
        {description}
      </div>
      <div>
        <Link href={`service/${id}`} passHref>
          <button
            className="
        btn-outline-gray text-black hover:translate-x-1 font-openSansSix hover:text-blue-900 flex flex-row justify-center   rounded-md items-center      
        "
          >
            Find out more
            <span>
              <IoIosArrowForward className="ml-2 " />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
