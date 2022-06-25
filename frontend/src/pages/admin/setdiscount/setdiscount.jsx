import "./setdiscount.scss";
import { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import axios from "axios";
import Admin_sidebar from "../../../components/admin/admin_sidebar/Admin_sidebar";

const SetDiscount = () => {
  const [PID, setPID] = useState("");
  const [CID, setCID] = useState("");
  const [discount, setDiscount] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (true) {
      axios
        .post(
          "http://localhost:5000/admin/discount/customer",
          {
            PID: PID,
            CID: CID,
            discount: discount
          },
          {
            withCredentials: true,
            credentials: "include",
          }
        )
        .then((res) => {
          console.log(res);
          if (res.data === "Discount added") {
            alert("Discount set");
          } else {
            alert("Error");
          }
        });
    }
  };

  return (
    <div className="new">
      <Admin_sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="topContainer">
          <h1>Set Discount Rates</h1>
        </div>
        <div className="bottomContainer">
          <div className="right">
            <form>
            <div className="formInput">
                <label>PID</label>
                <input
                  type="number"
                  value={PID}
                  onChange={(e) => {
                    setPID(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>CID</label>
                <input
                  type="number"
                  value={CID}
                  onChange={(e) => {
                    setCID(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Discount</label>
                <input
                  type="number"
                  value={discount}
                  onChange={(e) => {
                    setDiscount(e.target.value);
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

export default SetDiscount;
