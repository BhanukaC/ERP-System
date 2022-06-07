import "../table.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const userColumns = [
  { field: "WID", headerName: "Warehouse ID",  width: 200},
  { field: "PID", headerName: "Product ID", width: 200 },
  { field: "qty", headerName: "Quantity", width: 200 },
  { field: "qualityLevel", headerName: "Quality Level", width: 200 },

];

const AllStockTable = (props) => {
  const [data, setData] = useState({});
  // console.log("props",props);

  useEffect(() => {
    axios
      .get("http://localhost:5000/inventory/stockLevel/getAll/", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        let dt = res.data.map((d) => {
          return { id: d.WID, ...d };
        });
        setData(dt);
        // console.log(dt);
      });
  }, [""]);

 
  const actionColumn = [
    {
      headerName: "Change Quality Level",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">Change</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Stock Details
        <div className="search">
          <input type="text" placeholder="Search Warehouse" />
          <SearchOutlinedIcon />
        </div>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default AllStockTable;