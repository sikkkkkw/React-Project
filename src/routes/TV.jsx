import React, { useEffect, useState } from "react";
import Layout from "../com/Layout";
import CircularProgress from "../com/CircularProgress";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";

export default function TV() {
  const [lists, setLists] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchTVData = async () => {
      const url = `https://api.themoviedb.org/3/tv/on_the_air?language=ko-KR&page=${page}`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODEzM2QyZmVjZTIxYjdiMTQ3YmVhZTIzMDM3ZGFkZSIsInN1YiI6IjY1OWNhMWRjMjJkZjJlMDFhMjExY2YyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1u5qItr3_otSuCY2UrAYfq4DoRbaTOBf4B6UMBtFR6g",
        },
      };

      try {
        const response = await fetch(url, options);
        const tvData = await response.json();
        setLists(tvData);
      } catch (error) {
        console.error("error:", error);
      }
    };

    fetchTVData();
  }, [page]);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <Layout>
      <div className="w-full flex flex-col items-center justify-center py-16 bg-[#1B354A]">
        <div className="w-[1000px] flex flex-wrap gap-4 gap-y-8">
          {lists?.results?.map((item) => (
            <Link
              key={item.id}
              to={{ pathname: `/detail/${item.id}`, state: { item } }}
            >
              <div
                key={item.id}
                className="w-[180px] h-[340px] rounded-lg shadow-lg overflow-hidden"
              >
                <div className="w-full h-[250px] bg-blue-500">
                  <img
                    className="w-full h-full object-cover"
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.name}
                  />
                </div>
                <div className="relative w-full h-[90px] pt-6 px-2 bg-white ">
                  <h2 className="font-semibold whitespace-nowrap">
                    {item.name}
                  </h2>
                  <p className="text-sm">{item.first_air_date}</p>
                  <div className="absolute -top-5 left-2">
                    <CircularProgress
                      rate={Math.floor(item.vote_average * 10)}
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={lists && lists.total_pages ? lists.total_pages : 0}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </Layout>
  );
}
