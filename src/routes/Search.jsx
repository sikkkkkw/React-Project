import React, { useEffect, useState } from "react";
import Layout from "../com/Layout";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import CircularProgress from "../com/CircularProgress";
import Pagination from "react-js-pagination";
import "./Paging.css";

export default function Search() {
  const location = useLocation();
  //   console.log(location.search);
  const search = new URLSearchParams(location.search);
  const keyword = search.get("keyword");
  //   console.log(keyword); //input창에서 받아온 키워드값
  //   const [data, setData] = useState();
  const [lists, setLists] = useState();
  const [page, setpage] = useState(1);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=ko-KR&page=${page}`;
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
        // setData(json);
        setLists(json);
      })
      .catch((err) => console.error("error:" + err));
  }, [keyword, page]);
  const handlePageChange = (page) => {
    setpage(page);
  };
  return (
    <Layout>
      <div className="w-full flex flex-col items-center justify-center py-16 bg-[#1B354A]">
        <div className="w-full flex justify-center flex-wrap gap-4  gap-y-8">
          {/* 아이템 */}
          {lists?.results?.map((item) => (
            <Link key={item.id} to={`/detail/${item.id}`}>
              {/* 이미지를 Link로 감싸고 디테일 페이지의 경로를 제공합니다. */}
              <div
                key={item.id}
                className="w-[1100px] h-[180px]  rounded-lg shadow-lg overflow-hidden flex "
              >
                {/*위: 그림 */}
                <div className="w-[120px] h-full bg-blue-500">
                  <img
                    className="w-full h-full object-cover"
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt="movieList"
                  />
                </div>
                {/* 아래: 내용 */}
                <div className=" relative w-[1000px] h-full text-white flex flex-col p-2 ">
                  <h2 className="font-semibold whitespace-nowrap  mb-2 text-[20px]">
                    {item.title}
                  </h2>
                  <p className="text-sm  mb-2">{item.release_date}</p>
                  <p className="text-sm text-[12px] overflow-hidden ">
                    {item.overview}
                  </p>

                  {/* 좋아요 평가 */}
                  <div className=" absolute top-[120px] -left-8  ">
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
