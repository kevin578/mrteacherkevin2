import React, { useState, useEffect } from "react";
import Table from "./Table";
import DefaultLayout from "../DefaultLayout";
import { filterCreatedAt } from "../../lib/dateTime";

function getAdminData(url, callback) {
  fetch(url)
  .then(res => res.json())
  .then(res => {
    callback(res);
  });
}

function addUserLinkToDescription(description) {
  if (description === undefined) return description;
  let descriptionArr = description.split(" ");
  const username = descriptionArr.shift();
  return (
    <React.Fragment>
      {addUserLink(username)}
      {" "}
      <span>{descriptionArr.join(" ")}</span>
    </React.Fragment>
  );
}

function addUserLink(user) {
return <a href = {`/admin/${user}`}>{user}</a>;
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
            {title: "Description", key: "description", filter: addUserLinkToDescription}
          ]}
          data={recentActivity}
        />
      }
      { users.length > 0 &&
        <Table 
        title = {`${users.length} Users`}
        columns= {[
          {title: "Signed up", key: "createdAt", filter: filterCreatedAt}, 
          {title: "UserName", key: "userName", filter: addUserLink},
          {title: "Email", key: "email"}
        ]}
          data={users}
        />
      }
    </DefaultLayout>
  );
};

export default Admin;