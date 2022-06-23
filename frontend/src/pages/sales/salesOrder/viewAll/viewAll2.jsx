import "./viewAll.scss";
import Navbar from "../../../../components/navbar/Navbar";
import Sidebar from "../../../../components/sales/sales-sidebar/sales-sidebar";
import Datatable from "../../../../components/sales/salesOrderTable/dataTable2";
import { useParams } from "react-router-dom";

const ViewSalesOrderData = () => {
  const { salesOrderID } = useParams();
  
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable salesOrderID={salesOrderID} />
      </div>
    </div>
  );
};

export default ViewSalesOrderData;