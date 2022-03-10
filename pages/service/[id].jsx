import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";
import PageTemplate from "../../components/Templates/PageTemplate";
function serviceDetails() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      await axios.get(`${process.env.Url}/service/${id}`).then((res) => {
        console.log(res);
        setLoading(false);
        setData(res.data.service);
      });
    };
    fetch();
  }, [id]);
  return (
    <PageTemplate>
      <div className="card rounded-md gap-10 mx-auto lg:w-3/5 md:w-3/5 sm:w-4/5">
        {data.map((item) => (
          <div
            className=" mx-auto rounded-full  items-center gap-8  h-60 w-60 md:h-72 md:w-72 lg:h-80 lg:w-80 lg:my-4 md:my-3 sm:my-2"
            key={item.id}
          >
            <img
              src={`${process.env.Url}/${item.img}`}
              alt={item.img}
              srcset=""
            />
          </div>
        ))}
        {data.map((item) => (
          <div
            className=" mx-auto font-bold text-2xl text-center"
            key={item.id}
          >
            {item.service_title}
          </div>
        ))}

        {data.map((item) => (
          <div
            className=" mx-auto font-semibold text-xl text-center gap-8 my-8"
            key={item.id}
          >
            {item.service_details}
          </div>
        ))}
      </div>
    </PageTemplate>
  );
}

export default serviceDetails;
