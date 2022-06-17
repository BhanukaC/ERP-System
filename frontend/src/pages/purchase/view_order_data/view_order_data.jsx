import "./view_order_data.scss";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/purchase_sidebar/purchase_sidebar";
import Datatable from "../../../components/purchase/orderDataTable/orderData"

const ViewPurchaseOrderData = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default ViewPurchaseOrderData ;
