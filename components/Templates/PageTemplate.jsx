import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Nav from "../NavsFooter/Nav";
import { IoIosArrowDropup } from "react-icons/io";
function PageTemplate(props) {
  // The back-to-top button is hidden at the beginning

  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <div>
      <Nav />

      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <IoIosArrowDropup />
        </button>
      )}
      <div> {props.children}</div>

      <Footer />
    </div>
  );
}

export default PageTemplate;

// .container {
//   width: 500px;
//   margin: auto;
//   text-align: center;
// }

// .back-to-top {
//   position: fixed;
//   bottom: 20px;
//   right: 20px;
//   font-size: 100px;
//   background: orange;
//   color: white;
//   cursor: pointer;
//   border-radius: 100px;
//   border: none;
//   box-shadow: 0 5px 10px #ccc;
// }

// .back-to-top:hover {
//   background: red;
// }

// /* Just some color boxes to make the page longer */
// .box {
//   width: 100%;
//   height: 80vh;
//   margin: 30px 0;
// }

// .box--1 {
//   background: yellow;
// }

// .box--2 {
//   background: green;
// }

// .box--3 {
//   background: pink;
// }

// .box--4 {
//   background: grey;
// }

// .box--5 {
//   background: purple;
// }
