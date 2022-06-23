import "../../tablePage.scss";
import Navbar from "../../../../components/navbar/Navbar";
import InventorySidebar from "../../../../components/inventory/inventorySidebar/inventorySidebar";
import PurchaseReturnOrderTable from "../../../../components/inventory/purchaseReturnOrderTable/purchaseReturnOrderTable";

const PurchaseReturnOrderDetails = () => {
  return (
    <div className="list">
      <InventorySidebar />
      <div className="listContainer">
        <Navbar />
        <PurchaseReturnOrderTable />
      </div>
    </div>
  );
};

export default PurchaseReturnOrderDetails;