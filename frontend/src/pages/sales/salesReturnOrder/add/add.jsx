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
  const [warehouse, setWarehouse] = useState({});
  const [location, setLocation] = useState({});
  const [contactNumber, setContactNumber] = useState({});

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

    const getContactNumber = async () => {
      const res = await axios.get("http://localhost:5000/sales/Customer/getSingle/" + CID, {
        withCredentials: true,
        credentials: "include",
      });
      setContactNumber(res.data);
    };
    getContactNumber();
  }, [""]);
  

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
                <label>Customer Contact Number</label>

                <select
                  value={CID}
                  onChange={(e) => {
                    setCCID(e.target.value);
                  }}
                >
                  <option value="" disabled selected>
                  Customer Contact Number
                  </option>
                  {JSON.stringify(contactNumber) !== "{}"
                    ? contactNumber.map((l) => (
                        <option value={l.CCID} key={l.CCID}>
                          {l.CCID}
                        </option>
                      ))
                    : ""}
                </select>
              </div>

              <div className="break"></div>
              <button onClick={submitForm}>Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AddSalesReturnOrderPage1;
