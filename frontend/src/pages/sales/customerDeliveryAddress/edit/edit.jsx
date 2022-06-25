import "./edit.scss";
import { useState, useEffect } from "react";
import Navbar from "../../../../components/navbar/Navbar";
import Sidebar from "../../../../components/sales/sales-sidebar/sales-sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditCustomerDeliveryAddress = () => {
    const [CID, setCID] = useState("");
    const [no, setNo] = useState("");
    const [street, setStreet] = useState("");
    const [town, setTown] = useState("");
    

  const { CDAID } = useParams();
  console.log(CDAID);

  useEffect(() => {
    axios
      .get("http://localhost:5000/sales/Customer/deliveryAddress/getSingle/" + CDAID, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        setCID(res.data[0].CID);
        setNo(res.data[0].no);
        setStreet(res.data[0].street);
        setTown(res.data[0].town);
      });
  }, [""]);

  const submitForm = (e) => {
    e.preventDefault();
    if (
        CID === "" ||
        no === "" ||
        street === "" ||
        town === "" 
     ) 
     {
      alert("Please fill all required fields");
    } else {
      let data = {
        CID:CID,
        no:no,
        street:street,
        town:town,
            
      };
      axios
      .put("http://localhost:5000/sales/Customer/deliveryAddress/update/" + CID, data, {
        withCredentials: true,
        credentials: "include",
      })
      
      .then((res) => {
          if (res.data === "Customer Delivery Address updated") {
            alert("Customer Delivery Address updated");
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
        <div className="topPartContainer">
          <h1>Update Customer Delivery Address</h1>
        </div>
        <div className="bottomPartContainer">
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
              <button onClick={submitForm}>Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCustomerDeliveryAddress;
