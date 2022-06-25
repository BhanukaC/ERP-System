import "../table.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import axios from "axios";

const userColumns = [
  { field: "ID", headerName: "ID", width: 100 },
  //{ field: "internalShipmentID", headerName: "Internal Shipment ID",  width: 200},
  { field: "PID", headerName: "Product ID", width: 200 },
  { field: "PName", headerName: "Product Name", width: 200 },
  { field: "qty", headerName: "Quantity", width: 100 },
  
];

const ShipmentDataTable = (props) => {
  const internalShipmentID = props.id;
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/inventory/internalShipmentData/get/"+ internalShipmentID,{
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        // console.log(res);
        let dt = res.data.map((d) => {
          return { id: d.ID, ...d };
        });
        setData(dt);
        // console.log(dt);
      });
  }, [""]);

  return (
    <div className="datatable" style={{height:"50%"}}>
      <div className="dataTableTitle">
        Internal Shipment Details of (Internal Shipment ID-{internalShipmentID})
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
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

export default ShipmentDataTable;