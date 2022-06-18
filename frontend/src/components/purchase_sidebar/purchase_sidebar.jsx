import "./purchase_sidebar.scss";
import AddIcon from '@mui/icons-material/Add';
import PreviewIcon from "@mui/icons-material/Preview";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { Link } from "react-router-dom";

import {useContext } from "react";

const Sidebar = () => {
 
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
          <p className="title">PRODUCT</p>
          <Link to="/purchase/product/add" style={{ textDecoration: "none" }}>
            <li>
              <AddIcon className="icon" />
              <span>Add Product</span>
            </li>
          </Link>

          <Link to="/purchase/product/viewproduct" style={{ textDecoration: "none" }}>
            <li>
              <PreviewIcon className="icon" />
              <span>View product</span>
            </li>
          </Link>

          <Link to="/purchase/product/addcat" style={{ textDecoration: "none" }}>
          <li>
            <AddCircleIcon className="icon" />
            <span>Add Category</span>
          </li>
          </Link>

          <Link to="/purchase/product/editcat" style={{ textDecoration: "none" }}>
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

          <Link to="/purchase/product/editsubcat" style={{ textDecoration: "none" }}>
          <li>
            <EditIcon className="icon" />
            <span>Edit Sub Category</span>
          </li>
          </Link>

          <p className="title">SUPPLIER</p>
          <Link to="/purchase/addsupplier" style={{ textDecoration: "none" }}>
          <li>
            <PersonAddIcon className="icon" />
            <span>Add Supplier</span>
          </li>
          </Link>

          <Link to="/purchase/addcontactno" style={{ textDecoration: "none" }}>
          <li>
            < AddIcCallIcon className="icon" />
            <span>Add Supplier Contact No</span>
          </li>
          </Link>




          <Link to="/purchase/addlocation" style={{ textDecoration: "none" }}>
          <li>
            <AddLocationIcon className="icon" />
            <span>Add Supplier Store Loation</span>
          </li>
          </Link>

          <Link to="/purchase/editsupplier" style={{ textDecoration: "none" }}>
          <li>
            <EditIcon className="icon" />
            <span>Edit Supplier</span>
          </li>
          </Link>

          
          
          <p className="title">PURCHASE ORDER</p>


          <Link to="/purchase/order1" style={{ textDecoration: "none" }}>
          <li>
            <AddCircleIcon className="icon" />
            <span>Add Purchase Order</span>
          </li>
          </Link>
          

          <Link to="/purchase/vieworders" style={{ textDecoration: "none" }}>
          <li>
            <PreviewIcon className="icon" />
            <span>View Purchase Orders</span>
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
      
    </div>
  );
};

export default Sidebar;
