import React, { useContext } from "react";
import "../../css/Common.css";
import "../../css/Publicreg.css";
import EvalContext from "../Stores/EvalContext";

function EvalInfo() {
  const value = useContext(EvalContext);
  return (
    <div className="module_info module_box">
      <p
        className="pic"
        // style="background-image: url('https://imgorg.catch.co.kr/job/corp/edu_pic_yyd.jpg');"
      ></p>
      <dl>
        <dt>{value.suhumNo}</dt>
        <dd>
          <span>여/24</span>
          <span>이름고등학교 졸업</span>
          <span>아프리카어과 3/4.5</span>
        </dd>
      </dl>
      <a href="javascipt:void(0)" className="arr_link">
        지원서 보기
      </a>
    </div>
  );
}

export default EvalInfo;
