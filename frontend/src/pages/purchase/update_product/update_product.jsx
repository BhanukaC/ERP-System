import "./update_product.scss";
import { useState, useEffect } from "react";


import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/purchase_sidebar/purchase_sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";

const Updateproduct = () => {
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

    const [catIds, setcatIds] = useState({});

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

  const { PID } = useParams();
  console.log(PID);

  useEffect(() => {

    

    axios
      .get("http://localhost:5000/purchase/product/getSingle/" + PID, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        setpname(res.data[0].PName);
        setsellp(res.data[0].sellingPrice);
        seteancode(res.data[0].EANCode);
        setunit(res.data[0].UnitOfMeasure);
        sethsncode(res.data[0].HSNCode);
        setshortdep(res.data[0].shortDescription);
        setlongdep(res.data[0].longDescription);
        setheight(res.data[0].Height);
        setlength(res.data[0].Length);
        setweight(res.data[0].Weight);
        setbuyingp(res.data[0].buyingPrice);
        setnoitems(res.data[0].NoOfItems);
        setcatid(res.data[0].CatID);
        setsubcatid(res.data[0].SubCatID);


        });
        

  }, [""]);

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
      else if( hsncode.length!=6)
      {
        alert("Please  fill a valid HSN Code");
      }
      else if( eancode.length!=13)
      {
        alert("Please  fill a valid EAN Code");
      }
    
     else {
      let data = {
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
        
        
      };

      axios
        .put("http://localhost:5000/purchase/product/update/" + PID, data, {
          withCredentials: true,
          credentials: "include",
        })
        .then((res) => {
          if (res.data === "product updated") {
            alert(" Product Updated");
          } else {
            alert("Sorry,Try again");
          }
        });
    }
  };

  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar />
        <div className="top1">
          <h2>Update Product</h2>
        </div>
        <div className="bottom1">
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
                <label>EAN Code</label>
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
                <label>HSN Code</label>
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
                <label>Height</label>
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
                <label>Length</label>
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
                <label>Weight</label>
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
              <button onClick={submitForm}>Update Product</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updateproduct ;