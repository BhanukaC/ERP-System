import "./add_sub_category.scss";
import { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/purchase_sidebar/purchase_sidebar";
import axios from "axios";

const AddSubCategory = () => {
  const [subcatID, setsubcatID] = useState("");
  const [subcatName, setsubcatName] = useState("");
  const [catId, setcatId] = useState("");
  const [discount, setdiscount] = useState("");
  

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5000/purchase/subCategory/add",
        {
          SCID:subcatID ,
          catID:catId,
          subCategoryName : subcatName,
          discount : discount,
        },
        {
          withCredentials: true,
          credentials: "include",
        }
      )
      .then((res) => {
        alert("sub category added successfully");
        console.log(res);
      });
  };

  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add Sub Category</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>

              <div className="formInput">
                <label> Sub Category ID</label>
                <input
                  type="text"
                  value={subcatID}
                  onChange={(e) => {
                    setsubcatID(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label> Sub Category Name</label>
                <input
                  type="text"
                  value={subcatName}
                  onChange={(e) => {
                    setsubcatName(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label> Category ID</label>
                <input
                  type="text"
                  value={catId}
                  onChange={(e) => {
                    setcatId(e.target.value);
                  }}
                />
              </div>
              
              <div className="formInput">
                <label>Discount</label>
                <input
                  type="text"
                  value={discount}
                  onChange={(e) => {
                    setdiscount(e.target.value);
                  }}
                />
              </div>

              <div className="break"></div>
              <button onClick={submitForm}>Add Sub Category</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSubCategory;
