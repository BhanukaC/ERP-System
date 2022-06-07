import "./inventorySidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WarehouseIcon from '@mui/icons-material/Warehouse';
import StoreIcon from "@mui/icons-material/Store";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../../context/darkModeContext";
import { useContext } from "react";

const InventorySidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">ABCD</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/inventory/inventoryDashboard" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">WAREHOUSE</p>
          <Link to="/inventory/warehouse/warehouseDetails" style={{ textDecoration: "none" }}>
            <li>
              <WarehouseIcon className="icon" />
              <span>Warehouse Details</span>
            </li>
          </Link>
          <Link to="/inventory/warehouse/stockDetails" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Stock Details</span>
            </li>
          </Link>
          
          <p className="title">ORDERS</p>
          <Link to="/inventory/order/purchaseOrderDetails" style={{ textDecoration: "none" }}>
            <li>
              <BusinessCenterIcon className="icon" />
              <span>Purchase</span>
            </li>
          </Link>
          <Link to="/inventory/order/salesOrderDetails" style={{ textDecoration: "none" }}>
            <li>
              <ShoppingBasketIcon className="icon" />
              <span>Sales</span>
            </li>
          </Link>
          <Link to="/inventory/order/returnOrderDetails" style={{ textDecoration: "none" }}>
            <li>
              <AssignmentReturnIcon className="icon" />
              <span>Sales Return</span>
            </li>
          </Link>
          <p className="title">INTERNAL SHIPMENTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <AddBoxIcon className="icon" />
              <span>Add Internal Shipment</span>
            </li>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Internal Shipment Details</span>
            </li>
          </Link>
          <p className="title">REPORT</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <LibraryBooksIcon className="icon" />
              <span>Inventory Reports</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default InventorySidebar;