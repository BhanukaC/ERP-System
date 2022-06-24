import "./finance_sidebar.scss";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Finance_Sidebar = () => {
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
          <p className="title">Accounts</p>
          <Link to="" style={{ textDecoration: "none" }}>
            <li>
              <ViewModuleIcon className="icon" />
              <span>View Accounts</span>
            </li>
          </Link>

          <p className="title">Profile</p>
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
        </ul>
      </div>
    </div>
  );
};

export default Finance_Sidebar;
