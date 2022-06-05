import "./purchase_sidebar.scss";
import AddIcon from '@mui/icons-material/Add';
import PreviewIcon from "@mui/icons-material/Preview";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";

import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import {useContext } from "react";

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
          <p className="title">PRODUCT</p>
          <Link to="/purchase/product/add" style={{ textDecoration: "none" }}>
            <li>
              <AddIcon className="icon" />
              <span>Add Product</span>
            </li>
          </Link>

          <Link to="/purchase/view_product" style={{ textDecoration: "none" }}>
            <li>
              <PreviewIcon className="icon" />
              <span>View product quantity</span>
            </li>
          </Link>

          <Link to="/purchase/product/addcat" style={{ textDecoration: "none" }}>
          <li>
            <AddCircleIcon className="icon" />
            <span>Add Category</span>
          </li>
          </Link>

          <Link to="/purchase/edit_category" style={{ textDecoration: "none" }}>
          <li>
            <EditIcon className="icon" />
            <span>Edit Category</span>
          </li>
          </Link>

          <Link to="/purchase/product/addsubcat" style={{ textDecoration: "none" }}>
          <li>
            <AddCircleOutlineIcon className="icon" />
            <span>Add Sub Category</span>
          </li>
          </Link>

          <Link to="/purchase/edit_sub_category" style={{ textDecoration: "none" }}>
          <li>
            <EditIcon className="icon" />
            <span>Edit Sub Category</span>
          </li>
          </Link>

          <p className="title">SUPPLIER</p>
          <Link to="/purchase/add_supplier" style={{ textDecoration: "none" }}>
          <li>
            <PersonAddIcon className="icon" />
            <span>Add Supplier</span>
          </li>
          </Link>
          
          <p className="title">PURCHASE ORDER</p>
          <li>
            <AddCircleIcon className="icon" />
            <span>Add Purchase Order</span>
          </li>

          <li>
            <PreviewIcon className="icon" />
            <span>View Purchase Order</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
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
