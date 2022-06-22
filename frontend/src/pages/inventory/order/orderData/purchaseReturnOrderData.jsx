import "../../tablePage.scss";
import Navbar from "../../../../components/navbar/Navbar";
import InventorySidebar from "../../../../components/inventory/inventorySidebar/inventorySidebar";
import PurchaseReturnOrderDataTable from "../../../../components/inventory/orderDataTable/purchaseReturnOrderDataTable";
import { useParams } from "react-router-dom";


const PurchaseReturnOrderData = () => {
const {id } = useParams();
  
  return (
    <div className="list">
      <InventorySidebar />
      <div className="listContainer">
        <Navbar />
        <PurchaseReturnOrderDataTable id={id} />
      </div>
    </div>
  );
};
export default PurchaseReturnOrderData;