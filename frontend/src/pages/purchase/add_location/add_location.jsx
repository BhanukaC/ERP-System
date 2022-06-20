import "./add_location.scss";
import { useState,useEffect } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/purchase_sidebar/purchase_sidebar";
import axios from "axios";

const AddStoreLocation = () => {
  const [SID, setSID] = useState("");
  const [no, setno] = useState("");
  const [street, setstreet] = useState("");
  const [town, settown] = useState("");
  const [country, setcountry] = useState("");
  const [SIDs, setSIDs] = useState({});

  useEffect(() => {
    const getSIDs = async () => {
      const res = await axios.get("http://localhost:5000/purchase/supplier/getAll", {
        withCredentials: true,
        credentials: "include",
      });
      setSIDs(res.data);
    };
    getSIDs();
  }, [""]);

  
  

  const submitForm = (e) => {
    e.preventDefault();
    if (
      SID === "" ||
      no === "" ||
      street===""||
      town ===""||
      country === "" 
      
    ) {
      alert("Please fill all required fields");
    } else {
      let data = {
        SID: SID,
        no: no,
        street: street,
        town: town,
        country: country,
        
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
            setstreet("");
            settown("");
            setcountry("");
            
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
          <h1>Add Supplier Store Location</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>

            <div className="formInput">
                <label>Supplier ID*</label>

                <select
                  value={SID}
                  onChange={(e) => {
                    setSID(e.target.value);
                  }}
                >
                  <option value="" disabled selected>
                    select Supplier ID
                  </option>
                  {JSON.stringify(SIDs) !== "{}"
                    ? SIDs.map((s) => (
                        <option value={s.SID} key={s.SID}>
                          {s.SID}
                        </option>
                      ))
                    : ""}
                </select>
              </div>
              <div className="formInput">
                <label>No*</label>
                <input
                  type="text"
                  
                  value={no}
                  onChange={(e) => {
                    setno(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Street*</label>
                <input
                  type="text"
                  value={street}
                  onChange={(e) => {
                    setstreet(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Town*</label>
                <input
                  type="text"
                  value={town}
                  onChange={(e) => {
                    settown(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Country*</label>
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

export default AddStoreLocation;
