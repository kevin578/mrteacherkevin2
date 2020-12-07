import React, {useState, useEffect } from "react";
import styled from "styled-components";
import DefaultLayout from "../DefaultLayout";
import { getTimeWithYear } from "../../lib/dateTime";

const ListItem = styled.div`
  margin-left: 25px;
`;

const AdminKey = styled.span`
  font-weight: bold;
`;

const KeyPair = styled.div`
  margin-bottom: 10px;
`;

const AdminUser = (props)=> {
  const [userData, setUserData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const user = props.location.pathname.split("/")[2];

  useEffect(()=> {
    fetch(`/api/getUser?user=${user}`)
    .then((res)=> res.json())
    .then((res)=> {
      if (res) {
        setUserData(res);
      } else {
        setErrorMessage(`${user} is not a valid user`);
      }
    });
  }, []);

  function getKeyPair(key, value) {
    return (
      <KeyPair key = {`admin-${key}`}>
        <AdminKey>{key}</AdminKey>
        <span>{value}</span>
      </KeyPair>
    );
  }

  function getObjectValues(obj) {
    let returnArr = [];
    for (let o in obj) {
    returnArr.push(<ListItem key = {o}>{o}: {obj[o]}</ListItem>);
    }
    return returnArr;
  }

  return (
    <DefaultLayout>
      {
        errorMessage && 
        <h3>{errorMessage}</h3>
      }
      {
        userData.email &&
        <div>
          <h3>{user}</h3>
          {[ 
            getKeyPair("Email: ", userData.email), 
            getKeyPair("Last Activity: ", getTimeWithYear(userData.updatedAt)),
            getKeyPair("Account Created: ", getTimeWithYear(userData.createdAt)),
            getKeyPair("Birthday: ", `${userData.birthMonth} ${userData.birthYear}`),
            userData.userLocationString ? getKeyPair("Location: ", userData.userLocationString) : null,
            getKeyPair("Completed Courses:", getObjectValues(userData.coursePercentages))
          ]}
        </div>
      }
    </DefaultLayout>

  );
};

export default AdminUser;