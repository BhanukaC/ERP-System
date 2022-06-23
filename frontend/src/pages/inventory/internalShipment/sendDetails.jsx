import "../form.scss"; 
import Navbar from "../../../components/navbar/Navbar";
import InventorySidebar from "../../../components/inventory/inventorySidebar/inventorySidebar";
import SendTable from "../../../components/inventory/internalShipment/sendTable";
import { useState,useEffect } from "react";
import axios from "axios";


const SendDetails = () => {
  const [WID, setWID] = useState("");
  const [warehouse, setWarehouse] = useState({});

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

  const submitForm = (e) => {
    e.preventDefault();
    if(WID === "" )
      {
        alert("Fill the required fields");
      }
        else{
          localStorage.setItem("WID",WID);
          alert("Submitted");
    }
  };

  return (
    <div className="new">
      <InventorySidebar />
      <div className="newContainer">
        <Navbar />
        <div className="topPart">
          <h1>Shipments To be Sent</h1>
        </div>
        <div className="bottomPart">
        <div className="right">
            <form>
            <div className="formInput">
                <label>From</label>
                <select
                  value={WID}
                  onChange={(e) => {
                    setWID(e.target.value);
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
              <button onClick={submitForm}>Submit</button>
            </form>
          </div>
        </div>
        <div className="bottomPart">
          <SendTable />
        </div>
        
      </div>
    </div>
  );
};

export default SendDetails;