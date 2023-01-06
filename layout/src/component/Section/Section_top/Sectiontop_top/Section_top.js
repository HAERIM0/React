import React from "react";
import showimg from "../../../../img/show.png";
import "./Section_top.css";
import { BsChevronRight } from "react-icons/bs";

export default function Section_top() {
  return (
    <div>
      <div className="sectiontop-Box">
        <div className="sectiontop-Img">
          <img className="show-Img" alt="" src={showimg} />
        </div>
        <div className="sectiontop-List-Box">
          <b className="df">
            연합뉴스
            <BsChevronRight className="chevronRight-Img" />
          </b>
          <div className="news">전해림 오늘 귤 5개 먹어"...</div>
          <div className="news-Home">뉴스홈 </div>
          <div className="sectiontop-List">
            <b className="aaa">연예</b>
            <b className="bbb">스포츠</b>
            <b className="ccc">경제</b>
          </div>
        </div>
      </div>
    </div>
  );
}
