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
          <div className="bg-primary h-56 lg:h-64 md:h-60 w-full py-1">
            <div className="text-center text-white ">
              <h1>CONTACT US</h1>
              <p className="text-xs md:text-base lg:text-lg">
                "VIP GROUP NEPAL is the company for the people so we'd like to
                hear from you. Write to us about your thoughts or any issues and
                we will endeavor to reply to your message as soon as possible. "
              </p>
            </div>
          </div>
          {/*ending of  top part of contact */}

          {/* contact section div starts */}
          <div className="w-full lg:w-3/4 mx-auto -mt-24 bg-white shadow-md">
            {/* grids starts here */}
            <div className="grid lg:grid-cols-2 gap-4  py-4 lg:py-8 my-8">
              {/* left sections starts here */}
              <div className="lg:border-r-2">
                <div className="p-4 lg:px-12">
                  <h1>Contact Information</h1>
                  <hr />
                  <div className="flex space-x-4 my-8 lg:my-12 text-xl lg:text-2xl items-center">
                    <IoCall />
                    <p>+977-9857074929</p>
                    <p></p>
                  </div>
                  <div className="flex space-x-4 my-8 lg:my-12 text-xl lg:text-2xl items-center">
                    <AiOutlineMail />
                    <p>Cvipgroup@gmail.com</p>
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
