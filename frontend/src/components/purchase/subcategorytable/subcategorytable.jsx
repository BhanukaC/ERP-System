import "../table.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const userColumns = [
  { field: "SCID", headerName: "Sub Category ID" ,width:120},
  { field: "subCategoryName", headerName: "Sub Category Name",width:150 },
  { field: "categoryName", headerName: "Category Name",width:120 },
 
  { field: "discount", headerName: "Discount" ,width:100},
  
];

const Subcategorytable = () => {
  const [data, setData] = useState({});

  
  useEffect(() => {
    axios
      .get("http://localhost:5000/purchase/subCategory/getAll", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        // console.log(res);
        let dt = res.data.map((d) => {
          return { id: d.SCID, ...d };
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
        const upLink ="/purchase/product/updatesubcat/"+params.row.SCID;
        return (
          <div className="cellAction">
            <Link to = {upLink} style = {{textDecoration: "none"}}>
              <div className="editButtons">Edit</div>
            </Link>
            
          </div>
        );
      },
    },
  ];
  return (
    <div className="TableOfData" style={{height:"78%"}}>
      <div className="TableOfDataTitle1">
        <h1>Sub Category</h1>
        
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

export default Subcategorytable;
