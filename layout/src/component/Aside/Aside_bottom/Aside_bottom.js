import React from "react";
import "./Aside_bottom.css";
import showtwo from "../../../img/showtwo.png";
import { RiLiveFill } from "react-icons/ri";

export default function Aside_bottom() {
  return (
    <div>
      <div className="asidebottom-Box">
        <div className="asidebottom-List">
          <b className="livelist-Box">
            <RiLiveFill className="liveFill-Img" />
          </b>

          <div className="asidebottom-Live">저녁방송 메인뉴스 보기</div>
        </div>
        <div className="showtwo-Box">
          <img className="showtwo-Img" alt="" src={showtwo} />
        </div>
      </div>
    </div>
  );
}
