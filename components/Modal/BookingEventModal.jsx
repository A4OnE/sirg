import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Inputs from "../Inputs/Inputs";

const forms = [
  // {
  //   name: "Event title",
  //   usename: "event_title",
  //   placeholder: "event title",
  //   type: "select",
  //   options: [
  //     { name: "" },
  //     {
  //       name: "email",
  //     },
  //     {
  //       name: "phone",
  //     },
  //   ],
  // },
  {
    name: "full name",
    usename: "fullName",
    placeholder: "full Name",
    type: "text",
  },
  {
    name: "Address",
    usename: "address",
    placeholder: "Address",
    type: "text",
  },
  {
    name: "email",
    usename: "email",
    placeholder: "email",
    type: "text",
  },
  {
    name: "contact No",
    usename: "contactNo",
    placeholder: "contact No",
    type: "text",
  },
  {
    name: "payment Proof",
    usename: "paymentProof",
    placeholder: "payment Proof",
    type: "file",
  },

  {
    name: "communtication method",
    usename: "communticationMethod",
    placeholder: "i prefer to communicated by:",
    type: "select",
    options: [
      { name: "i perfer to communicate by" },
      {
        name: "email",
      },
      {
        name: "phone",
      },
    ],
  },
  {
    name: "expectation",
    usename: "expectation",
    placeholder: "expectation",
    type: "textarea",
  },
];

function BookingEventModal({}) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver,
  });

  const submit = (data) => {
    console.log(errors);
    console.log(data);
  };
  return (
    <div className="">
      <div className="grid grid-rows-1 ">
        <form
          onSubmit={handleSubmit(submit)}
          className="
             lg:grid lg:grid-cols-2 lg:gap-3 lg:gap-x-8
          "
        >
          {forms.map((val, i) => {
            let named = val.usename;
            console.log(errors[named], named);
            return (
              <div
                key={i}
                className="flex flex-col space-y-4 
                      text-gray-700 font-semibold
                      lg:space-y-3"
              >
                <label className="capitalize">{val.name}</label>
                {
                  <Inputs
                    usename={val.usename}
                    type={val.type}
                    placeholder={val.placeholder}
                    register={register(val.usename)}
                    named={named}
                    errors={errors[named]}
                    options={
                      val.options
                        ? val.options.length === 0
                          ? null
                          : val.options
                        : null
                    }
                  />
                }
                <span className="text-red-600 animate-bounce">
                  {errors[named]?.message}
                </span>
              </div>
            );
          })}
          <div className="row-start-5">
            <input
              type="submit"
              value="SUBMIT"
              className="btn-primary rounded-md my-5 cursor-pointer lg:w-fit lg:h-fit  "
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingEventModal;
