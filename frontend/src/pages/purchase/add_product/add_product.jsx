import "./add_product.scss";
import { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/purchase_sidebar/purchase_sidebar";
import axios from "axios";

const AddProduct = () => {
  
  const [pname, setpname] = useState("");
  const [sellp, setsellp] = useState(0);
  const [eancode, seteancode] = useState("");
  const [unit, setunit] = useState("");
  const [hsncode, sethsncode] = useState("");
  const [shortdep, setshortdep] = useState("");
  const [longdep, setlongdep] = useState("");
  const [height, setheight] = useState(0);
  const [length, setlength] = useState(0);
  const [weight, setweight] = useState(0);
  const [buyingp, setbuyingp] = useState(0);
  const [noitems, setnoitems] = useState(0);
  const [catid, setcatid] = useState("");
  const [subcatid, setsubcatid] = useState("");


  const submitForm = (e) => {
    e.preventDefault();
    if(
      pname === ""||
      sellp===""||
      buyingp===""||
      catid===""||
      subcatid===""
    )
    {
      alert("Please fill the required fields");
    }
    else{
      axios
      .post(
        "http://localhost:5000/purchase/product/add",
        {
          PName: pname,
          sellingPrice: sellp,
          EANCode: eancode,
          UnitOfMeasure:unit ,
          HSNCode: hsncode,
          shortDescription: shortdep,
          longDescription: longdep,
          Height: height,
          Length: length,
          Weight: weight,
          buyingPrice: buyingp,
          NoOfItems:noitems ,
          CatID:catid,
          SubCatID:subcatid, 


        },
        {
          withCredentials: true,
          credentials: "include",
        }
      )
      .then((res) => {
        console.log(res);
        if(res.data=="product Added"){
          alert("Product added");
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
          <h1>Add Product</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>

              
              <div className="formInput">
                <label>Product Name</label>
                <input
                  type="text"
                  value={pname}
                  onChange={(e) => {
                    setpname(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Selling Price</label>
                <input
                  type="number"
                  step="any"
                  value={sellp}
                  onChange={(e) => {
                    setsellp(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>EAN Code</label>
                <input
                  type="text"
                  value={eancode}
                  onChange={(e) => {
                    seteancode(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Unit Of Measure</label>
                <input
                  type="text"
                  value={unit}
                  onChange={(e) => {
                    setunit(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>HSN Code</label>
                <input
                  type="text"
                  value={hsncode}
                  onChange={(e) => {
                    sethsncode(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Short Description</label>
                <input
                  type="text"
                  value={shortdep}
                  onChange={(e) => {
                    setshortdep(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Long Description</label>
                <input
                  type="text"
                  value={longdep}
                  onChange={(e) => {
                    setlongdep(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Height</label>
                <input
                  type="number"
                  step="any"
                  value={height}
                  onChange={(e) => {
                    setheight(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Length</label>
                <input
                  type="number"
                  step="any"
                  value={length}
                  onChange={(e) => {
                    setlength(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Weight</label>
                <input
                  type="number"
                  step="any"
                  value={weight}
                  onChange={(e) => {
                    setweight(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Buying Price</label>
                <input
                 type="number"
                 step="any"
                  value={buyingp}
                  onChange={(e) => {
                    setbuyingp(e.target.value);
                  }}
                />
              </div>

              

              <div className="formInput">
                <label>Category ID</label>
                <input
                  type="text"
                  value={catid}
                  onChange={(e) => {
                    setcatid(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Sub Category ID</label>
                <input
                  type="text"
                  value={subcatid}
                  onChange={(e) => {
                    setsubcatid(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>No Of Items</label>
                <input
                  type="number"
                  value={noitems}
                  onChange={(e) => {
                    setnoitems(e.target.value);
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

export default AddProduct;
