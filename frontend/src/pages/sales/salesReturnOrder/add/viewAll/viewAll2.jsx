import "./viewAll.scss";
import Navbar from "../../../../../components/navbar/Navbar";
import Sidebar from "../../../../../components/sales/sales-sidebar/sales-sidebar";
import Datatable from "../../../../../components/sales/salesReturnOrderTable/dataTable2";
import { useParams } from "react-router-dom";

const ViewSalesReturnOrderData = () => {
  const { salesReturnOrderID } = useParams();
  
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable salesReturnOrderID={salesReturnOrderID} />
      </div>
    </div>
  );
};

export default ViewSalesReturnOrderData;