import React from "react";
import BodCard from "../../components/Cards/BodCard";
import PageTemplate from "../../components/Templates/PageTemplate";
import Link from "next/link";
import { MdKeyboardBackspace } from "react-icons/md";
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
      <div className="container mx-auto px-4   mt-8 lg:px-8">
        <Link href={"/About"} passHref>
          <div className=" py-4 sm:p-4">
            <MdKeyboardBackspace className="w-6 sm:w-10 h-6 sm:h-10 text-gray-700 " />
          </div>
        </Link>
        <div>
          <h1 className="text-primary  text-2xl text-center gap-8 my-14 lg:text-4xl md:text-3xl sm:text-2xl tracking-wider font-openSansEight">
            Board of Directors
          </h1>
        </div>
        {/* Header bod section */}
        {/* <div className="text-center my-10">
          <Image
            src={`${process.env.Url}/images/${data[0].img}`}
            alt="image"
            srcSet=""
            height={400}
            width={400}
            layout="intrinsic"
            objectPosition="center"
            quality={30}
            className="rounded-md shadow-md lg:h-96  md:h-72 sm:h-40 mx-auto"
          />
          <p className="lg:text-2xl font-openSansSeven mt-5 ">{data[0].name}</p>
          <p className="lg:text-xl font-openSansSix mt-3 ">{data[0].title}</p>
        </div> */}

        {/* Bod body section */}
        <div className="container  mx-auto px-4 pb-20 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {data.map((item) => (
              <BodCard
                key={item.id}
                img={`${process.env.Url}/images/${item.img}`}
                name={item.name}
                title={item.job_title}
              />
            ))}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

export default BOD;
