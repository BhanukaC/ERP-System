import "./add_contactno.scss";
import { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/purchase_sidebar/purchase_sidebar";
import axios from "axios";

const AddContactNo = () => {
  const [SID, setSID] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  
  

  const submitForm = (e) => {
    e.preventDefault();
    if (
      SID === "" ||
      contactNumber === "" 
     
      
    ) {
      alert("Please fill all required fields");
    } else {
      let data = {
        SID: SID,
        contactNumber : contactNumber,
        
        
      };

      axios
        .post("http://localhost:5000/purchase/supplier/contactNumber/add", data, {
          withCredentials: true,
          credentials: "include",
        })
        .then((res) => {
          if (res.data === "supplier Contact Number Added") {
            alert("Supplier Contact Number Added");
            setSID("");
            setcontactNumber("");
            
            
          } else {
            alert("Sorry,Try again");
          }
        });
    }
  };

  const checkSupplier = async (val) => {
    if (val !== "") {
      const res = await axios.get(
        "http://localhost:5000/purchase/supplier/getSingle/" + val,
        {
          withCredentials: true,
          credentials: "include",
        }
      );
      if (res.data.length === 0) {
        alert("SID not found");
      } 
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add Supplier Contact NO</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput">
                <label>Supplier ID</label>
                <input
                  type="text"
                  value={SID}
                  onChange={(e) => {
                    setSID(e.target.value);
                    checkSupplier(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Contact Number</label>
                <input
                  type="text"
                  
                  value={contactNumber}
                  onChange={(e) => {
                    setcontactNumber(e.target.value);
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

export default AddContactNo;
