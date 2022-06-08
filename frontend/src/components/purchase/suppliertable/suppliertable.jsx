import "./suppliertable.scss";
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
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            
              <div className="viewButton">Edit</div>
            
            
          </div>
        );
      },
    },
  ];

  
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Supplier
        <Link to="/purchase/addsupplier" className="link">
          Add New Suppplier
        </Link>
      </div>
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