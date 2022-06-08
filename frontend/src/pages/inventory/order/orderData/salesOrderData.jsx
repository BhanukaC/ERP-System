import "../../tablePage.scss";
import Navbar from "../../../../components/navbar/Navbar";
import InventorySidebar from "../../../../components/inventory/inventorySidebar/inventorySidebar";
import SalesOrderDataTable from "../../../../components/inventory/orderDataTable/salesOrderDataTable";

import { useParams } from "react-router-dom";

const SalesOrderData = () => {
    const {id}=useParams();
    console.log(id);
  return (
    <div className="list">
      <InventorySidebar />
      <div className="listContainer">
        <Navbar />
        <SalesOrderDataTable id={id}/>
      </div>
    </div>
  );
};

export default SalesOrderData;