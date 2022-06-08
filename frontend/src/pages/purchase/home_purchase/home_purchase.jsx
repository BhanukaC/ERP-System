import "./home_purchase.scss";

import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/purchase_sidebar/purchase_sidebar";


const Purchasehome = () => {
    
return (
      <div className="new">
        <Sidebar/>
        <div className="newContainer">
          <Navbar />
          <div className="top">
            <h1>PURCHASE MODULE</h1>
          </div>
          
        </div>
      </div>
    );
  };
  
  export default Purchasehome;
  



