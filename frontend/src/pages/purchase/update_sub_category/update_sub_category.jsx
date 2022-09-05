import "./update_sub_category.scss";
import { useState, useEffect } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/purchase_sidebar/purchase_sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdatesubCategory = () => {
  const [catID, setcatID] = useState("");
  const [subCategoryName, setsubCategoryName] = useState("");
  const [discount, setdiscount] = useState("");
  const [catIds, setcatIds] = useState({});

  useEffect(() => {
    const getcatId = async () => {
      const res = await axios.get(
        "https://erp-system-nexeyo.herokuapp.com/purchase/category/getAll",
        {
          withCredentials: true,
          credentials: "include",
        }
      );
      setcatIds(res.data);
    };
    getcatId();
  }, [""]);

  const { SCID } = useParams();
  console.log(SCID);

  useEffect(() => {
    axios
      .get(
        "https://erp-system-nexeyo.herokuapp.com/purchase/subCategory/getSingle/" +
          SCID,
        {
          withCredentials: true,
          credentials: "include",
        }
      )
      .then((res) => {
        setcatID(res.data[0].catID);
        setsubCategoryName(res.data[0].subCategoryName);
        setdiscount(res.data[0].discount);
      });
  }, [""]);

  const submitForm = (e) => {
    e.preventDefault();
    if (subCategoryName === "") {
      alert("Please fill all required fields");
    } else {
      let data = {
        catID: catID,
        subCategoryName: subCategoryName,
        discount: discount,
      };

      axios
        .put(
          "https://erp-system-nexeyo.herokuapp.com/purchase/subCategory/update/" +
            SCID,
          data,
          {
            withCredentials: true,
            credentials: "include",
          }
        )
        .then((res) => {
          if (res.data === "subCategory updated") {
            alert(" Sub Category Updated");
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
        <div className="topContainer">
          <h1>Update Sub Category</h1>
        </div>
        <div className="bottomContainer">
          <div className="right">
            <form>
              <div className="formInput">
                <label>Sub Category Name*</label>
                <input
                  type="text"
                  value={subCategoryName}
                  onChange={(e) => {
                    setsubCategoryName(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Category Name</label>

                <select
                  value={catID}
                  onChange={(e) => {
                    setcatID(e.target.value);
                  }}
                >
                  <option value="" disabled selected>
                    select Category Name
                  </option>
                  {Array.isArray(catIds)
                    ? catIds.map((c) => (
                        <option value={c.catID} key={c.catID}>
                          {c.categoryName}
                        </option>
                      ))
                    : ""}
                </select>
              </div>

              <div className="formInput">
                <label>Discount</label>
                <input
                  type="number"
                  min={0}
                  value={discount}
                  onChange={(e) => {
                    setdiscount(e.target.value);
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

export default UpdatesubCategory;
