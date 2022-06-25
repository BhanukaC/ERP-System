import "./add.scss";
import { useState, useEffect } from "react";
import Navbar from "../../../../components/navbar/Navbar";
import Sidebar from "../../../../components/hr/sidebar/Sidebar";
import axios from "axios";

const AddAttendance = () => {
  const [EID, setEID] = useState("");
  const [NIC, setNIC] = useState("");
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);
  const [color, setColor] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (
      EID === "" ||
      NIC === "" ||
      balance < amount ||
      balance === 0 ||
      amount === 0
    ) {
      alert("Please fill all required fields");
    } else {
      let data = {
        EID: EID,
        amount: amount,
      };

      axios
        .post("http://localhost:5000/hr/advance/add", data, {
          withCredentials: true,
          credentials: "include",
        })
        .then((res) => {
          console.log(res);
          if (res.data === "Give an advance") {
            alert("Give an advance");
            setEID("");
            setNIC("");
            setBalance(0);
            setAmount(0);
            setColor("");
          } else {
            alert("Sorry,Try again");
          }
        });
    }
  };

  const checkEmployee = async (val) => {
    if (val !== "") {
      const res = await axios.get(
        "http://localhost:5000/hr/employee/getSingle/" + val,
        {
          withCredentials: true,
          credentials: "include",
        }
      );
      if (res.data.length === 0) {
        alert("EID not found");
      } else {
        setNIC(res.data[0].NIC);
      }
    }
  };

  const checkBalance = async (EID) => {
    const res = await axios.get(
      "http://localhost:5000/hr/advance/balance/" + EID,
      {
        withCredentials: true,
        credentials: "include",
      }
    );
    if (res !== undefined) {
      setBalance(res.data.amount);
      if (res.data.amount <= 1000) {
        setColor("red");
      } else {
        setColor("yellow");
      }
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="topContainer">
          <h1>Give Advance</h1>
        </div>
        <div className="bottomContainer">
          <div className="right">
            <form>
              <div className="formInput">
                <label>EID*</label>
                <input
                  type="text"
                  value={EID}
                  onChange={(e) => {
                    setEID(e.target.value);
                    checkEmployee(e.target.value);
                    checkBalance(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Employee NIC*</label>
                <input
                  type="text"
                  disabled
                  value={NIC}
                  onChange={(e) => {
                    setNIC(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Employee Remaning Balance*</label>
                <input
                  type="text"
                  disabled
                  value={balance}
                  onChange={(e) => {
                    setBalance(e.target.value);
                  }}
                  style={{ backgroundColor: color }}
                />
              </div>

              <div className="formInput">
                <label>Amount*</label>
                <input
                  type="number"
                  step="any"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
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

export default AddAttendance;
