import "../../form.scss";
import Navbar from "../../../../components/navbar/Navbar";
import InventorySidebar from "../../../../components/inventory/inventorySidebar/inventorySidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ChangeSalesOrderStatus = () => {
  //const [salesOrderID, setSalesOrderID] = useState("");
  const [WID, setWID] = useState("");
  const [status, setStatus] = useState("");

  const { salesOrderID} = useParams();
  console.log(salesOrderID);

  useEffect(() => {
    axios
      .get("http://localhost:5000/inventory/salesOrder/getSingle/" + salesOrderID, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        //setSalesOrderID(res.data[0].salesOrderID)
        setWID(res.data[0].WID);
        setStatus(res.data[0].status);
      });
  }, [""]);

  const submitForm = (e) => {
    e.preventDefault();
    if (WID === "" || status === "") {
      alert("Fill the required fields");
    } else {
      let data = {
        //salesOrderID: salesOrderID,
        WID: WID,
        status: status,
      };

      axios
        .put("http://localhost:5000/inventory/salesOrder/update/" + salesOrderID, data, {
          withCredentials: true,
          credentials: "include",
        })
        .then((res) => {
          console.log(res.data);
          if (res.data === "Sales order Issued") {
            alert("Sales order Issued");
          } else {
            alert("Try again");
          }
        });
    }
  };

  return (
    <div className="new">
      <InventorySidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Change Order Status</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
          
              <div className="formInput">
                <label>WID</label>
                <input
                  type="number"
                  value={WID}
                  onChange={(e) => {
                    setWID(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Status</label>
                <select
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                >
                  <option value="" disabled selected> Select Status </option>
                  <option value="D">Delivered</option>
                  <option value="C">Cancelled</option>
                </select>
              </div>
              <div className="break"></div>
              <button onClick={submitForm}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeSalesOrderStatus;