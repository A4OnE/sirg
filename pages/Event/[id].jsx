import React, { useEffect, useState } from "react";
import PageTemplate from "../../components/Templates/PageTemplate";
import { IoLocation } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import EventGallery from "../../components/Gallery/EventGallery";
import { useRouter } from "next/router";
import Head from "next/head";
import { MdKeyboardBackspace } from "react-icons/md";
import Link from "next/link";
export async function getServerSideProps(context) {
  // Fetch data from external API
  const { id } = context.query;
  const res = await fetch(`${process.env.Url}/event/${id}`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

function EventDetails(props) {
  const [data, setData] = useState(props.data.event);

  return (
    <div>
      <Head>
        <title>{props.data.event[0]?.event_title}</title>
        {/* primary meta tags  */}
        <meta name="title" content={props.data.event[0]?.event_title} />
        <meta name="description" content={props.data.event[0]?.event_details} />
        <link rel="icon" href="/logo.png" />

        {/* facebook  */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://vipgroupnepal.com/Event/${props.data.event[0]?.id}`}
        />
        <meta property="og:title" content={props.data.event[0]?.event_title} />
        <meta
          property="og:description"
          content={props.data.event[0]?.event_details}
        />
        <meta
          property="og:image"
          content={`https://api.vipgroupnepal.com/images/${props.data.event[0]?.img}`}
        />

        {/* twitter  */}
        <meta property="twitter:type" content="website" />
        <meta
          property="twitter:url"
          content={`https://vipgroupnepal.com/Event/${props.data.event[0]?.id}`}
        />
        <meta
          property="twitter:title"
          content={props.data.event[0]?.event_title}
        />
        <meta
          property="twitter:description"
          content={props.data.event[0]?.event_details}
        />
        <meta
          property="twitter:image"
          content={`https://api.vipgroupnepal.com/images/${props.data.event[0]?.img}`}
        />
      </Head>
      <PageTemplate>
        <div className="container mx-auto px-4 lg:px-8 pt-10 pb-24">
          <div className="lg:grid lg:grid-cols-12 gap-8">
            {/* left details section  */}
            <div className="col-span-8">
              <Link href={"/Events"} passHref>
                <div className="  w-fit h-fit hover:scale-105 ">
                  <MdKeyboardBackspace className="w-6 cursor-pointer  sm:w-10 h-6 sm:h-10 text-gray-700 " />
                </div>
              </Link>
              <h1 className="text-5xl leading-12">{data[0]?.event_title}</h1>
              {/* location and date section  */}
              <div className="flex items-center space-x-4 font-semibold text-gray-800">
                <div className="flex items-center space-x-2">
                  <IoLocation />
                  <p>{data[0]?.event_location}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <MdDateRange />
                  <p>{data[0]?.event_date}</p>
                </div>
              </div>
              {/* date location section ends  */}

              {/* image cover section starts  */}
              <div>
                {/* <img
                src={`${process.env.Url}/images/${data[0]?.img}`}
                className="h-80 w-full my-8 object-cover"
                alt=""
              /> */}
                <div
                  className="h-128 w-full my-8 object-cover"
                  style={{
                    backgroundImage: `url(${process.env.Url}/images/${data[0]?.img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
              {/* image cover section ends  */}
              <p className="text-lg leading-9 text-justify mb-10">
                {data[0]?.event_details}
              </p>
            </div>
            {/* left details section ends  */}

            {/* right section of gallery starts  */}
            <div className="col-span-4 shadow-md my-5 h-screen overflow-auto sticky top-4">
              <EventGallery id={data[0]?.id} />
            </div>
            {/* right section of gallery ends  */}
          </div>
        </div>
      </PageTemplate>
    </div>
  );
}

export default EventDetails;
