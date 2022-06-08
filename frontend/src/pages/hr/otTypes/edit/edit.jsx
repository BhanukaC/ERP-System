import "./edit.scss";
import { useState, useEffect } from "react";
import Navbar from "../../../../components/navbar/Navbar";
import Sidebar from "../../../../components/hr/sidebar/Sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from "moment";

const EditOtType = () => {
  const [OtType, setOtType] = useState("");
  const [payPerHour, setPayPerHour] = useState(0);

  const { otID } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:5000/hr/otType/getSingle/" + otID, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        console.log(res.data);
        setOtType(res.data[0].type);
        setPayPerHour(res.data[0].payPerHour);
      });
  }, [""]);

  const submitForm = (e) => {
    e.preventDefault();
    if (OtType === "" || payPerHour === 0) {
      alert("Please fill all required fields");
    } else {
      let data = {
        type: OtType,
        payPerHour: payPerHour,
      };

      axios
        .put("http://localhost:5000/hr/otType/update/" + otID, data, {
          withCredentials: true,
          credentials: "include",
        })
        .then((res) => {
          if (res.data === "OT Type Updated") {
            alert("OT Type Updated");
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
        <div className="top">
          <h1>Update OT Type</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput">
                <label>OT Type*</label>
                <input
                  type="text"
                  value={OtType}
                  onChange={(e) => {
                    setOtType(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Pay Per Hour*</label>
                <input
                  type="number"
                  step="any"
                  value={payPerHour}
                  onChange={(e) => {
                    setPayPerHour(e.target.value);
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

export default EditOtType;
