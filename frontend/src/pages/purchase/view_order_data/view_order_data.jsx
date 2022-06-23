import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/purchase_sidebar/purchase_sidebar";
import Datatable from "../../../components/purchase/orderDataTable/orderData";
import { useParams } from "react-router-dom";

const ViewPurchaseOrderData = () => {
  const { purchaseOrderID } = useParams();
  
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable purchaseOrderID={purchaseOrderID} />
      </div>
    </div>
  );
};

export default ViewPurchaseOrderData;
