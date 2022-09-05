import "././add.scss";
import { useState, useEffect } from "react";
import Navbar from "../../../../components/navbar/Navbar";
import Sidebar from "../../../../components/sales/sales-sidebar/sales-sidebar";
import axios from "axios";

const AddSalesReturnOrderPage2 = () => {
  const [PID, setPID] = useState(0);
  const [qty, setQty] = useState(0);
  const [productName, setProductName] = useState("");
  const [list, setList] = useState([]);
  const [WID, setWID] = useState("");
  const [CID, setCID] = useState("");
  const [CDAID, setCDAID] = useState("");
  const [CCID, setCCID] = useState("");
  const [reason, setReason] = useState("");
  const [salesOrderID, setSalesOrderID] = useState("");
  const [salesOrderData, setSalesOrderData] = useState([]);

  const submitForm = async (e) => {
    e.preventDefault();

    setQty(parseInt(qty));
    if (qty > 0) {
      if (list.length !== 0) {
        let status = false;
        for (let i = 0; i < list.length; i++) {
          if (list[i].PID === PID) {
            if (checkProduct2(PID, parseInt(list[i].qty) + parseInt(qty))) {
              list[i].qty = parseInt(list[i].qty) + parseInt(qty);
              setProductName("");
              setQty(0);
              setPID(0);
              alert("Product added to cart");
            }
            status = true;
          }
        }
        if (!status) {
          if (checkProduct2(PID, parseInt(qty))) {
            setList([
              ...list,
              { PID: PID, name: productName, qty: parseInt(qty) },
            ]);
            setProductName("");
            setQty(0);
            setPID(0);
            alert("Product added to cart");
          }
        }
      } else {
        if (checkProduct2(PID, parseInt(qty))) {
          setList([{ PID: PID, name: productName, qty: parseInt(qty) }]);
          setProductName("");
          setQty(0);
          setPID(0);
          alert("Product added to cart");
        }
      }
    } else {
      alert("Enter valid quantity");
    }
  };

  const checkProduct = async (val) => {
    if (val !== "") {
      const res = await axios.get(
        "https://erp-system-nexeyo.herokuapp.com/sales/product/getSingle/" +
          val,
        {
          withCredentials: true,
          credentials: "include",
        }
      );
      if (res.data.length === 0) {
        alert("PID not found");
      } else {
        setProductName(res.data[0].PName);
      }
    }
  };

  const checkProduct2 = (p, q) => {
    let status = null;

    let li = salesOrderData;
    for (let i = 0; i < li.length; i++) {
      if (li[i].PID == p) {
        if (li[i].qty >= q) {
          status = true;
          break;
        } else {
          alert("Amount exceeded");
          status = false;
          break;
        }
      }
    }
    if (status === null) {
      alert("Product not found in sales order");
      status = false;
    }
    return status;
  };

  const addSalesReturnOrder = () => {
    if (list.length !== 0) {
      let li = [];
      for (let i = 0; i < list.length; i++) {
        li.push({ PID: list[i].PID, qty: list[i].qty });
      }
      axios
        .post(
          "https://erp-system-nexeyo.herokuapp.com/sales/salesReturnOrder/add",
          {
            CID: CID,
            CDAID: CDAID,
            CCID: CCID,
            WID: WID,
            reason: reason,
            salesOrderID: salesOrderID,
            items: li,
          },
          {
            withCredentials: true,
            credentials: "include",
          }
        )
        .then((res) => {
          console.log(res);
          if (res.data === "sales return order added") {
            alert("Sales Return Order Added");
            localStorage.setItem("CID", "");
            localStorage.setItem("CDAID", "");
            localStorage.setItem("CCID", "");
            localStorage.setItem("WID", "");
            localStorage.setItem("reason", "");
            localStorage.setItem("salesOrderID", "");
            window.location = "/sales/salesReturnOrder/add";
          } else {
            alert("Try Again");
          }
        });
    }
  };

  useEffect(() => {
    let cid = localStorage.getItem("CID");
    let cdaid = localStorage.getItem("CDAID");
    let ccid = localStorage.getItem("CCID");
    let wid = localStorage.getItem("WID");
    let reason = localStorage.getItem("reason");
    let salesOrderID = localStorage.getItem("salesOrderID");

    if (
      cid === null ||
      cdaid === null ||
      ccid === null ||
      wid === null ||
      reason === null ||
      salesOrderID === null
    ) {
      window.location = "/sales/salesReturnOrder/add";
    }
    setCID(cid);
    setCDAID(cdaid);
    setCCID(ccid);
    setWID(wid);
    setReason(reason);
    setSalesOrderID(salesOrderID);

    axios
      .get(
        "https://erp-system-nexeyo.herokuapp.com/sales/salesOrderData/get/" +
          salesOrderID,
        {
          withCredentials: true,
          credentials: "include",
        }
      )
      .then((res) => {
        setSalesOrderData(res.data);
      });
  }, [""]);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="topPartContainer">
          <h1>Add Sales Return Order</h1>
        </div>
        <div className="bottomPartContainer">
          <div className="right">
            <form>
              <div className="formInput">
                <label>Product ID</label>
                <input
                  type="number"
                  min={0}
                  value={PID}
                  onChange={(e) => {
                    setPID(e.target.value);
                    checkProduct(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Product Name</label>
                <input type="text" value={productName} disabled />
              </div>
              <div className="formInput">
                <label>Quantity</label>
                <input
                  type="number"
                  min={0}
                  value={qty}
                  onChange={(e) => {
                    setQty(e.target.value);
                  }}
                />
              </div>

              <div className="break"></div>
              <button onClick={submitForm}>Add to Cart</button>
            </form>
          </div>
        </div>
        <div className="bottomPartContainer">
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
            {list.length !== 0 && (
              <button
                style={{
                  width: "200px",
                  padding: "10px",
                  border: "none",
                  backgroundColor: "#0085cc",
                  color: " white",
                  fontWeight: "bold",
                  cursor: " pointer",
                  marginTop: "30px",
                  marginLeft: "40%",
                }}
                onClick={addSalesReturnOrder}
              >
                Add Sales Return Order
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSalesReturnOrderPage2;
