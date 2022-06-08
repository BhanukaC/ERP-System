import "./view_product.scss";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/purchase_sidebar/purchase_sidebar";
import Producttable from "../../../components/purchase/producttable/producttable";

const Viewproduct = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Producttable />
      </div>
    </div>
  );
};

export default Viewproduct;
