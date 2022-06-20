import "../form.scss";
import { useState, useEffect } from "react";
import Navbar from "../../../components/navbar/Navbar";
import InventorySidebar from "../../../components/inventory/inventorySidebar/inventorySidebar";
import axios from "axios";

const ChangeQualityLevel = () => {
  const [PID, setPID] = useState("");
  const [WID, setWID] = useState("");
  const [qty, setQty] = useState(0);
  const [qualityLevel, setQualityLevel] = useState("");
  const [warehouse, setWarehouse] = useState({});

  useEffect(() => {
    const getWarehouse = async () => {
      const res = await axios.get("http://localhost:5000/inventory/Warehouse/getAll", {
        withCredentials: true,
        credentials: "include",
      });
      setWarehouse(res.data);
    };
    getWarehouse();
  }, [""]);

  const submitForm = (e) => {
    e.preventDefault();
    if(
      PID === " " ||
      WID === " " ||
      qty === " " ||
      qualityLevel === " "
      )
      {
        alert("Fill the required fields");
      }
      if(
        qty === 0
      )
      {
        alert("Quantity cannot be 0");
      }
      else{
    axios
      .post(
        "http://localhost:5000/inventory/changeQualityLevel/add",
        {
          PID: PID,
          WID: WID,
          qty: parseFloat(qty),
          qualityLevel: qualityLevel,
        },
        {
          withCredentials: true,
          credentials: "include",
        }
      )
      .then((res) => {
        if (res.data === "Changed Quality level of stocks") {
          alert("Quality Level Changed");
          setPID("");
          setWID("");
          setQty("");
          setQualityLevel(0);
          //console.log(res);
        } else {
          alert("Try again");
        }
      });
    }
  };

  // const checkProduct = async (val) => {
  //   if (val !== "") {
  //     const res = await axios.get(
  //       "http://localhost:5000/hr/employee/getSingle/" + val,
  //       {
  //         withCredentials: true,
  //         credentials: "include",
  //       }
  //     );
  //     if (res.data.length === 0) {
  //       alert("PID not found");
  //     } else {
  //       setPID(res.data[0].PID);
  //     }
  //   }
  // };

  return (
    <div className="new">
      <InventorySidebar />
      <div className="newContainer">
        <Navbar />
        <div className="topPart">
          <h1>Change Quality Level</h1>
        </div>
        <div className="bottomPart">
          <div className="right">
            <form>
          
              <div className="formInput">
                <label>Warehouse ID</label>

                <select
                  value={WID}
                  onChange={(e) => {
                    setWID(e.target.value);
                  }}
                >
                  <option value="" disabled selected> Select Warehouse ID</option>
                  {JSON.stringify(warehouse) !== "{}"
                    ? warehouse.map((w) => (
                        <option value={w.WID} key={w.WID}>
                          {w.town}
                        </option>
                      ))
                    : ""}
                </select>
              </div>

              <div className="formInput">
                <label>Product ID</label>
                <input
                  type="number"
                  value={PID}
                  onChange={(e) => {
                    setPID(e.target.value);
                    //checkProduct(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Quantity to be changed</label>
                <input
                  type="number"
                  value={qty}
                  onChange={(e) => {
                    setQty(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>New Quality Level</label>
                <select
                  value={qualityLevel}
                  onChange={(e) => {
                    setQualityLevel(e.target.value);
                  }}
                >
                  <option value="" disabled selected> select Quality Level </option>
                  <option value="A">Level A</option>
                  <option value="B">Level B</option>
                  <option value="C">Level C</option>
                </select>
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

export default ChangeQualityLevel;