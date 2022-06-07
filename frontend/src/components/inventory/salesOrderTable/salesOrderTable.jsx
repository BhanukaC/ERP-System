import "../table.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const userColumns = [
  { field: "salesOrderID", headerName: "Sales Order ID",  width: 100},
  { field: "orderDate", headerName: "Order Date", width: 200 },
  { field: "deliveredDate", headerName: "Delivered Date", width: 200},
  { field: "total", headerName: "total", width: 100 },
  { field: "CID", headerName: "Customer ID", width: 100},
  { field: "deliveryCharge", headerName: "Delivery Charge", width: 100},
  { field: "netTotal", headerName: "Net Total", width: 100},
  { field: "status", headerName: "Status", width: 200 },
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
          return { id: d.salesOrderID, ...d };
        });
        setData(dt);
        // console.log(dt);
      });
  }, [""]);

  const actionColumn = [
    {
      headerName: "Order Details",
      width: 200,
      renderCell: (params) => {
        const reLink= "/inventory/order/salesOrderData/"+params.row.salesOrderID;
        return (
          <div className="cellAction">
            <Link to={reLink} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Sales Orders
        <div className="search">
          <input type="text" placeholder="Search" />
          <SearchOutlinedIcon />
        </div>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default SalesOrderTable;