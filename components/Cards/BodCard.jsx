import React from "react";

function BodCard({ img, title, name }) {
  return (
    <div>
      <div className="shadow-md m-10">
        <img
          src={img}
          className="  mx-auto h-96 mb-6 mt-6 object-cover rounded-md"
          srcSet=""
        />
        <div className="py-6">
          <p className="text-2xl fond-bold text-center tracking-wider gap-2">
            {name}
          </p>
          <p className="text-xl font-thin text-center mt-2 tracking-wider gap-2">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BodCard;
