import React, { useEffect, useState } from "react";
import Layout from "../com/Layout";
import CircularProgress from "../com/CircularProgress";
import Pagination from "react-js-pagination";
import "./Paging.css";
import { Link } from "react-router-dom";
// require("bootstrap/less/bootstrap.less");

export default function Movies() {
  const [lists, setLists] = useState();
  const [page, setpage] = useState(1);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=${page}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODEzM2QyZmVjZTIxYjdiMTQ3YmVhZTIzMDM3ZGFkZSIsInN1YiI6IjY1OWNhMWRjMjJkZjJlMDFhMjExY2YyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1u5qItr3_otSuCY2UrAYfq4DoRbaTOBf4B6UMBtFR6g",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setLists(json);
      })
      .catch((err) => console.error("error:" + err));
  }, [page]);
  const handlePageChange = (page) => {
    setpage(page);
  };
  return (
    <Layout>
      <div className="w-full flex flex-col items-center justify-center py-16 bg-[#1B354A]">
        <div className="w-[1000px] flex flex-wrap gap-4  gap-y-8">
          {/* 아이템 */}
          {lists?.results?.map((item) => (
            <Link key={item.id} to={`/detail/${item.id}`}>
              {/* 이미지를 Link로 감싸고 디테일 페이지의 경로를 제공합니다. */}
              <div
                key={item.id}
                className="w-[180px] h-[340px]  rounded-lg shadow-lg overflow-hidden"
              >
                {/*위: 그림 */}
                <div className="w-full h-[250px] bg-blue-500">
                  <img
                    className="w-full h-full object-cover"
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt="movieList"
                  />
                </div>
                {/* 아래: 내용 */}
                <div className=" relative w-full h-[90px] pt-6 px-2 bg-white">
                  <h2 className="font-semibold whitespace-nowrap">
                    {item.title}
                  </h2>
                  <p className="text-sm">{item.release_date}</p>
                  {/* 좋아요 평가 */}
                  <div className="absolute -top-5 left-2  ">
                    <CircularProgress
                      rate={Math.floor(item.vote_average * 10)}
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* 페이지 네이션 */}
        <div className="w-full flex justify-center ">
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
