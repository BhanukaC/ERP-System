import "../table.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { red } from "@mui/material/colors";

const userColumns = [
  { field: "purchaseOrderID", headerName: "Purchase Order ID",  width: 100},
  { field: "orderDate", headerName: "Order Date", width: 200 },
  { field: "total", headerName: "Net Total", width: 100 },
  { field: "SID", headerName: "Supplier ID", width: 100},
  { field: "WID", headerName: "Warehouse ID", width: 100},
  { field: "statusMod", headerName: "Status", width: 150 },
  { field: "deliveredDate", headerName: "DeliveredDate", width: 200},
 
];

const PurchaseOrderTable = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/inventory/purchaseOrder/getAll", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        // console.log(res);
        let dt = res.data.map((d) => {
          let status;
          switch (d.status) {
            case "P" :
              status="Pending"
              break;
            case "C":
              status="Cancelled"
              break;
            case "D":
              status="Delivered"
              break;
          }
          return { id: d.purchaseOrderID,statusMod:status, ...d };
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
        const reLink2= "/inventory/order/purchaseOrders/orderData/"+params.row.purchaseOrderID;
        return (
          <div className="cellAction">
            <Link to={reLink2} style={{ textDecoration: "none" }}>
              <div className="viewButton">View Order</div>
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="dataTableTitle">
        Purchase Orders
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

export default PurchaseOrderTable;