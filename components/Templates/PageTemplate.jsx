import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../NavsFooter/Nav";

function PageTemplate(props) {
  return (
    <div>
      <Nav />

      {props.children}
      <Footer />
    </div>
  );
}

export default PageTemplate;
