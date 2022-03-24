import Head from "next/head";
import React, { useEffect, useState } from "react";
import ServiceCard from "../components/Cards/serviceCard";
import PageTemplate from "../components/Templates/PageTemplate";
import axios from "../AXIOS/Axios-create";
// import data from "../components/NavsFooter/fakedata.json";
function Services() {
  const [Data, setData] = useState([]);
  const getProjects = () => {
    axios
      .get("/service")
      .then((res) => {
        setData(res.data);
        // data.push(res)
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div>
      <Head>
        <title>Services</title>
        {/* primary meta tags  */}
        <meta name="title" content="Services of VIP GROUP PVT.LTD." />
        <meta
          name="description"
          content="VIP Group Pvt. Ltd (Visionary Idealist Personnel) is a company of dedicated and energetic youth Entreprenuers. Since 2019, we have been working on several fields such asEvent Management, Event Orgainzers, Entrepreneurship Development, Business Development Orientation, Motivational Seminars,Skills based training, Vocational trainings, Personality Development trainings, Leadership trainings, Job placements, Website Development & so on."
        />
        <link rel="icon" href="/logo.png" />

        {/* facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vipgroupnepal.com/Services" />
        <meta property="og:title" content="Services of VIP Group Pvt. Ltd " />
        <meta
          property="og:description"
          content="VIP Group Pvt. Ltd (Visionary Idealist Personnel) is a company of dedicated and energetic youth Entreprenuers. Since 2019, we have been working on several fields such asEvent Management, Event Orgainzers, Entrepreneurship Development, Business Development Orientation, Motivational Seminars,Skills based training, Vocational trainings, Personality Development trainings, Leadership trainings, Job placements, Website Development & so on."
        />
        <meta
          property="og:image"
          content="https://api.vipgroupnepal.com/images/vip.jpg"
        />

        {/* twitter  */}
        <meta property="twitter:type" content="website" />
        <meta
          property="twitter:url"
          content="https://vipgroupnepal.com/Services"
        />
        <meta
          property="twitter:title"
          content="Services of VIP Group Pvt. Ltd"
        />
        <meta
          property="twitter:description"
          content="VIP Group Pvt. Ltd (Visionary Idealist Personnel) is a company of dedicated and energetic youth Entreprenuers. Since 2019, we have been working on several fields such asEvent Management, Event Orgainzers, Entrepreneurship Development, Business Development Orientation, Motivational Seminars,Skills based training, Vocational trainings, Personality Development trainings, Leadership trainings, Job placements, Website Development & so on."
        />
        <meta
          property="twitter:image"
          content="https://api.vipgroupnepal.com/images/vip.jpg"
        />
      </Head>
      <PageTemplate>
        <div className="bg-gray flex flex-col ">
          <div className="text-primary text-center text-2xl md:text-5xl font-openSansSeven mt-4 md:mt-7 lg:mt-12 mb-3">
            Our Services
            {/* <hr className=" border-4 border-black mx-auto w-20 rounded-full mt-2 mb-2" />{" "} */}
            <p className=" text-xs sm:text-base font-openSansSix  pb-24 pt-2 lg:pt-4 text-gray-500 ">
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
              {Data.map((val, i) => {
                let image = `${process.env.Url}/images/${val.img}`;

                return (
                  <ServiceCard
                    key={i}
                    id={val.id}
                    img={`${process.env.Url}/images/${val.img}`}
                    title={val.service_title}
                    description={val.service_details}
                  />
                );
              })}

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
