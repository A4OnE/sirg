import React, { Component } from "react";
import BackgroundImage from "../../images/aboutbg.png";
export class ProjectsHomeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          image: BackgroundImage,
          title: "project one",
          description:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a ",
        },
        {
          image: BackgroundImage,
          title: "project two",
          description:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a ",
        },
      ],
      ourProjects: {
        head: [{ title: "our projects", progress: 30 }],
        body: [
          {
            description:
              " publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeholder text",
          },
        ],
      },
    };
  }
  render() {
    return (
      <div className="h-96   flex flex-row  bg-gray-100  mt-10  ">
        <div className="  flex flex-row    justify-center items-center">
          {this.state.data.map((val, i) => {
            return (
              <div
                key={i}
                className="h-fit  w-fit  flex flex-col items-start 	"
              >
                <div
                  src={val.image}
                  alt="images"
                  style={{
                    background: "grey",
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundPosition: "cover",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    height: "100px",
                    width: "200px",
                  }}

                  // bg-gradient-to-t bg-cover bg-no-repeat bg-center
                />
                <div className="h-fit mt-8 text-lg	capitalize  ">
                  {" "}
                  {val.title}
                </div>
                <div className="h-fit mt-1 w-fit text-left   text-sm">
                  {" "}
                  {val.description}
                </div>
              </div>
            );
          })}
        </div>
        <div className=" flex flex-col  w-fit  justify-center items-center">
          <div className="h-fit  w-fit items-start ">
            {this.state.ourProjects.head.map((val, i) => {
              return (
                <div
                  key={i}
                  className="h-fit  w-fit   flex flex-col items-start 	"
                >
                  <div className="  text-lg	capitalize font-semibold">
                    {val.title}
                  </div>
                  {val.progress}
                </div>
              );
            })}
            <div className="w-fit ">
              {this.state.ourProjects.body.map((val, i) => {
                return (
                  <div className="  w-fit text-left  text-sm">
                    {" "}
                    {val.description}
                  </div>
                );
              })}
            </div>
            <button className="bg-white   text-blue-800  capitalize  mt-5 btn-outline-primary	
            flex items-start  rounded-3xl ">view projects</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsHomeCard;
