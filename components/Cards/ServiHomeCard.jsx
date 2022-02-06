import React from "react";

function ServiHomeCard({ img, title, description }) {
  return (
    <div className="text-center">
      <img />
      <h1 className="font-normal">{title}</h1>
      <p className="m-4 line-clamp-2 text-gray-600">{description}</p>
    </div>
  );
}

export default ServiHomeCard;
