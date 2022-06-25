import "./dataTable.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const userColumns = [
  { field: "CID", headerName: "CID", width: 50 },
  { field: "customerName", headerName: "Customer Name", width: 120 },
  { field: "paymentTerm", headerName: "Payment Term", width: 120 },
  { field: "returnTerm", headerName: "Return Term" ,width:120},
  { field: "deliveryTerm", headerName: "Delivery Term" , width: 120 },
  { field: "no", headerName: "No" , width: 50},
  { field: "street", headerName: "Street", width: 100 },
  { field: "town", headerName: "Town", width: 80 },
  { field: "branchCode", headerName: "Branch Code" },
  { field: "accountNo", headerName: "Account No" },
  { field: "bankName", headerName: "Bank Name" },
  { field: "email", headerName: "Email" , width:150},
  
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
        // console.log(res);
        let dt = res.data.map((d) => {
          return { id: d.CID, ...d };
        });
        setData(dt);
        // console.log(dt);
      });
  }, [""]);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 600,
      renderCell: (params) => {
        const reLink = "/sales/customer/edit/" + params.row.CID;
        const reLink2 = "/sales/customerContactNumber/viewAll/" + params.row.CID;
        const reLink3 = "/sales/customerDeliveryAddress/viewAll/" + params.row.CID;
        return (
          <div className="cellAction">
             <Link to={reLink} style={{ textDecoration: "none" }}>
              <div className="viewButton1">Edit</div>
            </Link>
            <Link to={reLink2} style={{ textDecoration: "none" }}>
              <div className="viewButton2">View Customer Contact Details</div>
            </Link>
            <Link to={reLink3} style={{ textDecoration: "none" }}>
              <div className="viewButton3">View Customer Delivery Address</div>
            </Link>
          </div>
        );
      },
    },
  ];

  
  return (
    <div className="datatable" style={{height:"78%"}}>
      <div className="dataTableTitle1">
       <h1>Customer Details</h1> 
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
