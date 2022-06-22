import "../table.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const userColumns = [
  { field: "PID", headerName: "Product ID" },
  { field: "PName", headerName: "Product Name" },
  { field: "sellingPrice", headerName: "Selling Price" },
  { field: "EANCode", headerName: "EAN Code" },
  { field: "UnitOfMeasure", headerName: "Unit of Measure" },
  { field: "HSNCode", headerName: "HSN Code" },
  { field: "shortDescription", headerName: "Short Description" },
  { field: "longDescription", headerName: "Long Description" },
  { field: "Height", headerName: "Height" },
  { field: "Length", headerName: "Length" },
  { field: "Weight", headerName: "Weight" },
  { field: "buyingPrice", headerName: "Buying Price" },
  { field: "CatID", headerName: "Category ID" },
  { field: "SubCatID", headerName: "Sub Category ID" },
  { field: "NoOfItems", headerName: "No of Items" },
];

const Producttable = () => {
  const [data, setData] = useState({});

  const handleDelete = (PID) => {
    setData(data.filter((item) => item.id !== PID));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/purchase/product/getAll", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        // console.log(res);
        let dt = res.data.map((d) => {
          return { id: d.PID, ...d };
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
        const upLink = "/purchase/product/update/"+params.row.PID;
        return (
          <div className="cellAction">
            <Link to= {upLink} style= {{textDecoration : "none"}}>
              <div className="viewButton">Edit</div>
              </Link>
            
          </div>
        );
      },
    },
  ];

  
  return (
    <div className="datatable">
      <div className="datatableTitle1">
        Products
        <Link to="/purchase/product/add" className="link">
          Add New Product
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

export default Producttable;
