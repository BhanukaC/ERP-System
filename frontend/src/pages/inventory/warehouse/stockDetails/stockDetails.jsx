import "./stockDetails.scss";
import Navbar from "../../../../components/navbar/Navbar";
import InventorySidebar from "../../../../components/inventory/inventorySidebar/inventorySidebar";
import StockTable from "../../../../components/inventory/stockTable/stockTable";
import { useParams } from "react-router-dom";

const StockDetails = () => {
  const {id}=useParams();
  console.log(id);
  return (
    <div className="list">
      <InventorySidebar />
      <div className="listContainer">
        <Navbar />
        <StockTable id={id}/>
      </div>
    </div>
  );
};

export default StockDetails;