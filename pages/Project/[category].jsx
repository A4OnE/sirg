import React from "react";
import { BiCategory } from "react-icons/bi";
import Link from "next/link";
import PageTemplate from "../../components/Templates/PageTemplate";
import PageNavInfo from "../../components/Page Info/PageNavInfo";
import ProjectCard from "../../components/Cards/ProjectCard";
import ProjectCategory from "../../components/Cards/ProjectCategory";

export async function getServerSideProps(context) {
  const { category } = context.query;
  const [categoryRes, projectRes] = await Promise.all([
    fetch(`${process.env.Url}/projectcategory`),
    fetch(`${process.env.Url}/project/oncategory/${category}`),
  ]);
  const [categories, project] = await Promise.all([
    categoryRes.json(),
    projectRes.json(),
  ]);
  return { props: { categories, project } };
}

function Projectscategory({ categories, project }) {
  return (
    <PageTemplate>
      <div className="">
        {/* top section  */}
        <PageNavInfo page={"Projects"} page_nav="Home / Projects" />
        <div>
          <div className="container mx-auto my-6 px-4 lg:px-8">
            {/* top grid for category and project starts  */}
            <div className="lg:grid lg:grid-cols-8 lg:gap-8">
              {/* category section  */}
              <div className="col-span-2 my-8 p-4 lg:p-6 bg-gray-100">
                <div className="flex items-center space-x-4 font-bold text-xl mb-8">
                  <BiCategory /> <p>Categories</p>
                </div>
                <Link href={`/Projects`} passHref>
                  <p className="cursor-pointer font-medium text-xl">All</p>
                </Link>
                {categories.map((item) => (
                  <ProjectCategory
                    key={item.id}
                    category={item.type}
                    link={`/Project/${item.id}`}
                  />
                ))}
              </div>
              {/* category section ends  */}

              {/* projects section starts  */}
              <div className="col-span-6 my-10">
                <div className="grid grid-cols-2 gap-4 lg:gap-8">
                  {project.map((item) => (
                    <ProjectCard
                      key={item.id}
                      id={item.id}
                      title={item.project_title}
                      desc={item.project_s_des}
                      img={`${process.env.Url}/images/${item.img}`}
                    />
                  ))}
                </div>
              </div>
              {/* project section ends  */}
            </div>
            {/* grid ends  */}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

export default Projectscategory;
