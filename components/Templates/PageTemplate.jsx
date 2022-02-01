import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../NavsFooter/Nav";

function PageTemplate(props) {
  return (
    <div>
      <Nav />
      <div className="container mx-auto px-4 lg:px-8">{props.children}</div>
      <Footer />
    </div>
  );
}

export default PageTemplate;
