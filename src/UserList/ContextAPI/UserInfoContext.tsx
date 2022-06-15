import React, { createContext, useReducer, useContext, Dispatch } from "react";
import axios, { AxiosError } from "axios";

interface UserListT {
  data: any;
  SuhumNo: string;
  ApplicantName: string;
  GraduateSchoolName: string;
  age: string;
  gender: string;
}

interface UsersStateT {
  users: {
    loading: boolean;
    error: null | AxiosError;
    data: null | UserListT[];
  };
  user: {
    loading: boolean;
    error: null | AxiosError;
    data: null | UserListT;
  };
}

type UserActionT =
  | { type: "GET_USERLIST" }
  | { type: "GET_USERS_SUCCESS"; data: UserListT[] }
  | { type: "GET_USERS_FAILURE"; error: AxiosError }
  | { type: "GET_USER" }
  | { type: "GET_USER_SUCCESS"; data: UserListT }
  | { type: "GET_USER_FAILURE"; error: AxiosError };

// UsersContext 에서 사용 할 기본 상태
const initialState = {
  users: {
    data: null,
    error: null,
    loading: false
  },
  user: {
    data: null,
    error: null,
    loading: false
  }
};

// 위에서 만든 객체 / 유틸 함수들을 사용하여 리듀서 작성
function usersReducer(state: UsersStateT, action: UserActionT) {
  switch (action.type) {
    case "GET_USERLIST":
      return {
        ...state,
        users: {
          ...state.users,
          loading: true
        }
      };
    case "GET_USERS_SUCCESS":
      return {
        ...state,
        users: {
          ...state.users,
          data: action.data,
          loading: false
        }
      };
    case "GET_USERS_FAILURE":
      return {
        ...state,
        users: {
          ...state.users,
          error: action.error,
          loading: false
        }
      };
    case "GET_USER":
      return {
        ...state,
        user: {
          ...state.user,
          loading: true
        }
      };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        user: {
          ...state.user,
          data: action.data,
          loading: false
        }
      };
    case "GET_USER_FAILURE":
      return {
        ...state,
        user: {
          ...state.user,
          error: action.error,
          loading: false
        }
      };
    default:
      throw new Error(`Unhanded action type`);
  }
}

// State 용 Context 와 Dispatch 용 Context 따로 만들어주기
const UsersStateContext = createContext<null | UsersStateT>(null);
const UsersDispatchContext = createContext<null | Dispatch<UserActionT>>(null);

export const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [usersState, usersDispatch] = useReducer(usersReducer, initialState);

  return (
    <UsersStateContext.Provider value={usersState}>
      <UsersDispatchContext.Provider value={usersDispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  );
};

// State 를 쉽게 조회 할 수 있게 해주는 커스텀 Hook
export function useUsersState() {
  const usersState = useContext(UsersStateContext);
  if (!usersState) throw new Error("Can not find userStateProvider");
  return usersState;
}

// Dispatch 를 쉽게 사용 할 수 있게 해주는 커스텀 Hook

export const useUsersDispatch = () => {
  const usersDispatch = useContext(UsersDispatchContext);
  if (!usersDispatch) throw new Error("Can not find userDispatchProvider");
  return usersDispatch;
};

export const getUsers = async (dispatch: React.Dispatch<UserActionT>) => {
  dispatch({ type: "GET_USERLIST" });
  try {
    const response = await axios.get<UserListT[]>(
      "http://localhost:3005/user/list"
    );
    dispatch({ type: "GET_USERS_SUCCESS", data: response.data });
  } catch (e) {
    //  dispatch({ type: "GET_USERS_FAILURE", error: e });
  }
};

export const getUser = async (
  dispatch: React.Dispatch<UserActionT>,
  SuhumNo: string
) => {
  dispatch({ type: "GET_USER" });
  try {
    const response = await axios.get<UserListT>(
      `http://localhost:3005/user/info/${SuhumNo}`
    );
    dispatch({ type: "GET_USER_SUCCESS", data: response.data });
  } catch (e) {
    //dispatch({ type: 'GET_USER_FAILURE', error: e });
  }
};
