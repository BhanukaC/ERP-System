import "../table.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const userColumns = [
  { field: "WID", headerName: "Warehouse ID",  width: 200},
  //{ field: "town", headerName: "Branch", width: 200 },
  { field: "ManagerName", headerName: "Name of the Manager", width: 200 },
  { field: "no", headerName: "No", width: 200 },
  { field: "street", headerName: "Street", width: 200},
  { field: "town", headerName: "Town", width: 200},
];

const WarehouseTable = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/inventory/Warehouse/getAll", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        // console.log(res);
        let dt = res.data.map((d) => {
          return { id: d.WID, ...d };
        });
        setData(dt);
        // console.log(dt);
      });
  }, [""]);

  const actionColumn = [
    {
      headerName: "Stock Details",
      width: 200,
      renderCell: (params) => {
        const reLink="/inventory/warehouse/stockDetails/"+params.row.WID;
        return (
          <div className="cellAction">
           
            <Link to={reLink} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Warehouse Details
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

export default WarehouseTable;