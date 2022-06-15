import React, { useContext } from "react";
import { useUsersState } from "./ContextAPI/UserInfoContext";
type selSuhumProps = {
  // suhumList: Array<SuhumList>;
  suhumNo: any;
};

function UserInfo() {
  const state = useUsersState();
  const { data: user, loading, error } = state.user;
  console.log("useruser", user);
  return (
    <div className="module_info module_box">
      <p
        className="pic"
        // style="background-image: url('https://imgorg.catch.co.kr/job/corp/edu_pic_yyd.jpg');"
      ></p>
      <dl>
        <dt>{user?.SuhumNo}???</dt>
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

export default UserInfo;
