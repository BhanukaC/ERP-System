import "../table.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import axios from "axios";

const userColumns = [
  { field: "ID", headerName: "ID",  width: 150},
  //{ field: "WID", headerName: "WID",  width: 100},
  { field: "PID", headerName: "Product ID", width: 150 },
  { field: "PName", headerName: "Product Name", width: 200 },
  { field: "qualityLevel", headerName: "Quality Level", width: 200 },
  { field: "qty", headerName: "Quantity", width: 200 },
  

];

const StockTable = (props) => {
  const WID = props.id;
  const [data, setData] = useState({});
  // console.log("props",props);

  const [town, setTown] =  useState("");


  useEffect(() => {
    axios
      .get("http://localhost:5000/inventory/stockLevelForWarehouse/get/"+WID, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        let dt = res.data.map((d) => {
          return { id: d.ID, ...d };
        });
        setData(dt);
        // console.log(dt);
      });

      axios
      .get("http://localhost:5000/inventory/Warehouse/getSingle/"+WID, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        setTown(res.data[0].town);
      });
  }, [""]);


  return (
    <div className="datatable">
      <div className="dataTableTitle">
        Stock Details of {town} Branch (WID-{WID})
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

export default StockTable;