import "./viewContactno.scss";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/purchase_sidebar/purchase_sidebar";
import Datatable from "../../../components/purchase/contactnoTable/contactnoTable";
import { useParams } from "react-router-dom";

const ViewContactNo = () => {
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

export default ViewContactNo;
