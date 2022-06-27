import "../table.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const userColumns = [
  { field: "salesOrderID", headerName: "Sales Order ID",  width: 150},
  { field: "WID", headerName: "Warehouse ID", width: 100},
  { field: "CID", headerName: "Customer ID", width: 100},
  { field: "orderDates", headerName: "Order Date", width: 150 },
  { field: "total", headerName: "total", width: 100 },
  { field: "deliveryCharge", headerName: "Delivery Charge", width: 150},
  { field: "netTotal", headerName: "Net Total", width: 100},
  { field: "statusMod", headerName: "Status", width: 100 },
  { field: "deliveredDates", headerName: "Delivered Date", width: 150},
];

const SalesOrderTable = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/inventory/salesOrder/getAll", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        // console.log(res);
        let dt = res.data.map((d) => {
          let status;
          switch (d.status) {
            case "P":
              status="Pending"
              break;
            case "D":
              status="Issued"
              break;
          }
          let date;
          if(d.deliveredDate===null){
            date=d.deliveredDate
          }else{
            date=moment(d.deliveredDate).utc().format("YYYY/MM/DD");
          }
          return { id: d.salesOrderID,statusMod:status,
            statusMod:status,
            orderDates: moment(d.orderDate).utc().format("YYYY/MM/DD"),
            deliveredDates: date,
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
        const reLink2= "/inventory/order/salesOrders/orderData/"+params.row.salesOrderID;
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
        <h1>Sales Orders</h1>
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

export default SalesOrderTable;