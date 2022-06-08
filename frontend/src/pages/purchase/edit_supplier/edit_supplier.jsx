import "./edit_supplier.scss";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/purchase_sidebar/purchase_sidebar";
import Suppliertable from "../../../components/purchase/suppliertable/suppliertable";

const EditSuppler = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Suppliertable />
      </div>
    </div>
  );
};

export default EditSuppler;
