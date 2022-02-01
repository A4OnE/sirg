import React, { useState } from "react";

import Head from "next/head";
import Link from "next/link";
import PageTemplate from "../components/Templates/PageTemplate";

function About() {
  const [Data, setData] = useState([
    {

      title:'Our Vision',
      description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without  relying on meaningful content"
    },
    {
      title:'Our Mission',
      description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without  relying on meaningful content"
    }
  ])
  return (
    <div>
      <Head>
        <title>About us</title>
        <meta
          name="description"
          content="This is the official site of VIP GROUP PVT.LTd."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <PageTemplate> */}
        {/* About us introduction */}
        <div className="h-fit flex w-full mt-5 ">
          <div className="flex-1 h-96">
            <div className="bg-grayD h-5/6 m-10 flex justify-center items-center">
               <p className="text-white ">Video modal</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col  mt-10">
            <p className="text-base text-gray-400 m-2 mt-0 ">About us</p>
            <p className="text-2xl text-primary font-bold m-2 tracking-wide "> Who we are ?</p>
            
            <p className="text-sm w-5/6  m-2 -tracking-tight">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. In publishing
              and graphic design, Lorem ipsum is a placeholder text commonly
              used to demonstrate the visual form of a document or a typeface
              without relying on meaningful content. In publishing and graphic
              design,
            </p>
            <Link href={"##"} > 
            <div className="bg-transparent w-fit p-0.5 px-3 border-2 m-2
             border-indigo-600 rounded-3xl text-primary text-sm
             mt-5
              "> Contact us
            </div>
            </Link>
          </div>
        </div>

        {/* our Vesion  and our mission */}
        <div className=" w-full h-fit mt-20">
          {
            Data.map((val,i)=>{
              return <div key={i} className={`w
             m-4 ${i===1?'ml-52 mt-14':'ml-10'} ` }>
                <p className="text-primary text-3xl font-extrabold tracking-wide mb-5 leading-9">{val.title}</p>
                <div className="text-base leading-6 w-fit">{val.description}</div>
              </div>
            })
          }
        </div>
      {/* </PageTemplate> */}
    </div>
  );
}

export default About;
