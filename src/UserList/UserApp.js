import React from "react";
import Users from "./Users";
import { UsersProvider } from "./ContextAPI/UserInfoContext";

function UserApp() {
  return (
    <UsersProvider>
      <Users />
    </UsersProvider>
  );
}

export default UserApp;
