import React from "react";
import SIK from "../assets/SIK로고.png";
import { Link } from "react-router-dom";

export default function FooterPage() {
  return (
    <div className="w-full h-[300px] flex justify-center items-center  bg-red-500">
      {/* 1 */}
      <div className="w-[200px] flex flex-col">
        <Link to="/">
          <img className="h-[30px] object-cover" src={SIK} alt="main logo" />
        </Link>
      </div>
      {/* 2 */}
      <div className="w-[160px] text-white flex flex-col">
        <h3 className="uppercase font-semibold">the basic</h3>
        <p>Lorem ipsum dolor,</p>
        <p>Lorem ipsum dolor,</p>
        <p>Lorem ipsum dolor,</p>
        <p>Lorem </p>
      </div>
      {/* 3 */}
      <div className="w-[160px] text-white flex flex-col">
        <h3 className="uppercase font-semibold">get involved</h3>
        <p>Lorem ipsum dolor,</p>
        <p>Lorem ipsum dolor,</p>
        <p>Lorem ipsum dolor,</p>
        <p>Lorem </p>
      </div>
      {/* 4 */}
      <div className="w-[160px] text-white flex flex-col">
        <h3 className="uppercase font-semibold">community</h3>
        <p>Lorem ipsum dolor,</p>
        <p>Lorem ipsum dolor,</p>
        <p>Lorem ipsum dolor,</p>
        <p>Lorem </p>
      </div>
      {/* 5 */}
      <div className="w-[160px] text-white flex flex-col">
        <h3 className="uppercase font-semibold">dwd</h3>
        <p>Lorem ipsum dolor,</p>
        <p>Lorem ipsum dolor,</p>
        <p>Lorem ipsum dolor,</p>
        <p>Lorem </p>
      </div>
    </div>
  );
}
