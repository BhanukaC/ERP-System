import "../table.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const userColumns = [
  { field: "purchaseOrderID", headerName: "Purchase Order ID",  width: 100},
  { field: "orderDate", headerName: "Order Date", width: 200 },
  { field: "status", headerName: "Status", width: 100 },
  { field: "total", headerName: "Net Total", width: 100 },
  { field: "SID", headerName: "Supplier ID", width: 100},
  { field: "SSLID", headerName: "Supplier Store Location ID", width: 100},
  { field: "SCID", headerName: "Supplier Contact ID", width: 100},
  { field: "WID", headerName: "Warehouse ID", width: 100},
  { field: "deliveredDate", headerName: "DeliveredDate", width: 200},
 
 
 
];

const PurchaseOrderTable = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/purchase/purchaseOrder/getAll", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
       
        let dt = res.data.map((d) => {
          return { id: d.purchaseOrderID, ...d };
        });
        setData(dt);

        let dtt = res.data.map((d) => {
          return {
            id: d.purchaseOrderID,
            orderDate: moment(d.orderDate).add(1, "days").utc().format("YYYY/MM/DD"),
            ...d,
          };
        });
        setData(dtt);

        
        
      });
  }, [""]);

  const actionColumn = [
    {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          const upLink = "/purchase/vieworderdata/"+params.row.purchaseOrderID;
          return (
            <div className="cellAction">
              <Link to= {upLink} style= {{textDecoration : "none"}}>
                <div className="viewButton">View Order Details</div>
                </Link>
              
            </div>
          );
        },
      },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle1">
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