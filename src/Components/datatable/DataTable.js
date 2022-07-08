import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { userRows, userColumns } from "../../sourceData";

import styles from "./DataTable.module.css";

const DataTable = () => {
  const [data, setData] = useState(userRows);

  // const deleteItemRow = (id) => {
  //   setData(
  //     data.filter((item) => {
  //       return item.id !== id;
  //     })
  //   );
  // };

  const handleDelete = (id) => {
    setData(
      data.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const actionButtons = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={styles.action}>
            <Link to="/list/list-test">
              <button className={styles.view}>View</button>
            </Link>

            <button
              className={styles.delete}
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className={styles.data}>
      <Box sx={{ height: 400, width: "100%" }}>
        <div className={styles["add-new"]}>
          Add new user
          <Link to="/list/new" className={styles["add"]}>
            +
          </Link>
        </div>
        <DataGrid
          className={styles["data-grid"]}
          sx={{ fontSize: "1.6rem" }}
          rows={data}
          columns={userColumns.concat(actionButtons)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default DataTable;
