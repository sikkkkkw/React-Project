import React from "react";
import NavPage from "../com/NavPage";
import FooterPage from "./FooterPage";

export default function Layout({ children }) {
  return (
    <div>
      {/* '네비게이션' */}
      <NavPage />
      {children}
      <FooterPage />
    </div>
  );
}
