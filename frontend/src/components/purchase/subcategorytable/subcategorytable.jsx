import "../table.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const userColumns = [
  { field: "SCID", headerName: "Sub Category ID" },
  { field: "catID", headerName: "Category ID" },
  { field: "subCategoryName", headerName: "Sub Category Name" },
  { field: "discount", headerName: "Discount" },
  
];

const Subcategorytable = () => {
  const [data, setData] = useState({});

  const handleDelete = (SCID) => {
    setData(data.filter((item) => item.id !== SCID));
  };

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
        Sub Category
        <Link to="/purchase/product/addsubcat" className="link">
          Add New Sub Category
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

export default Subcategorytable;
