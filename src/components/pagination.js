import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import Pagination from "react-js-pagination";

const Pagination = ({ resPerPage, productsCount }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  let page = searchParams.get("page") || 1;
  page = Number(page);

  let queryParams;

  const handlePageChange = (currentPage) => {
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);

      if (queryParams.has("page")) {
        queryParams.set("page", currentPage);
      } else {
        queryParams.append("page", currentPage);
      }

      const path = window.location.pathname + "?" + queryParams.toString();
      console.log("path", path);
      router.push(path);
    }
  };

  return (
    <div className="flex mt-20 justify-center">
      <Pagination
        activePage={page}
        itemsCountPerPage={resPerPage}
        totalItemsCount={productsCount}
        onChange={handlePageChange}
        nextPageText={"Next"}
        prevPageText={"Prev"}
        firstPageText={"First"}
        lastPageText={"Last"}
        itemClass="relative inline-flex items-center border border-gray bg-white px-4 py-2 text-sm font-medium text-black hover:text-white hover:bg-primary focus:z-20"
        activeLinkClassName="z-10 inline-flex items-center border border-primary bg-white text-sm font-medium text-black focus:z-20"
        activeClass="z-10 inline-flex items-center border border-primary bg-primary text-sm font-medium text-white focus:z-20"
      />
    </div>
  );
};

export default Pagination;