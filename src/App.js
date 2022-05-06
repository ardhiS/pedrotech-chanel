import React from "react";
import { useState } from "react";
import data from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";

export default function App() {
  const [users, setUsers] = useState(data.slice(0, 50));
  const [pageNumber, setPagenumber] = useState(0);

  const userPerpage = 10;
  const userPerpageNumber = pageNumber * userPerpage;

  const displayUser = users.slice(userPerpageNumber, userPerpageNumber + userPerpage).map((user) => {
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
    setPagenumber(selected);
  };
  return (
    <div className="App">
      {displayUser}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}
