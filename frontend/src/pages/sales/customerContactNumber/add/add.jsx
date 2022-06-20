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
    if (
        CID === "" ||
        contactNumber === ""
    ) {
      alert("Please fill all required fields");
    } else {
      let data = {
        CID: CID,
        contactNumber: contactNumber,
      };

      axios
        .post("http://localhost:5000/sales/Customer/contactNumber/add", data, {
          withCredentials: true,
          credentials: "include",
        })
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
        "http://localhost:5000/sales/Customer/getSingle/" + val,
        {
          withCredentials: true,
          credentials: "include",
        }
      );
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="topPart">
          <h1>Add Customer Contact Details</h1>
        </div>
        <div className="bottomPart">
          <div className="right">
            <form>
              <div className="formInput">
                <label>CID*</label>
                <input
                  type="text"
                  value={CID}
                  onChange={(e) => {
                    setCID(e.target.value);
                    checkCustomer(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Contact Number</label>
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
