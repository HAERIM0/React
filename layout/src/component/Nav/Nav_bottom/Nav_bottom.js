import React from "react";
import { HiOutlineMailOpen, HiPlay } from "react-icons/hi";
import { RiLiveFill } from "react-icons/ri";
import "./Nav_bottom.css";

export default function Nav_bottom() {
  return (
    <div className="df">
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
          <b>사전</b>
          <b>뉴스</b>
          <b>증권</b>
          <b>부동산</b>
          <b>지도</b>
          <b>VIBE</b>
          <b>도서</b>
          <b>웹툰</b>
        </div>
        <div className="navbottom-the">더보기</div>
        <div className="navbottom-Bottom">
          <div>
            미세 <b>보통</b>
          </div>
          <div>|</div>
          <div>
            초미세 <b>나쁨</b>
          </div>
        </div>
      </div>
    </div>
  );
}
