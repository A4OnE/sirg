import React from "react";

function ServiHomeCard() {
  const data = [
    {
      image: "",
      title: "Service One",
      description: "this is the first service we offer ...",
    },
  ];

  return (
    <div className="text-center">
      <img src={data[0].image} alt="" srcset="" />
      <h1 className="font-normal">{data[0].title}</h1>
      <p className="my-4">{data[0].description}</p>
    </div>
  );
}

export default ServiHomeCard;
