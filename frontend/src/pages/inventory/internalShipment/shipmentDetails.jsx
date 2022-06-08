import "../../tablePage.scss";
import Navbar from "../../../../components/navbar/Navbar";
import InventorySidebar from "../../../../components/inventory/inventorySidebar/inventorySidebar";
import PurchaseOrderTable from "../../../../components/inventory/purchaseOrderTable/purchaseOrderTable";

const ShipmentDetails = () => {
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

export default ShipmentDetails;