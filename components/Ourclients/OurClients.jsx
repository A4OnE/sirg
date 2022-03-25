import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function OurClients() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      await axios.get(`${process.env.Url}/clients`).then((res) => {
        setLoading(false);
        setData(res.data);
      });
    };
    fetch();
  }, []);

  return (
    <div>
      {/* head section  */}
      <div className="text-center  ">
        <div className="text-primary py-3 text-xl md:text-3xl lg:text-4xl font-openSansEight">
          We Have Worked With...
        </div>
        <p className=" text-xl font-openSansFive   text-gray-800">
          Our Clients
        </p>
      </div>

      <div className="flex justify-center my-10 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* clients logo section  */}
          {data.map((item) => (
            <div className="mx-auto  " key={item.id}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={`${process.env.Url}/images/${item.img}`}
                  alt={item.id}
                  height={300}
                  width={320}
                  layout="intrinsic"
                  objectPosition="center"
                  quality={30}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurClients;
