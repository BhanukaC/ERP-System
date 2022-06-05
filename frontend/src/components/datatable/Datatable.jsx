import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const userColumns = [
  { field: "CID", headerName: "CID" },
  { field: "accountNo", headerName: "accountNo" },
  { field: "bankName", headerName: "bankName" },
  { field: "branchCode", headerName: "branchCode" },
  { field: "customerName", headerName: "customerName", width: 150 },
  { field: "deliveryTerm", headerName: "deliveryTerm" },
  { field: "email", headerName: "email" },
  { field: "no", headerName: "no" },
  { field: "paymentTerm", headerName: "paymentTerm" },
  { field: "returnTerm", headerName: "returnTerm" },
  { field: "street", headerName: "street" },
];

const Datatable = () => {
  const [data, setData] = useState({});

  const handleDelete = (CID) => {
    setData(data.filter((item) => item.id !== CID));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/sales/Customer/getAll", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        console.log(res);
        let dt = res.data.map((d) => {
          return { id: d.CID, ...d };
        });
        setData(dt);
        console.log(dt);
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
        Add New User
        <Link to="/users/new" className="link">
          Add New
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

export default Datatable;
