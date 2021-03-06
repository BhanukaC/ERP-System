import "../tablePage.scss";
import Navbar from "../../../components/navbar/Navbar";
import InventorySidebar from "../../../components/inventory/inventorySidebar/inventorySidebar";
import ShipmentDataTable from "../../../components/inventory/internalShipment/receiveDataTable";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


const SendData = () => {
    const {id}=useParams();
    //console.log(id);


  return (
    <div className="list">
      <InventorySidebar />
      <div className="listContainer">
        <Navbar />
        <ShipmentDataTable id={id}/>
      </div>
    </div>
  );
};

export default SendData;