import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const border = css`
  border: 1px solid #525252;
`;

const TableContainer = styled.table`
  ${border}
  border-collapse: collapse;  
`;
const cell = styled.td`
  ${border}
  padding: 10px 20px;  
`;
const DateCell = styled(cell)``;
const CategoryCell = styled(cell)``;
const DescriptionCell = styled(cell)``;

const PaginationLinkConainer = styled.div``;

const PaginationLink = styled.span`
  margin: 10px;
  ${(props) => {
    if (!props.currentlySelected) {
      return `
        color: #0000EE;
        text-decoration: underline;
        cursor: pointer;
      `;  
    }
  }}
`;

const Table = (props)=> {
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 5; 

  function getDayName(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
  }
  
  function getTime(date) {
      const suffix = date.getHours() > 11 ? "PM" : "AM";
      const hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
      const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`
      return `${hour}:${minutes}${suffix}`
  } 

  function renderTableData() {
    const startIndex = currentPage * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return props.data.slice(startIndex, endIndex).map((row)=> {
      const date = new Date(row.createdAt);
      return (
        <tr key = {`table-row-${row.createdAt}`}>
          <DateCell>{`${getDayName(date)}, ${date.getMonth() + 1}/${date.getDate()}, ${getTime(date)}`}</DateCell>
          <CategoryCell>{row.category}</CategoryCell>
          <DescriptionCell>{row.description}</DescriptionCell>
        </tr>
      );
    });
  }
  
  function renderPaginationLinks() {
    if (props.data.length <= rowsPerPage) return;
    let paginationLinks = [];
    for(let i = 0; i < props.data.length; i += rowsPerPage) {
      const index = (i / rowsPerPage) + 1;
      paginationLinks.push(
        <PaginationLink 
          key = {`pagination-link-${i}`} 
          currentlySelected = {index - 1 == currentPage} 
          onClick = {()=> setCurrentPage(index - 1)}
        >
          {index}
        </PaginationLink>);
    }
    return paginationLinks;
  }

  return (
    <React.Fragment>
      <TableContainer>
      <tbody>
        <tr>
          {props.keys.map(key => <th key = {`header_${key}`}>{key}</th>)}
        </tr>
      { renderTableData() }
      </tbody>
    </TableContainer>
    <PaginationLinkConainer>
      {renderPaginationLinks()}
    </PaginationLinkConainer>
  </React.Fragment>
  );
};

export default Table;


