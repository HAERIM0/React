import React from "react";
import { HiOutlineMailOpen, HiPlay } from "react-icons/hi";
import { RiLiveFill } from "react-icons/ri";
import { CiFaceSmile, CiFaceMeh } from "react-icons/ci";
import { AiOutlineDown } from "react-icons/ai";
import "./Nav_bottom.css";

export default function Nav_bottom() {
  return (
    <div>
      <div className="navbottom-Box">
        <div className="navbottom-Top">
          <b className="a">
            <HiOutlineMailOpen />
            메일
          </b>
          <b className="b">카페</b>
          <b className="c">블로그</b>
          <b className="d">지식iN</b>
          <b className="e">쇼핑</b>
          <b className="f">
            쇼핑
            <RiLiveFill />
          </b>
          <b className="g">Pay</b>
          <b className="h">
            <HiPlay />
            TV
          </b>
        </div>
        <div className="navbottom-Middle">
          <b className="aa">사전</b>
          <b className="bb">뉴스</b>
          <b className="cc">증권</b>
          <b className="dd">부동산</b>
          <b className="ee">지도</b>
          <b className="ff">VIBE</b>
          <b className="gg">도서</b>
          <b className="hh">웹툰</b>
        </div>
        <div className="navbottom-the">
          더보기
          <AiOutlineDown />
        </div>
        <div className="navbottom-Bottom">
          <div className="navbottom-W">
            미세 <CiFaceSmile className="faceSmile-Img" />
            <b>보통</b>
          </div>
          <div className="Nav-Ling">|</div>
          <div className="navbottom-Mw">
            초미세
            <CiFaceMeh className="faceMeh-Img" /> <b>나쁨</b>
          </div>
        </div>
      </div>
    </div>
  );
}
