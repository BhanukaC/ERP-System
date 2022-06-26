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
  const [UIDStatus, setUIDStatus] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    if (managerName === "" || no === "" || street === "" || town === "" || uid === "") {
      alert("Please fill in all the required fields");
    }
    else {
      axios
        .post(
          "http://localhost:5000/admin/Warehouse/add",
          {
            ManagerName: managerName,
            no: no,
            street: street,
            town: town,
            UID: uid
          },
          {
            withCredentials: true,
            credentials: "include",
          }
        )
        .then((res) => {
          console.log(res);
          if (res.data === "Add a new Warehouse") {
            alert("Warehouse Registered");
          } else {
            alert("User does not exist");
          }
        });
    }
    
  };

  const checkUser = async (val) => {
    if (val !== "") {
      const res = await axios.get(
        "http://localhost:5000/admin/getUserData/"+ val,
        {
          withCredentials: true,
          credentials: "include",
        }
      );
      if (res.data.length === 0) {
        alert("UID not found");
        setUIDStatus(false);
      } else {
        setUIDStatus(true);
        setManagerName(res.data[0].userName);
        console.log(res)
      }
    }
  };

  return (
    <div className="new">
      <Admin_sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="topContainer">
          <h1>Add Warehouse</h1>
        </div>
        <div className="bottomContainer">
          <div className="right">
            <form>
            <div className="formInput">
                <label>UID</label>
                <input
                  type="text"
                  value={uid}
                  onChange={(e) => {
                    setUid(e.target.value);
                    checkUser(e.target.value);
                  }}
                />
              </div>
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

              <div className="break"></div>
              <button onClick={submitForm}>Add Warehouse</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWarehouse;
