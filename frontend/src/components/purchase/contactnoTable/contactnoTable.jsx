import "../table.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const userColumns = [
  { field: "SCID", headerName: "Supplier Contact ID",width:150 },
 
 
  { field: "contactNumber", headerName: "Contact Number",width:200 },
  
  
  
];

const Datatable = (props) => {
  const SID = props.SID;
  const [data, setData] = useState({});

 

  useEffect(() => {
    axios
      .get("http://localhost:5000/purchase/supplier/contactNumber/getAll/" + SID, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
       
        let dt = res.data.map((d) => {
          return {
            id: d.SCID,
           
            ...d,
          };
        });
        setData(dt);
        
      });
  }, [""]);

  

  
  return (
    <div className="datatable">
      <div className="datatableTitle1">
        All Contact Numbers For Supplier (SID-{SID})
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
