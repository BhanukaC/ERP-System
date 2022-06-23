import "./viewAll.scss";
import Navbar from "../../../../components/navbar/Navbar";
import Sidebar from "../../../../components/sales/sales-sidebar/sales-sidebar";
import Datatable from "../../../../components/sales/customerContactDetailsTable/dataTable";
import { useParams } from "react-router-dom";

const ViewAllCustomerContactDetails = () => {
    const { CID } = useParams();
    //console.log(CID);
    return (
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <Datatable CID={CID} />
        </div>
      </div>
    );
  };

export default ViewAllCustomerContactDetails;
