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
        head: [
          {
            title: "our projects",
            progress: 30,
            description:
              " publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeholder text",
          },
        ],
      },
    };
  }
  render() {
    return (
      <div className="h-96   flex flex-row  bg-gray-100  mt-10   ">
        <div className=" flex-1 flex flex-row  w-full  justify-center items-center">
          {this.state.data.map((val, i) => {
            return (
              <div key={i} className="h-fit    m-5 flex flex-col items-start 	">
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
                />
                <div className="h-fit mt-10 text-lg	capitalize  ">
                  {" "}
                  {val.title}
                </div>
                <div className="h-fit mt-1 w-full text-left   text-sm">
                  {" "}
                  {val.description}
                </div>
              </div>
            );
          })}
        </div>
        <div className=" flex-1 h-96 flex justify-center  items-center w -full    ">
          <div className="h-fit w-fit flex  flex-col   items-start m-5 ">
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
                  <div className="h-40 mt-1 w-full text-left overflow-scroll text-sm">
                    {val.description}
                  </div>
                </div>
              );
            })}
            <button
              className="bg-white   text-blue-800  capitalize  mt-3 btn-outline-primary	
            flex items-start  rounded-3xl "
            >
              view projects
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsHomeCard;
