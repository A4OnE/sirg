import Link from "next/link";
import React from "react";

function ProjectCategory({ category, link }) {
  return (
    <div>
      <div className="flex flex-col space-y-4 font-medium my-4 text-lg">
        <Link href={`${link}`}>
          <p className="cursor-pointer">{category}</p>
        </Link>{" "}
      </div>
    </div>
  );
}

export default ProjectCategory;
