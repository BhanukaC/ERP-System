import "./dataTable.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const userColumns = [
  { field: "salesReturnOrderID", headerName: "SalesReturnOrderID", width: 150 },
  { field: "reason", headerName: "Reason", width: 110 },
  { field: "status", headerName: "Status", width: 70 },
  { field: "WID", headerName: "WID" , width: 70 },
  { field: "total", headerName: "Total" , width: 90},
  { field: "CID", headerName: "CID", width: 50 },
  { field: "CDAID", headerName: "CDAID", width: 60 },
  { field: "CCID", headerName: "CCID", width: 60  },
  { field: "salesOrderID", headerName: "SalesOrderID", width: 110  },
  
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
          return { id: d.CID, ...d };
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
            <div className="deleteButton"
              onClick={() => handleDelete(params.row.CID)}
            >
              Edit
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
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
