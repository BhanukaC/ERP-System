import "./Admin_sidebar.scss";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';
import DiscountIcon from '@mui/icons-material/Discount';
import RestoreIcon from '@mui/icons-material/Restore';
import ReportIcon from '@mui/icons-material/Report';
import GroupsIcon from '@mui/icons-material/Groups';

import { Link } from "react-router-dom";
import { DarkModeContext } from "../../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Quick ERP</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">FUNCTIONS</p>
          <Link to="/admin/adduser" style={{ textDecoration: "none" }}>
            <li>
              <PersonAddIcon className="icon" />
              <span>Add User</span>
            </li>
          </Link>
          <Link to="/admin/addwarehouse" style={{ textDecoration: "none" }}>
            <li>
              <AddIcon className="icon" />
              <span>Add Warehouse</span>
            </li>
          </Link>
          <Link to="/admin/setdiscount" style={{ textDecoration: "none" }}>
            <li>
              <DiscountIcon className="icon" />
              <span>Set Discount Rate</span>
            </li>
          </Link>
          <p className="title">VIEW</p>
          <Link to="/admin/viewAll" style={{ textDecoration: "none" }}>
            <li>
              <GroupsIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/admin/viewwarehouses" style={{ textDecoration: "none" }}>
            <li>
              <WarehouseIcon className="icon" />
              <span>Warehouses</span>
            </li>
          </Link>
          <Link to="/admin/salesreturnorders" style={{ textDecoration: "none" }}>
            <li>
              <RestoreIcon className="icon" />
              <span>Sales Return Requests</span>
            </li>
          </Link>
          <Link to="/admin/viewactivity" style={{ textDecoration: "none" }}>
            <li>
              <ReportIcon className="icon" />
              <span>Activity</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <Link to="/logout" style={{ textDecoration: "none" }}>
            <li>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </li>
          </Link>
          <p className="title">DASHBOARDS</p>
          <Link to="/hr" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Human Resources</span>
            </li>
          </Link>
          <Link to="/sales" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Sales</span>
            </li>
          </Link>
          <Link to="/purchase" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Purchase</span>
            </li>
          </Link>
          <Link to="/inventory" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Inventory</span>
            </li>
          </Link>
          <Link to="/account" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Finance</span>
            </li>
          </Link>
          
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
