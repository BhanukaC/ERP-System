import "./purchaseOrderDetails.scss";
import Navbar from "../../../../components/navbar/Navbar";
import InventorySidebar from "../../../../components/inventory/inventorySidebar/inventorySidebar";
import PurchaseOrderTable from "../../../../components/inventory/purchaseOrderTable/purchaseOrderTable";

const PurchaseOrderDetails = () => {
  return (
    <div className="list">
      <InventorySidebar />
      <div className="listContainer">
        <Navbar />
        <PurchaseOrderTable />
      </div>
    </div>
  );
};

export default PurchaseOrderDetails;