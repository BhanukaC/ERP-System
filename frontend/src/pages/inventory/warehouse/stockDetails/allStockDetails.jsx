import "../../tablePage.scss";
import Navbar from "../../../../components/navbar/Navbar";
import InventorySidebar from "../../../../components/inventory/inventorySidebar/inventorySidebar";
import AllStockTable from "../../../../components/inventory/stockTable/allStockTable";

const AllStockDetails = () => {
  return (
    <div className="list">
      <InventorySidebar />
      <div className="listContainer">
        <Navbar />
        <AllStockTable />
      </div>
    </div>
  );
};

export default AllStockDetails;