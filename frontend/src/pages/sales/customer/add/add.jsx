import "./add.scss";
import { useState } from "react";
import Navbar from "../../../../components/navbar/Navbar";
import Sidebar from "../../../../components/sales/sales-sidebar/sales-sidebar";
import axios from "axios";

const AddCustomer = () => {
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

  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

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
    ) {
      alert("Please fill all required fields");
    } else if (!ValidateEmail(email)) {
      alert("Please enter a valid email");
    } else {
      axios
        .post(
          "https://erp-system-nexeyo.herokuapp.com/sales/Customer/add",
          {
            customerName: customerName,
            paymentTerm: paymentTerm,
            returnTerm: returnTerm,
            deliveryTerm: deliveryTerm,
            no: no,
            street: street,
            town: town,
            branchCode: branchCode,
            accountNo: accountNo,
            bankName: bankName,
            email: email,
          },

          {
            withCredentials: true,
            credentials: "include",
          }
        )
        .then((res) => {
          if (res.data == "Customer Added") {
            alert("Customer added");
            // setCustomerName("");
            // setPaymentMethod("");
            // setReturnTerm("");
            // setDeliveryTerm();
            // setNo();
            // setStreet("");
            // setTown("");
            // setBranchCode();
            // setAccountNumber();
            // setBankName("");
            // setEmail("");
          } else {
            alert("Error");
          }
          //
          //console.log(res.data);
        });
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="topPartContainer">
          <h1>Add Customer</h1>
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
              <button onClick={submitForm}>Add customer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;
