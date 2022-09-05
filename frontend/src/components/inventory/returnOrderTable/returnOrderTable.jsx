import "../table.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const userColumns = [
  {
    field: "salesReturnOrderID",
    headerName: "Sales Return Order ID",
    width: 100,
  },
  { field: "WID", headerName: "Warehouse ID", width: 100 },
  { field: "CID", headerName: "Customer ID", width: 100 },
  { field: "initiateDates", headerName: "Order Date", width: 150 },
  { field: "reason", headerName: "Reason for Returning", width: 200 },
  { field: "total", headerName: "Net Total", width: 100 },
  { field: "salesOrderID", headerName: "Sales Order ID", width: 100 },
  { field: "statusMod", headerName: "Status", width: 100 },
  { field: "finishDates", headerName: "Finish Date", width: 150 },
];

const ReturnOrderTable = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://erp-system-nexeyo.herokuapp.com/inventory/salesReturnOrder/getAll/",
        {
          withCredentials: true,
          credentials: "include",
        }
      )
      .then((res) => {
        // console.log(res);
        let dt = res.data.map((d) => {
          let status;
          switch (d.status) {
            case "A":
              status = "Accepted";
              break;
            case "D":
              status = "Delivered";
              break;
          }

          let date;
          if (d.finishDate === null) {
            date = d.finishDate;
          } else {
            date = moment(d.finishDate).utc().format("YYYY/MM/DD");
          }
          return {
            id: d.salesReturnOrderID,
            statusMod: status,
            initiateDates: moment(d.initiateDate).utc().format("YYYY/MM/DD"),
            finishDates: date,
            ...d,
          };
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
        const reLink2 =
          "/inventory/order/returnOrders/orderData/" +
          params.row.salesReturnOrderID;
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
    <div className="datatable" style={{ height: "78%" }}>
      <div className="dataTableTitle1">
        <h1>Sales Return Orders</h1>
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
