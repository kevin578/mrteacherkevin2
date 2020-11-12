import React, { useState, useEffect } from 'react';
import DefaultLayout from './DefaultLayout';
import styled, {css} from 'styled-components';

const border = css`
  border: 1px solid #525252;
`;

const Table = styled.table`
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
      `  
    }
  }}
  

`;

const Admin = (props) => {
  const [recentActivity, setRecentActivity] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 5; 

  useEffect(()=> {
    fetch('/api/getRecentActivity')
    .then(res => res.json())
    .then(res => {
      setRecentActivity(res)
    })
  }, []);

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

  // function sortRecentActivity(arg) {
  //   [...recentActivity][arg].
  // }

  function renderRecentActivity() {
    const startIndex = currentPage * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return recentActivity.slice(startIndex, endIndex).map((row)=> {
      const date = new Date(row.createdAt);
      return (
        <tr key = {row.id}>
          <DateCell>{`${getDayName(date)}, ${date.getMonth() + 1}/${date.getDate()}, ${getTime(date)}`}</DateCell>
          <CategoryCell>{row.category}</CategoryCell>
          <DescriptionCell>{row.description}</DescriptionCell>
        </tr>
      )
    })
  }

  function renderPaginationLinks() {
    let paginationLinks = [];
    for(let i = 0; i <= recentActivity.length; i += rowsPerPage) {
      const index = (i / rowsPerPage) + 1;
      paginationLinks.push(<PaginationLink currentlySelected = {index - 1 == currentPage} onClick = {()=> setCurrentPage(index - 1)}>{index}</PaginationLink>);
    }
    return paginationLinks
  }

  return (
    <DefaultLayout>
      <Table>
        <tbody>
          <tr>
            <th>Time</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        { renderRecentActivity() }
        </tbody>
      </Table>
      <PaginationLinkConainer>
        {renderPaginationLinks()}
      </PaginationLinkConainer>
    </DefaultLayout>
  )
}

export default Admin;