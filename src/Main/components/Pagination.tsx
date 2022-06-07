import React from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import "../../css/Common.css";
import "../../css/Publicreg.css";

type PageNumbersProps = {
  pageNumbers: any;
  number: any;
  getPageData: any;
  pageCount: number;
};

function Pagination({
  pageNumbers,
  number,
  getPageData,
  pageCount
}: PageNumbersProps) {
  const onClick = (page: any) => {
    if (page === 0) {
      page = 1;
    }
    if (page === pageCount + 1) {
      page = page - 1;
    }
    getPageData(page);
  };

  let pageCountSet = [];
  for (let i = 1; i <= pageCount; i++) {
    pageCountSet.push(i);
  }

  let finalIndexes = [];
  console.log(number, pageNumbers.length - 3);
  switch (number) {
    case 1: //첫번째
      finalIndexes = pageNumbers.slice(number - 1, number + 2);
      finalIndexes.push(pageCount);
      finalIndexes.splice(finalIndexes.length - 1, 0, "...");
      break;
    case pageCount: // 마지막
      finalIndexes = pageNumbers.slice(number - 3, number + 1);
      finalIndexes.unshift(1);
      finalIndexes.splice(1, 0, "...");
      break;
    default:
      if (number > pageNumbers.length - 3) {
        console.log("duirl??");
        finalIndexes = pageNumbers.slice(number - 2, number + 1);
        finalIndexes.unshift(1);
        finalIndexes.splice(1, 0, "...");
      } else if (number > 3 && number <= pageNumbers.length - 3) {
        console.log("?");
        finalIndexes = pageNumbers.slice(number - 2, number + 1);
        finalIndexes.unshift(1);
        finalIndexes.push(pageCount);
        finalIndexes.splice(finalIndexes.length - 1, 0, "..");
        finalIndexes.splice(1, 0, "..");
      } else {
        console.log("?????????????", pageNumbers);
        finalIndexes = pageNumbers.slice(number - 3, number + 1);
        finalIndexes.push(pageCount);
        finalIndexes.splice(finalIndexes.length - 1, 0, "...");
      }
      break;
  }
  return (
    <div className="pageing applicant">
      <a className="pre none" onClick={() => onClick(number - 1)}>
        이전
      </a>

      {finalIndexes.map((page: number) =>
        page === number ? (
          <strong key={page} onClick={() => onClick(page)}>
            {page}
          </strong>
        ) : (
          <a key={page} onClick={() => onClick(page)}>
            {page}
          </a>
        )
      )}
      <a className="next" onClick={() => onClick(number + 1)}>
        다음
      </a>
    </div>
  );
}

export default Pagination;
