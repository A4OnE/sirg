import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Inputs from "../Inputs/Inputs";
import * as yup from "yup";
import axios from "axios";

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
    usename: "full_name",
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

    usename: "contact",

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

export const EventBookingSchems = yup.object().shape({
  communticationMethod: yup
    .string()
    .required("communication method is required"),
  full_name: yup.string().required("full name  is required"),
  address: yup.string().required("address is required"),
  email: yup.string().required("email is required"),
  contact: yup.string().required("contact No is required"),
  expectation: yup.string().required("expectation is required"),
  // for image paymentProof
  paymentProof: yup
    .mixed()
    .test("required", "You need to provide a file", (value) => {
      return value && value.length;
    })
    .test("fileSize", "The file is too large", (value, context) => {
      return value && value[0] && value[0].size <= 10000000;
    })
    .test("type", "We only support jpeg,png,jpg", function (value) {
      return (
        (value && value[0] && value[0].type === "image/jpeg") ||
        (value && value[0] && value[0].type === "image/png")
      );
    }),
});
function BookingEventModal({ id, close }) {

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({

    resolver: yupResolver(EventBookingSchems),
  });

  const submit = async (data) => {
    console.log(errors);
    console.log(data);
    let formData = new FormData();
    //  yo chai first ko ho , (jun chai  backend  sangha match huna paro and table ko mapping sangha ni match huna parcha ) ani {second to comma{ data.proof[0] }pachi chai schema ani usename  sangha match huna paro}
    await formData.append("image", data.paymentProof[0]);
    await formData.append("event_id", id);
    await formData.append("full_name", data.full_name);
    await formData.append("address", data.address);
    await formData.append("email", data.email);
    await formData.append("contact", data.contact);
    await formData.append("expectation", data.expectation);
    await formData.append("communication_method", data.communticationMethod);
    await formData.append("status", "pending");

    axios
      .post(`${process.env.Url}/eventbooking/create`, formData)
      .then((res) => {
        if (res.status) {
          alert('thank you. your booking is under review ')
            close();          
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="">
      <div className=" text-left">
        <form
          onSubmit={handleSubmit(submit)}
          div
          className=" grid grid-cols-2   gap-4  "

        >
          {forms.map((val, i) => {
            let named = val.usename;
            console.log(errors[named], named);
            return (
              <div
                key={i}

                className={`${
                  val.type === "select" ? "lg:row-colspan-2" : "null"
                }
                  flex flex-col space-y-4 
                    text-gray-700 font-semibold
                    lg:space-y-3`}

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

              className="btn-primary rounded-md my-5 cursor-pointer"
            />
            <button
 onClick={() =>close()}
              className=" border-2 bg-red-500 text-white  uppercase font-normal  outline-none text-center   h-12 mx-2 w-24 rounded-md my-5 cursor-pointer "
            >
              cancel
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingEventModal;
