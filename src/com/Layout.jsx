import React from "react";
import NavPage from "../com/NavPage";
import FooterPage from "./FooterPage";
import { useState } from "react";

export default function Layout({ children }) {
  const [scroll, setScroll] = useState(true);
  document.addEventListener("wheel", (e) => {
    //  마우스 휠 내릴때
    // 네비게이션을 감추기 위해 scroll 에 false
    if (e.deltaY > 0) {
      setScroll(false);
    } else if (e.deltaY < 0) {
      // 마우스 휠 올릴때
      // 네비게이션을 보이기 위해 scroll 에 true
      setScroll(true);
    }
  });
  return (
    <div>
      {/* '네비게이션' */}
      <NavPage scroll={scroll} />
      {children}

      <FooterPage />
    </div>
  );
}
