import "../table.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const userColumns = [
  { field: "purchaseOrderID", headerName: "Purchase Order ID",  width: 100},
  { field: "orderDate", headerName: "Order Date", width: 200 },
  { field: "total", headerName: "Net Total", width: 100 },
  { field: "SID", headerName: "Supplier ID", width: 100},
  { field: "SCID", headerName: "SCID", width: 100},
  { field: "WID", headerName: "Warehouse ID", width: 100},
  { field: "deliveredDate", headerName: "DeliveredDate", width: 200},
  { field: "status", headerName: "Status", width: 100 },
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
          return { id: d.purchaseOrderID, ...d };
        });
        setData(dt);
        // console.log(dt);
      });
  }, [""]);

  const actionColumn = [
    {
      field: "change",
      headerName: "Change Status",
      width: 150,
      renderCell: (params) => {
        const reLink= "/inventory/order/purchaseOrderData/"+params.row.purchaseOrderID;
        return (
          <div className="cellAction">
            <Link to={reLink} style={{ textDecoration: "none" }}>
              <div className="viewButton">Change</div>
            </Link>
          </div>
        );
      },
    },
    {
      field: "order",
      headerName: "Order Details",
      width: 150,
      renderCell: (params) => {
        const reLink= "/inventory/order/purchaseOrderData/"+params.row.purchaseOrderID;
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
        Purchase Orders
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

export default PurchaseOrderTable;