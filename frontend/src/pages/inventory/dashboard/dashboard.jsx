import "./dashboard.scss";
import InventorySidebar from "../../../components/inventory/inventorySidebar/inventorySidebar";
import Navbar from "../../../components/navbar/Navbar";
import AllStockTable from "../../../components/inventory/stockTable/allStockTable";
import axios from "axios";
import { useEffect } from "react";

const InventoryDashboard = () => {

  return (
    <div className="home">
      <InventorySidebar />
      <div className="homeContainer">
        <Navbar />
        <AllStockTable />
      </div>
    </div>
  );
};

export default InventoryDashboard;