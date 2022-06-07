import "../../tablePage.scss";
import Navbar from "../../../../components/navbar/Navbar";
import InventorySidebar from "../../../../components/inventory/inventorySidebar/inventorySidebar";
import ReturnOrderTable from "../../../../components/inventory/returnOrderTable/returnOrderTable";

const ReturnOrderDetails = () => {
  return (
    <div className="list">
      <InventorySidebar />
      <div className="listContainer">
        <Navbar />
        <ReturnOrderTable />
      </div>
    </div>
  );
};

export default ReturnOrderDetails;