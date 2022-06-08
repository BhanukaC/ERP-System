import "../../tablePage.scss";
import Navbar from "../../../../components/navbar/Navbar";
import InventorySidebar from "../../../../components/inventory/inventorySidebar/inventorySidebar";
import ReturnOrderDataTable from "../../../../components/inventory/orderDataTable/returnOrderDataTable";

import { useParams } from "react-router-dom";

const ReturnOrderData = () => {
    const {id}=useParams();
    console.log(id);
  return (
    <div className="list">
      <InventorySidebar />
      <div className="listContainer">
        <Navbar />
        <ReturnOrderDataTable id={id}/>
      </div>
    </div>
  );
};

export default ReturnOrderData;