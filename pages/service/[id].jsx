import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";
import PageTemplate from "../../components/Templates/PageTemplate";
import Head from "next/head";
// import Image from "next/image";
export async function getServerSideProps(context) {
  // Fetch data from external API
  const { id } = context.query;
  const res = await fetch(`${process.env.Url}/service/${id}`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

function ServiceDetails(props) {
  const [data, setData] = useState(props.data.service);

  return (
    <div>
      <Head>
        <title>{props.data.service[0]?.service_title}</title>
        {/* primary meta tags  */}
        <meta name="title" content={props.data.service[0]?.service_title} />
        <meta
          name="description"
          content={props.data.service[0]?.short_description}
        />
        <link rel="icon" href="/logo.png" />

        {/* facebook  */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://vipgroupnepal.com/service/${props.data.service[0]?.id}`}
        />
        <meta
          property="og:title"
          content={props.data.service[0]?.service_title}
        />
        <meta
          property="og:description"
          content={props.data.service[0]?.short_description}
        />
        <meta
          property="og:image"
          content={`https://api.vipgroupnepal.com/images/${props.data.service[0]?.img}`}
        />

        {/* twitter  */}
        <meta property="twitter:type" content="website" />
        <meta
          property="twitter:url"
          content={`https://vipgroupnepal.com/service/${props.data.service[0]?.id}`}
        />
        <meta
          property="twitter:title"
          content={props.data.service[0]?.service_title}
        />
        <meta
          property="twitter:description"
          content={props.data.service[0]?.short_description}
        />
        <meta
          property="twitter:image"
          content={`https://api.vipgroupnepal.com/images/${props.data.service[0]?.img}`}
        />
      </Head>
      <PageTemplate>
        <div className="bg-gray-100">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center py-8">
              {data.map((item) => (
                <div className="text-center" key={item.id}>
                  <h1 className="py-4">{item.service_title}</h1>
                  <div className="">
                    <img
                      src={`${process.env.Url}/images/${item.img}`}
                      alt=""
                      srcSet=""
                      className="mx-auto border-2 border-black p-2 bg-white"
                    />
                  </div>
                  <div className="my-4 lg:w-1/2 card bg-white mx-auto p-4 text-justify">
                    {item.service_details}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageTemplate>
    </div>
  );
}

export default ServiceDetails;
