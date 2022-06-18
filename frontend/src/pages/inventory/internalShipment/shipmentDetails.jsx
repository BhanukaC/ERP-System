import "../tablePage.scss";
import Navbar from "../../../components/navbar/Navbar";
import InventorySidebar from "../../../components/inventory/inventorySidebar/inventorySidebar";
import ShipmentTable from "../../../components/inventory/internalShipment/shipmentTable";

const ShipmentDetails = () => {
  return (
    <div className="list">
      <InventorySidebar />
      <div className="listContainer">
        <Navbar />
        <ShipmentTable />
      </div>
    </div>
  );
};

export default ShipmentDetails;