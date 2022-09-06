import "./dataTable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

function getFullAddress(params) {
  return `${params.row.no || ""} ${params.row.street || ""} ${
    params.row.town || ""
  }`;
}

const userColumns = [
  { field: "salesReturnOrderID", headerName: "SalesReturnOrderID", width: 150 },
  { field: "CID", headerName: "Customer ID", width: 120 },
  { field: "customerName", headerName: "Customer Name", width: 120 },
  {
    field: "CDAID",
    headerName: "Delivery Address",
    valueGetter: getFullAddress,
    width: 180,
  },
  { field: "contactNumber", headerName: "Contact Number", width: 150 },
  { field: "town", headerName: "Warehouse Name", width: 120 },
  { field: "initiateDate1", headerName: "Initiate Date", width: 100 },
  { field: "finishDates", headerName: "Finish Date", width: 100 },
  { field: "reason", headerName: "reason", width: 160 },
  { field: "status", headerName: "Order Status", width: 120 },
  { field: "salesOrderID", headerName: "salesOrderID" },
];

const DataTable1 = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://erp-system-nexeyo.herokuapp.com/sales/salesReturnOrder/getAll/",
        {
          withCredentials: true,
          credentials: "include",
        }
      )
      .then((res) => {
        let dt = res.data.map((d) => {
          return {
            id: d.salesReturnOrderID,
            initiateDate1: moment(d.initiateDate)
              .add(1, "days")
              .utc()
              .format("YYYY/MM/DD"),
            finishDates: moment(d.finishDate)
              .add(1, "days")
              .utc()
              .format("YYYY/MM/DD"),
            ...d,
          };
        });
        setData(dt);
      });
  }, [""]);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 220,
      renderCell: (params) => {
        const upLink =
          "/sales/salesReturnOrder/viewAll2/" + params.row.salesReturnOrderID;
        return (
          <div className="cellAction">
            <Link to={upLink} style={{ textDecoration: "none" }}>
              <div className="viewButton1">View Return Order Details</div>
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable" style={{ height: "78%" }}>
      <div className="dataTableTitle1">
        <h1>Sales Return Order</h1>
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

export default DataTable1;
