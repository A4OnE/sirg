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
              text-4xl text-primary font-bold
              "
          >
            Our Services
            <p
              className="
                  text-base font-semibold pt-4 text-gray-500
                  "
            >
              We provide best services in e-learning field.
            </p>
          </div>
          <div
            className="
                 grid grid-cols-2 gap-8 m-10
                 md:grid-cols-2 md:gap-16 md:gap-y-8 md:mx-16
                 lg:grid-cols-3 lg:gap-24 lg:gap-y-12 lg:m-5 lg:mt-10 lg:self-center lg:w-10/12 
              "
          >
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </PageTemplate>
    </div>
  );
}

export default Services;
