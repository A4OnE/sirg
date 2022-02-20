import Head from "next/head";
import React from "react";
import ServiceCard from "../components/Cards/serviceCard";
import PageTemplate from "../components/Templates/PageTemplate";

function Services() {
  return (
    <div>
      <Head>
        <title>Services</title>
        <meta
          name="description"
          content="This is the official site of VIP GROUP PVT.LTd."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTemplate>
        <div className="bg-gray flex flex-col ">
          <div
            className="
              flex flex-col justify-center items-center h-52 
              lg:text-4xl text-primary font-bold text-3xl
              "
          >
            Our Services
            <hr className=" border-4 border-black mx-auto w-20 rounded-full mt-2 mb-2" />{" "}
            <p
              className="
                  text-base font-semibold pt-4 text-gray-500
                  "
            >
              We provide best services in e-learning field.
            </p>
          </div>
          <div className="container mx-auto px-4 lg:px-8">
            <div
              className="
                 grid grid-cols-1 gap-8 
                 md:grid-cols-2 md:gap-12 md:mx-16
                 lg:grid-cols-3 lg:gap-12 
                 mb-16 
              "
            >
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
            </div>
          </div>
        </div>
      </PageTemplate>
    </div>
  );
}

export default Services;
