import { useState, useEffect } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/purchase_sidebar/purchase_sidebar";
import axios from "axios";

const AddPurchaseOrder2 = () => {
  const [list, setList] = useState([]);

  const [SID, setSID] = useState("");
  const [SSLID, setSSLID] = useState("");
  const [SCID, setSCID] = useState("");
  const [WID, setWID] = useState("");

  const [warehouse, setWarehouse] = useState([]);
  const [location, setLocation] = useState([]);
  const [contactNumber, setContactNumber] = useState([]);

  useEffect(() => {
    const getWarehouse = async () => {
      const res = await axios.get("http://localhost:5000/purchase/Warehouse/getAll", {
        withCredentials: true,
        credentials: "include",
      });
      setWarehouse(res.data);
      // console.log(res.data);
    };
    getWarehouse();

  
  }, [""]);

  const getLocation = async (val) => {
    const res = await axios.get("http://localhost:5000/purchase/supplier/storeLocation/getAll/" + val, {
      withCredentials: true,
      credentials: "include",
    });
    setLocation(res.data);
  };
  
 

  const getContactNumber = async (val) => {
    const res = await axios.get("http://localhost:5000/purchase/supplier/contactNumber/getAll/" + val, {
      withCredentials: true,
      credentials: "include",
    });
    
    setContactNumber(res.data);

  };
  



  const submitForm = (e) => {
    e.preventDefault();
    let items = [];
    for (let i = 0; i < list.length; i++) {
      items.push({ PID: list[i].PID, qty: list[i].qty,discount: list[i].discount });
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
        console.log(res);
        console.log( {
          SID : SID,
          SSLID: SSLID,
          SCID: SCID,
          WID:WID,
          items: items,
      });
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

  const checkSupplier = async (val) => {
    if (val !== "") {
      const res = await axios.get(
        "http://localhost:5000/purchase/supplier/getSingle/" + val,
        {
          withCredentials: true,
          credentials: "include",
        }
      );
      if (res.data.length === 0) {
        alert("SID not found");
        setSID("")
        setSSLID("");
        setSCID("");
      } else {
        getContactNumber(val);
        getLocation(val);
      }
    }else{
      setSSLID("");
      setSCID("");
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="topPart">
          <h1>Add Purchase Order</h1>
        </div>
        <div className="bottomPart">
          <div className="right">
            <h1>Cart</h1>
            <table style={{ width: "80%", textAlign: "center" }}>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Discount</th>

              </tr>
              {list.map((item) => {
                return (
                  <tr key={item.PID}>
                    <td>{item.PID}</td>
                    <td> {item.name}</td>
                    <td>{item.qty}</td>
                    <td>{item.discount}</td>

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
                    checkSupplier(e.target.value)
                    }}
                />
              </div>

              

              
              <div className="formInput">
                <label>Supplier Store Location</label>

                <select
                  value={SSLID}
                  onChange={(e) => {
                    setSSLID(e.target.value);
                  }}
                >
                  <option value="" disabled selected>
                    Select Supplier Store Location
                  </option>
                  {Array.isArray(location)
                    ? location.map((l) => (
                        <option value={l.SSLID} key={l.SSLID}>
                          {l.no},{l.street},{l.town}
                        </option>
                      ))
                    : ""}
                </select>
              </div>

              

              <div className="formInput">
                <label>Supplier Contact Number</label>

                <select
                  value={SCID}
                  onChange={(e) => {
                    setSCID(e.target.value);
                  }}
                >
                  <option value="" disabled selected>
                  Select Supplier Contact Number
                  </option>
                  {Array.isArray(contactNumber)
                    ? contactNumber.map((c) => (
                        <option value={c.SCID} key={c.SCID}>
                          {c.contactNumber}
                        </option>
                      ))
                    : ""}
                </select>
              </div>

              
              <div className="formInput">
                <label>Warehouse </label>

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

              <div className="break"></div>
              <button onClick={submitForm}>Add Order Details</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPurchaseOrder2;