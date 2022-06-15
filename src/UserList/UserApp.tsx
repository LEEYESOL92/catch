import React from "react";
import UserContainer from "./UserContainer";
import { UsersProvider } from "./ContextAPI/UserInfoContext";
function UserApp() {
  return (
    <UsersProvider>
      {/*<Users />*/}
      <UserContainer />
    </UsersProvider>
  );
}

export default UserApp;
