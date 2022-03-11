import React, { useState } from "react";

import { EventDummhy } from "../dummyData/event";
import Event_Card from "../components/events_card/Event_Card";
import Head from "next/head";
import PageTemplate from "../components/Templates/PageTemplate";
import Link from "next/link";

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.Url}/event`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

function Events(props) {
  const [EventData] = useState(props.data);

  return (
    <div>
      {/* head */}
      <Head>
        <title>Events</title>
        {/* primary meta tags  */}
        <meta name="title" content="Events of VIP VIP GROUP PVT.LTD." />
        <meta
          name="description"
          content="We organise number of events in different sector of businesses growth and personnal growth such as:personality developement, how to sell anything?, how to grow business after covid etc"
        />
        <link rel="icon" href="/logo.png" />

        {/* facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vipgroupnepal.com/Events" />
        <meta property="og:title" content="Events of VIP VIP Group Pvt. Ltd " />
        <meta
          property="og:description"
          content="We organise number of events in different sector of businesses growth and personnal growth such as:personality developement, how to sell anything?, how to grow business after covid etc"
        />
        <meta
          property="og:image"
          content="https://api.vipgroupnepal.com/images/vip.jpg"
        />

        {/* twitter  */}
        <meta property="twitter:type" content="website" />
        <meta
          property="twitter:url"
          content="https://vipgroupnepal.com/Events"
        />
        <meta
          property="twitter:title"
          content="Events of VIP VIP Group Pvt. Ltd"
        />
        <meta
          property="twitter:description"
          content="We organise number of events in different sector of businesses growth and personnal growth such as:personality developement, how to sell anything?, how to grow business after covid etc"
        />
        <meta
          property="twitter:image"
          content="https://api.vipgroupnepal.com/images/vip.jpg"
        />
      </Head>
      <PageTemplate>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-primary text-center text-6xl font-bold mt-4 md:mt-7 lg:mt-12 py-7">
            Events
          </div>
          <p className="text-gray-800 font-medium text-center">
            All the events done by VIP Group
          </p>

          <hr className="mt-8 shadow" />

          {/* events card section  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 lg:gap-10 xl:gap-12  my-12">
            {EventData.map((item) => {
              return (
                <Event_Card
                  key={item.id}
                  id={item.id}
                  title={item.event_title}
                  date={item.event_date}
                  location={item.event_location}
                  img={item.img}
                />
              );
            })}
          </div>
        </div>
      </PageTemplate>
    </div>
  );
}

export default Events;
