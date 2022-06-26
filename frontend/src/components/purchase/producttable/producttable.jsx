import "../table.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const userColumns = [
  { field: "PID", headerName: "Product ID",width:100 },
  { field: "PName", headerName: "Product Name",width:150 },
  { field: "sellingPrice", headerName: "Selling Price",width:100 },
  { field: "EANCode", headerName: "EAN Code",width:180 },
  { field: "UnitOfMeasure", headerName: "Unit of Measure",width:150 },
  { field: "HSNCode", headerName: "HSN Code",width:100 },
  { field: "shortDescription", headerName: "Short Description",width:150 },
  { field: "longDescription", headerName: "Long Description",width:150 },
  { field: "Height", headerName: "Height",width:100 },
  { field: "Length", headerName: "Length",width:100 },
  { field: "Weight", headerName: "Weight",width:100 },
  { field: "buyingPrice", headerName: "Buying Price",width:100 },
 // { field: "CatID", headerName: "Category ID",width:100 },
  { field: "categoryName", headerName: "Category Name",width:120 },
 // { field: "SubCatID", headerName: "Sub Category ID",width:150 },
  { field: "subCategoryName", headerName: "Sub Category Name",width:150 },
  
  { field: "NoOfItems", headerName: "No of Items" },
];

const Producttable = () => {
  const [data, setData] = useState({});

 

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
              <div className="viewButtons">Edit</div>
              </Link>
            
          </div>
        );
      },
    },
  ];

  
  return (
    <div className="TableOfData" style={{height:"78%"}}>
      <div className="TableOfDataTitle1">
        <h1>Products</h1>
        
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
