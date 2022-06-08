import "./add_sub_category.scss";
import { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/purchase_sidebar/purchase_sidebar";
import axios from "axios";

const AddSubCategory = () => {
  
  const [subcatName, setsubcatName] = useState("");
  const [catId, setcatId] = useState("");
  const [discount, setdiscount] = useState("");
  

  const submitForm = (e) => {
    e.preventDefault();
    if(
      subcatName === ""
    )
    {
      alert("Please fill the required fields");
    }
    else{
      axios
      .post(
        "http://localhost:5000/purchase/subCategory/add",
        {
          
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
        if(res.data=="subCategory Added"){
          alert(" Sub Category Added");
        }else{
          alert("Error");
        }
        //
        //console.log(res.data);
      });
    }
    
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
                  type="number"
                  step="any"
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
