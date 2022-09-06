import "./add.scss";
import { useState } from "react";
import Navbar from "../../../../components/navbar/Navbar";
import Sidebar from "../../../../components/sales/sales-sidebar/sales-sidebar";
import axios from "axios";

const AddCustomerContactNumber = () => {
  const [CID, setCID] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (CID === "" || contactNumber === "") {
      alert("Please fill all required fields");
    } else if (contactNumber.length != 10) {
      alert("Please Enter a Valid Contact Number");
    } else {
      let data = {
        CID: CID,
        contactNumber: contactNumber,
      };

      axios
        .post(
          "https://erp-system-nexeyo.herokuapp.com/sales/Customer/contactNumber/add",
          data,
          {
            withCredentials: true,
            credentials: "include",
          }
        )
        .then((res) => {
          if (res.data === "Customer Contact Number Added") {
            alert("Customer Contact Number Added");
            setCID("");
            setContactNumber("");
          } else {
            alert("Sorry,Try again");
          }
        });
    }
  };

  const checkCustomer = async (val) => {
    if (val !== "") {
      const res = await axios.get(
        "https://erp-system-nexeyo.herokuapp.com/sales/Customer/getSingle/" +
          val,
        {
          withCredentials: true,
          credentials: "include",
        }
      );
      if (res.data.length === 0) {
        alert("CID not found");
      }
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="topPartContainer">
          <h1>Add Customer Contact Details</h1>
        </div>
        <div className="bottomPartContainer">
          <div className="right">
            <form>
              <div className="formInput">
                <label>Customer ID</label>
                <input
                  type="number"
                  min={0}
                  value={CID}
                  onChange={(e) => {
                    setCID(e.target.value);
                    checkCustomer(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Customer Contact Number</label>
                <input
                  type="text"
                  value={contactNumber}
                  onChange={(e) => {
                    setContactNumber(e.target.value);
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

export default AddCustomerContactNumber;
