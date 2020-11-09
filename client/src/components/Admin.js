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

const Admin = (props) => {
  const [recentActivity, setRecentActivity] = useState([]);
  const [visibleRecentActivity, setVisibleRecentActivity] = useState([]);

  useEffect(()=> {
    fetch('/api/getRecentActivity')
    .then(res => res.json())
    .then(res => {
      setRecentActivity(res);
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

  function renderRecentActivity() {
    return recentActivity.map((row)=> {
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
    </DefaultLayout>
  )
}

export default Admin;