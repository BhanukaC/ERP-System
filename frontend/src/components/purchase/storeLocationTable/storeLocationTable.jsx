import "../table.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const userColumns = [
  { field: "SSLID", headerName: "Supplier Location ID", width: 180 },

  { field: "no", headerName: "No", width: 100 },
  { field: "street", headerName: "Street", width: 100 },
  { field: "town", headerName: "Town", width: 100 },
  { field: "country", headerName: "Country", width: 100 },
];

const Datatable = (props) => {
  const SID = props.SID;
  const [data, setData] = useState({});
  const [sName, setsName] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://erp-system-nexeyo.herokuapp.com/purchase/supplier/storeLocation/getAll/" +
          SID,
        {
          withCredentials: true,
          credentials: "include",
        }
      )

      .then((res) => {
        let dt = res.data.map((d) => {
          return {
            id: d.SSLID,

            ...d,
          };
        });
        setData(dt);
      });

    axios
      .get(
        "https://erp-system-nexeyo.herokuapp.com/purchase/supplier/getSingle/" +
          SID,
        {
          withCredentials: true,
          credentials: "include",
        }
      )
      .then((res) => {
        setsName(res.data[0].sName);
      });
  }, [""]);

  return (
    <div className="TableOfData" style={{ height: "78%" }}>
      <div className="TableOfDataTitle1">
        <h1>
          All Store Locations For Supplier - {sName} (SID-{SID})
        </h1>
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
