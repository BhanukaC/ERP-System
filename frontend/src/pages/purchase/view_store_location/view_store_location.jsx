import "./view_store_location.scss";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/purchase_sidebar/purchase_sidebar";
import Datatable from "../../../components/purchase/storeLocationTable/storeLocationTable";
import { useParams } from "react-router-dom";

const ViewStoreLocations = () => {
  const { SID } = useParams();
  
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable SID={SID} />
      </div>
    </div>
  );
};

export default ViewStoreLocations;
