import "././add.scss";
import { useState , useEffect } from "react";
import Navbar from "../../../../components/navbar/Navbar";
import Sidebar from "../../../../components/sales/sales-sidebar/sales-sidebar";
import axios from "axios";


const AddSalesOrderPart1 = () => {

  const [CID, setCID] = useState("");
  const [CDAID, setCDAID] = useState("");
  const [CCID, setCCID] = useState("");
  const [WID, setWID] = useState("");
  const [distance, setDistance] = useState("");
  const [warehouse, setWarehouse] = useState({});
  const [location, setLocation] = useState({});

  useEffect(() => {
    const getWarehouse = async () => {
      const res = await axios.get("http://localhost:5000/inventory/Warehouse/getAll", {
        withCredentials: true,
        credentials: "include",
      });
      setWarehouse(res.data);
    };
    getWarehouse();

    const getLocation = async () => {
      const res = await axios.get("http://localhost:5000/sales/Customer/getSingle/" + CID, {
        withCredentials: true,
        credentials: "include",
      });
      setLocation(res.data);
    };
    getLocation();
  }, [""]);

  const submitForm = (e) => {
    e.preventDefault();

    localStorage.setItem("CID",CID);
    localStorage.setItem("CDAID",CDAID);
    localStorage.setItem("CCID",CCID);
    localStorage.setItem("WID",WID);
    localStorage.setItem("distance",distance);
    window.location = "/sales/salesOrder/add2";
   
  };

  const checkCustomer = async (val) => {
    if (val !== "") {
      const res = await axios.get(
        "http://localhost:5000/sales/Customer/getSingle/" + val,
        {
          withCredentials: true,
          credentials: "include",
        }
      );
      if (res.data.length === 0) {
        alert("CID not found");
      } else {
        setCDAID(res.data[0].CDAID);
      }
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="topPart">
          <h1>Add Sales Order</h1>
        </div>
       
        <div className="bottomPart">
          <div className="right">
            <form>
             
              <div className="formInput">
                <label>Warehouse ID</label>

                <select
                  value={WID}
                  onChange={(e) => {
                    setWID(e.target.value);
                  }}
                >
                  <option value="" disabled selected>
                    Select Warehouse ID
                  </option>
                  {JSON.stringify(warehouse) !== "{}"
                    ? warehouse.map((w) => (
                        <option value={w.WID} key={w.WID}>
                          {w.town}
                        </option>
                      ))
                    : ""}
                </select>
              </div>

              <div className="formInput">
                <label>Customer ID</label>
                <input
                  type="text"
                  value={CID}
                  onChange={(e) => {
                    checkCustomer(e.target.value);
                    setCID(e.target.value);
                    
                  }}
                />
              </div>

              <div className="formInput">
                <label>Customer Delivery Address</label>

                <select
                  value={CID}
                  onChange={(e) => {
                    setCDAID(e.target.value);
                  }}
                >
                  <option value="" disabled selected>
                    Select Customer Delivery Address
                  </option>
                  {JSON.stringify(location) !== "{}"
                    ? location.map((l) => (
                        <option value={l.CDAID} key={l.CDAID}>
                          {l.CDAID}
                        </option>
                      ))
                    : ""}
                </select>
              </div>

              <div className="formInput">
                <label>Customer Contact Number ID</label>
                <input
                  type="text"
                  value={CCID}
                  onChange={(e) => {
                    setCCID(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Distance</label>
                <input
                  type="text"
                  value={distance}
                  onChange={(e) => {
                    setDistance(e.target.value);
                  }}
                />
              </div>



              <div className="break"></div>
              <button 
              style={{
                width: "150px",
              padding: "10px",
              border: "none",
              backgroundColor: "#7451f8",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              margintop: "10px",
              }}
              onClick={submitForm}>Add Sales Order</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSalesOrderPart1;
