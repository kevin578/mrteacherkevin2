import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const border = css`
  border: 1px solid #525252;
`;

const TableContainer = styled.table`
  ${border}
  border-collapse: collapse;  
`;
const Cell = styled.td`
  ${border}
  padding: 10px 20px;  
`;

const PaginationLinkConainer = styled.div``;

const PaginationLink = styled.span`
  margin: 10px;
  ${(props)=> {
    if (!props.disable) {
      return `
        color: #0000EE;
        text-decoration: underline;
        cursor: pointer; 
      `;
    } else {
      return "pointer-events: none";
    }
  }
}
`;

const Table = (props)=> {
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 5;
  const dataLength = props.dataLength ? props.dataLength : props.data.length;

  function renderTableData() {
    const startIndex = currentPage * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return props.data.slice(startIndex, endIndex).map((row, i)=> {
      return (
        <tr key = {`table-row-${row.createdAt}`}>
          {/* <Cell>{}</Cell> */}
          {renderRows(row, i)}
        </tr>
      );
    });
  }

  function renderRows(row, i) {
    return props.columns.map((column)=> {
      let content = row[column.key];
      if (column.filter) {
        content = column.filter(content);
      }
      return <Cell key = {`${row[column.key]}-i`}>{content}</Cell>
    });
  }
  
  function renderPaginationLinks() {
    if (props.data.length <= rowsPerPage) return;
    const lastPage = Math.ceil(dataLength / rowsPerPage);
    return (
      <PaginationLinkConainer>
        <PaginationLink disable = {currentPage == 0} onClick = {()=> setCurrentPage(0)}>
          {"<<"}
        </PaginationLink>
        <PaginationLink disable = {currentPage == 0} onClick = {()=> setCurrentPage(currentPage - 1)}>
          {"<"}
        </PaginationLink>
        <span>{`${currentPage + 1} of ${lastPage}`}</span>
        <PaginationLink disable = {currentPage == lastPage - 1} onClick = {()=> setCurrentPage(currentPage + 1)}>
          {">"}
        </PaginationLink>
        <PaginationLink disable = {currentPage == lastPage - 1} onClick = {()=> setCurrentPage(lastPage - 1)}>
          {">>"}
        </PaginationLink>
      </PaginationLinkConainer>
    );
  }

  return (
    <React.Fragment>
      <TableContainer>
      <tbody>
        <tr>
          {props.columns.map(column => <th key = {`header_${column.title}`}>{column.title}</th>)}
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


