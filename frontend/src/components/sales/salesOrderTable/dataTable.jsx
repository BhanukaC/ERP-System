import "./dataTable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const userColumns = [
  { field: "salesOrderID", headerName: "SalesOrderID", width: 100 },
  { field: "CID", headerName: "Customer ID", width: 120 },
  { field: "customerName", headerName: "Customer Name", width: 120 },
  { field: "orderDates", headerName: "Order Date", width: 120 },
  { field: "town", headerName: "Warehouse name", width: 120 },
  { field: "CDAID", headerName: "Delivery Address ID", width: 150 },
  { field: "contactNumber", headerName: "Contact Number", width: 150 },
  { field: "status", headerName: "Order Status", width: 120 },
  { field: "deliveredDates", headerName: "Deliver Date", width: 120 },
  { field: "deliveryCharge", headerName: "Delivery Charge", width: 120  },
 
];

const DataTable1 = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/sales/salesOrder/getAll/", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
       
        let dt = res.data.map((d) => {
          return { id: d.salesOrderID, 
            orderDates: moment(d.orderDate).add(1, "days").utc().format("YYYY/MM/DD"),
            deliveredDates: moment(d.deliveredDate).add(1, "days").utc().format("YYYY/MM/DD"),
            ...d };
        });
        setData(dt);
        
      });
  }, [""]);

  const actionColumn = [
    {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          const upLink = "/sales/salesOrder/viewAll2/"+params.row.salesOrderID;
          return (
            <div className="cellAction">
              <Link to= {upLink} style= {{textDecoration : "none"}}>
                <div className="viewButton1">View Order Details</div>
                </Link>
              
            </div>
          );
        },
      },
  ];

  return (
    <div className="datatable" style={{height:"78%"}}>
      <div className="dataTableTitle1">
       <h1>Sales Order</h1>
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

export default DataTable1;