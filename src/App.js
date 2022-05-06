import React from "react";
import { useState } from "react";
import JsonFake from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";

export default function App() {
  const [users, setUsers] = useState(JsonFake.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);
  const userPerpage = 10;
  const pagesVisited = pageNumber * userPerpage;
  // explanation displayusers
  // let imagine we are in 30 and want to show 30- 40
  // for item 30 is is a pagesVisited beacuse it has result userPerpage * pageNumber
  // for item 40 it's result from pagesVisited = 30 + userPerpage = 10; => 40
  const displayUsers = users.slice(pagesVisited, pagesVisited + userPerpage).map((user) => {
    return (
      <div className="user">
        <h3>{user.first_name}</h3>
        <h3>{user.last_name}</h3>
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
