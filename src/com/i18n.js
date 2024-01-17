// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 번역 리소스
const resources = {
  en: {
    translation: {
      welcome: "Welcome.",
      explore:
        "Millions of movies, TV shows, and people to discover. Explore now.",
      searchPlaceholder: "Search for movie, TV show, person...",
      searchButton: "Search",
    },
  },
  ko: {
    translation: {
      welcome: "환영합니다.",
      explore:
        "발견할 수 있는 수백만 개의 영화, TV 프로그램 및 인물. 지금 탐험하세요.",
      searchPlaceholder: "영화, TV 프로그램, 인물 검색...",
      searchButton: "검색",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // 기본 언어 설정
  fallbackLng: "en", // 번역이 없을 경우 기본 언어로 빠짐
  interpolation: {
    escapeValue: false, // React 컴포넌트에 HTML을 사용할 수 있도록 함
  },
});

export default i18n;
