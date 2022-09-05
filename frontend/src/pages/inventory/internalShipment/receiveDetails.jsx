import "./shipment.scss";
import Navbar from "../../../components/navbar/Navbar";
import InventorySidebar from "../../../components/inventory/inventorySidebar/inventorySidebar";
import ReceiveTable from "../../../components/inventory/internalShipment/receiveTable";
import { useState, useEffect } from "react";
import axios from "axios";

const ReceiveDetails = () => {
  const [WID, setWID] = useState("");
  const [warehouse, setWarehouse] = useState([]);
  const [town, setTown] = useState("");

  const getWarehouseName = (val) => {
    for (let i = 0; i < warehouse.length; i++) {
      console.log(warehouse[i].WID);
      if (warehouse[i].WID == val) {
        setTown(warehouse[i].town);
        break;
      }
    }
  };

  useEffect(() => {
    const getWarehouse = async () => {
      const res = await axios.get(
        "https://erp-system-nexeyo.herokuapp.com/inventory/Warehouse/getAll",
        {
          withCredentials: true,
          credentials: "include",
        }
      );
      setWarehouse(res.data);
    };
    getWarehouse();
  }, [""]);

  return (
    <div className="new">
      <InventorySidebar />
      <div className="newContainer">
        <Navbar />
        {/* <div className="topPart">
          <h1>Shipments To be Received to {WID} </h1>
        </div> */}
        <div className="topPart">
          <div className="rightPart">
            <h1>
              Shipments To be Received to {town} / WID-{WID}{" "}
            </h1>
            <br></br>
            <form>
              <div className="inputField">
                <label>To</label>
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
        <div className="bottomPart">
          <ReceiveTable WID={WID} />
        </div>
      </div>
    </div>
  );
};

export default ReceiveDetails;
