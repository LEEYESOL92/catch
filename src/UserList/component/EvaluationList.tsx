import React, { useContext, useState, useEffect } from "react";
import "../../css/Common.css";
import "../../css/Publicreg.css";
import UserInfo from "../UserInfo";
import {
  useUsersState,
  useUsersDispatch,
  getUser
} from "../ContextAPI/UserInfoContext";
type SuhumList = {
  SuhumNo: string;
  ApplicantName: string;
  GraduateSchoolName: string;
  age: number;
  gender: string;
};
type SuhumListProps = {
  // suhumList: Array<SuhumList>;
  suhumList: any;
};

function EvaluationList({ suhumList }: SuhumListProps) {
  // const [selSuhumNo, setUserId] = useState<null | string>(null);
  const [selSuhumNo, setUserId] = useState("");
  console.log("selSuhumNo", selSuhumNo);

  const state = useUsersState();
  const dispatch = useUsersDispatch();
  useEffect(() => {
    getUser(dispatch, selSuhumNo);
  }, [dispatch, selSuhumNo]);

  return (
    <>
      <ul className="appdetail_list">
        {suhumList.map((data: any) => (
          <li
            key={data.SuhumNo}
            // className={value.suhumNo === data.SuhumNo ? "selected" : ""}
          >
            <a className="core" onClick={() => setUserId(data.SuhumNo)}>
              <p className="pic"></p>
              <p className="txt">
                <span>{data.ApplicantName}</span>
                <span className="mb5">
                  {data.age}/ {data.gender}
                </span>
                <span>알에스알에스 기획</span>
                <span>{data.GraduateSchoolName}</span>
              </p>
            </a>
          </li>
        ))}
      </ul>
      {/* <UserInfo suhumNo={selSuhumNo} /> */}
    </>
  );
}
export default EvaluationList;
