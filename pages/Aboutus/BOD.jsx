import React from "react";
import BodCard from "../../components/Cards/BodCard";
import PageTemplate from "../../components/Templates/PageTemplate";

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.Url}/bod`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

function BOD({ data }) {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4  mt-8 lg:px-8">
        <div>
          <h1 className="text-primary  text-2xl text-center gap-8 my-14 lg:text-4xl md:text-3xl sm:text-2xl tracking-wider font-bold">
            Board of Directors
          </h1>
        </div>
        {/* Header bod section */}
        <div className="text-center my-10">
          <img
            src={`${process.env.Url}/images/${data[0].img}`}
            className="rounded-md shadow-md lg:h-96  md:h-72 sm:h-40 mx-auto"
          />
          <p className="lg:text-2xl font-bold mt-5 ">{data[0].name}</p>
          <p className="lg:text-xl font-medium mt-3 ">{data[0].title}</p>
        </div>

        {/* Bod body section */}
        <div className="container  mx-auto px-4  lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {data.map((item) => (
              <BodCard
                img={`${process.env.Url}/images/${item.img}`}
                name={item.name}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

export default BOD;
