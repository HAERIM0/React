import React from "react";
import { AiFillLock } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import "./Aside_top.css";

export default function Aside_top() {
  return (
    <div>
      <div className="asidetop-Box">
        <div className="asidetop-Text">
          네이버를 더 안전하고 편리하게 이용하세요
        </div>
        <div className="naverlogin-Box">
          <button className="naverlogin-Bt">
            <b>NAVER</b>로그인
          </button>
        </div>
        <div className="naverjoin-Box">
          <div className="naver-Finding">
            <AiFillLock />
            아이디 | 비밀번호 찾기
          </div>
          <div className="naver-join">
            <BsFillPeopleFill />
            회원가입
          </div>
        </div>
      </div>
    </div>
  );
}
