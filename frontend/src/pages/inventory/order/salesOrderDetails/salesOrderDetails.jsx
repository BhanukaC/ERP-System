import "../../tablePage.scss";
import Navbar from "../../../../components/navbar/Navbar";
import InventorySidebar from "../../../../components/inventory/inventorySidebar/inventorySidebar";
import SalesOrderTable from "../../../../components/inventory/salesOrderTable/salesOrderTable";

const SalesOrderDetails = () => {
  return (
    <div className="list">
      <InventorySidebar />
      <div className="listContainer">
        <Navbar />
        <SalesOrderTable/>
      </div>
    </div>
  );
};

export default SalesOrderDetails;