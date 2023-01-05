import React from "react";
import Logo from "../../../img/naver.png";
import "./Nav_top.css";
import { HiOutlineSearch } from "react-icons/hi";

{
  /* <img className="iosimg" alt="" src={IOStest} />; */
}
export default function Nav_top() {
  return (
    <div className="navtop-Box">
      <div className="navTop">
        <div className="navtop-Logo">
          <img className="naver-Logo" alt="" src={Logo} />
        </div>
        <div className="navtop-Search-Box">
          <div className="navtop-Search">
            <input className="search-Input"></input>
            <button className="search-Button">
              <HiOutlineSearch className="outlingSearch-Img" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
