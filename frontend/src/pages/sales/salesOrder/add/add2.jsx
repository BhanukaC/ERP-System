import "././add.scss";
import { useState , useEffect } from "react";
import Navbar from "../../../../components/navbar/Navbar";
import Sidebar from "../../../../components/sales/sales-sidebar/sales-sidebar";
import axios from "axios";

const AddSalesOrderPart2 = () => {
  const [list, setList] = useState([]);
  const [WID, setWID] = useState("");
  const [CID, setCID] = useState("");
  const [CDAID, setCDAID] = useState("");
  const [CCID, setCCID] = useState("");
  const [distance, setDistance] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    let items = [];
    for (let i = 0; i < list.length; i++) {
      items.push({ PID: list[i].PID, qty: list[i].qty });
    }
    axios
      .post(
        "http://localhost:5000/sales/salesOrder/add/",
        {
            WID: WID,
            CID: CID,
            CDAID: CDAID,
            CCID: CCID,
            distance:distance,
            items:items,
        },
        { withCredentials: true, credentials: "include" }
      )
      .then((res) => {
        if (res.data === "sales order added") {
          alert("sales order added");
          localStorage.setItem("SalesOrderCart", JSON.stringify([]));
          window.location = "/sales/SalesOrders/add";
        } else {
          alert("Try again");
        }
      });
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
        setCCID(res.data[0].CCID);
      }
    }
  };

  useEffect(() => {
    const li = JSON.parse(localStorage.getItem("SalesOrderCart"));
    setList(li);
    if (li.length === 0) {
      window.location = "/sales/SalesOrders/add";
    }
  }, [""]);

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
                    checkCustomer(e.target.value);
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
              <button onClick={submitForm}>Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSalesOrderPart2;
