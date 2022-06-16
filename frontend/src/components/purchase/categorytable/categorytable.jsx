import "./categorytable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const userColumns = [
  { field: "catID", headerName: "Category ID" },
  { field: "categoryName", headerName: "Category Name" },
  
];

const Categorytable = () => {
  const [data, setData] = useState({});

  const handleDelete = (catID) => {
    setData(data.filter((item) => item.id !== catID));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/purchase/category/getAll", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        // console.log(res);
        let dt = res.data.map((d) => {
          return { id: d.catID, ...d };
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
        const upLink = "/purchase/product/updatecat/"+params.row.catID;
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
      <div className="datatableTitle">
        Category
        <Link to="/purchase/product/addcat" className="link">
          Add New Category
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

export default Categorytable;
