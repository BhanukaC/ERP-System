import "./orderData.scss";
import Navbar from "../../../../components/navbar/Navbar";
import InventorySidebar from "../../../../components/inventory/inventorySidebar/inventorySidebar";

import { useParams } from "react-router-dom";

const SalesOrderData = () => {
    const {id}=useParams();
    console.log(id);
  return (
    <div className="list">
      <InventorySidebar />
      <div className="listContainer">
        <Navbar />
        <PurchaseOrderDataTable id={id}/>
      </div>
    </div>
  );
};

export default SalesOrderData;