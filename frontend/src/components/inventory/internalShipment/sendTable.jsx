import "./shipmentTable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const userColumns = [
  { field: "internalShipmentID", headerName: "Internal Shipment ID",  width: 150},
  { field: "dates", headerName: "Order Date", width: 150 },
 // { field: "FromWID", headerName: "From", width: 100 },
  { field: "TOWID", headerName: "To Warehouse ID", width: 150},
  { field: "town", headerName: "To Branch", width: 150 },
  { field: "finishDates", headerName: "Finish Date", width: 150},
 
];

const SendTable = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    let fromWID=props.WID
    if(fromWID!==""){
    axios
      .get("http://localhost:5000/inventory/internalShipment/getAllSend/"+ fromWID,{
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        // console.log(res);
        let dt = res.data.map((d) => {
          let date;
          if(d.finishDate===null){
            date=d.finishDate
          }else{
            date=moment(d.deliveredDate).add(1, "days").utc().format("YYYY/MM/DD");
          }
          return { id: d.internalShipmentID,
            dates: moment(d.date).add(1, "days").utc().format("YYYY/MM/DD"),
            finishDates: date,
            ...d };
        });
        setData(dt);
        // console.log(dt);
      });
        
    }
  }, [props.WID]);

  const actionColumn = [
    {
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        const reLink2= "/inventory/internalShipments/sentShipmentData/"+params.row.internalShipmentID;
        return (
          <div className="cellAction">
            <Link to={reLink2} style={{ textDecoration: "none" }}>
              <div className="viewButtons">View Shipment</div>
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <div className="table">
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
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

export default SendTable;