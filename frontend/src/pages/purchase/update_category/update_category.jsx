import { useState, useEffect } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/purchase_sidebar/purchase_sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";


const UpdateCategory = () => {
  const [categoryName, setcategoryName] = useState("");
  

  const { catID } = useParams();
  console.log(catID);

  useEffect(() => {
    axios
      .get("http://localhost:5000/purchase/category/getSingle/" + catID, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        setcategoryName(res.data[0].categoryName);
        });
  }, [""]);

  const submitForm = (e) => {
    e.preventDefault();
    if (
      categoryName === "" 
      
    ) {
      alert("Please fill all required fields");
    } else {
      let data = {
        categoryName: categoryName,
        
      };

      axios
        .put("http://localhost:5000/purchase/category/update/" + catID, data, {
          withCredentials: true,
          credentials: "include",
        })
        .then((res) => {
          if (res.data === "category updated") {
            alert("Category Updated");
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
          <h1>Update Category</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              
               

              <div className="formInput">
                <label>Category Name*</label>
                <input
                  type="text"
                  value={categoryName}
                  onChange={(e) => {
                    setcategoryName(e.target.value);
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

export default  UpdateCategory;