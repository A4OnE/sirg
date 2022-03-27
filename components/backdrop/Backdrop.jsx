import React from "react";

function Backdrop(props) {
  return (
    <div
      className="  fixed bg-black  top-0
      bottom-0 right-0  left-0  z-50  h-full w-full bg-opacity-80"
    >
      {props.children}
    </div>
  );
}

export default Backdrop;
