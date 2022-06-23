import "././add.scss";
import { useState , useEffect } from "react";
import Navbar from "../../../../components/navbar/Navbar";
import Sidebar from "../../../../components/sales/sales-sidebar/sales-sidebar";
import axios from "axios";


const AddSalesReturnOrderPage1 = () => {
  // const [list, setList] = useState([]);
  const [WID, setWID] = useState("");
  const [CID, setCID] = useState("");
  const [CDAID, setCDAID] = useState("");
  const [CCID, setCCID] = useState("");
  const [reason, setReason] = useState("");
  const [salesOrderID, setSalesOrderID] = useState("");
  const [warehouse, setWarehouse] = useState([]);
  const [location, setLocation] = useState([]);
  const [contactNumber, setContactNumber] = useState([]);
  
  useEffect(() => {
    const getWarehouse = async () => {
      const res = await axios.get("http://localhost:5000/sales/Warehouse/getAll", {
        withCredentials: true,
        credentials: "include",
      });
      setWarehouse(res.data);
    };
    getWarehouse();

  
  }, [""]);

  const getLocation = async (val) => {
    const res = await axios.get("http://localhost:5000/sales/Customer/deliveryAddress/getAll/" + val, {
      withCredentials: true,
      credentials: "include",
    });
    setLocation(res.data);
  };
 

  const getContactNumber = async (val) => {
    const res = await axios.get("http://localhost:5000/sales/Customer/contactNumber/getAll/" + val, {
      withCredentials: true,
      credentials: "include",
    });
    
    setContactNumber(res.data);

  };

  const submitForm = (e) => {
    e.preventDefault();

    localStorage.setItem("CID",CID);
    localStorage.setItem("CDAID",CDAID);
    localStorage.setItem("CCID",CCID);
    localStorage.setItem("WID",WID);
    localStorage.setItem("reason",reason);
    localStorage.setItem("salesOrderID",salesOrderID);
    window.location = "/sales/salesReturnOrder/add2";
   
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
        setCCID("");
        setCDAID("");
      } else {
        getContactNumber(val);
        getLocation(val);
      }
    }else{
      setCCID("");
        setCDAID("");
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="topPart">
          <h1>Add Sales Return Order</h1>
        </div>
       
        <div className="bottomPart">
          <div className="right">
            <form>
            <div className="formInput">
                <label>Customer ID</label>
                <input
                  type="text"
                  value={CID}
                  onChange={(e) => {
                    setCID(e.target.value);
                    checkCustomer(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Sales Order ID</label>
                <input
                  type="text"
                  value={salesOrderID}
                  onChange={(e) => {
                    setSalesOrderID(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Reason</label>
                <input
                  type="text"
                  value={reason}
                  onChange={(e) => {
                    setReason(e.target.value);
                  }}
                />
              </div>
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
                  {Array.isArray(warehouse)
                    ? warehouse.map((w) => (
                        <option value={w.WID} key={w.WID}>
                          {w.town}
                        </option>
                      ))
                    : ""}
                </select>
              </div>
              <div className="formInput">
                <label>Customer Delivery Address</label>

                <select
                  value={CDAID}
                  onChange={(e) => {
                    setCDAID(e.target.value);
                  }}
                >
                  <option value="" disabled selected>
                    Select Customer Delivery Address
                  </option>
                  {Array.isArray(location)
                    ? location.map((l) => (
                        <option value={l.CDAID} key={l.CDAID}>
                          {l.no},{l.street},{l.town}
                        </option>
                      ))
                    : ""}
                </select>
              </div>
              <div className="formInput">
                <label>Customer Contact Number</label>

                <select
                  value={CCID}
                  onChange={(e) => {
                    setCCID(e.target.value);
                  }}
                >
                  <option value="" disabled selected>
                  Customer Contact Number
                  </option>
                  {Array.isArray(contactNumber)
                    ? contactNumber.map((l) => (
                        <option value={l.CCID} key={l.CCID}>
                          {l.contactNumber}
                        </option>
                      ))
                    : ""}
                </select>
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
              onClick={submitForm}>Add Sales Return Order</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSalesReturnOrderPage1;
