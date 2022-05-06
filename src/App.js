import React from "react";
import { useState } from "react";
import jsonData from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";
export default function App() {
  const [users, setUser] = useState(jsonData.slice(0, 100));
  const [pageNumber, setPageNumber] = useState(0);
  const userPerpage = 20;
  const pagesVisited = pageNumber * userPerpage;
  // page pagesVisited = 10 + (pagesVisited = 10 + pagesVisited + userPerpage = 10 => 20
  const displayUsers = users.slice(pagesVisited, pagesVisited + userPerpage).map((user) => {
    return (
      <div className="user">
        <h3>{user.first_name}</h3>
        <h3>{user.first_lastname}</h3>
        <h3>{user.email}</h3>
      </div>
    );
  });

  const pageCount = Math.ceil(users.length / userPerpage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="App">
      {displayUsers}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}
