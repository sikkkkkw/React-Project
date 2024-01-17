import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const navigate = useNavigate();
  const [keyword, setkeyword] = useState();
  const handClick = () => {
    navigate(`/search?keyword=${keyword}`);
  };
  const handleChange = (e) => {
    setkeyword(e.target.value);
  };
  return (
    <div className="w-full flex justify-center bg-[#1B354A]">
      {/* 이미지 div */}
      <div className="relative w-[1300px] h-[350px] bg-[url('https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover flex px-12 py-12 ">
        {/* 컨테이너 */}
        <div className="z-10 w-full h-full text-white flex flex-col justify-between">
          {/* 타이틀 */}
          <div className=" -space-y-4">
            <h1 className="text-[48px] font-bold">Welcome.</h1>
            <h2 className=" text-[32px] font-semibold">
              Unlimited movies, TV shows, and more
            </h2>
          </div>
          {/* 인풋박스 */}
          <div className="relative flex">
            <input
              onChange={handleChange}
              className="w-full py-3 px-4 text-gray-900 outline-none rounded-3xl"
              type="text"
              placeholder="Search for movie, Tv show, person..."
            />
            <button
              onClick={handClick}
              className="absolute right-0 py-3 px-6 rounded-3xl font-semibold hover:text-black"
              style={{
                backgroundImage:
                  "linear-gradient(to top, #ff0844 0%, #ffb199 100%)",
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div></div>

        {/* absolute 가상 div */}
        <div className="absolute top-0 left-0 w-full h-full bg-blue-800/70"></div>
      </div>
    </div>
  );
}
