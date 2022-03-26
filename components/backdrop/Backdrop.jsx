import React from "react";

function Backdrop(props) {
  return (
    <div className=" fixed bg-black top-20  left-0  z-50  h-full w-full bg-opacity-40">
      {props.children}
    </div>
  );
}

export default Backdrop;
