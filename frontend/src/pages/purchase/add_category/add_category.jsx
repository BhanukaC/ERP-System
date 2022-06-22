import "./add_category.scss";
import { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/purchase_sidebar/purchase_sidebar";
import axios from "axios";

const AddCategory = () => {
  
  const [catName, setcatName] = useState("");
  

  const submitForm = (e) => {
    e.preventDefault();
    if(
      catName === ""
    )
    {
      alert("Please fill the required fields");
    }
    else{
      axios
      .post(
        "http://localhost:5000/purchase/category/add",
        {
          
          categoryName:catName,
          
        },
        {
          withCredentials: true,
          credentials: "include",
        }
      )
      .then((res) => {
        if(res.data=="category Added"){
          alert("Category Added");
          setcatName("")
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
        <div className="top1">
          <h1>Add Category</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>

              
              <div className="formInput">
                <label>Category Name*</label>
                <input
                  type="text"
                  value={catName}
                  onChange={(e) => {
                    setcatName(e.target.value);
                  }}
                />
              </div>

              <div className="break"></div>
              <button onClick={submitForm}>Add Category</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
