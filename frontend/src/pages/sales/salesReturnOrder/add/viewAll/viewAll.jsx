import "./viewAll.scss";
import Navbar from "../../../../../components/navbar/Navbar";
import Sidebar from "../../../../../components/sales/sales-sidebar/sales-sidebar";
import Datatable from "../../../../../components/sales/salesReturnOrderTable/dataTable";

const ViewAllSalesReturnOrders = () => {
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

export default ViewAllSalesReturnOrders;
