import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./Table.module.css";

const rows = [
  {
    id: 234567,
    img: "https://unsplash.com/photos/NVD_32BBZFE",
    product: "playstation 4",
    customer: "John doe",
    date: "1 March ",
    amount: 900,
    method: "Online payment",
    status: "pending",
  },
  {
    id: 234568,
    img: "https://unsplash.com/photos/NVD_32BBZFE",
    product: "playstation 4",
    customer: "John doe",
    date: "1 March ",
    amount: 900,
    method: "Online payment",
    status: "cash on delivery",
  },
  {
    id: 234569,
    img: "https://unsplash.com/photos/NVD_32BBZFE",
    product: "playstation 4",
    customer: "John doe",
    date: "1 March ",
    amount: 900,
    method: "Online payment",
    status: "pending",
  },
  {
    id: 234570,
    img: "https://unsplash.com/photos/NVD_32BBZFE",
    product: "playstation 4",
    customer: "John doe",
    date: "1 March ",
    amount: 900,
    method: "Online payment",
    status: "cash on delivery",
  },
  {
    id: 234571,
    img: "https://unsplash.com/photos/NVD_32BBZFE",
    product: "playstation 4",
    customer: "John doe",
    date: "1 March ",
    amount: 900,
    method: "Online payment",
    status: "pending",
  },
  {
    id: 234572,
    img: "https://unsplash.com/photos/NVD_32BBZF.jpg",
    product: "playstation 4",
    customer: "John doe",
    date: "1 March ",
    amount: 900,
    method: "cash on deliver",
    status: "approved",
  },
];

const TableData = () => {
  return (
    <div className={styles.table}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={styles["table-cell"]}>
                Tracking ID
              </TableCell>

              <TableCell className={styles["table-cell"]}>Product</TableCell>
              <TableCell className={styles["table-cell"]}>Customer</TableCell>
              <TableCell className={styles["table-cell"]}>Date </TableCell>
              <TableCell className={styles["table-cell"]}>Amount</TableCell>
              <TableCell className={styles["table-cell"]}>
                Payment Method
              </TableCell>
              <TableCell className={styles["table-cell"]}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className={styles["table-cell"]}>{row.id}</TableCell>
                <TableCell className={styles["table-cell"]}>
                  <div className={styles["cell-wrapper"]}>
                    <img
                      src="/img/kerde-severin-NVD_32BBZFE-unsplash.jpg"
                      className={styles.image}
                      alt="playstation"
                    />
                  </div>
                </TableCell>

                {/* <TableCell className={styles["table-cell"]}>
                {row.product}
              </TableCell> */}
                <TableCell className={styles["table-cell"]}>
                  {row.customer}
                </TableCell>
                <TableCell className={styles["table-cell"]}>
                  {row.date}
                </TableCell>
                <TableCell className={styles["table-cell"]}>
                  {row.amount}
                </TableCell>
                <TableCell className={styles["table-cell"]}>
                  {row.method}
                </TableCell>

                <TableCell className={styles["table-cell"]}>
                  <span className={styles.status}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableData;
