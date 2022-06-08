import "./dashboard.scss";
import InventorySidebar from "../../../components/inventory/inventorySidebar/inventorySidebar";
import Navbar from "../../../components/navbar/Navbar";
import AllStockTable from "../../../components/inventory/stockTable/allStockTable";
import axios from "axios";
import { useEffect } from "react";

const InventoryDashboard = () => {
  useEffect(() => {
    axios
      .post(
        "http://localhost:5000/auth/login",
        {
          username: "Bhanuka",
          password: "964418",
        },
        { withCredentials: true, credentials: "include" }
      )
      .then((res) => {
        // console.log(res);
      });
  }, [""]);

  return (
    <div className="home">
      <InventorySidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
          <AllStockTable />
        </div>
      </div>
    </div>
  );
};

export default InventoryDashboard;