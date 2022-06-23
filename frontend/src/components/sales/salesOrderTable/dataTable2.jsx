import "./dataTable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const userColumns = [
  { field: "ID", headerName: "ID", width: 100 },
  { field: "salesOrderID", headerName: "Sales Order ID",  width: 200},
  { field: "PID", headerName: "Product ID", width: 200 },
  { field: "unitPrice", headerName: "Unit Price", width: 200 },
  { field: "qty", headerName: "Quantity", width: 100 },
  { field: "discount", headerName: "Discount", width: 100},
  { field: "netTot", headerName: "Net Total", width: 200},
];

const DataTable2 = (props) => {
  const salesOrderID = props.salesOrderID;
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/sales/salesOrderData/get/"+ salesOrderID,{
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        // console.log(res);
        let dt = res.data.map((d) => {
          return { id: d.ID, ...d };
        });
        setData(dt);
        // console.log(dt);
      });
  }, [""]);

  const actionColumn = [
    // {
    //     field: "action",
    //     headerName: "Action",
    //     width: 200,
    //   },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
      Sales Order Details of (Sales Order ID-{salesOrderID})
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

export default DataTable2;