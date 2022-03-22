import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import axios from "../../AXIOS/Axios-create";
const HappyCustomer = () => {
  const data = [
    {
      nametitle: "MD of my Company Butwal",
      name: "Rabindra nath Taigore",
      img: "https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662__340.jpg",
      title: "Help us in our productivity",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content ",
    },
    {
      nametitle: "MD of my Casfaasdfompany Butwal",
      name: "Rabinsadfasdfdra nath Taigore",
      img: "https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662__340.jpg",
      title: "Help us inasdf our productivity",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content ",
    },
  ];
  const [body, setBody] = useState([]);
  const [index, setIndex] = useState(0);
  const getTestimonials = () => {
    axios
      .get("/testimonials")
      .then((res) => {
        setBody(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // component did mount ko kaam garcha yo code le
  useEffect(() => {
    getTestimonials();
  }, []);
  let nextData = (i) => {
    console.log(i, body.length);
    if (i < body.length - 1) {
      setIndex(i + 1);
    } else {
      setIndex(0);
    }
  };
  let PrevData = (i) => {
    console.log(i, body.length);
    if (i !== 0) {
      setIndex(i - 1);
    } else {
      setIndex(0);
    }
  };
  return (
    <div
      className="w-10/12
      fade-anim
  h-fit
  mt-10
    md:w-full 
    lg:w-full lg:mx-10 lg:my-32 
    

    "
    >
      <div className="ml-8">
        <div className="flex flex-col mx-auto  text-center w-fit items-start ">
          <p className=" text-2xl md:text-4xl  text-primary capitalize  md:font-openSansSeven font-openSansFive my-8 ">
            happy customers
          </p>
          {/* <p className="w-20 h-1  my-1 md:my-2 bg-blue-600  " /> */}
        </div>

        {/* <p className="text-primary  pt-3
        text-3xl font-bold tracking-wider">
          About us
        </p> */}
      </div>

      {body.map((val, i) => {
        let image = `${process.env.Url}/images/${val.img}`;
        if (i === index) {
          return (
            <div
              key={i}
              className="container mx-auto  px-4 lg:px-8 grid grid-cols-1 gap-0 m-10
      md:grid-cols-1
      lg:grid-cols-3 lg:gap-0 lg:ml-4
      sm:gap-0 sm:text-center
      "
            >
              <div
                className="w-full h-fit
        flex
        flex-col
        items-center
        justify-center

        "
              >
                <Image
                  src={image}
                  alt="image"
                  srcSet=""
                  height={400}
                  width={400}
                  layout="intrinsic"
                  objectPosition="center"
                  quality={30}
                  className="rounded-full"
                />
                <div className="flex mt-4">
                  <FaLongArrowAltLeft
                    onClick={() => PrevData(i)}
                    className="mr-4 text-4xl cursor-pointer"
                  />
                  <FaLongArrowAltRight
                    onClick={() => nextData(i)}
                    className=" text-4xl placeholder-opacity-50 cursor-pointer"
                  />
                </div>
              </div>
              <div className="lg:col-span-2  lg:ml-28 text-center">
                {/* <p className="text-gray-500 capitalize tracking-wider font-bold mb-6 text-3xl
          md:text-2xl md:mb-3 
          lg:text-4xl lg:mb-8 lg:w-1/2 lg:leading-snug
          
          ">
            {data[0].title}
          </p> */}
                <p
                  className="h-fit w-full  object-cover tracking-wider italic mt-8
          md:w-full
          lg:w-11/12 lg:text-lg
          sm:w-full line-clamp-10
          font-openSansFive
        
          "
                >
                  &ldquo;{val.feedback}&rdquo;
                </p>
                <div>
                  <p
                    className="text-gray-500 font-openSansSeven capitalize font-bold tg mt-6 text-center
             lg:mt-4  
             md:text-2xl 
             text-base
            "
                  >
                    {val.name}
                  </p>
                  <p className=" text-center font-openSansFive text-xs  md:text-lg">
                    {val.job_title}
                  </p>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default HappyCustomer;
