import axios from "axios";
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
      <div className="text-center">
        <h1 className="text-primary">We Have Worked With...</h1>
        <p className="font-medium text-lg text-gray-800">Our Clients</p>
      </div>

      <div className="flex justify-center my-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* clients logo section  */}
          {data.map((item) => (
            <div className="mx-auto" key={item.id}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={`${process.env.Url}/images/${item.img}`}
                  alt={item.id}
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
