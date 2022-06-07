import React, { useEffect, useState } from "react";
import "../../css/Common.css";
import "../../css/Publicreg.css";
import EvaluationList from "../components/EvaluationList";
import Pagination from "../components/Pagination";
import useSelector from "react-redux";

type SuhumList = {
  SuhumNo: string;
  ApplicantName: string;
  GraduateSchoolName: string;
  age: number;
  gender: string;
};
type SuhumListProps = {
  suhumList: Array<SuhumList>;
};

function EvalList({ suhumList }: SuhumListProps) {
  // function EvalList({ suhumList }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  function currentPosts(tmp: any) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);

    return currentPosts;
  }

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(suhumList.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  let pageCount = pageNumbers.length;
  const getData = (currentPage: any) => {
    setCurrentPage(currentPage);
  };

  return (
    <div className="module_list module_box">
      <h5 className="sub_tit">공고 지원자</h5>
      <EvaluationList suhumList={currentPosts(suhumList)} />
      <Pagination
        pageNumbers={pageNumbers}
        number={currentPage}
        getPageData={getData}
        pageCount={pageCount}
      />
    </div>
  );
}

export default EvalList;
