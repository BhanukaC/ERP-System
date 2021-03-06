import "./viewAll.scss";
import Navbar from "../../../components/navbar/Navbar";
import Admin_sidebar from "../../../components/admin/admin_sidebar/Admin_sidebar";
import Datatable from "../../../components/admin/userTable/Datatable";

const ViewAllUsers = () => {
  return (
    <div className="list">
      <Admin_sidebar />
      <div className="listContainer">
        <Navbar />
        {<Datatable /> }
      </div>
    </div>
  );
};

export default ViewAllUsers;
