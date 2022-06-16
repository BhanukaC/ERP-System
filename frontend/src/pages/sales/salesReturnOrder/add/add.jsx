import "././add.scss";
import { useState } from "react";
import Navbar from "../../../../components/navbar/Navbar";
import Sidebar from "../../../../components/sales/sales-sidebar/sales-sidebar";
import axios from "axios";

const AddSalesReturnOrder = () => {
  const [salesReturnOrderID, setSalesReturnOrderID] = useState("");
  const [reason, setReason] = useState("");
  const [WID, setWID] = useState("");
  const [items, setItems] = useState("");
  const [CID, setCID] = useState("");
  const [initiateDate, setInitiateDate] = useState("");
  const [finishDate, setFinishDate] = useState("");
  const [CDAID, setCDAID] = useState("");
  const [CCID, setCCID] = useState("");
  const [salesOrderID, setSalesOrderID] = useState("");
 

  const submitForm = (e) => {
    e.preventDefault();
    if (
      salesReturnOrderID === "" ||
      reason === "" ||
      WID === "" ||
      items === ""||
      CID === "" ||
      CDAID === "" ||
      CCID === "" ||
      initiateDate === "" ||
      finishDate === "" ||
      salesOrderID === "" 
    ) {
      alert("Please fill all required fields");
    } else {
      let data = {
        salesReturnOrderID: salesReturnOrderID,
        reason: reason,
        WID: WID,
        items:items,
        CID: CID,
        CDAID: CDAID,
        CCID: CCID,
        initiateDate:initiateDate,
        finishDate:finishDate,
        salesOrderID:salesOrderID ,
      };
    axios
      .post("http://localhost:5000/sales/salesReturnOrder/add", data ,
        {
          withCredentials: true,
          credentials: "include",
        })
        .then((res) => {
          if(res.data=="Sales Return Order Added"){
            alert("Sales Return Order added");

            setSalesReturnOrderID();
            setReason("");
            setWID();
            setItems("");
            setCID();
            setCDAID();
            setCCID();
            setInitiateDate();
            setFinishDate();
            setSalesOrderID();
      
        }
        else{
          alert("Error");
        }
        //
        //console.log(res.data);
      });
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add Sales Return Order</h1>
        </div>
        <div className="bottom">
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
                <label>Items</label>
                <input
                  type="text"
                  value={items}
                  onChange={(e) => {
                    setItems(e.target.value);
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
                <label>Initiate Date</label>
                <input
                  type="text"
                  value={initiateDate}
                  onChange={(e) => {
                    setInitiateDate(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Finish Date</label>
                <input
                  type="text"
                  value={finishDate}
                  onChange={(e) => {
                    setFinishDate(e.target.value);
                  }}
                />
              </div>

              <div className="break"></div>
              <button onClick={submitForm}>Return Order Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSalesReturnOrder;

