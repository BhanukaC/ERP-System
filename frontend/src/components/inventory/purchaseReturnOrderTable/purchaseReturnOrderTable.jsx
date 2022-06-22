import "../table.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const userColumns = [
  { field: "purchaseReturnOrderID", headerName: "Purchase Return Order ID",  width: 200},
  { field: "WID", headerName: "Warehouse ID", width: 100},
  { field: "initiateDate", headerName: "Order Date", width: 200 },
  { field: "reason", headerName: "Reason for Returning", width: 200 },
  { field: "total", headerName: "Net Total", width: 100},
  { field: "SID", headerName: "Supplier ID", width: 100},
  { field: "purchaseOrderID", headerName: "Purchase Order ID", width: 200},

];

const PurchaseReturnOrderTable = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/inventory/purchaseReturnOrder/getAll", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        // console.log(res);
        let dt = res.data.map((d) => {
          return { id: d.purchaseReturnOrderID, ...d };
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
        const reLink2= "/inventory/order/purchaseReturnOrders/orderData/"+params.row.purchaseReturnOrderID;
        return (
          <div className="cellAction">
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
      <div className="dataTableTitle">
        Purchase Return Orders
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

export default PurchaseReturnOrderTable;