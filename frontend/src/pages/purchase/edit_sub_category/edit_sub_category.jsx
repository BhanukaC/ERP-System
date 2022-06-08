import "./edit_sub_category.scss";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/purchase_sidebar/purchase_sidebar";
import Subcategorytable from "../../../components/purchase/subcategorytable/subcategorytable";

const EditsubCategory = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Subcategorytable/>
      </div>
    </div>
  );
};

export default EditsubCategory;
