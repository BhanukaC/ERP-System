import "./dataTable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const userColumns = [
  { field: "ID", headerName: "ID", width: 100 },
  { field: "salesReturnOrderID", headerName: "Sales Return Order ID",  width: 200},
  { field: "PID", headerName: "Product ID", width: 200 },
  { field: "PName", headerName: "Product Name", width: 200 },
  { field: "unitPrice", headerName: "Unit Price", width: 200 },
  { field: "qty", headerName: "Quantity", width: 100 },
  { field: "discount", headerName: "Discount", width: 100},
  { field: "netTot", headerName: "Net Total", width: 200},
];

const DataTable2 = (props) => {
  const salesReturnOrderID = props.salesReturnOrderID;
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/sales/salesReturnOrderData/get/"+ salesReturnOrderID,{
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
    {
        // field: "action",
        // headerName: "Action",
        // width: 200,
      },
  ];

  return (
    <div className="datatable" style={{height:"78%"}}>
      <div className="dataTableTitle1">
      <h1>Sales Return Order Details of (Sales Return Order ID-{salesReturnOrderID})</h1>
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