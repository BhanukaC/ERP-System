
import "../table.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const userColumns = [
  { field: "SSLID", headerName: "Supplier Location ID",width:180 },
 
  { field: "no", headerName: "No" ,width:100},
  { field: "street", headerName: "Street",width:100 },
  { field: "town", headerName: "Town" ,width:100},
  { field: "country", headerName: "Country",width:100 },
  
  
];

const Datatable = (props) => {
  const SID = props.SID;
  const [data, setData] = useState({});

 

  useEffect(() => {
    axios
      .get("http://localhost:5000/purchase/supplier/storeLocation/getAll/" + SID, {
        withCredentials: true,
        credentials: "include",
      })
      
      .then((res) => {
       
        let dt = res.data.map((d) => {
          return {
            id: d.SSLID,
           
            ...d,
          };
        });
        setData(dt);
        
      });

      
  }, [""]);

  

  
  return (
    <div className="datatable">
      <div className="datatableTitle1">
        All Store Locations For Supplier (SID-{SID})
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
