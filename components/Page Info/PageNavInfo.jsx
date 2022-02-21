import React from "react";

function PageNavInfo({ page, page_nav }) {
  return (
    <div className="bg-gray-100 shadow-md">
      <div className="container mx-auto px-4 lg:px-8 py-2">
        <div className="flex items-center justify-between text-xl">
          <p className="font-bold text-gray-800 uppercase">{page}</p>
          <p>{page_nav}</p>
        </div>
      </div>
    </div>
  );
}

export default PageNavInfo;
