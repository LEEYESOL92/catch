import React, { useContext } from "react";
import "../../css/Common.css";
import "../../css/Publicreg.css";
import EvalContext from "../Stores/EvalContext";

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
  const { selSuhum } = useContext(EvalContext);
  const value = useContext(EvalContext);

  return (
    <ul className="appdetail_list">
      {suhumList.map((data: any) => (
        <li
          key={data.SuhumNo}
          className={value.suhumNo === data.SuhumNo ? "selected" : ""}
        >
          <a className="core" onClick={() => selSuhum(data.SuhumNo)}>
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
  );
}

// const EvaluationList = ({ suhumList }) => {
//   return (
//     <ul className="appdetail_list">
//       {suhumList.map((data) => (
//         <li className="selected" key={data.SuhumNo}>
//           <a href="#" className="core">
//             <p className="pic"></p>
//             <p className="txt">
//               <span>{data.ApplicantName}</span>
//               <span className="mb5">27세 / 여</span>
//               <span>알에스알에스 기획</span>
//               <span>서강대학교</span>
//             </p>
//           </a>
//         </li>
//       ))}
//     </ul>
//   );
// };

export default EvaluationList;
