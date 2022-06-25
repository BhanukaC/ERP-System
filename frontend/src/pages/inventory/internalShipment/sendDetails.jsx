import "./shipment.scss"; 
import Navbar from "../../../components/navbar/Navbar";
import InventorySidebar from "../../../components/inventory/inventorySidebar/inventorySidebar";
import SendTable from "../../../components/inventory/internalShipment/sendTable";
import { useState,useEffect } from "react";
import axios from "axios";


const SendDetails = () => {
  const [WID, setWID] = useState("");
  const [warehouse, setWarehouse] = useState({});
  const [town, setTown] =  useState("");

  const getWarehouseName=(val)=>{
    for(let i=0;i<warehouse.length;i++){
      console.log(warehouse[i].WID);
      if(warehouse[i].WID==val){
        setTown(warehouse[i].town);
        break;
      }
    }
  }

  useEffect(() => {
    const getWarehouse = async () => {
      const res = await axios.get("http://localhost:5000/inventory/Warehouse/getAll", {
        withCredentials: true,
        credentials: "include",
      });
      setWarehouse(res.data);
    };
    getWarehouse();
  }, [""]);

  return (
    <div className="new">
      <InventorySidebar />
      <div className="newContainer">
        <Navbar />
        <div className="topContainer">
        <div className="right">
        <h1>Shipments To be Sent From {town} / WID-{WID} </h1>
        <br></br>
            <form>
            <div className="formInput">
                <label>From</label>
                <select
                  value={WID}
                  onChange={(e) => {
                    setWID(e.target.value);
                    getWarehouseName(e.target.value);
                  }}
                >
                  <option value="" disabled selected>
                    Select Warehouse
                  </option>
                  {JSON.stringify(warehouse) !== "{}"
                    ? warehouse.map((w) => (
                        <option value={w.WID} key={w.WID}>
                          {w.WID}-{w.town}
                        </option>
                      ))
                    : ""}
                </select>
              </div>

              <div className="break"></div>
            </form>
          </div>
        </div>
        <div className="bottomContainer">
          <SendTable WID={WID} />
        </div>
        
      </div>
    </div>
  );
};

export default SendDetails;