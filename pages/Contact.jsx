import React from "react";
import { useForm } from "react-hook-form";
import { BsFillFilePersonFill } from "react-icons/bs";
import { GoDeviceMobile } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import PageTemplate from "../components/Templates/PageTemplate";
import ContactForm from "../components/form/ContactForm";
import { IoCall } from "react-icons/io5";
import { BiCurrentLocation } from "react-icons/bi";

function Contact() {
  return (
    <div>
      <PageTemplate>
        <div className="">
          {/* starting of top part of contact */}
          <div className="bg-primary h-48 lg:h-64 md:h-60 w-full py-10">
            <div className="text-center text-white">
              <p className="lg:text-4xl md:text-3xl text-2xl">CONTACT US</p>
              <hr className=" border-4 border-white mx-auto w-20 rounded-full mt-2 mb-2" />{" "}
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          {/*ending of  top part of contact */}

          {/* contact section div starts */}
          <div className="w-full lg:w-3/4 mx-auto -mt-24 bg-white shadow-md">
            {/* grids starts here */}
            <div className="grid lg:grid-cols-2 gap-4  py-4 lg:py-8 my-8">
              {/* left sections starts here */}
              <div className="lg:border-r-2 text-center">
                <div className="p-4 lg:px-12">
                  <p className="lg:text-4xl md:text-3xl text-2xl ">
                    Contact Information
                  </p>
                  <hr />
                  <div className="flex space-x-4 my-8 lg:my-12 text-xl lg:text-2xl items-center">
                    <IoCall />
                    <p>+977-9867842300</p>
                    <p></p>
                  </div>
                  <div className="flex space-x-4 my-8 lg:my-12 text-xl lg:text-2xl items-center">
                    <AiOutlineMail />
                    <p>vip@gmail.com</p>
                  </div>
                  <div className="flex space-x-4 my-8 lg:my-12 text-xl lg:text-2xl items-center">
                    <BiCurrentLocation />
                    <p>Butwal Rupandehi</p>
                  </div>
                </div>
              </div>
              {/* left sections ends here */}

              {/* right sections starts here */}
              <ContactForm />
              {/* right sections ends here */}
            </div>
            {/* grids ends here */}
          </div>
          {/* contact section div closed */}
        </div>
      </PageTemplate>
    </div>
  );
}

export default Contact;
