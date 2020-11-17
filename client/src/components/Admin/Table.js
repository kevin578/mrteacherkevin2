import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";

const TableContainer = styled.div`
  width: 700px;
`;

const Title = styled.h1``;

const TableElement = styled.table`
  border-collapse: collapse;  
`;

const HeaderRow = styled.tr`
  background: #345afb;
  height: 35px;
`;

const HeaderCell = styled.th`
  text-align: left;
  color: #fff;
  padding: 10px 20px;  
`;

const TableRow = styled.tr`
  background: ${props => props.background};
  height: 20px;
`;
const Cell = styled.td`
  padding: 10px 20px;  
`;

const PaginationRow = styled.tfoot``;

const PaginationLinkConainer = styled.div`
  width: 200px;
  padding: 10px;
`;

const PaginationLinkText = styled.span`
  position: relative;
  bottom: 3px;
  font-size: 18px;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;

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
  const lastPage = Math.ceil(dataLength / rowsPerPage);


  function renderTableData() {
    const startIndex = currentPage * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return props.data.slice(startIndex, endIndex).map((row, i)=> {
      const background = i % 2 == 0 ? "#f0f7ff" : "#d5e9ff";
      return (
        <TableRow background = {background} key = {`table-row-${row.createdAt}`}>
          {renderColumns(row, i)}
        </TableRow>
      );
    });
  }

  function renderColumns(row, i) {
    return props.columns.map((column)=> {
      let content = row[column.key];
      if (column.filter) {
        content = column.filter(content);
      }
      return <Cell key = {`${row[column.key]}-i`}>{content}</Cell>
    });
  }

  function renderFillerRows() {
    return Array(rowsPerPage - (props.data.length % rowsPerPage)).fill().map((emptyRow, i)=> {
      return <TableRow key = {`empty-row-${i}`}></TableRow>;
    });
  }
  
  function renderPaginationLinks() {
    if (props.data.length <= rowsPerPage) return;
    return (
      <PaginationRow>
        <PaginationLinkConainer>
          <PaginationLink disable = {currentPage == 0} onClick = {()=> setCurrentPage(0)}>
            <Icon icon={faAngleDoubleLeft} />
          </PaginationLink>
          <PaginationLink disable = {currentPage == 0} onClick = {()=> setCurrentPage(currentPage - 1)}>
            <Icon icon={faAngleLeft} />
          </PaginationLink>
          <PaginationLinkText>{`${currentPage + 1} of ${lastPage}`}</PaginationLinkText>
          <PaginationLink disable = {currentPage == lastPage - 1} onClick = {()=> setCurrentPage(currentPage + 1)}>
            <Icon icon={faAngleRight} />
          </PaginationLink>
          <PaginationLink disable = {currentPage == lastPage - 1} onClick = {()=> setCurrentPage(lastPage - 1)}>
            <Icon  icon={faAngleDoubleRight} />
          </PaginationLink >
        </PaginationLinkConainer>
      </PaginationRow>
    );
  }

  return (
    <TableContainer>
      <Title>{props.title}</Title>
      <TableElement>
        <tbody>
          <HeaderRow>
            {props.columns.map(column => <HeaderCell key = {`header_${column.title}`}>{column.title}</HeaderCell>)}
          </HeaderRow>
        { renderTableData() }
        {/* { (currentPage == lastPage - 1) && renderFillerRows() } */}
        </tbody>
        {renderPaginationLinks()}
      </TableElement>
    </TableContainer>
  );
};

export default Table;


