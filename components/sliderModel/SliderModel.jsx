import React from "react";
import Backdrop from "../backdrop/Backdrop";

function SliderModel(props) {
  return (
    <Backdrop>
      <div>
        <div className="  absolute   w-full h-full    ">{props.children}</div>
      </div>
    </Backdrop>
  );
}

export default SliderModel;
