import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TrendingPage() {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1";
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
        setLists(json?.results);
      })
      .catch((err) => console.error("error:" + err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full flex justify-center bg-[#1B354A]">
      <div className="w-[1300px] h-[450px] pt-8 ">
        {/* 타이틀 */}
        <h2 className="px-4 py-2 font-semibold text-[24px]">Trending</h2>
        {/* 리스트 */}
        <div className="w-[1100px] h-[500px] mx-auto bg-main pointer-events-none ">
          <Slider {...settings}>
            {lists.map((item) => (
              <div key={item.id} className="relative">
                <img
                  className="object-cover w-[600px] mx-auto"
                  src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                  alt=""
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 w-[600px] mx-auto bg-black text-white">
                  <h3 className="text-lg">
                    {item.title}
                    <div className=" text-yellow-400 text-sm">
                      {item.release_date}
                    </div>
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
