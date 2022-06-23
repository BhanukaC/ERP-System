import "./edit.scss";
import { useState, useEffect } from "react";
import Navbar from "../../../../components/navbar/Navbar";
import Sidebar from "../../../../components/sales/sales-sidebar/sales-sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditCustomerContactNumber = () => {
    const [CID, setCID] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    

  const { CCID } = useParams();
  console.log(CCID);

  useEffect(() => {
    axios
      .get("http://localhost:5000/sales/Customer/contactNumber/getSingle/" + CCID, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        setCID(res.data[0].CID);
        setContactNumber(res.data[0].contactNumber);
      });
  }, [""]);

  const submitForm = (e) => {
    e.preventDefault();
    if (
        contactNumber === "" ||
        CID === ""
     ) 
     {
      alert("Please fill all required fields");
    } else {
      let data = {
        contactNumber:contactNumber,
        CID:CID,
            
      };
      axios
      .put("http://localhost:5000/sales/Customer/contactNumber/update/" + CID, data, {
        withCredentials: true,
        credentials: "include",
      })
      
      .then((res) => {
          if (res.data === "Customer Contact Number updated") {
            alert("Customer Contact Number updated");
          } else {
            alert("Sorry,Try again");
          }
        });
    }
  };


  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="topPart">
          <h1>Update Customer Contact Number</h1>
        </div>
        <div className="bottomPart">
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
              <button onClick={submitForm}>Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCustomerContactNumber;
