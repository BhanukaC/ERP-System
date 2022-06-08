import "./edit_category.scss";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/purchase_sidebar/purchase_sidebar";
import Categorytable from "../../../components/purchase/categorytable/categorytable";

const EditCategory = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Categorytable/>
      </div>
    </div>
  );
};

export default EditCategory;
