import "./dataTable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const userColumns = [
  { field: "CDAID", headerName: "CDAID" },
  { field: "CID", headerName: "CID" },
  { field: "no", headerName: "No" },
  { field: "street", headerName: "Street" },
  { field: "town", headerName: "Town" },
  
];

const Datatable = (props) => {
  const CID = props.CID;
  const [data, setData] = useState({});

 

  useEffect(() => {
    axios
      .get("http://localhost:5000/sales/Customer/deliveryAddress/getAll/" + CID, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
       
        let dt = res.data.map((d) => {
          return {
            id: d.CDAID,
           
            ...d,
          };
        });
        setData(dt);
        
      });
  }, [""]);

  
  return (
    <div className="datatable">
      <div className="datatableTitle">
        All Delivery Addresses For Customer (CID-{CID})
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
