import "./add.scss";
import { useState } from "react";
import Navbar from "../../../../components/navbar/Navbar";
import Sidebar from "../../../../components/sales/sales-sidebar/sales-sidebar";
import axios from "axios";

const AddCustomerDeliveryAddress = () => {
  const [CID, setCID] = useState("");
  const [no, setNo] = useState("");
  const [street, setStreet] = useState("");
  const [town, setTown] = useState("");
  
  const submitForm = (e) => {
    e.preventDefault();
    if (
      CID === "" ||
      no === "" ||
      street === "" ||
      town === "" 
      
    ) {
      alert("Please fill all required fields");
    } else {
      let data = {
        CID: CID,
        no: no,
        street: street,
        town: town,
        
      };

      axios
        .post("http://localhost:5000/sales/Customer/deliveryAddress/add", data, {
          withCredentials: true,
          credentials: "include",
        })
        .then((res) => {
          if (res.data === "Customer Delivery Address Added") {
            alert("Customer Delivery Address Added");
            setCID("");
            setNo("");
            setStreet("");
            setTown("");
            
            
          } else {
            alert("Sorry,Try again");
          }
        });
    }
  };

  const checkSupplier = async (val) => {
    if (val !== "") {
      const res = await axios.get(
        "http://localhost:5000/sales/Customer/deliveryAddress/getSingle/" + val,
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
        <div className="topPart">
          <h1>Add Customer Delivery Address</h1>
        </div>
        <div className="bottomPart">
          <div className="right">
            <form>
              <div className="formInput">
                <label>Customer ID</label>
                <input
                  type="number"
                  value={CID}
                  onChange={(e) => {
                    setCID(e.target.value);
                    checkSupplier(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>No</label>
                <input
                  type="text"
                  
                  value={no}
                  onChange={(e) => {
                    setNo(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Street</label>
                <input
                  type="text"
                  value={street}
                  onChange={(e) => {
                    setStreet(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Town</label>
                <input
                  type="text"
                  value={town}
                  onChange={(e) => {
                    setTown(e.target.value);
                  }}
                />
              </div>

              
              <div className="break"></div>
              <button onClick={submitForm}>Add </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCustomerDeliveryAddress;
