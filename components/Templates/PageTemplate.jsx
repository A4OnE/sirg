import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Nav from "../NavsFooter/Nav";

function PageTemplate(props) {
  return (
    <div>
      {/* <div className="grid grid-cols-4"> */}
      {/* <div className="col-span-1"> */}
      <Nav />
      {/* </div> */}
      {/* <div className="col-span-3"> */}
      {props.children}
      {/* </div> */}
      {/* </div> */}
      <Footer />
    </div>
  );
}

export default PageTemplate;
