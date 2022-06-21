import "./dataTable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const userColumns = [
  { field: "salesReturnOrderID", headerName: "salesReturnOrderID", width: 150 },
  { field: "CID", headerName: "CID", width: 50 },
  { field: "CDAID", headerName: "CDAID", width: 120 },
  { field: "CCID", headerName: "CCID", width: 120 },
  { field: "WID", headerName: "WID", width: 120 },
  { field: "reason", headerName: "reason", width: 120  },
  { field: "salesOrderID", headerName: "salesOrderID" },
 
];

const DataTable1 = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/sales/salesReturnOrder/getAll/", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
       
        let dt = res.data.map((d) => {
          return { id: d.salesReturnOrderID, ...d };
        });
        setData(dt);
        
      });
  }, [""]);

  const actionColumn = [
    {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          const upLink = "/sales/salesReturnOrder/viewAll2/"+params.row.salesOrderID;
          return (
            <div className="cellAction">
              <Link to= {upLink} style= {{textDecoration : "none"}}>
                <div className="viewButton">View Return Order Details</div>
                </Link>
              
            </div>
          );
        },
      },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle1">
        Sales Return Orders
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

export default DataTable1;