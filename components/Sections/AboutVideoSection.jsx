import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

function AboutVideoSection() {
  const [data, setdata] = useState("");
  console.log(typeof data);
  useEffect(() => {
    const fetch = async () => {
      await axios.get(`${process.env.Url}/videos`).then((res) => {
        console.log(res.data[1]?.video);
        setdata(`${process.env.Url}/images/${res.data[0]?.video}`);
      });
    };
    fetch();
  }, []);

  return (
    // //     <video width="400" controls>
    // //     <source src="mov_bbb.mp4" type="video/mp4">
    // //     <source src="mov_bbb.ogg" type="video/ogg">
    // //     Your browser does not support HTML video.
    // //   </video>
    // <video controls style={{ height: "100%" }}>
    //   <source src={`${data}`} type="video/mp4" />
    //   <source src={`${data}`} type="video/ogg" />
    // </video>
    <ReactPlayer url={`${data}`} controls style={{ width: "full" }} />
  );
}

export default AboutVideoSection;
