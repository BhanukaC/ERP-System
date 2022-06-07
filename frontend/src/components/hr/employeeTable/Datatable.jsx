import "./datatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const userColumns = [
  { field: "EID", headerName: "EID" },
  { field: "DOB", headerName: "DOB" },
  { field: "fName", headerName: "fName" },
  { field: "lName", headerName: "lName" },
  { field: "bankName", headerName: "bankNamee", width: 150 },
  { field: "accountNo", headerName: "accountNo" },
  { field: "branchCode", headerName: "branchCode" },
  { field: "branchName", headerName: "branchName" },
  { field: "NIC", headerName: "NIC" },
  { field: "passportNo", headerName: "passportNo" },
  { field: "gender", headerName: "gender" },
  { field: "designation", headerName: "designation" },
  { field: "department", headerName: "department" },
  { field: "basicSalary", headerName: "basicSalary" },
  { field: "dailyWage", headerName: "dailyWage" },
];

const Datatable = () => {
  const [data, setData] = useState({});

  const handleDelete = (CID) => {
    setData(data.filter((item) => item.id !== CID));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/hr/employee/getAll", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        // console.log(res);
        let dt = res.data.map((d) => {
          return { id: d.EID, ...d };
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

export default Datatable;
