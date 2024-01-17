import { useParams } from "react-router-dom";
import Layout from "../com/Layout";
import { useEffect, useState } from "react";
import changeRuntime from "../lib/changeRuntime";
import CircularProgress from "../com/CircularProgress";

export default function Details() {
  const { movieId } = useParams(); //값 가져오는 함수
  const [movieDetails, setData] = useState();
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`;
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
        setData(json);
      })
      .catch((err) => console.error("error:" + err));
  }, [movieId]);
  return (
    <Layout>
      <div className="relative w-full h-[700px] flex justify-center">
        {/* backdrop_path 이미지 */}
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path}`}
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
                  src={`https://image.tmdb.org/t/p/original${movieDetails?.poster_path}`}
                  alt="mainimage"
                />
              </div>
            </div>
            {/* 오른쪽: 설명 */}
            <div className="w-3/4 h-full flex flex-col justify-center text-white">
              {/* 제목 */}
              <div className="flex space-x-2">
                <h1 className="font-bold text-3xl">{movieDetails?.title}</h1>
                <h2 className="text-2xl">
                  ({movieDetails?.release_date?.split("-")[0]})
                </h2>
              </div>
              {/* 장르 러닝타임 */}
              <div className="flex space-x-2">
                {/* 개봉일 */}
                <span>{movieDetails?.release_date?.replaceAll("-", "/")}</span>
                {/* 구분자 */}
                <span>•</span>
                {/* 장르 */}
                <span className="space-x-2">
                  {movieDetails?.genres?.map((genre) => (
                    <span key={genre.name}>{genre.name}</span>
                  ))}
                </span>
                {/* 구분자 */}
                <span>•</span>
                {/* 러닝타임 */}
                <span>{changeRuntime(movieDetails?.runtime)}</span>
              </div>
              {/* favorite */}
              <div>
                <CircularProgress
                  rate={Math.floor(movieDetails?.vote_average * 10)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
