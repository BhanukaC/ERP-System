import "././add.scss";
import { useState, useEffect } from "react";
import Navbar from "../../../../components/navbar/Navbar";
import Sidebar from "../../../../components/sales/sales-sidebar/sales-sidebar";
import axios from "axios";

const AddSalesOrderPart1 = () => {
  const [CID, setCID] = useState("");
  const [CDAID, setCDAID] = useState("");
  const [CCID, setCCID] = useState("");
  const [WID, setWID] = useState("");
  const [distance, setDistance] = useState("");
  const [warehouse, setWarehouse] = useState([]);
  const [location, setLocation] = useState([]);
  const [contactNumber, setContactNumber] = useState([]);

  useEffect(() => {
    const getWarehouse = async () => {
      const res = await axios.get(
        "https://erp-system-nexeyo.herokuapp.com/sales/Warehouse/getAll",
        {
          withCredentials: true,
          credentials: "include",
        }
      );
      setWarehouse(res.data);
    };
    getWarehouse();
  }, [""]);

  const getLocation = async (val) => {
    const res = await axios.get(
      "https://erp-system-nexeyo.herokuapp.com/sales/Customer/deliveryAddress/getAll/" +
        val,
      {
        withCredentials: true,
        credentials: "include",
      }
    );
    setLocation(res.data);
  };

  const getContactNumber = async (val) => {
    const res = await axios.get(
      "https://erp-system-nexeyo.herokuapp.com/sales/Customer/contactNumber/getAll/" +
        val,
      {
        withCredentials: true,
        credentials: "include",
      }
    );

    setContactNumber(res.data);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (
      CID === "" ||
      CDAID === "" ||
      CCID === "" ||
      WID === "" ||
      distance === ""
    ) {
      alert("Fill the required fields");
    } else {
      localStorage.setItem("CID", CID);
      localStorage.setItem("CDAID", CDAID);
      localStorage.setItem("CCID", CCID);
      localStorage.setItem("WID", WID);
      localStorage.setItem("distance", distance);
      window.location = "/sales/salesOrder/add2";
    }
  };

  const checkCustomer = async (val) => {
    if (val !== "") {
      const res = await axios.get(
        "https://erp-system-nexeyo.herokuapp.com/sales/Customer/getSingle/" +
          val,
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
    } else {
      setCCID("");
      setCDAID("");
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="topPartContainer">
          <h1>Add Sales Order</h1>
        </div>

        <div className="bottomPartContainer">
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
                    Select Warehouse
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
                  backgroundColor: "#0085cc",
                  color: "white",
                  fontWeight: "bold",
                  cursor: "pointer",
                  margintop: "10px",
                }}
                onClick={submitForm}
              >
                Add Sales Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSalesOrderPart1;
