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
    img:
      "https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?cs=srgb&dl=pexels-murat-esibatir-4355346.jpg&fm=jpg",
    product: "playstation 4",
    customer: "John doe",
    date: "1 March ",
    amount: 900,
    method: "Online payment",
    status: "pending",
  },
  {
    id: 234568,
    img:
      "https://images.pexels.com/photos/3283568/pexels-photo-3283568.jpeg?cs=srgb&dl=pexels-roy-reyna-3283568.jpg&fm=jpg",
    product: "playstation 4",
    customer: "John doe",
    date: "1 March ",
    amount: 900,
    method: "Online payment",
    status: "approved",
  },
  {
    id: 234569,
    img:
      "https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?cs=srgb&dl=pexels-teddy-tavan-4890733.jpg&fm=jpg",
    product: "playstation 4",
    customer: "John doe",
    date: "1 March ",
    amount: 900,
    method: "Online payment",
    status: "pending",
  },
  {
    id: 234570,
    img:
      "https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg?cs=srgb&dl=pexels-m-y-dogar-4556737.jpg&fm=jpg",
    product: "playstation 4",
    customer: "John doe",
    date: "1 March ",
    amount: 900,
    method: "Online payment",
    status: "approved",
  },
  {
    id: 234571,
    img:
      "https://images.pexels.com/photos/2728264/pexels-photo-2728264.jpeg?cs=srgb&dl=pexels-azyan-syazwani-rozik-2728264.jpg&fm=jpg",
    product: "playstation 4",
    customer: "John doe",
    date: "1 March ",
    amount: 900,
    method: "Online payment",
    status: "pending",
  },
  {
    id: 234572,
    img:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg",
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
    <div>
      <TableContainer component={Paper} className={styles.table}>
        <Table
          sx={{
            minWidth: 650,
            fontSize: "1.6rem",

            // backgroundColor: "#ccc",
          }}
          aria-label="simple table"
        >
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
                      src={row.img}
                      className={styles.image}
                      alt="playstation"
                    />
                  </div>
                </TableCell>

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
                  <span
                    className={
                      row.status === "pending"
                        ? styles["approved"]
                        : styles["declined"]
                    }
                  >
                    {row.status}
                  </span>
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
