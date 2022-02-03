import React, { useState } from 'react';

import {EventDummhy} from '../dummyData/event'
import Event_Card from '../components/events_card/Event_Card';
import Head from 'next/head';
import PageTemplate from '../components/Templates/PageTemplate';

function Events(props) {
    const [EventData, setEventData] = useState(props.data)
  return <div>
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
      <div className='pb-24' >
          
          <div className='flex flex-col h-48 justify-center ml-16 bg-red border-b-2 border-black'>
              <div className='text-primary text-4xl font-bold py-7'>
                  Events
              </div>
              <div className='flex flex-row items-center'>
                  <p className='text-3xl'>categories</p>
                  <select className='w-3/12 ml-4 p-2 rounded-full h-12 border border-black bg-white '>
                      <option>All</option>
                      <option>All</option>
                      <option>All</option>
                      <option>All</option>

                  </select>
              </div>
          </div>
          <div className='w-fit flex flex-row justify-center '>

          <div className='flex flex-row flex-wrap  ml-10
          w-12/12 '>
            {
                 EventData.map((val,i)=>{
                     console.log(val)
                     return <Event_Card index={i} />
                 }) 
              } 


          </div>
      </div>
      </div>

      </PageTemplate>
  </div>;
}

export async function getStaticProps(context){
    return{
        props:{
            data:EventDummhy
        }
    }
}
export default Events;
