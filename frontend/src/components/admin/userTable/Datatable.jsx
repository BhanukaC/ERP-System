import "./Datatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const userColumns = [
  { field: "UID", headerName: "UID", width: 150 },
  { field: "userName", headerName: "User Name", width: 250 },
  { field: "acessLevel", headerName: "Acess Level", width: 150 },
  { field: "email", headerName: "Email", width: 250 },
];

const Datatable = () => {

  const [data, setData] = useState({});
  const[UID, setUID] =useState("");

  const handleDelete = (CID) => {
    setData(data.filter((item) => item.id !== CID));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/getAllUserData", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        // console.log(res);
        let dt = res.data.map((d) => {
          return { id: d.UID, ...d };
        });
        setData(dt);
        setUID(res.data[0].UID);
        // console.log(dt);
      });
  }, [""]);

  const reset = (val) => {
    
    
      axios
        .put(
          "http://localhost:5000/admin/passwordReset/"+val,{},
         
          {
            withCredentials: true,
            credentials: "include",
          }
        )
        .then((res) => {
          console.log(res);
          if (res.data === "Password Resseted") {
            alert("Password was reset");
          } else {
            alert("Error");
          }
        });
    
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        const link="/admin/edituser/"+params.row.id;
        return (
          <div className="cellAction">
            <div>
              <button>
                <Link className="btn" to={link} >Edit User</Link>
              </button>
            </div>
            <div>
              <button onClick={()=>{
                reset(params.row.id);
              }}>Reset Password</button>
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable" style={{height:"78%"}}>
    <div className="dataTableTitle1">
       <h1> Users</h1>
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
