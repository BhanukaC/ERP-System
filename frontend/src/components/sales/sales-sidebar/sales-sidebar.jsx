import "./sales-sidebar.scss";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EventNoteIcon from '@mui/icons-material/EventNote';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined' ;
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
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
          <p className="title">SALES ORDER</p>
          <li>
            <FormatListNumberedIcon className="icon" />
            <span>Add Sales Order</span>
          </li>
          <li>
            <SpeakerNotesIcon className="icon" />
            <span>View Sales Order</span>
          </li>
          <p className="title">SALES RETURN ORDER</p>
          <Link to="/sales/salesReturnOrder/add" style={{ textDecoration: "none" }}>
            <li>
              <FormatListBulletedIcon className="icon" />
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
