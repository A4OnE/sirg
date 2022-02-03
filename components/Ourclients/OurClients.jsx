
import React, { useState } from "react";
// import React from "react";

function OurClients() {
  const [head, SetHead] = useState([
    { title: "We have worked with...", data: "our clients" },
  ]);
  const [body, setBody] = useState([
    { name: "gofundme", icon: "", width: "20%" },
    { name: "TATA", icon: "", width: "10%" },
    { name: "eventbrite", width: "20%" },
    { name: "box", width: "10%" },
    { name: "Nordea", width: "20%" },
    {
      name: "SurveyMonkey",
      icon: "",
      width: "20%",
      fontWeight: "font-normal",
    },
  ]);

  return (
    <div className="flex justify-center h-96  flex-col items-center  ">
      {head.map((val, i) => {
        return (
          <div
            key={i}
            className=" w-3/5 h-fit  flex flex-col justify-end items-center     "
          >
            <div className="text-3xl text-blue-600 font-medium ">
              {" "}
              {val.title}
            </div>
            <div className="text-gray-500 mt-3 capitalize text-xl">
              {val.data}
            </div>
          </div>
        );
      })}
      <div className="h-fit lg:w-10/12 md:w-full  flex    flex-wrap flex-col flex-wrap  items-center ">
        <div className="flex  flex-row  flex-wrap h-48 lg:w-6/12 md:w-10/12      justify-center items-end">
          {body.map((val, i) => {

import React, { Component } from "react";

export class OurClients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      head: [{ title: "We have worked with...", data: "our clients" }],
      body: [
        { name: "gofundme", icon: "", width: "20%" },
        { name: "TATA", icon: "", width: "10%" },
        { name: "eventbrite", width: "20%" },
        { name: "box", width: "10%" },
        { name: "Nordea", width: "20%" },
        {
          name: "SurveyMonkey",
          icon: "",
          width: "20%",
          fontWeight: "font-normal",
        },
      ],
    };
  }
  render() {
    return (
      <div
        className="h-96  w-full  flex   flex-col justify-center  items-center 
      "
      >
        {this.state.head.map((val, i) => {
          return (
            <div
              key={i}
              className=" w-3/5 h-fit  flex flex-col justify-end items-center     "
            >
              <div className="text-3xl text-blue-600 font-medium ">
                {" "}
                {val.title}
              </div>
              <div className="text-gray-500 mt-3 capitalize text-xl">{val.data}</div>
            </div>
          );
        })}
        <div className="flex  flex-row  flex-wrap h-48 m-5  justify-evenly items-center">
          {this.state.body.map((val, i) => {
>>>>>>> f45d4314fb04fdd3679edcd54dc2ec7cea508b93
            return (
              <div
                key={i}
                width={val.width}
<<<<<<< HEAD
                className={`
                 ml-8 text-gray-600 w-fit 
                 font-non italic
                p-1 ${i === 5 ? "font-medium" : "font-bold"}
                ${
                  i === 1
                    ? "text-xl"
                    : i === 5 
                    ? "text-2xl"
                    : i === 0 || i==3
                    ? "text-3xl"
                    : "text-4xl"
                }`}
=======
                className={`text-4xl ml-5 text-gray-600 w-fit 
                p-1 ${i === 5 ? "font-medium" : "font-bold"}`}
>>>>>>> f45d4314fb04fdd3679edcd54dc2ec7cea508b93
              >
                {val.name}
              </div>
            );
          })}
        </div>
      </div>
<<<<<<< HEAD
    </div>
  );
=======
    );
  }
>>>>>>> f45d4314fb04fdd3679edcd54dc2ec7cea508b93
}

export default OurClients;
