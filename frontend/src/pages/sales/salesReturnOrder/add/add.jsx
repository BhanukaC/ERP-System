import "././add.scss";
import { useState } from "react";
import Navbar from "../../../../components/navbar/Navbar";
import Sidebar from "../../../../components/sales/sales-sidebar/sales-sidebar";
import axios from "axios";

const AddSalesReturnOrder = () => {
  const [salesReturnOrderID, setSalesReturnOrderID] = useState("");
  const [initiateDate, setInitiateDate] = useState("");
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState("");
  const [WID, setWID] = useState("");
  const [total, setTotal] = useState("");
  const [CID, setCID] = useState("");
  const [CDAID, setCDAID] = useState("");
  const [CCID, setCCID] = useState("");
  const [finishDate, setFinishDate] = useState("");
  const [salesOrderID, setSalesOrderID] = useState("");
 

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5000/sales/salesReturnOrder/add",
        {
        salesReturnOrderID: 15,
        initiateDate: "2022-03-14T18:30:00.000Z",
        reason: "wrong goods",
        status: "D",
        WID: 1,
        total: 54003.6,
        CID: 1,
        CDAID: 1,
        CCID: 1,
        finishDate: "2022-03-15T18:30:00.000Z",
        salesOrderID: 3
        },
        {
          withCredentials: true,
          credentials: "include",
        }
      )
      .then((res) => {
        alert(res);
        console.log(res);
      });
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
                <label>Sales Return Order ID</label>
                <input
                  type="text"
                  value={salesReturnOrderID}
                  onChange={(e) => {
                    setSalesReturnOrderID(e.target.value);
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
                <label>Status</label>
                <input
                  type="text"
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value);
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
                <label>total</label>
                <input
                  type="text"
                  value={total}
                  onChange={(e) => {
                    setTotal(e.target.value);
                  }}
                />
              </div>
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
                <label>Finish Date</label>
                <input
                  type="text"
                  value={finishDate}
                  onChange={(e) => {
                    setFinishDate(e.target.value);
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

              <div className="break"></div>
              <button onClick={submitForm}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSalesReturnOrder;

