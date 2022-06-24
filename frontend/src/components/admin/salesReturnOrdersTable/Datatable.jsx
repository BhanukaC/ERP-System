import "./Datatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const userColumns = [
  { field: "salesReturnOrderID", headerName: "salesReturnOrderID", width: 50 },
  { field: "CID", headerName: "CID", width: 50 },
  { field: "CDAID", headerName: "CDAID", width: 50 },
  { field: "CCID", headerName: "CCID", width: 50 },
  { field: "WID", headerName: "WID", width: 50 },
  { field: "initiateDate1", headerName: "Initiate Date", width: 120  },
  { field: "finishDates", headerName: "Finish Date", width: 120  },
  { field: "reason", headerName: "reason", width: 200  },
  { field: "status", headerName: "Order Status", width: 100 },
  { field: "salesOrderID", headerName: "salesOrderID", width: 120 },
 
];

const DataTable1 = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/salesReturnOrder/getAll", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
       
        let dt = res.data.map((d) => {
          return { id: d.salesReturnOrderID,
            initiateDate1: moment(d.initiateDate).add(1, "days").utc().format("YYYY/MM/DD"),
            finishDates: moment(d.finishDate).add(1, "days").utc().format("YYYY/MM/DD"), ...d };
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
          const upLink = ""+params.row.salesReturnOrderID;
          return (
            <div className="cellAction">
              <div>
                <button onClick={()=>{accept(params.row.salesReturnOrderID);}}>Accept</button>
              </div>
              <div>
                <button onClick={()=>{reject(params.row.salesReturnOrderID);}}>Reject</button>
              </div>
            </div>
          );
        },
      },
  ];

  const accept = (val) => {
      axios
        .post(
          "http://localhost:5000/admin/salesReturnOrder/update",
          {
            salesReturnOrderID: val,
            status: 'A',
          },
          {
            withCredentials: true,
            credentials: "include",
          }
        )
        .then((res) => {
          console.log(res);
          if (res.data === "Sales Return Order Updated") {
            alert("Sales Return Order Updated");
          } else {
            alert("Error");
          }
        });
    };

    const reject = (val) => {
      axios
        .post(
          "http://localhost:5000/admin/salesReturnOrder/update",
          {
            salesReturnOrderID: val,
            status: 'R',
          },
          {
            withCredentials: true,
            credentials: "include",
          }
        )
        .then((res) => {
          console.log(res);
          if (res.data === "Sales Return Order Updated") {
            alert("Sales Return Order Updated");
          } else {
            alert("Error");
          }
        });
    };


  return (
    <div className="datatable">
      <div className="datatableTitle">
       Sales Return Order
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