import "../table.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const userColumns = [
  { field: "salesReturnOrderID", headerName: "Sales Return Order ID",  width: 100},
  { field: "WID", headerName: "Warehouse ID", width: 100},
  { field: "initiateDate", headerName: "Order Date", width: 200 },
  { field: "reason", headerName: "Reason for Returning", width: 200 },
  { field: "total", headerName: "Net Total", width: 100},
  { field: "CID", headerName: "Customer ID", width: 100},
  { field: "salesOrderID", headerName: "Sales Order ID", width: 100},
  { field: "status", headerName: "Status", width: 100 },
  { field: "finishDate", headerName: "Finish Date", width: 200 },
];

const ReturnOrderTable = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/inventory/salesReturnOrder/getAll/", {
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

  const actionColumn = [
    {
      headerName: " ",
      width: 300,
      renderCell: (params) => {
        const reLink1= "/inventory/order/returnOrders/changeStatus/ "+params.row.salesReturnOrderID;
        const reLink2= "/inventory/order/returnOrders/orderData/"+params.row.salesReturnOrderID;
        return (
          <div className="cellAction">
            <Link to={reLink1} style={{ textDecoration: "none" }}>
              <div className="viewButton">Change Status</div>
            </Link>
            <Link to={reLink2} style={{ textDecoration: "none" }}>
              <div className="viewButton">View Order Details</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
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

export default ReturnOrderTable;