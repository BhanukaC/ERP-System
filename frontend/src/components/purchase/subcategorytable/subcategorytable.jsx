import "./subcategorytable.scss";
import { DataGrid } from "@mui/x-data-grid";
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
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.CID)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
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
      />
    </div>
  );
};

export default Subcategorytable;
