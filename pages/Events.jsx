import React, { useState } from "react";

import { EventDummhy } from "../dummyData/event";
import Event_Card from "../components/events_card/Event_Card";
import Head from "next/head";
import PageTemplate from "../components/Templates/PageTemplate";
import Link from "next/link";

function Events(props) {
  const [EventData, setEventData] = useState(props.data);
  return (
    <div>
      {/* head */}
      <Head>
        <title>Events</title>
        <meta
          name="description"
          content="This is the official site of VIP GROUP PVT.LTd."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTemplate>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-primary  flex justify-center text-4xl font-bold  mt-4 md:mt-7 lg:mt-12 py-7">
            Events
          </div>
          <hr className=" border-4 border-black mx-auto w-20 rounded-full mb-4" />{" "}
          {/* event categories section  */}
          <div className="flex flex-row items-center  justify-center space-x-8">
            <p className="text-3xl ">categories</p>
            <div className="border px-4 py-2 border-black rounded-full">
              <select className="lg:w-80 outline-none">
                <option className="p-4">All</option>
                <option className="p-4">All</option>
                <option className="p-4">All</option>
                <option className="p-4">All</option>
              </select>
            </div>
          </div>
          <hr className="mt-8 shadow" />
          {/* events card section  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 lg:gap-10 xl:gap-12  my-12">
            {EventData.map((val, i) => {
              console.log(val);
              return <Event_Card index={i} />;
            })}
          </div>
        </div>
      </PageTemplate>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      data: EventDummhy,
    },
  };
}
export default Events;
