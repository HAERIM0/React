import React from "react";
import { AiFillWarning } from "react-icons/ai";
import { GiSpermWhale } from "react-icons/gi";
import "./Header_top.css";
export default function Header_top() {
  return (
    <div className="headerTop-Box">
      <div className="headerTop">
        <div className="header-Img">
          <AiFillWarning className="aiFillWarning-Img" />
        </div>
        <div className="header-Text">
          매일 쓰는 브라우저 보안이 걱정된다면,{" "}
          <b>안전하고 빠른 최신 브라우저 웨일로 업데이트 하세요.</b>
        </div>
        <div className="header-DowImg">
          <b>
            <GiSpermWhale className="gispermWhale-Img" />
            다운로드
          </b>
        </div>
        <div className="header-X">3일 동안 보지 않기 X</div>
      </div>
    </div>
  );
}
