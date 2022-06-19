import "../form.scss";
import { useState, useEffect } from "react";
import Navbar from "../../../components/navbar/Navbar";
import InventorySidebar from "../../../components/inventory/inventorySidebar/inventorySidebar";
import axios from "axios";

const AddInternalShipmentsPart2 = () => {
  const [list, setList] = useState([]);
  const [fromWID, setFromWID] = useState(0);
  const [toWID, setToWID] = useState(0);

  const submitForm = (e) => {
    e.preventDefault();
    let items = [];
    for (let i = 0; i < list.length; i++) {
      items.push({ PID: list[i].PID, qty: list[i].qty });
    }
    axios
      .post(
        "http://localhost:5000/inventory/internalShipment/add/",
        {
          FromWID: fromWID,
          TOWID: toWID,
          items: items,
        },
        { withCredentials: true, credentials: "include" }
      )
      .then((res) => {
        if (res.data === "Internal Shipment added") {
          alert("Internal Shipment added");
          localStorage.setItem("InternalShipmentCart", JSON.stringify([]));
          window.location = "/inventory/internalShipments/add";
        } else {
          alert("Try again");
        }
      });
  };

  useEffect(() => {
    const li = JSON.parse(localStorage.getItem("InternalShipmentCart"));
    console.log(li);
    setList(li);
    if (li === null) {
      window.location = "/inventory/internalShipments/add";
    }
    if (li.length === 0) {
      window.location = "/inventory/internalShipments/add";
    }
  }, [""]);

  return (
    <div className="new">
      <InventorySidebar />
      <div className="newContainer">
        <Navbar />
        <div className="topPart">
          <h1>Add Internal Shipment</h1>
        </div>
        <div className="bottomPart">
          <div className="right">
            <h1>Cart</h1>
            <table style={{ width: "80%", textAlign: "center" }}>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Quantity</th>
              </tr>
              {list.map((item) => {
                return (
                  <tr key={item.PID}>
                    <td>{item.PID}</td>
                    <td> {item.name}</td>
                    <td>{item.qty}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput">
                <label>From WID</label>
                <input
                  type="number"
                  value={fromWID}
                  onChange={(e) => {
                    setFromWID(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>To WID</label>
                <input
                  type="number"
                  value={toWID}
                  onChange={(e) => {
                    setToWID(e.target.value);
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
              onClick={submitForm}>Issue</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddInternalShipmentsPart2;
