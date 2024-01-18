import React, { useEffect, useState } from "react";
import Layout from "../com/Layout";
import CircularProgress from "../com/CircularProgress";
import { useParams } from "react-router-dom";

export default function TVDetails() {
  const { tvId } = useParams();
  const [tvDetails, setTVDetails] = useState();

  useEffect(() => {
    const fetchTVDetails = async () => {
      const url = `https://api.themoviedb.org/3/tv/${tvId}?language=ko-KR`;
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
        setTVDetails(tvData);
        console.log(tvData);
      } catch (error) {
        console.error("error:", error);
      }
    };

    fetchTVDetails();
  }, [tvId]);

  return (
    <Layout>
      <div className="relative w-full h-[700px] flex justify-center">
        {/* backdrop_path 이미지 */}
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original${tvDetails?.backdrop_path}`}
            alt="backimage"
          />
        </div>
        {/* 필터기능 div */}
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900/90 flex justify-center">
          <div className="w-[1300px] h-full flex">
            {/* 왼쪽: 이미지 */}
            <div className="w-1/4 h-full flex items-center">
              <div className="w-[80%] h-[80%]">
                <img
                  className="w-full h-[500px] object-cover"
                  src={`https://image.tmdb.org/t/p/original${tvDetails?.poster_path}`}
                  alt="mainimage"
                />
              </div>
            </div>
            {/* 오른쪽: 설명 */}
            <div className="w-3/4 h-full flex flex-col justify-center text-white">
              {/* 제목 */}
              <div className="flex space-x-2">
                <h1 className="font-bold text-3xl">{tvDetails?.name}</h1>
                <h2 className="text-2xl">
                  ({tvDetails?.first_air_date?.split("-")[0]})
                </h2>
              </div>
              {/* 장르 러닝타임 */}
              <div className="flex space-x-2">
                {/* 첫 방영일 */}
                <span>{tvDetails?.first_air_date?.replaceAll("-", "/")}</span>
                {/* 구분자 */}
                <span>•</span>
                {/* 장르 */}
                <span className="space-x-2">
                  {tvDetails?.genres?.map((genre) => (
                    <span key={genre.name}>{genre.name}</span>
                  ))}
                </span>
                {/* 구분자 */}
                <span>•</span>
                {/* 에피소드 수 등 필요한 정보 추가 */}
              </div>
              {/* favorite */}
              <div>
                <CircularProgress
                  rate={Math.floor(tvDetails?.vote_average * 10)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
