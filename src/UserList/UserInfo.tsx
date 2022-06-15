import React, { useContext } from "react";
import { useUsersState } from "./ContextAPI/UserInfoContext";

type UserInfo = {
  SuhumNo: string;
  ApplicantName: string;
  GraduateSchoolName: string;
  age: number;
  gender: string;
};
type UserInfoProps = {
  // userList: Array<UserList>;
  userInfo: any;
};

function UserInfo({ userInfo }: UserInfoProps) {
  // const state = useUsersState();
  // const { data: user, loading, error } = state.user;
  if (!userInfo) return <div>데이터없음</div>;
  return (
    <div className="module_info module_box">
      <p
        className="pic"
        // style="background-image: url('https://imgorg.catch.co.kr/job/corp/edu_pic_yyd.jpg');"
      ></p>
      <dl>
        <dt>{userInfo.data.SuhumNo}</dt>
        <dd>
          <span>
            {userInfo.data.gender}/{userInfo.data.age}
          </span>
          <span>{userInfo.data.GraduateSchoolName} 졸업</span>
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
