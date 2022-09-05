import "../table.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import axios from "axios";

const userColumns = [
  { field: "ID", headerName: "ID", width: 100 },
  //{ field: "salesReturnOrderID", headerName: "Sales Return Order ID",  width: 200},
  { field: "PID", headerName: "Product ID", width: 200 },
  { field: "PName", headerName: "Product Name", width: 200 },
  { field: "unitPrice", headerName: "Unit Price", width: 200 },
  { field: "qty", headerName: "Quantity", width: 100 },
  { field: "discount", headerName: "Discount", width: 100 },
  { field: "netTot", headerName: "Net Total", width: 200 },
];

const ReturnOrderDataTable = (props) => {
  const salesReturnOrderID = props.id;
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://erp-system-nexeyo.herokuapp.com/inventory/salesReturnOrderData/get/" +
          salesReturnOrderID,
        {
          withCredentials: true,
          credentials: "include",
        }
      )
      .then((res) => {
        // console.log(res);
        let dt = res.data.map((d) => {
          return { id: d.ID, ...d };
        });
        setData(dt);
        // console.log(dt);
      });
  }, [""]);

  return (
    <div className="datatable" style={{ height: "50%" }}>
      <div className="dataTableTitle1">
        <h1>
          Sales Return Order Details of (Sales Return Order ID-
          {salesReturnOrderID})
        </h1>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
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

export default ReturnOrderDataTable;
