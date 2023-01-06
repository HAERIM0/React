import React from "react";
import {
  BsFillBookmarksFill,
  BsFillGridFill,
  BsChevronRight,
} from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { ImNewspaper } from "react-icons/im";
import "./Section_bottom.css";
import newsimg from "../../../../img/news.png";
export default function Section_bottom() {
  return (
    <div className="dfdfdf">
      <div className="sectionbottom-Box">
        <div className="sectionbottom">
          <ImNewspaper className="news-Img" />
          <b className="news-stand">
            뉴스스탠드
            <BsChevronRight className="chevronRight-Imgt" />
          </b>
          <div className="follow-Wing">구독한 언론사</div>
          <b className="all-News">전체언론사</b>
        </div>
        <div className="icons-Img">
          <BsFillBookmarksFill className="fillBookmarksFill-Img" />
          <BsFillGridFill className="fillGridFill-Img" />
          <AiFillSetting className="fillSetting-Img" />
        </div>
      </div>
      <div className="newsall-Box">
        <img className="newsall-Img" alt="" src={newsimg} />
      </div>
    </div>
  );
}
