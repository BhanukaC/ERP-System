import "../table.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import axios from "axios";

const userColumns = [
  { field: "ID", headerName: "ID", width: 150 },
  { field: "WID", headerName: "Warehouse ID", width: 150 },
  { field: "town", headerName: "Branch", width: 200 },
  { field: "PID", headerName: "Product ID", width: 150 },
  { field: "PName", headerName: "Product Name", width: 200 },
  { field: "qualityLevel", headerName: "Quality Level", width: 200 },
  { field: "qty", headerName: "Quantity", width: 200 },
];

const AllStockTable = (props) => {
  const [data, setData] = useState({});
  // console.log("props",props);

  useEffect(() => {
    axios
      .get(
        "https://erp-system-nexeyo.herokuapp.com/inventory/stockLevel/getAll/",
        {
          withCredentials: true,
          credentials: "include",
        }
      )
      .then((res) => {
        let dt = res.data.map((d) => {
          return { id: d.ID, ...d };
        });
        setData(dt);
        // console.log(dt);
      });
  }, [""]);

  return (
    <div className="datatable" style={{ height: "78%" }}>
      <div className="dataTableTitle1">
        <h1>Stock Details</h1>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
    </div>
  );
};

export default AllStockTable;
