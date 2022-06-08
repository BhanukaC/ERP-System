import "../../tablePage.scss";
import Navbar from "../../../../components/navbar/Navbar";
import InventorySidebar from "../../../../components/inventory/inventorySidebar/inventorySidebar";
import WarehouseTable from "../../../../components/inventory/warehouseTable/warehouseTable";

const WarehouseDetails = () => {
  return (
    <div className="list">
      <InventorySidebar />
      <div className="listContainer">
        <Navbar />
        <WarehouseTable />
      </div>
    </div>
  );
};

export default WarehouseDetails;