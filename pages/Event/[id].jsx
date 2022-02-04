import React from "react";
import PageTemplate from "../../components/Templates/PageTemplate";
import { IoLocation } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import EventGallery from "../../components/Gallery/EventGallery";
function EventDetails() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 lg:px-8 pt-10 pb-24">
        <div className="lg:grid lg:grid-cols-12 gap-8">
          {/* left details section  */}
          <div className="col-span-8">
            <h1 className="text-5xl leading-12">
              This is the first event title which goes here
            </h1>
            {/* location and date section  */}
            <div className="flex items-center space-x-4 font-semibold text-gray-800">
              <div className="flex items-center space-x-2">
                <IoLocation />
                <p>Location of Event</p>
              </div>
              <div className="flex items-center space-x-2">
                <MdDateRange />
                <p>22 Feb 2022</p>
              </div>
            </div>
            {/* date location section ends  */}

            {/* image cover section starts  */}
            <div className="bg-gray-600 h-80 w-full my-8"></div>
            {/* image cover section ends  */}
            <p className="text-lg leading-9 text-justify mb-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum
            </p>
          </div>
          {/* left details section ends  */}

          {/* right section of gallery starts  */}
          <div className="col-span-4 shadow-md my-5 h-screen overflow-auto sticky top-4">
            <EventGallery />
          </div>
          {/* right section of gallery ends  */}
        </div>
      </div>
    </PageTemplate>
  );
}

export default EventDetails;
