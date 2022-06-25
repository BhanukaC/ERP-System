import "../table.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const userColumns = [
  { field: "purchaseReturnOrderID", headerName: "Purchase Return Order ID",  width: 200},
  { field: "WID", headerName: "Warehouse ID", width: 150},
  { field: "SID", headerName: "Supplier ID", width: 100},
  { field: "initiateDates", headerName: "Order Date", width: 150 },
  { field: "reason", headerName: "Reason for Returning", width: 200 },
  { field: "total", headerName: "Net Total", width: 100},
  { field: "purchaseOrderID", headerName: "Purchase Order ID", width: 150},

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
          return { id: d.purchaseReturnOrderID,
            initiateDates: moment(d.initiateDate).add(1, "days").utc().format("YYYY/MM/DD"),
            ...d };
        });
        setData(dt);
        // console.log(dt);
      });
  }, [""]);

  const actionColumn = [
    {
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        const reLink2= "/inventory/order/purchaseReturnOrders/orderData/"+params.row.purchaseReturnOrderID;
        return (
          <div className="cellAction">
            <Link to={reLink2} style={{ textDecoration: "none" }}>
              <div className="viewButtons">View Order</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable" style={{height:"78%"}}>
      <div className="dataTableTitle1">
        <h1>Purchase Return Orders</h1>
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