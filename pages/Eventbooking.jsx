import React, { useEffect, useState } from "react";
import { ImLocation } from "react-icons/im";
import { BsCalendar2DateFill } from "react-icons/bs";
import PageTemplate from "../components/Templates/PageTemplate";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import axios from "../AXIOS/Axios-create";
import Head from "next/head";

import BookingEventModal from "../components/Modal/BookingEventModal";

const Eventbooking = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [Id, setId] = useState("");
  const [Upcommming, setUpcommming] = useState([]);

  const getProjects = () => {
    axios
      .get("/event/upcoming")
      .then((res) => {
        console.log(res);
        setUpcommming(res.data);
        // data.push(res)
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getProjects();
  }, []);
  const showModal = (i) => {
    setId(i);
    setModalIsOpen(true);
  };
  let subtitle;
  const customStyles = {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  };
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  return (
    <div>
      <Head>
        <title>Event Booking</title>
        {/* primary meta tags  */}
        <meta name="title" content="Book an Event of VIP GROUP PVT.LTD." />
        <meta
          name="description"
          content="Online Event Booking for upcoming exiciting event of VIP GROUP PVT. LTD."
        />
        <link rel="icon" href="/logo.png" />

        {/* facebook  */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://vipgroupnepal.com/Eventbooking"
        />
        <meta
          property="og:title"
          content="Book an Event of VIP GROUP PVT.LTD."
        />
        <meta
          property="og:description"
          content="Online Event Booking for upcoming exiciting event of VIP GROUP PVT. LTD."
        />
        <meta
          property="og:image"
          content="https://api.vipgroupnepal.com/images/event_booking.png"
        />

        {/* twitter  */}
        <meta property="twitter:type" content="website" />
        <meta
          property="twitter:url"
          content="https://vipgroupnepal.com/Eventbooking"
        />
        <meta
          property="twitter:title"
          content="Book an Event of VIP GROUP PVT.LTD."
        />
        <meta
          property="twitter:description"
          content="Online Event Booking for upcoming exiciting event of VIP GROUP PVT. LTD."
        />
        <meta
          property="twitter:image"
          content="https://api.vipgroupnepal.com/images/event_booking.png"
        />
      </Head>
      <PageTemplate>
        <div className="container mx-auto px-4  lg:px-8">
          <div className="mx-auto my-24 ">
            <h1 className="text-primary lg:text-4xl text-3xl font-bold tracking-wider text-center mb-4  ">
              Event Booking
            </h1>

            <p className="text-gray-500  text-center text-lg">
              You Can Book all of the upcoming event here
            </p>

            <div className="lg:grid lg:grid-cols-1 gap-8">
              {Upcommming.map((val, i) => {
                return (
                  <div
                    key={i}
                    className="border rounded-md 
          h-full lg:w-2/3 mx-auto bg-primary  mt-8
            text-white p-4 lg:p-6 shadow-lg"
                  >
                    <p className=" text-2xl md:text-4xl font-bold  tracking-wider ">
                      {val.event_title}
                    </p>
                    <div className="mt-4 ">
                      <div className="flex items-center">
                        <ImLocation />
                        <p className="ml-2">{val.event_location}</p>
                      </div>
                      <div className="flex items-center my-3">
                        <BsCalendar2DateFill />
                        <p className="ml-2">{val.event_date}</p>
                      </div>
                    </div>
                    <p className="  leading-7 ">{val.event_details}</p>
                    <button
                      className="rounded-full cursor-pointer bg-white text-primary mt-6 w-cover tracking-wider px-5 py-2 font-bold transition hover:opacity-70"
                      onClick={() => {
                        showModal(val.id);
                      }}
                    >
                      Book Now
                    </button>

                    <Modal
                      isOpen={modalIsOpen}
                      ariaHideApp={false}
                      onAfterOpen={afterOpenModal}
                      style={customStyles}
                      closeTimeoutMS={400}
                    >
                      <p
                        className="text-2xl font-semibold py-3"
                        ref={(_subtitle) => (subtitle = _subtitle)}
                      >
                        BookEvent
                      </p>

                      {/* <button
                className="gap-4 text-2xl  rounded-md 
                 font-bold mb-4 text-red-500  "
                onClick={() => 
              >
                <AiOutlineClose />
              </button> */}
                      <BookingEventModal
                        id={Id}
                        close={() => setModalIsOpen(false)}
                      />
                    </Modal>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </PageTemplate>
    </div>
  );
};

export default Eventbooking;
