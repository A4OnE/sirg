import React from "react";

function ServiHomeCard({ img, title, description }) {
  return (
    <div className="md:text-center px-1">
      <img />
      <h1 className="text-2xl md:text-4xl font-normal ">{title}</h1>
      <p className=" line-clamp-2 text-gray-600">{description}</p>
    </div>
  );
}

export default ServiHomeCard;
