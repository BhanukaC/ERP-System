import "./add_category.scss";
import { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/purchase_sidebar/purchase_sidebar";
import axios from "axios";

const AddCategory = () => {
  const [catID, setcatID] = useState("");
  const [catName, setcatName] = useState("");
  

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5000/hr/employee/add",
        {
         
        },
        {
          withCredentials: true,
          credentials: "include",
        }
      )
      .then((res) => {
        alert(res);
        console.log(res);
      });
  };

  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add Category</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>

              <div className="formInput">
                <label>Category ID</label>
                <input
                  type="text"
                  value={catID}
                  onChange={(e) => {
                    setcatID(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Category Name</label>
                <input
                  type="text"
                  value={catName}
                  onChange={(e) => {
                    setcatName(e.target.value);
                  }}
                />
              </div>

              <div className="break"></div>
              <button onClick={submitForm}>Add Product</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
