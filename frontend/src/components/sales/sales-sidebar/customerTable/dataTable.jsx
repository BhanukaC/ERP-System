import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const userColumns = [
  { field: "CID", headerName: "CID", width: 50 },
  { field: "customerName", headerName: "CustomerName", width: 120 },
  { field: "paymentTerm", headerName: "PaymentTerm", width: 120 },
  { field: "returnTerm", headerName: "ReturnTerm" },
  { field: "deliveryTerm", headerName: "DeliveryTerm" },
  { field: "no", headerName: "No" , width: 50},
  { field: "street", headerName: "Street", width: 80 },
  { field: "town", headerName: "Town", width: 80 },
  { field: "branchCode", headerName: "BranchCode" },
  { field: "accountNo", headerName: "AccountNo" },
  { field: "bankName", headerName: "BankName" },
  { field: "email", headerName: "Email" },
  
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
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="deleteButton"
              onClick={() => handleDelete(params.row.CID)}
            >
              Edit
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
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
