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
  { field: "UID", headerName: "UID" },
];

const Datatable = () => {
  const [data, setData] = useState({});

  const handleDelete = (CID) => {
    setData(data.filter((item) => item.id !== CID));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/Warehouse/getAll", {
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
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/admin/viewsinglewarehouse" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>

            <div
              className="editButton"
            >
              Edit
            </div>

            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.CID)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">Warehouses</div>
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
