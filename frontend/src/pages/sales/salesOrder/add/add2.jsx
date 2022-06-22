import "././add.scss";
import { useState , useEffect } from "react";
import Navbar from "../../../../components/navbar/Navbar";
import Sidebar from "../../../../components/sales/sales-sidebar/sales-sidebar";
import axios from "axios";

const AddSalesOrderPart2 = () => {
  const [PID, setPID] = useState(0);
  const [qty, setQty] = useState(0);
  const [productName, setProductName] = useState("");
  const [list, setList] = useState([]);
  const [CID, setCID] = useState("");
  const [CDAID, setCDAID] = useState("");
  const [CCID, setCCID] = useState("");
  const [WID, setWID] = useState("");
  const [distance, setDistance] = useState("");

  const submitForm = async(e) => {
    e.preventDefault();
    let stat=false;
  
    setQty(parseInt(qty));
    if (qty > 0) {
      if (list.length !== 0) {
        let status = false;
        for (let i = 0; i < list.length; i++) {
          if (list[i].PID === PID) {
           let stat2= await checkQty(parseInt(list[i].qty) + parseInt(qty));
           
            if(stat2){
              list[i].qty = parseInt(list[i].qty) + parseInt(qty);
            
            stat=true;
            }
            status = true;
            
          }
        }
        if (!status) {
          let stat2=await checkQty(parseInt(qty));
         
          if(stat2){
            setList([
              ...list,
              { PID: PID, name: productName, qty: parseInt(qty) },
            ]);
            stat=true;
          }
         
        }
      } else {
        let stat2=await checkQty(parseInt(qty));
        if(stat2){
        setList([{ PID: PID, name: productName, qty: parseInt(qty) }]);
        stat=true;
        }
      }
if(stat){
  setProductName("");
  setQty(0);
  setPID(0);
  alert("Product added to cart");
}
      
    } else {
      alert("Enter valid quantity");
    }
  };

  const checkProduct = async (val) => {
    if (val !== "") {
      const res = await axios.get(
        "http://localhost:5000/purchase/product/getSingle/" + val,
        {
          withCredentials: true,
          credentials: "include",
        }
      );
      if (res.data.length === 0) {
        alert("PID not found");
      } else {
        setProductName(res.data[0].PName);
      }
    }
  };

  const checkQty=async (val)=>{
    const res =  await axios.post(
      "http://localhost:5000/sales/productstockLevelForWarehouse/get/" + WID,{
        PID:PID,
        qty:val
      },{
        withCredentials: true,
        credentials: "include",
      }
      
    );
  //  console.log(res);
    if (res.data === "we don't have enough stocks") {
      alert("we don't have enough stocks");
      return false;
    }
    if(res.data ==="We have Stocks") {
      return true;
    }
  }

  const addSalesOrder = () => {
    if (list.length !== 0) {
     let li=[];
     for(let i=0;i<list.length;i++){
      li.push({PID:list[i].PID,qty:list[i].qty});
     }
     axios
     .post("http://localhost:5000/sales/salesOrder/add",
     {
      CID:CID,
      CDAID:CDAID,
      CCID:CCID,
      WID:WID,
      distance:distance,
      items:li,
     },
     {
      withCredentials:true,
      credentials:"include"
     }
     )
     .then((res)=>{
      if(res.data==="sales order added"){
        alert("Sales Order Added");
        localStorage.setItem("CID","");
        localStorage.setItem("CDAID","");
        localStorage.setItem("CCID","");
        localStorage.setItem("WID","");
        localStorage.setItem("distance","");
        window.location = "/sales/salesOrder/add";
      }else{
        alert("Try Again");
      } 
     });
    }
  };

  useEffect(()=>{
    let cid=localStorage.getItem("CID");
    let cdaid=localStorage.getItem("CDAID");
    let ccid=localStorage.getItem("CCID");
    let wid=localStorage.getItem("WID");
    let dis=localStorage.getItem("distance");
    
   if(cid ===null || cdaid===null || ccid===null || wid===null || dis===null){
    window.location = "/sales/salesOrder/add";
   }
   setCID(cid);
   setCDAID(cdaid);
   setCCID(ccid);
   setWID(wid);
   setDistance(dis);

  },[""])

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="topPart">
          <h1>Add Sales Order</h1>
        </div>
        <div className="bottomPart">
          <div className="right">
            <form>
              <div className="formInput">
                <label>Product ID</label>
                <input
                  type="number"
                  min={0}
                  value={PID}
                  onChange={(e) => {
                    setPID(e.target.value);
                    checkProduct(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Product Name</label>
                <input type="text" 
                value={productName} disabled />
              </div>
              <div className="formInput">
                <label>Quantity</label>
                <input
                  type="number"
                  min={0}
                  value={qty}
                  onChange={(e) => {
                    setQty(e.target.value);
                  }}
                />
              </div>

              <div className="break"></div>
              <button onClick={submitForm}>Add to Cart</button>
            </form>
          </div>
        </div>
        <div className="bottom">
          <div className="right">
            <h1>Cart</h1>
            <table style={{ width: "80%", textAlign: "center" }}>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Quantity</th>
              </tr>
              {list.map((item) => {
                return (
                  <tr key={item.PID}>
                    <td>{item.PID}</td>
                    <td> {item.name}</td>
                    <td>{item.qty}</td>
                  </tr>
                );
              })}
            </table>
            {list.length !== 0 && (
              <button
                style={{
                  width: "200px",
                  padding: "10px",
                  border: "none",
                  backgroundColor: "#7451f8",
                  color: " white",
                  fontWeight: "bold",
                  cursor: " pointer",
                  marginTop: "30px",
                  marginLeft: "40%",
                }}
                onClick={addSalesOrder}
              >
                Add Sales Order
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSalesOrderPart2;
