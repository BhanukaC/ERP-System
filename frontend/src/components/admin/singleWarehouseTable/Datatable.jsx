import "./Datatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const userColumns = [
  { field: "WID", headerName: "WID" },
  { field: "ManagerName", headerName: "Manager Name" },
  { field: "no", headerName: "No" },
  { field: "street", headerName: "Street" },
  { field: "town", headerName: "Town" },
  { field: "UID", headerName: "User ID" }
];

const Datatable = () => {
  const [data, setData] = useState({});

  const handleDelete = (CID) => {
    setData(data.filter((item) => item.id !== CID));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/Warehouse/getSingle/1", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        // console.log(res);
        let dt = res.data.map((d) => {
          return { id: d.UID, ...d };
        });
        setData(dt);
        // console.log(dt);
      });
  }, [""]);

  const actionColumn = [
    
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Single Warehouse
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
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
