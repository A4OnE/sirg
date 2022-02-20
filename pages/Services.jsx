import Head from "next/head";
import React, { useEffect, useState } from "react";
import ServiceCard from "../components/Cards/serviceCard";
import PageTemplate from "../components/Templates/PageTemplate";
import axios from '../AXIOS/Axios-create';
function Services() {
  const [Data, setData] = useState([]);
  const getProjects=()=>{
    axios.get('/service').then(res=>{
console.log(res);
setData(res.data)
// data.push(res)
}).catch(err=>console.log(err))
}
  useEffect(() => {
    getProjects();
    
  }, []);
  
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
              {
                Data.map((val,i)=>{
          let image= `${process.env.Url}/images/${val.img}`
                  return <ServiceCard
                  img={image}
                  title={val.service_title}
                  description={val.service_details}
                  
                  />
                })
              }
              {/* <ServiceCard />
              <ServiceCard />
              <ServiceCard /> */}
            </div>
          </div>
        </div>
      </PageTemplate>
    </div>
  );
}

export default Services;
