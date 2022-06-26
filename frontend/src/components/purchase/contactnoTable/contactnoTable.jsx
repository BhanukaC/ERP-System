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
  const [sName, setsName] = useState("");

 

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

      axios
      .get("http://localhost:5000/purchase/supplier/getSingle/"+SID, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        setsName(res.data[0].sName);
      });
  }, [""]);

  

  
  return (
    <div className="TableOfData" style={{height:"78%"}}>
      <div className="TableOfDataTitle1">
        <h1>All Contact Numbers For Supplier - {sName} (SID-{SID}) </h1>
        
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
