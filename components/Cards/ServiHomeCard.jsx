import React from "react";

function ServiHomeCard({ img, title, description }) {
  return (
    <div className="md:-mt-24 md:text-center px-1">
      {/* <img src={img} className="h-44 w-56" />
       */}
      <div
        className="h-44"
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <h1 className="text-2xl md:text-2xl font-normal ">{title}</h1>
      <p className=" line-clamp-2 text-gray-600">{description}</p>
    </div>
  );
}

export default ServiHomeCard;
