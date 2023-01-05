import React from "react";
import { AiFillRightCircle } from "react-icons/ai";
import "./Header_bottom.css";

export default function Header_bottom() {
  return (
    <div className="headerbottom_Box">
      <div className="headerBottom">
        <div className="header-Start">
          네이버를 시작페이지로
          <AiFillRightCircle className="fillRightCircle-Img" />
          <div className="ling">|</div>
        </div>
        <b className="header-Child">쥬니어네이버</b>
        <b className="header-happyBin">해피빈</b>
      </div>
    </div>
  );
}
