import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { userRows, userColumns } from "../../sourceData";

import styles from "./DataTable.module.css";

const actionButtons = [
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: () => {
      return (
        <div className={styles.action}>
          <Link to="/list/list-test">
            <button className={styles.view}>View</button>
          </Link>
          <button className={styles.delete}>Delete</button>
        </div>
      );
    },
  },
];

const DataTable = () => {
  return (
    <div className={styles.data}>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          sx={{ fontSize: "1.6rem" }}
          rows={userRows}
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
