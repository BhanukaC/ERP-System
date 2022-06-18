import "./Admin_sidebar.scss";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
//import { DarkModeContext } from "../../context/darkModeContext";
import { DarkModeContext } from "../../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
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
          <p className="title">FUNCTIONS</p>
          <Link to="/admin/adduser" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Add User</span>
            </li>
          </Link>
          <Link to="/admin/addwarehouse" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Add Warehouse</span>
            </li>
          </Link>
          <p className="title">VIEW</p>
          <Link to="/admin/viewAll" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>All Users</span>
            </li>
          </Link>
          <Link to="/admin/viewwarehouses" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>All Warehouses</span>
            </li>
          </Link>
          <Link to="/admin/viewactivity" style={{ textDecoration: "none" }}>
            <li>
              <InsertChartIcon className="icon" />
              <span>Activity</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <Link to="" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <Link to="" style={{ textDecoration: "none" }}>
            <li>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </li>
          </Link>
          
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
