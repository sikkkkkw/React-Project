import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function TrendingPage2() {
  const [lists, setLists] = useState([]);
  const [displayedItems, setDisplayedItems] = useState(5);
  const tabs = [
    { id: "all", label: "All" },
    { id: "movie", label: "Movies" },
    { id: "tv", label: "TV" },
    { id: "person", label: "People" },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/trending/${activeTab}/day?language=ko-KR`;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGE2YjA1MDkzYzU3NTZjYjdjZTY5MjE2ZjE2NTI2YyIsInN1YiI6IjVlY2NiODQ2MDIxY2VlMDAyMThhNmNkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O8NTSQ3WbjEipLHuOyR1hqkz2NSJCB-IP_4Q5M0hSsE",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setLists(json?.results);
      })
      .catch((err) => console.error("error:" + err));
  }, [activeTab]);

  const handleLoadMore = () => {
    // Increase the number of displayed items when "Load More" is clicked
    setDisplayedItems((prev) => prev + 5);
  };

  return (
    <div className="w-full flex justify-center bg-[#1B354A]">
      <div className="w-[1300px] ">
        {/* 타이틀 및 탭바 */}
        <div className="flex items-center justify-between px-4 pt-8">
          <h2 className="text-2xl font-semibold">Trending</h2>
          <div className="flex space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? "text-white bg-gray-900"
                    : "text-black bg-gray-200"
                } rounded-full px-6 py-3 text-xl font-semibold transition`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 리스트 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
          {lists.slice(0, displayedItems).map((item) => (
            <Link key={item.id} to={`/detail/${item.id}`}>
              {/* 이미지를 Link로 감싸고 디테일 페이지의 경로를 제공합니다. */}
              <motion.div
                layoutId={`bubble-${item.id}`}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                className="relative overflow-hidden rounded-md bg-gray-300 mb-4"
              >
                <img
                  src={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                      : `https://image.tmdb.org/t/p/w500${item.profile_path}`
                  }
                  alt={item.title || item.name}
                  className="w-full h-[400px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold overflow-hidden whitespace-nowrap">
                    {item.title || item.name}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        {displayedItems < lists.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMore}
              className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition mb-3"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
