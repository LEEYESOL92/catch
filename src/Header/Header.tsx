import React, { useState } from "react";
import "../css/Common.css";
import "../css/Publicreg.css";

function Header() {
  return (
    <div id="corpTop">
      <div className="inner">
        <p className="logo">
          <img
            src="https://imgorg.catch.co.kr/job/catchapply/corp_util_logo.png"
            alt="CATCH>기업회원"
          />
        </p>
        <span className="sub_tit">평가하기</span>
        <ul className="util">
          <li>
            <a href="#">로그아웃</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
