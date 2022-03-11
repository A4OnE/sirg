import React from "react";

function Inputs(props) {
  let Inputed = 1;
  let className = `${props.errors ? "ring-2 ring-red-600" : "ring-0"}
  ${
    props.id === "login"
      ? "text-gray-800 bg-gray-200 outline-none text-sm flex-1 ring-0"
      : "md:h-10 px-2  py-1   rounded-lg resize-none  border border-gray-300 outline-none"
  }`;

  switch (props.type) {
    case "text":
      Inputed = (
        <input
          type={props.type}
          placeholder={props.placeholder}
          name={props.usename}
          {...props.register}
          className={className}
        />
      );
      break;
    case "password":
      Inputed = (
        <input
          type={props.type}
          placeholder={props.placeholder}
          name={props.usename}
          {...props.register}
          className={className}
        />
      );
      break;
    case "file":
      Inputed = (
        <input
          type={props.type}
          name={props.usename}
          {...props.register}
          className={className}
        />
      );
      break;
    case "select":
      Inputed = (
        <select name={props.usename} {...props.register} className={className}>
          {props.options?.map((val, i) => {
            return (
              <option key={i} value={i === 0 ? "" : val.name}>
                {val.name}
              </option>
            );
          })}
        </select>
      );
      break;
    case "textarea":
      Inputed = (
        <textarea
          rows={5}
          cols={10}
          name={props.usename}
          {...props.register}
          className={`${className} md:h-32`}
        ></textarea>
      );
      break;
    default:
      Inputed = (
        <h1>something went wrong see your render method and code again</h1>
      );
      break;
  }

  return Inputed;
}

export default Inputs;
