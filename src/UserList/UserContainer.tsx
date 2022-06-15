import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import UserList from "./UserList";
import {
  useUsersState,
  useUsersDispatch,
  getUsers
} from "./ContextAPI/UserInfoContext";
import UserInfo from "./UserInfo";

function UserContainer() {
  const dispatch = useUsersDispatch();
  const state = useUsersState();
  const { data: users, loading, error } = state.users;
  const { data: user } = state.user;

  useEffect(() => {
    async function fetchData() {
      getUsers(dispatch);
    }
    fetchData();
  }, []);
  if (!users) return <div>데이터없음</div>;
  return (
    <div className="module_boxs">
      <div className="module_list module_box">
        <UserList userList={users} />
      </div>
      <div className="module_middle">
        <UserInfo userInfo={user} />
      </div>
    </div>
  );
}

export default UserContainer;
