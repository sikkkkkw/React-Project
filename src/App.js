import SearchPage from "./com/SearchPage";
import TrendingPage from "./com/TrendingPage";
import TrendingPage2 from "./com/TrendingPage2";
import Best from "./com/Best";
import Layout from "./com/Layout";

function App() {
  return (
    <div>
      <Layout>
        {/* 검색 영역 */}
        <SearchPage />
        {/* The best */}
        <Best />
        {/* Trending */}
        <TrendingPage />
        {/* Trending2 */}
        <TrendingPage2 />
      </Layout>
    </div>
  );
}

export default App;
