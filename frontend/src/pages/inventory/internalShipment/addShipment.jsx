import "../form.scss";
import { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import InventorySidebar from "../../../components/inventory/inventorySidebar/inventorySidebar";
import axios from "axios";

const AddInternalShipments = () => {
  const [PID, setPID] = useState(0);
  const [qty, setQty] = useState(0);
  const [productName, setProductName] = useState("");
  const [list, setList] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    setQty(parseInt(qty));
    if (qty > 0) {
      if (list.length !== 0) {
        let status = false;
        for (let i = 0; i < list.length; i++) {
          if (list[i].PID === PID) {
            list[i].qty = parseInt(list[i].qty) + parseInt(qty);
            status = true;
          }
        }
        if (!status) {
          setList([
            ...list,
            { PID: PID, name: productName, qty: parseInt(qty) },
          ]);
        }
      } else {
        setList([{ PID: PID, name: productName, qty: parseInt(qty) }]);
      }

      setProductName("");
      setQty(0);
      setPID(0);
      alert("Product added to cart");
    } else {
      alert("Enter valid quantity");
    }
  };

  const checkProduct = async (val) => {
    if (val !== "") {
      const res = await axios.get(
        "http://localhost:5000/purchase/product/getSingle/" + val,
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

  return (
    <div className="new">
      <InventorySidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add Internal Shipment</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput">
                <label>Product ID</label>
                <input
                  type="number"
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
                  value={qty}
                  onChange={(e) => {
                    setQty(e.target.value);
                  }}
                />
              </div>

              <div className="break"></div>
              <button onClick={submitForm}>Submit</button>
            </form>
          </div>
        </div>
        <div className="bottom">
          <div className="right">
            <h1>Item List</h1>
            {list.map((item) => {
              return (
                <p key={item.PID}>
                  {item.name} : {item.qty}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddInternalShipments;
