import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import EvaluationList from "./component/EvaluationList";
import Pagination from "./component/Pagination";
import { useUsersDispatch } from "./ContextAPI/UserInfoContext";
type UserList = {
  SuhumNo: string;
  ApplicantName: string;
  GraduateSchoolName: string;
  age: number;
  gender: string;
};
type UserListProps = {
  // userList: Array<UserList>;
  userList: any;
};

function UserList({ userList }: UserListProps) {
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
  for (let i = 1; i <= Math.ceil(userList.data.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  let pageCount = pageNumbers.length;
  const getData = (currentPage: any) => {
    setCurrentPage(currentPage);
  };

  return (
    <div className="module_list module_box">
      <h5 className="sub_tit">공고 지원자</h5>
      <EvaluationList suhumList={currentPosts(userList.data)} />
      <Pagination
        pageNumbers={pageNumbers}
        number={currentPage}
        getPageData={getData}
        pageCount={pageCount}
      />
    </div>
  );
}

export default UserList;
