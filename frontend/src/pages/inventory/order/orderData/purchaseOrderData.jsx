import "../../tablePage.scss";
import Navbar from "../../../../components/navbar/Navbar";
import InventorySidebar from "../../../../components/inventory/inventorySidebar/inventorySidebar";
import PurchaseOrderDataTable from "../../../../components/inventory/orderDataTable/purchaseOrderDataTable";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const PurchaseOrderData = () => {
    const {id}=useParams();
    console.log(id);
    const [status,setStatus]=useState("");
    const[WID,setWID]=useState(0);

  useEffect(()=>{
    axios.get("http://localhost:5000/inventory/purchaseOrder/getSingle/"+id,{
      withCredentials: true,
      credentials: "include",

    }).then((res)=>{
      setWID(res.data[0].WID);
      setStatus(res.data[0].status);
    })
  },[""]);

  const submitButton=(e)=>{
    e.preventDefault();
    alert("form submit");
   let data={
    WID:WID,
    status:status,
    salesOrderID:id,
  };
    axios.put("http://localhost:5000/inventory/purchaseOrder/update/", data,{
      withCredentials: true,
      credentials: "include",

    }).then((res)=>{
        setWID(res.data[0].WID);
        setStatus("D"); 
    })
  }

  return (
    <div className="list">
      <InventorySidebar />
      <div className="listContainer">
        <Navbar />
        <PurchaseOrderDataTable id={id}/>

        {status ==="P" &&(<button style={{
             width: "150px",
             padding: "10px",
             border: "none",
             backgroundColor: "#00004d",
             color:" white",
             fontWeight: "bold",
             cursor:" pointer",
             marginTop: "30px",
             marginLeft:"40%",
      
        }} onClick={submitButton} >Mark as Received / Returned</button>)}

           
      
      </div>
    </div>
  );
};

export default PurchaseOrderData;