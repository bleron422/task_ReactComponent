import './App.scss';
import Card from "./components/Card"
import React, {useState} from "react";
import data from './data'
import  ReactPaginate from 'react-paginate';

function App() {

const [users, setUsers] = useState(data.slice(0,20))
const [pageNumber, setPageNumber] = useState(0);


const usersPerPage = 6;
const pagesVisited = pageNumber * usersPerPage

const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage).map((details) => {
  return (
       <Card test={details} /> 
  )
})

const pageCount = Math.ceil(users.length / usersPerPage)

const changePage = ({selected}) => {
 setPageNumber(selected)
}

  return (
    <div className="wrapper">
     {displayUsers}
     <div className="footer">
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
    </div>
  );
}

export default App;
