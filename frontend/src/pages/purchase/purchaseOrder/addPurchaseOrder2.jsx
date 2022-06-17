import { useState, useEffect } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/purchase_sidebar/purchase_sidebar";
import axios from "axios";

const AddPurchaseOrder2 = () => {
  const [list, setList] = useState([]);

  const [SID, setSID] = useState(0);
  const [SSLID, setSSLID] = useState(0);
  const [SCID, setSCID] = useState(0);
  const [WID, setWID] = useState(0);

  const submitForm = (e) => {
    e.preventDefault();
    let items = [];
    for (let i = 0; i < list.length; i++) {
      items.push({ PID: list[i].PID, qty: list[i].qty });
    }
    axios
      .post(
        "http://localhost:5000/purchase/purchaseOrder/add",
        {
            SID : SID,
            SSLID: SSLID,
            SCID: SCID,
            WID:WID,
            items: items,
        },
        { withCredentials: true, credentials: "include" }
      )
      .then((res) => {
        if (res.data === "purchase order added") {
          alert("purchase order added");
          localStorage.setItem("PurchaseOrderCart", JSON.stringify([]));
          window.location = "/purchase/order1";
        } else {
          alert("Try again");
        }
      });
  };

  useEffect(() => {
    const li = JSON.parse(localStorage.getItem("PurchaseOrderCart"));
    console.log(li);
    setList(li);
    if (li === null) {
      window.location = "/purchase/order1";
    }
    if (li.length === 0) {
      window.location = "/purchase/order1";
    }
  }, [""]);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add Purchase Order</h1>
        </div>
        <div className="bottom">
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
                <label>Supplier ID</label>
                <input
                  type="text"
                  value={SID}
                  onChange={(e) => {
                    setSID(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Suppliier Store Location ID</label>
                <input
                  type="text"
                  value={SSLID}
                  onChange={(e) => {
                    setSSLID(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Suppliier Contact ID</label>
                <input
                  type="text"
                  value={SCID}
                  onChange={(e) => {
                    setSCID(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Warehouse ID</label>
                <input
                  type="text"
                  value={WID}
                  onChange={(e) => {
                    setWID(e.target.value);
                  }}
                />
              </div>

              <div className="break"></div>
              <button onClick={submitForm}>Place Order</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPurchaseOrder2;