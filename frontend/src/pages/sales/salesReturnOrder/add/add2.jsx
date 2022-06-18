import "././add.scss";
import { useState , useEffect } from "react";
import Navbar from "../../../../components/navbar/Navbar";
import Sidebar from "../../../../components/sales/sales-sidebar/sales-sidebar";
import axios from "axios";

const AddSalesReturnOrderPart2 = () => {
    const [list, setList] = useState([]);
    const [reason, setReason] = useState("");
    const [WID, setWID] = useState("");
    const [CID, setCID] = useState("");
    const [CDAID, setCDAID] = useState("");
    const [CCID, setCCID] = useState("");
    const [salesOrderID, setSalesOrderID] = useState("");
   

  const submitForm = (e) => {
    e.preventDefault();
    let items = [];
    for (let i = 0; i < list.length; i++) {
      items.push({ PID: list[i].PID, qty: list[i].qty });
    }
    axios
      .post(
        "http://localhost:5000/sales/salesReturnOrder/add",
        {
            reason: reason,
            WID: WID,
            CID: CID,
            CDAID: CDAID,
            CCID: CCID,
            salesOrderID:salesOrderID ,
            items:items,
        },
        { withCredentials: true, credentials: "include" }
      )
      .then((res) => {
        if (res.data === "sales Return order added") {
          alert("sales Return order added");
          localStorage.setItem("SalesReturnOrderCart", JSON.stringify([]));
          window.location = "/sales/SalesReturnOrders/add";
        } else {
          alert("Try again");
        }
      });
  };

  useEffect(() => {
    const li = JSON.parse(localStorage.getItem("SalesReturnOrderCart"));
    setList(li);
    if (li.length === 0) {
      window.location = "/sales/SalesReturnOrders/add";
    }
  }, [""]);

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
        <div className="bottomPart">
          <div className="right">
            <form>
            <div className="formInput">
                <label>CID</label>
                <input
                  type="text"
                  value={CID}
                  onChange={(e) => {
                    setCID(e.target.value);
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
                <label>WID</label>
                <input
                  type="text"
                  value={WID}
                  onChange={(e) => {
                    setWID(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>CDAID</label>
                <input
                  type="text"
                  value={CDAID}
                  onChange={(e) => {
                    setCDAID(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>CCID</label>
                <input
                  type="text"
                  value={CCID}
                  onChange={(e) => {
                    setCCID(e.target.value);
                  }}
                />
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

export default AddSalesReturnOrderPart2;
