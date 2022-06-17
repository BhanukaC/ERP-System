import "./view_purchase_order.scss";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/purchase_sidebar/purchase_sidebar";
import PurchaseOrderTable from "../../../components/purchase/purchaseOrderTable/purchaseOrderTable"

const ViewPurchaseOrder = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <PurchaseOrderTable />
      </div>
    </div>
  );
};

export default ViewPurchaseOrder ;
