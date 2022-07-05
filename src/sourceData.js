import React from "react";
import styles from "./sourceData.module.css";

// column data
export const userColumns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "user",
    headerName: "user",
    width: 150,
    editable: true,
    renderCell: (params) => {
      return params.row.userName;
    },
  },
  { field: "email", headerName: "Email", width: 230 },
  { field: "age", headerName: "Age", width: 100 },
  {
    field: "Status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`${styles.status} ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

// row data
export const userRows = [
  {
    id: 1,
    userName: "Snow",
    email: "snow21@gmail.com",
    age: 35,
    status: "passive",
  },
  {
    id: 2,
    userName: "Lannister",
    email: "Lannister41@gmail.com",
    age: 4,
    status: "active",
  },
  {
    id: 3,
    userName: "John",
    email: "John48@gmail.com",
    age: 25,
    status: "pending",
  },
  {
    id: 4,
    userName: "Roxie",
    email: "Roxie56@gmail.com",
    age: 18,
    status: "active",
  },
  {
    id: 5,
    userName: "Frances",
    email: "Frances21@gmail.com",
    age: 29,
    status: "passive",
  },
  {
    id: 6,
    userName: "Clifford",
    email: "Clifford4@gmail.com",
    age: 55,
    status: "pending",
  },
  {
    id: 7,
    userName: "Melisandre",
    email: "Melisandre19@gmail.com",
    age: 65,
    status: "active",
  },
  {
    id: 8,
    userName: "Targaryen",
    email: "Targaryen12@gmail.com",
    age: 24,
    status: "passive",
  },
  {
    id: 9,
    userName: "Stark",
    email: "Stark45@gmail.com",
    age: 48,
    status: "pending",
  },
];

//   id: Math.trunc(Math.random().toString()).toFixed(2)
