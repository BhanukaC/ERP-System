import "./accounts.scss";
import Navbar from "../../components/navbar/Navbar";
import Finance_Sidebar from "../../components/finance_sidebar/finance_sidebar";

const ViewAccounts = () => {
  return (
    <div className="list">
      <Finance_Sidebar />
      <div className="listContainer">
        <Navbar />
      </div>
    </div>
  );
};

export default ViewAccounts;
