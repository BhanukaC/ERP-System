import "../table.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const userColumns = [
  { field: "internalShipmentID", headerName: "Internal Shipment ID",  width: 150},
  { field: "dates", headerName: "Order Date", width: 150 },
  { field: "FromWID", headerName: "From", width: 100 },
  { field: "TOWID", headerName: "To", width: 100},
  { field: "statusMod", headerName: "Status", width: 150 },
  { field: "finishDates", headerName: "Finish Date", width: 150},
 
];

const ShipmentTable = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/inventory/internalShipment/getAllToReceive/5", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        // console.log(res);
        let dt = res.data.map((d) => {
          let status;
          switch (d.status) {
            case "P":
              status="Pending"
              break;
            case "D":
              status="Delivered"
              break;
          }
          return { id: d.internalShipmentID,statusMod:status,
            dates: moment(d.date).add(1, "days").utc().format("YYYY/MM/DD"),
            finishDates: moment(d.finishDate).add(1, "days").utc().format("YYYY/MM/DD"),
            ...d };
        });
        setData(dt);
        // console.log(dt);
      });
  }, [""]);

  const actionColumn = [
    {
      headerName: " ",
      width: 300,
      renderCell: (params) => {
        const reLink2= "/inventory/internalShipments/shipmentData/"+params.row.internalShipmentID;
        return (
          <div className="cellAction">
            <Link to={reLink2} style={{ textDecoration: "none" }}>
              <div className="viewButton">View Shipment</div>
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="dataTableTitle">
        Shipment Details
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

export default ShipmentTable;