import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
function ProjectCategory({
  category,
  link,
  ided,
  handleClick,
  values,
  active,
}) {
  const router = useRouter();
  console.log(router, `Projects/` + category, link, active);
  return (
    <div>
      {/* router.query.category */}
      <div
        className={`flex flex-col space-y-4 lg:hover:scale-105 transition delay-300 duration-200 ease-in-out font-medium my-4 text-lg
  ${link === router.asPath ? "text-red-500 " : null}
        `}
        // onClick={() => values(category)}
      >
        <Link href={`${link}`} passHref>
          <p className={`cursor-pointer font-openSansFive`}>{category}</p>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCategory;
