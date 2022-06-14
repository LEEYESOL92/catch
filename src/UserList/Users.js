import React, { useState } from "react";
import {
  useUsersState,
  useUsersDispatch,
  getUsers
} from "./ContextAPI/UserInfoContext";
import User from "./User";

function UserApp() {
  const [userId, setUserId] = useState(null);
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  const { data: users, loading, error } = state.users;
  const fetchData = () => {
    getUsers(dispatch);
  };

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return <button onClick={fetchData}>로그인하기</button>;
  console.log(users);
  return (
    <>
      <ul>
        {users.map((user) => (
          <li
            key={user.SuhumNo}
            onClick={() => setUserId(user.SuhumNo)}
            style={{ cursor: "pointer" }}
          >
            &nbsp; - {user.SuhumNo} / {user.ApplicantName} /{" "}
            {user.GraduateSchoolName}
          </li>
        ))}
      </ul>
      {userId && <User id={userId} />}
    </>
  );
}

export default UserApp;
