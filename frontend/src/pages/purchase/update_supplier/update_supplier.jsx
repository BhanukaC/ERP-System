import "./update_supplier.scss";
import { useState, useEffect } from "react";


import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/purchase_sidebar/purchase_sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";

const Updatesupplier = () => {
  const [sName, setsName] = useState("");
  const [payemntTerm, setpaymentTerm] = useState("");
  const [no, setno] = useState("");
  const [street, setstreet] = useState("");
  const [town, settown] = useState("");
  const [country, setcountry] = useState("");
  const [returnTerm, setreturnTerm] = useState("");
  const [deliveryTerm, setdeliveryTerm] = useState("");
  const [email, setemail] = useState("");

  const { SID } = useParams();
  console.log(SID);

  useEffect(() => {
    axios
      .get("http://localhost:5000/purchase/supplier/getSingle/" + SID, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        setsName(res.data[0].sName);
        setpaymentTerm(res.data[0].payemntTerm);
        setno(res.data[0].no);
        setstreet(res.data[0].street);
        settown(res.data[0].town);
        setcountry(res.data[0].country);
        setreturnTerm(res.data[0].returnTerm);
        setdeliveryTerm(res.data[0].deliveryTerm);
        setemail(res.data[0].email);


        });
        

  }, [""]);

  const submitForm = (e) => {
    e.preventDefault();
    if (
        sName === ""
      
    ) {
      alert("Please fill all required fields");
    } else {
      let data = {
        sName: sName,
        payemntTerm: payemntTerm,
        no : no,
        street:street,
        town: town,
        country: country,
        returnTerm: returnTerm,
        deliveryTerm: deliveryTerm,
        email: email,
        
        
      };

      axios
        .put("http://localhost:5000/purchase/supplier/update/" + SID, data, {
          withCredentials: true,
          credentials: "include",
        })
        .then((res) => {
          if (res.data === "supplier updated") {
            alert(" Supplier Updated");
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
        <div className="topContainer">
          <h1>Update Supplier</h1>
        </div>
        <div className="bottomContainer">
          <div className="right">
            <form>
              
               

              <div className="formInput">
                <label>Supplier Name</label>
                <input
                  type="text"
                  value={sName}
                  onChange={(e) => {
                    setsName(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Payment Term</label>
                <input
                  type="text"
                  value={payemntTerm}
                  onChange={(e) => {
                    setpaymentTerm(e.target.value);
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

              
              <div className="formInput">
                <label>Return Term</label>
                <input
                  type="text"
                  value={returnTerm}
                  onChange={(e) => {
                    setreturnTerm(e.target.value);
                  }}
                />
              </div>

              
              <div className="formInput">
                <label>Delivery Term</label>
                <input
                  type="text"
                  value={deliveryTerm}
                  onChange={(e) => {
                    setdeliveryTerm(e.target.value);
                  }}
                />
              </div>

              
              <div className="formInput">
                <label>Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
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

export default  Updatesupplier ;