import "./add_supplier.scss";
import { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/purchase_sidebar/purchase_sidebar";
import axios from "axios";

const Addsupplier = () => {
  
  const [sname, setsname] = useState("");
  const [payterm, setpayterm] = useState("");
  const [no, setno] = useState("");
  const [street, setstreet] = useState("");
  const [town, settown] = useState("");
  const [country, setcountry] = useState("");
  const [retterm, setretterm] = useState("");
  const [delterm, setdelterm] = useState("");
  const [email, setemail] = useState("");
  
  


  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5000/purchase/supplier/add",
        {
         
          sName: sname,
          paymentTerm : payterm,
          no : no,
          street : street,
          town : town,
          country : country,
          returnTerm : retterm,
          deliveryTerm : delterm,
          email : email,


        },
        {
          withCredentials: true,
          credentials: "include",
        }
      )
      .then((res) => {
        if(res.data== "supplier Added"){
          alert("Supplier added");
        }else{
          alert("Error");
        }
        //
        //console.log(res.data);
      });
  };

  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add Supplier</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>

              
              <div className="formInput">
                <label>Supplier Name</label>
                <input
                  type="text"
                  value={sname}
                  onChange={(e) => {
                    setsname(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Payment Term</label>
                <input
                  type="text"
                  value={payterm}
                  onChange={(e) => {
                    setpayterm(e.target.value);
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
                  value={retterm}
                  onChange={(e) => {
                    setretterm(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Delivery Term</label>
                <input
                  type="text"
                  value={delterm}
                  onChange={(e) => {
                    setdelterm(e.target.value);
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
              <button onClick={submitForm}>Add Supplier</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addsupplier;
