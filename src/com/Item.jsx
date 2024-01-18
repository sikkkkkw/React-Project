import React from "react";
import CircularProgress from "../com/CircularProgress";
import { Link } from "react-router-dom";

export default function Item(lists) {
  return (
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
          <h2 className="font-semibold whitespace-nowrap">{item.title}</h2>
          <p className="text-sm">{item.release_date}</p>
          {/* 좋아요 평가 */}
          <div className="absolute -top-5 left-2  ">
            <CircularProgress rate={Math.floor(item.vote_average * 10)} />
          </div>
        </div>
      </div>
    </Link>
  );
}
