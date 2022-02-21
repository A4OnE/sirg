import React from "react";
import PageTemplate from "../../../components/Templates/PageTemplate";

export async function getServerSideProps(context) {
  // Fetch data from external API
  const { id } = context.query;
  const res = await fetch(`${process.env.Url}/project/${id}`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

function projectdetails({ data }) {
  console.log(data);
  return (
    <div>
      <PageTemplate>
        <div className="bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="lg:w-2/3 mx-auto bg-gray-50 lg:p-4">
              {data.project?.map((item) => (
                <div key={item.id}>
                  <h1 className="my-8">{item.project_title}</h1>
                  <img
                    src={`${process.env.Url}/images/${item.img}`}
                    alt={item.project_title}
                    srcset=""
                    className="my-8 w-full"
                  />
                  <p className="my-8 text-xl">{item.project_details}</p>
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
