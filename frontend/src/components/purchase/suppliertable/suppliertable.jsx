import "../table.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const userColumns = [
  { field: "SID", headerName: "Supplier ID" },
  { field: "sName", headerName: "Supplier Name" },
  { field: "paymentTerm", headerName: "Payment Term" },
  { field: "no", headerName: "NO" },
  { field: "street", headerName: "Street" },
  { field: "town", headerName: "Town" },
  { field: "country", headerName: "Country" },
  { field: "returnTerm", headerName: "Return Term" },
  { field: "deliveryTerm", headerName: "Delivery Term" },
  { field: "email", headerName: "Email" },
  
];

const Suppliertable = () => {
  const [data, setData] = useState({});

  const handleDelete = (SID) => {
    setData(data.filter((item) => item.id !== SID));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/purchase/supplier/getAll", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        // console.log(res);
        let dt = res.data.map((d) => {
          return { id: d.SID, ...d };
        });
        setData(dt);
        // console.log(dt);
      });
  }, [""]);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 600,
      renderCell: (params) => {
        const Link1 = "/purchase/updatesupplier/" + params.row.SID;
        const Link2 = "/purchase/viewsuplocation/"+params.row.SID;
        const Link3 = "/purchase/viewcontactno/"+params.row.SID;
        
        
        return (
          <div className="cellAction">
            <Link to={Link1} style={{ textDecoration: "none" }}>
              <div className="viewButton">Edit</div>
            </Link>

            <Link to={Link3} style={{ textDecoration: "none" }}>
              <div className="viewButton">view Contact No</div>
            </Link>
            
           <Link to={Link2} style={{ textDecoration: "none" }}>
              <div className="viewButton">view Store Locations</div>
            </Link>
            
            
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">All Suppliers</div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
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
export default Suppliertable;
