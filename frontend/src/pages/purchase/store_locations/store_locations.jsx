import { useState } from "react";
import Navbar from "../../../../components/navbar/Navbar";
import Sidebar from "../../../components/purchase_sidebar/purchase_sidebar";
import axios from "axios";

const AddStoreLocations = () => {
  const [SID, setSID] = useState("");
  const [no, setno] = useState("");
  const [country,setcountry] = useState("");
  const [town, settown] = useState("");
  const [street, setstreet] = useState("");
  
  const submitForm = (e) => {
    e.preventDefault();
    if (
      SID === "" ||
      no === "" ||
      country === "" 
      
    ) {
      alert("Please fill all required fields");
    } else {
      let data = {
        SID: SID,
        no: no,
        country: country,
        town: town,
        street: street,
       
      };

      axios
        .post("http://localhost:5000/purchase/supplier/storeLocation/add", data, {
          withCredentials: true,
          credentials: "include",
        })
        .then((res) => {
          if (res.data === "supplier Store Location Added") {
            alert("supplier Store Location Added");
            setSID("");
            setno("");
            setcountry("");
            settown("");
            setstreet("");
            
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
      
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add Supplier Store Location</h1>
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
                <label>No</label>
                <input
                  type="text"
                  
                  value={no}
                  onChange={(e) => {
                    setno(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Street</label>
                <input
                  type="text"
                  value={street}
                  onChange={(e) => {
                    setstreet(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Town</label>
                <input
                  type="text"
                  value={town}
                  onChange={(e) => {
                    settown(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Country</label>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => {
                    setcountry(e.target.value);
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
}
export default AddStoreLocations;