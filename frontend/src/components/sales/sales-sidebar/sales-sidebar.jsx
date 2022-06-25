import "./sales-sidebar.scss";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined' ;
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import AddIcon from '@mui/icons-material/Add';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from "react-router-dom";

const Sidebar = () => {

  return (
    <div className="salesSidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
        <span className="logo"> <span className="name">Quick</span> ERP</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">CUSTOMER</p>
          <Link to="/sales/customer/add" style={{ textDecoration: "none" }}>
            <li>
              <PersonAddIcon className="icon" />
              <span>Add Customer</span>
            </li>
          </Link>
          <Link to="/sales/customer/viewall" style={{ textDecoration: "none" }}>
            <li>
              <EventNoteIcon className="icon" />
              <span>View Customer Details</span>
            </li>
          </Link>
          <Link to="/sales/customerContactNumber/add" style={{ textDecoration: "none" }}>
            <li>
              <AddIcon className="icon" />
              <span>Add Customer Contact Details</span>
            </li>
          </Link>
          <Link to="/sales/customerDeliveryAddress/add" style={{ textDecoration: "none" }}>
            <li>
              <AddCircleIcon className="icon" />
              <span>Add Customer Delivery Address</span>
            </li>
          </Link>
          <p className="title">SALES ORDER</p>
          <Link to="/sales/salesOrder/add" style={{ textDecoration: "none" }}>
            <li>
              <PlaylistAddCheckIcon className="icon" />
              <span>Add Sales Order Details</span>
            </li>
          </Link>
          <Link to="/sales/salesOrder/viewall" style={{ textDecoration: "none" }}>
            <li>
              <DocumentScannerIcon className="icon" />
              <span>View Sales Order Details</span>
            </li>
          </Link>
          <p className="title">SALES RETURN ORDER</p>
          <Link to="/sales/salesReturnOrder/add" style={{ textDecoration: "none" }}>
            <li>
              <PlaylistAddIcon className="icon" />
              <span>Add Sales Return Order</span>
            </li>
          </Link>
          <Link to="/sales/salesReturnOrder/viewall" style={{ textDecoration: "none" }}>
            <li>
              <DocumentScannerIcon className="icon" />
              <span>View Sales Return Order Details</span>
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
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
