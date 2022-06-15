import "./dataTable.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const userColumns = [
  { field: "salesReturnOrderID", headerName: "salesReturnOrderID", width: 150 },
  { field: "CID", headerName: "CID", width: 50 },
  { field: "CDAID", headerName: "CDAID", width: 120 },
  { field: "CCID", headerName: "CCID", width: 120 },
  { field: "WID", headerName: "WID", width: 120 },
  { field: "reason", headerName: "reason", width: 120  },
  { field: "salesOrderID", headerName: "salesOrderID" },
  { field: "items", headerName: "items" , width: 100},
 
  
];

const Datatable = () => {
  const [data, setData] = useState({});

  const handleDelete = (salesReturnOrderID) => {
    setData(data.filter((item) => item.id !== salesReturnOrderID));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/sales/salesReturnOrder/getAll/", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        // console.log(res);
        let dt = res.data.map((d) => {
          return { id: d.salesReturnOrderID, ...d };
        });
        setData(dt);
        // console.log(dt);
      });
  }, [""]);

  
  return (
    <div className="datatable">
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

export default Datatable;
