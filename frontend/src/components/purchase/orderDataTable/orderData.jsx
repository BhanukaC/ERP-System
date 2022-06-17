import "./orderData.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const userColumns = [
  { field: "ID", headerName: "ID" },
  { field: "PID", headerName: "Product ID" },
  { field: "purchaseOrderID", headerName: "Purchase Order ID" },
  { field: "unitPrice", headerName: "Unit Price" },
  { field: "qty", headerName: "Quantity" },
  { field: "discount", headerName: "Discount" },
  { field: "netTot", headerName: "Net Total" },
  
  
  
];

const Datatable = (props) => {
  const purchaseOrderID = props.purchaseOrderID;
  const [data, setData] = useState({});

 

  useEffect(() => {
    axios
      .get("http://localhost:5000/purchase/purchaseOrderData/get/" + purchaseOrderID , {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
       
        let dt = res.data.map((d) => {
          return {
            id: d.ID,
           
            ...d,
          };
        });
        setData(dt);
        
      });
  }, [""]);

  
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Order Details (Purchase Order ID-{purchaseOrderID})
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns}
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

export default Datatable;
