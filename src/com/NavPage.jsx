import React, { useState } from "react";
import SIK from "../assets/SIK로고.png";
import { BiPlusMedical } from "react-icons/bi";
import { FaBell, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavPage() {
  const [isPlusClicked, setIsPlusClicked] = useState(false);

  const handlePlusClick = () => {
    setIsPlusClicked(!isPlusClicked);
  };

  return (
    <div className="w-full h-[60px] bg-[#032541] flex justify-center">
      {/* 중앙정렬된 네비게이션 컨테이너 */}
      <div className="max-w-[1300px] w-full h-full flex justify-between px-8">
        {/* 1.왼쪽: 로고+메뉴 */}
        <div className="h-full flex space-x-8">
          {/* 로고 */}
          <div className="h-full w-[200px] flex items-center">
            <Link to="/">
              <img src={SIK} alt="main logo" />
            </Link>
          </div>
          {/* 메뉴영역 */}
          <div className="flex items-center space-x-6 text-white font-bold">
            <MenuItem title="Movies" subMenu={["Action", "Drama", "Comedy"]} />
            <MenuItem
              title="TV Shows"
              subMenu={[
                <Link to="/movies">Movie</Link>,
                <Link to="/tv">TV</Link>,
                "Drama",
              ]}
            />
            <MenuItem
              title="People"
              subMenu={["Actors", "Directors", "Producers"]}
            />
            <MenuItem
              title="More"
              subMenu={["Option 1", "Option 2", "Option 3"]}
            />
          </div>
        </div>
        {/* 2.오른쪽: 아이콘 영역 */}
        <div className="flex h-full items-center space-x-6">
          {/* 플러스버튼 */}
          <div
            className={`text-white cursor-pointer transition-transform ${
              isPlusClicked ? "rotate-45" : ""
            }`}
            onClick={handlePlusClick}
          >
            <BiPlusMedical />
          </div>
          {/* 랭귀지 선택 */}
          <div className="border border-white text-white p-1 text-xs hover:bg-white hover:text-[#032541]">
            EN
          </div>
          {/* 벨 아이콘 */}
          <div className="text-white">
            <FaBell />
          </div>
          {/* 아바타 */}
          <div className="w-8 h-8 bg-green-700 rounded-full text-white flex justify-center items-center">
            C
          </div>
          {/* 검색 아이콘 */}
          <div className="text-[#01b4e4]">
            <FaSearch />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
function MenuItem({ title, subMenu }) {
  return (
    <div className="group relative">
      <p className="cursor-pointer hover:text-blue-300">{title}</p>
      <div className="hidden group-hover:flex flex-col absolute top-full left-0  bg-white p-2 space-y-1 z-10">
        {subMenu.map((item, index) => (
          <p key={index} className=" text-[#032541]">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
