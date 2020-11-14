import React, { useState, useEffect } from "react";
import Table from "./Table";
import DefaultLayout from "../DefaultLayout";
import styled, { css } from "styled-components";

const Admin = (props) => {
  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(()=> {
    fetch("/api/getRecentActivity")
    .then(res => res.json())
    .then(res => {
      setRecentActivity(res)
    });
  }, []);

  return (
    <DefaultLayout>
      { recentActivity.length > 0 &&
        <Table 
          keys= {["Time", "Type", "Description"]}
          data={recentActivity}
        />
      }
    </DefaultLayout>
  );
};

export default Admin;