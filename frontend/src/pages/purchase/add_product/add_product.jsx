import "./add_product.scss";
import { useState,useEffect } from "react";
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

  const [catname, setcatname] = useState("");
  const [subcatname, setsubcatname] = useState("");

  const checkCategory = async (val) => {
    if (val !== "") {
      const res = await axios.get(
        "http://localhost:5000/purchase/category/getSingle/" + val,
        {
          withCredentials: true,
          credentials: "include",
        }
      );
      if (res.data.length === 0) {
        alert("Category ID is not found");
        setcatid("");
      } else {
        setcatname(res.data[0].categoryName);
      }
    }
  };

  const checksubCategory = async (val) => {
    if (val !== "") {
      const res = await axios.get(
        "http://localhost:5000/purchase/subCategory/getSingle/" + val,
        {
          withCredentials: true,
          credentials: "include",
        }
      );
      if (res.data.length === 0) {
        alert("Sub Category ID is not found");
      } else {
        setsubcatname(res.data[0].subCategoryName);
      }
    }
  };

  const handlesellp = (value) => {
    const numberAmount= Number(value).toFixed(2);
    setsellp(numberAmount)
  }

  const handlebuyp = (value) => {
    const numberAmount= Number(value).toFixed(2);
    setbuyingp(numberAmount)
  }
  
  
  
const submitForm = (e) => {
    e.preventDefault();
    if(
      pname === ""||
      sellp===""||
      buyingp===""||
      catid===""||
      subcatid===""||
      hsncode===""||
      eancode===""
      
    )
      
    {
      alert("Please  fill the required fields");
    }
    else if( sellp==0)
    {
      alert("Please  fill the correct selling price");
    }
    else if( hsncode.length!=6)
    {
      alert("Please  fill a valid HSN Code");
    }
    else if( eancode.length!=13)
    {
      alert("Please  fill a valid EAN Code");
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

          setpname ("");
          setsellp (0);
          seteancode ("");
          setunit ("");
          sethsncode ("");
          setshortdep ("");
          setlongdep ("");
          setheight (0);
          setlength (0);
          setweight (0);
          setbuyingp (0);
          setnoitems (0);
          setcatid ("");
          setsubcatid ("");
          setcatname ("");
          setsubcatname("");
  
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
        <div className="topContainer">
          <h1>Add Product</h1>
        </div>
        <div className="bottomContainer">
          <div className="right">
            <form>

              
              <div className="formInput">
                <label>Product Name*</label>
                <input
                  type="text"
                  value={pname}
                  onChange={(e) => {
                    setpname(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Selling Price (LKR)*</label>
                <input
                  type="number"
                  min={0}
                  step='.01'
                  onChange={(e) =>handlesellp(e.target.value)} 
                  value={sellp}
                  
                  
                   
                  />
                 </div>

              <div className="formInput">
                <label>EAN Code*</label>
                <input
                  type="number"
                  min={0}
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
                <label>HSN Code*</label>
                <input
                  type="number"
                  min={0}
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
                  type="textarea"
                  value={longdep}
                  onChange={(e) => {
                    setlongdep(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Height(cm)</label>
                <input
                  type="number"
                  min={0}
                  step="any"
                  value={height}
                  onChange={(e) => {
                    setheight(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Length(cm)</label>
                <input
                  type="number"
                  min={0}
                  step="any"
                  value={length}
                  onChange={(e) => {
                    setlength(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Weight(g)</label>
                <input
                  type="number"
                  min={0}
                  step="any"
                  value={weight}
                  onChange={(e) => {
                    setweight(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Buying Price (LKR)*</label>
                <input
                  type="number"
                  min={0}
                  step='.01'
                  onChange={(e) =>handlebuyp(e.target.value)} 
                  value={buyingp}
                  placeholder="0.00"
                  
                   
                  />
                 </div>

              <div className="formInput">
                <label>No Of Items</label>
                <input
                  type="number"
                  min={0}
                  step="1"
                  pattern="[0-9]*"
                  value={noitems}
                  onChange={(e) => setnoitems((v)=>(e.target.validity.valid?e.target.value:v))}
                />
              </div>
                  
              <div className="formInput">
                <label>Category ID*</label>
                <input
                  type="text"
                  value={catid}
                  onChange={(e) => {
                    setcatid(e.target.value);
                    checkCategory(e.target.value)
                  }}
                />
              </div>

              <div className="formInput">
                <label>Category Name</label>
                <input type="text" 
                value={catname} disabled />
              </div>

              

              <div className="formInput">
                <label>Sub Category ID*</label>
                <input
                  type="text"
                  value={subcatid}
                  onChange={(e) => {
                    setsubcatid(e.target.value);
                    checksubCategory (e.target.value)
                  }}
                />
              </div>

              <div className="formInput">
                <label>Sub Category Name</label>
                <input type="text" 
                value={subcatname} disabled />
              </div>

              

              <div className="Break"></div>
              <button onClick={submitForm}>Add Product</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
