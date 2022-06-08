import "./datatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const userColumns = [
  { field: "EID", headerName: "EID" },
  { field: "birth", headerName: "Date of Birth", width: 100 },
  { field: "fName", headerName: "First Name" },
  { field: "lName", headerName: "Last Name" },
  { field: "bankName", headerName: "Bank Namee", width: 100 },
  { field: "accountNo", headerName: "Account No" },
  { field: "branchCode", headerName: "Branch Code" },
  { field: "branchName", headerName: "Branch Name" },
  { field: "NIC", headerName: "NIC" },
  { field: "passportNo", headerName: "Passport No" },
  { field: "gender", headerName: "Gender" },
  { field: "designation", headerName: "Designation" },
  { field: "department", headerName: "Department" },
  { field: "basicSalary", headerName: "Basic Salary" },
  { field: "dailyWage", headerName: "Daily Wage" },
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
          return {
            id: d.EID,
            birth: moment(d.DOB).add(1, "days").utc().format("YYYY/MM/DD"),
            ...d,
          };
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
        const reLink = "/hr/employee/edit/" + params.row.EID;
        const reLink2 = "/hr/dependent/viewall/" + params.row.EID;
        return (
          <div className="cellAction">
            <Link to={reLink} style={{ textDecoration: "none" }}>
              <div className="viewButton">Edit</div>
            </Link>
            <Link to={reLink2} style={{ textDecoration: "none" }}>
              <div className="viewButton">View Dependents</div>
            </Link>
            {/* <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.CID)}
            >
              Delete
            </div> */}
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">All Employees</div>
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
