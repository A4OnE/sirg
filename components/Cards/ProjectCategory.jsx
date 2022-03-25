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
        className={`flex flex-col space-y-4 lg:hover:scale-105 transition delay-100 duration-100 ease-in-out font-openSansFive my-4 text-lg
  ${
    link === router.asPath
      ? "text-primary border-b-2  border-primary w-fit"
      : null
  }
        `}
        // onClick={() => values(category)}
      >
        <Link href={`${link}`} passHref>
          <p className={`cursor-pointer   font-openSansFive`}>{category}</p>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCategory;
