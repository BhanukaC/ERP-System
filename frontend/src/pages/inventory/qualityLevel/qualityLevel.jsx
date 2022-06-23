import "../form.scss";
import { useState, useEffect } from "react";
import Navbar from "../../../components/navbar/Navbar";
import InventorySidebar from "../../../components/inventory/inventorySidebar/inventorySidebar";
import axios from "axios";

const ChangeQualityLevel = () => {
  const [PID, setPID] = useState("");
  const [WID, setWID] = useState("");
  const [qty, setQty] = useState(0);
  const [qualityLevel, setQualityLevel] = useState("B");
  const [warehouse, setWarehouse] = useState({});
  const [status, setStatus] = useState(false);

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
      qty <= 0 ||
      qualityLevel === " "

      )
      {
        alert("Fill the required fields");
      }
      else{
        if(status===false){
          alert("Try Again");
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
    }
  };

  const checkQty=async (val)=>{
    const res =  await axios.post(
      "http://localhost:5000/inventory/productstockLevelForWarehouse/get/" + WID,{
        PID:PID,
        qty:val
      },{
        withCredentials: true,
        credentials: "include",
      }
      
    );
  //  console.log(res);
    if (res.data === "we don't have enough stocks") {
      alert("we don't have enough stocks");
      setStatus(false);
      
    }
    if(res.data ==="We have Stocks") {
      setStatus(true);
      
    }
  }


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
                  <option value="" disabled selected> Select Warehouse</option>
                  {JSON.stringify(warehouse) !== "{}"
                    ? warehouse.map((w) => (
                        <option value={w.WID} key={w.WID}>
                          {w.WID}-{w.town}
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
                    checkQty(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>New Quality Level</label>
                <input
                  type="text"
                  disabled
                  value={qualityLevel}

                />
                {/* <select
                  value={qualityLevel}
                  onChange={(e) => {
                    setQualityLevel(e.target.value);
                  }}
                >
                  <option value="" disabled selected> select Quality Level </option>
                  <option value="B">Level B</option>
                </select> */}
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