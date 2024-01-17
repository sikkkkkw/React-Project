import React from "react";
import Layout from "../com/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="w-full h-screen flex justify-center items-center">
        <h1 className="font-bold text-3xl">페이지를 찾을 수 없습니다.</h1>
      </div>
    </Layout>
  );
}
