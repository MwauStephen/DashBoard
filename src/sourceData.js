import React from "react";
import styles from "./sourceData.module.css";

// column data
export const userColumns = [
  { field: "id", headerName: "ID", width: 200 },
  {
    field: "user",
    headerName: "user",
    width: 150,
    editable: true,
    renderCell: (params) => {
      return params.row.userName;
    },
  },
  { field: "email", headerName: "Email", width: 300 },
  { field: "phone", headerName: "Phone", width: 200 },
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
    phone: "071234567",
    status: "passive",
  },
  {
    id: 2,
    userName: "Lannister",
    email: "Lannister41@gmail.com",
    phone: "071234567",
    status: "active",
  },
  {
    id: 3,
    userName: "John",
    email: "John48@gmail.com",
    phone: "071234567",
    status: "pending",
  },
  {
    id: 4,
    userName: "Roxie",
    email: "Roxie56@gmail.com",
    phone: "071234567",
    status: "active",
  },
  {
    id: 5,
    userName: "Frances",
    email: "Frances21@gmail.com",
    phone: "071234567",
    status: "passive",
  },
  {
    id: 6,
    userName: "Clifford",
    email: "Clifford4@gmail.com",
    phone: "071234567",
    status: "pending",
  },
  {
    id: 7,
    userName: "Melisandre",
    email: "Melisandre19@gmail.com",
    phone: "071234567",
    status: "active",
  },
  {
    id: 8,
    userName: "Targaryen",
    email: "Targaryen12@gmail.com",
    phone: "071234567",
    status: "passive",
  },
  {
    id: 9,
    userName: "Stark",
    email: "Stark45@gmail.com",
    phone: "071234567",
    status: "pending",
  },
];

//   id: Math.trunc(Math.random().toString()).toFixed(2)
