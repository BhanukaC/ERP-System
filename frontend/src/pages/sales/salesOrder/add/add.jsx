import "././add.scss";
import { useState } from "react";
import Navbar from "../../../../components/navbar/Navbar";
import Sidebar from "../../../../components/sales/sales-sidebar/sales-sidebar";
import axios from "axios";

const AddSalesReturnOrder = () => {
  const [WID, setWID] = useState("");
  const [CID, setCID] = useState("");
  const [CDAID, setCDAID] = useState("");
  const [CCID, setCCID] = useState("");
  const [distance, setDistance] = useState("");
  const [items, setItems] = useState("")
  
  const submitForm = (e) => {
    e.preventDefault();
    if (
      WID === "" ||
      CID === "" ||
      CDAID === "" ||
      CCID === "" ||
      distance === ""||
      items === ""
    ) {
      alert("Please fill all required fields");
    } else {
      let data = {
        WID: WID,
        CID: CID,
        CDAID: CDAID,
        CCID: CCID,
        distance:distance,
        items:items,
        
      };
    axios
      .post("http://localhost:5000/sales/salesOrder/add", data ,
        {
          withCredentials: true,
          credentials: "include",
        })
        .then((res) => {
          if(res.data=="sales order added"){
            alert("sales order added");
            setWID();
            setCID();
            setCDAID();
            setCCID();
            setDistance("");
            setItems("");
      
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
          <h1>Add Sales Order</h1>
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

              <div className="break"></div>
              <button onClick={submitForm}>Sales Order Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSalesReturnOrder;

