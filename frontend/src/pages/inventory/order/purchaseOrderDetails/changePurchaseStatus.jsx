import "../../form.scss";
import Navbar from "../../../../components/navbar/Navbar";
import InventorySidebar from "../../../../components/inventory/inventorySidebar/inventorySidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ChangePurchaseOrderStatus = () => {
   
  const [WID, setWID] = useState("");
  const [status, setStatus] = useState("");
  const [reason, setReason] = useState("");

  const {purchaseOrderID} = useParams();
  console.log(purchaseOrderID);

  useEffect(() => {
    axios
      .get("http://localhost:5000/inventory/purchaseOrder/getSingle/" + purchaseOrderID, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        setWID(res.data[0].WID);
        setStatus(res.data[0].status);
      });
  }, [""]);

  const submitForm = (e) => {
    e.preventDefault();
    if (WID === "" || status === "" || reason ==="") {
      alert("Fill the required fields");
    } else {
      let data;
      if(status==="D"){
        data= {
            WID: WID,
            status: status
          };
      }
      if(status==="C"){
 data = {
        WID: WID,
        status: status,
        reason:reason,
      };
      }
     

      axios
        .put("http://localhost:5000/inventory/purchaseOrder/update/" + purchaseOrderID, data, {
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
                <label>Purchase order Id</label>
                <input
                  type="text"
                  disabled
                  value={purchaseOrderID}
                 
                />
              </div>
          
              <div className="formInput">
                <label>WID</label>
                <input
                  type="number"
                  value={WID}
                  disabled
                  
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

              {status === "C" ? (
                <div className="formInput">
                  <label>Reason for Returning</label>
                  <input
                    type="text"
                    value={reason}
                    onChange={(e) => {
                      setReason(e.target.value);
                    }}
                  />
                </div>
              ) : (
                ""
              )}

              <div className="break"></div>
              <button onClick={submitForm}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChangePurchaseOrderStatus;