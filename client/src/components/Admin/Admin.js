import React, { useState, useEffect } from "react";
import Table from "./Table";
import DefaultLayout from "../DefaultLayout";

function getAdminData(url, callback) {
  fetch(url)
  .then(res => res.json())
  .then(res => {
    callback(res);
  });
}

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

function filterCreatedAt(createdAt) {
  const date = new Date(createdAt);
  return `${getDayName(date)}, ${date.getMonth() + 1}/${date.getDate()}, ${getTime(date)}`
}

const Admin = (props) => {
  const [recentActivity, setRecentActivity] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(()=> {
    getAdminData("/api/getRecentActivity", setRecentActivity);
    getAdminData("/api/getUsers", setUsers);
  }, []);

  return (
    <DefaultLayout>
      { recentActivity.length > 0 &&
        <Table
          title = "Recent Activity" 
          columns= {[
            {title: "Created At", key: "createdAt", filter: filterCreatedAt}, 
            {title: "Type", key: "category"}, 
            {title: "Description", key: "description"}
          ]}
          data={recentActivity}
        />
      }
      { users.length > 0 &&
        <Table 
        title = {`${users.length} Users`}
        columns= {[
          {title: "Signed up", key: "createdAt", filter: filterCreatedAt}, 
          {title: "UserName", key: "userName"},
          {title: "Email", key: "email"}
        ]}
          data={users}
        />
      }
    </DefaultLayout>
  );
};

export default Admin;