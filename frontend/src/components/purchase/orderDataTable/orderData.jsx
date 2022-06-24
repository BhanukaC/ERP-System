import "../table.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const userColumns = [
  { field: "ID", headerName: "ID",width:100 },
  { field: "PID", headerName: "Product ID",width:100 },
  { field: "PName", headerName: "Product Name",width:150 },
  { field: "unitPrice", headerName: "Unit Price",width:100 },
  { field: "qty", headerName: "Quantity",width:100 },
  { field: "discount", headerName: "Discount",width:100 },
  { field: "netTot", headerName: "Net Total",width:100 }, 
];

const Datatable = (props) => {
  const purchaseOrderID = props.purchaseOrderID;
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/purchase/purchaseOrderData/get/" +
          purchaseOrderID,
        {
          withCredentials: true,
          credentials: "include",
        }
      )
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
      <div className="datatableTitle1">
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
