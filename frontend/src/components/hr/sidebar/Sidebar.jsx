import "./sidebar.scss";
import AddIcon from "@mui/icons-material/Add";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PreviewIcon from "@mui/icons-material/Preview";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
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
          <p className="title">Employee</p>
          <Link to="/hr/employee/add" style={{ textDecoration: "none" }}>
            <li>
              <AddIcon className="icon" />
              <span>Add</span>
            </li>
          </Link>
          <Link to="/hr/employee/viewall" style={{ textDecoration: "none" }}>
            <li>
              <PreviewIcon className="icon" />
              <span>View All</span>
            </li>
          </Link>
          <Link to="/hr/dependent/add" style={{ textDecoration: "none" }}>
            <li>
              <AddIcon className="icon" />
              <span>Add Dependent</span>
            </li>
          </Link>

          <p className="title">OT</p>
          <Link to="/hr/otType/add" style={{ textDecoration: "none" }}>
            <li>
              <AddIcon className="icon" />
              <span>Add OT Type</span>
            </li>
          </Link>
          <Link to="/hr/otType/viewall" style={{ textDecoration: "none" }}>
            <li>
              <PreviewIcon className="icon" />
              <span>View All OT Types</span>
            </li>
          </Link>
          <Link to="/hr/otRecord/add" style={{ textDecoration: "none" }}>
            <li>
              <AddIcon className="icon" />
              <span>Add OT Record</span>
            </li>
          </Link>
          <Link to="/hr/otRecord/viewall" style={{ textDecoration: "none" }}>
            <li>
              <PreviewIcon className="icon" />
              <span>View All OT Records</span>
            </li>
          </Link>
          <p className="title">Advance Payment</p>
          <Link to="/hr/advance/add" style={{ textDecoration: "none" }}>
            <li>
              <AddIcon className="icon" />
              <span>Give Advance Payment</span>
            </li>
          </Link>
          <Link to="/hr/advance/viewall" style={{ textDecoration: "none" }}>
            <li>
              <PreviewIcon className="icon" />
              <span>View All Advance Payments</span>
            </li>
          </Link>

          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
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

export default Sidebar;
