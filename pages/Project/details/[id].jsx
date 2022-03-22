import React from "react";
import PageTemplate from "../../../components/Templates/PageTemplate";
import Head from "next/head";
import Image from "next/image";

export async function getServerSideProps(context) {
  // Fetch data from external API
  const { id } = context.query;
  const res = await fetch(`${process.env.Url}/project/${id}`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

function projectdetails({ data }) {
  console.log(data.project[0]);
  return (
    <div>
      <Head>
        <title>{data.project[0]?.project_title}</title>
        {/* primary meta tags  */}
        <meta name="title" content={data.project[0]?.project_title} />
        <meta name="description" content={data.project[0]?.project_details} />
        <link rel="icon" href="/logo.png" />

        {/* facebook  */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://vipgroupnepal.com/Event/${data.project[0]?.id}`}
        />
        <meta property="og:title" content={data.project[0]?.project_title} />
        <meta
          property="og:description"
          content={data.project[0]?.project_details}
        />
        <meta
          property="og:image"
          content={`https://api.vipgroupnepal.com/images/${data.project[0]?.img}`}
        />

        {/* twitter  */}
        <meta property="twitter:type" content="website" />
        <meta
          property="twitter:url"
          content={`https://vipgroupnepal.com/Event/${data.project[0]?.id}`}
        />
        <meta
          property="twitter:title"
          content={data.project[0]?.project_title}
        />
        <meta
          property="twitter:description"
          content={data.project[0]?.project_details}
        />
        <meta
          property="twitter:image"
          content={`https://api.vipgroupnepal.com/images/${data.project[0]?.img}`}
        />
      </Head>
      <PageTemplate>
        <div className="bg-gray-50 ">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="lg:w-2/3  mx-auto bg-gray-50 lg:p-4">
              {data.project?.map((item) => (
                <div key={item.id} className="w-10/12 mx-auto">
                  <h1 className="my-6 font-openSansSeven">
                    {item.project_title}
                  </h1>
                  <div className="">
                    <Image
                      src={`${process.env.Url}/images/${item.img}`}
                      height={400}
                      width={800}
                      layout="intrinsic"
                      // objectFit="cover"
                      objectPosition="center"
                      quality={30}
                      alt={item.project_title}
                    />
                  </div>

                  <p className="my-6  text-xl font-openSansFive">
                    {item.project_details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageTemplate>
    </div>
  );
}

export default projectdetails;
