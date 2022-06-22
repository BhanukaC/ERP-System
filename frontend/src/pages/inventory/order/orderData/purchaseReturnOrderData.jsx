import "../../tablePage.scss";
import Navbar from "../../../../components/navbar/Navbar";
import InventorySidebar from "../../../../components/inventory/inventorySidebar/inventorySidebar";
import PurchaseReturnOrderDataTable from "../../../../components/inventory/orderDataTable/returnOrderDataTable";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


const PurchaseReturnOrderData = () => {
    const {id}=useParams();
    console.log(id);
    const [status,setStatus]=useState("");
    const[WID,setWID]=useState(0);

  useEffect(()=>{
    axios.get("http://localhost:5000/inventory/purchaseReturnOrder/getSingle/"+id,{
      withCredentials: true,
      credentials: "include",

    }).then((res)=>{
      setWID(res.data[0].WID);
      setStatus(res.data[0].status);
    })
  },[""]);

  return (
    <div className="list">
      <InventorySidebar />
      <div className="listContainer">
        <Navbar />
        <PurchaseReturnOrderDataTable id={id}/>
      </div>
    </div>
  );
};

export default PurchaseReturnOrderData;