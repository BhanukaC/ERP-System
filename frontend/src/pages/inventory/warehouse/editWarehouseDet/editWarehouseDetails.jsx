import "../../form.scss";
import Navbar from "../../../../components/navbar/Navbar";
import InventorySidebar from "../../../../components/inventory/inventorySidebar/inventorySidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditWarehouseDetails = () => {
  const [no, setNo] = useState("");
  const [street, setStreet] = useState("");
  const [town, setTown] = useState("");

  const { WID } = useParams();
  console.log(WID);

  useEffect(() => {
    axios
      .get("http://localhost:5000/inventory/Warehouse/getSingle/" + WID, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        setNo(res.data[0].no);
        setStreet(res.data[0].street);
        setTown(res.data[0].town);
      });
  }, [""]);

  const submitForm = (e) => {
    e.preventDefault();
    if (no === "" || street === "" || town === "") {
      alert("Fill the required fields");
    } else {
      let data = {
        no: no,
        street: street,
        town: town,
      };

      axios
        .put("http://localhost:5000/inventory/Warehouse/update/" + WID, data, {
          withCredentials: true,
          credentials: "include",
        })
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
      <InventorySidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Edit Warehouse Details</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
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

export default EditWarehouseDetails;
