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
              <div className="flex flex-col mx-auto lg:mx-0 text-center w-fit items-start ">
                <p className=" text-sm md:text-4xl text-blue-500 capitalize  font-bold ">
                  {val.title}
                </p>
                <p className="w-20 h-1  my-1 md:my-2 bg-blue-500  " />
              </div>
              <div className="text-gray-500 mt-3 capitalize md:text-xl">
                {val.data}
              </div>
            </div>
          );
        })}
        <div className="flex  flex-wrap h-48 m-5  lg:w-5/12 justify-evenly items-center">
          {this.state.body.map((val, i) => {
            return (
              <div
                key={i}
                width={val.width}
                className={`ml-3 lg:ml-2 text-gray-600 w-fit 
                px-1  md:p-1 
                ${i === 5 ? "font-medium  " : "font-bold"}
                ${
                  i === 5 || i === 0
                    ? " text-lg sm:text-xl md:text-4xl lg:text-3xl"
                    : " text-lg sm:text-xl md:text-4xl  lg:text-3xl"
                }
                `}
              >
                {val.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default OurClients;
