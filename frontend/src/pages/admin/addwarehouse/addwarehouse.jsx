import "./addwarehouse.scss";
import { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import axios from "axios";
import Admin_sidebar from "../../../components/admin/admin_sidebar/Admin_sidebar";

const AddWarehouse = () => {
  const [managerName, setManagerName] = useState("");
  const [no, setNo] = useState("");
  const [street, setStreet] = useState("");
  const [town, setTown] = useState("");
  const [uid, setUid] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (true) {
      axios
        .post(
          "http://localhost:5000/admin/Warehouse/add",
          {
            managername: managerName,
            no: no,
            steet: street,
            town: town,
            uid: uid
          },
          {
            withCredentials: true,
            credentials: "include",
          }
        )
        .then((res) => {
          if (res.data === "User Registered") {
            alert("Warehouse Registered");
          } else {
            alert("Error");
          }
        });
    }
  };

  return (
    <div className="new">
      <Admin_sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add User</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput">
                <label>Manager Name</label>
                <input
                  type="text"
                  value={managerName}
                  onChange={(e) => {
                    setManagerName(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>No</label>
                <input
                  type="number"
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
                <label>UID</label>
                <input
                  type="text"
                  value={uid}
                  onChange={(e) => {
                    setUid(e.target.value);
                  }}
                />
              </div>
              

              <div className="break"></div>
              <button onClick={submitForm}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWarehouse;
