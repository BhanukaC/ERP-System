//import "../../form.scss";
import Navbar from "../../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Admin_sidebar from "../../../components/admin/admin_sidebar/Admin_sidebar";

const EditWarehouseDetailsAdmin = () => {
  const [ManagerName, setManagerName] = useState("");
  const [no, setNo] = useState("");
  const [street, setStreet] = useState("");
  const [town, setTown] = useState("");
  const [UID, setUID] = useState("");

  const { WID } = useParams();
  console.log(WID);

  useEffect(() => {
    axios
      .get(
        "https://erp-system-nexeyo.herokuapp.com/admin/Warehouse/getSingle/" +
          WID,
        {
          withCredentials: true,
          credentials: "include",
        }
      )
      .then((res) => {
        setManagerName(res.data[0].ManagerName);
        setNo(res.data[0].no);
        setStreet(res.data[0].street);
        setTown(res.data[0].town);
        setUID(res.data[0].UID);
      });
  }, [""]);

  const submitForm = (e) => {
    e.preventDefault();
    if (ManagerName === "" || no === "" || street === "" || town === "") {
      alert("Please fill in all the required fields");
    } else {
      let data = {
        ManagerName: ManagerName,
        no: no,
        street: street,
        town: town,
        UID: UID,
      };

      axios
        .put(
          "https://erp-system-nexeyo.herokuapp.com/admin/Warehouse/update/" +
            WID,
          data,
          {
            withCredentials: true,
            credentials: "include",
          }
        )
        .then((res) => {
          console.log(res.data);
          if (res.data === "update Warehouse Details") {
            alert("Warehouse details Updated");
          } else {
            alert("Try again");
          }
        });
    }
  };

  return (
    <div className="new">
      <Admin_sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="topPartContainer">
          <h1>Edit Warehouse Details</h1>
        </div>
        <div className="bottomPartContainer">
          <div className="right">
            <form>
              <div className="formInput">
                <label>Name of the Manager</label>
                <input
                  disabled
                  type="text"
                  value={ManagerName}
                  onChange={(e) => {
                    setManagerName(e.target.value);
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
              <button onClick={submitForm}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditWarehouseDetailsAdmin;
