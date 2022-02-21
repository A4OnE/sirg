import React, { useEffect, useState } from "react";
import PageTemplate from "../../components/Templates/PageTemplate";
import { IoLocation } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import EventGallery from "../../components/Gallery/EventGallery";
import { useRouter } from "next/router";

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
    <PageTemplate>
      <div className="container mx-auto px-4 lg:px-8 pt-10 pb-24">
        <div className="lg:grid lg:grid-cols-12 gap-8">
          {/* left details section  */}
          <div className="col-span-8">
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
  );
}

export default EventDetails;
