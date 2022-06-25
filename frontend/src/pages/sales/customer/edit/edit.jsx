import "./edit.scss";
import { useState, useEffect } from "react";
import Navbar from "../../../../components/navbar/Navbar";
import Sidebar from "../../../../components/sales/sales-sidebar/sales-sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditCustomer = () => {
    const [customerName, setCustomerName] = useState("");
    const [paymentTerm, setPaymentMethod] = useState("");
    const [returnTerm, setReturnTerm] = useState("");
    const [deliveryTerm, setDeliveryTerm] = useState("");
    const [no, setNo] = useState("");
    const [street, setStreet] = useState("");
    const [town, setTown] = useState("");
    const [branchCode, setBranchCode] = useState("");
    const [accountNo, setAccountNumber] = useState("");
    const [bankName, setBankName] = useState("");
    const [email, setEmail] = useState("");

  const { CID } = useParams();
  console.log(CID);

  useEffect(() => {
    axios
      .get("http://localhost:5000/sales/Customer/getSingle/" + CID, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
    
        setCustomerName(res.data[0].customerName);
        setPaymentMethod(res.data[0].paymentTerm);
        setReturnTerm(res.data[0].returnTerm);
        setDeliveryTerm(res.data[0].deliveryTerm);
        setNo(res.data[0].no);
        setStreet(res.data[0].street);
        setTown(res.data[0].town);
        setBranchCode(res.data[0].branchCode);
        setAccountNumber(res.data[0].accountNo);
        setBankName(res.data[0].bankName);
        setEmail(res.data[0].email);
      });
  }, [""]);

  const submitForm = (e) => {
    e.preventDefault();
    if (
      customerName === "" ||
      paymentTerm === "" ||
      returnTerm === "" ||
      deliveryTerm === "" ||
      no === "" ||
      street === "" ||
      town === "" ||
      branchCode === "" ||
      accountNo === "" ||
      bankName === "" ||
      email === "" 
     ) 
     {
      alert("Please fill all required fields");
    } else {
      let data = {
            customerName:customerName,
            paymentTerm:paymentTerm,
            returnTerm:returnTerm,
            deliveryTerm:deliveryTerm,
            no:no,
            street:street,
            town:town,
            branchCode:branchCode,
            accountNo:accountNo,
            bankName:bankName,
            email:email,
      };
      axios
      .put("http://localhost:5000/sales/Customer/update/" + CID, data, {
        withCredentials: true,
        credentials: "include",
      })
      
      .then((res) => {
          if (res.data === "customer updated") {
            alert("customer updated");
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
          <h1>Update Customer</h1>
        </div>
        <div className="bottomPartContainer">
          <div className="right">
            <form>
              <div className="formInput">
                <label>Customer Name</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Payment Term</label>
                <input
                  type="text"
                  value={paymentTerm}
                  onChange={(e) => {
                    setPaymentMethod(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Return Term</label>
                <input
                  type="text"
                  value={returnTerm}
                  onChange={(e) => {
                    setReturnTerm(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Delivery Term</label>
                <input
                  type="text"
                  value={deliveryTerm}
                  onChange={(e) => {
                    setDeliveryTerm(e.target.value);
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
              <div className="formInput">
                <label>Branch Code</label>
                <input
                  type="text"
                  value={branchCode}
                  onChange={(e) => {
                    setBranchCode(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Account No</label>
                <input
                  type="text"
                  value={accountNo}
                  onChange={(e) => {
                    setAccountNumber(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Bank Name</label>
                <input
                  type="text"
                  value={bankName}
                  onChange={(e) => {
                    setBankName(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
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

export default EditCustomer;
