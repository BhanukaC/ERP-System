import "./profile.scss";
import { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import HRSidebar from "../../components/hr/sidebar/Sidebar";
import SalesSidebar from "../../components/sales/sales-sidebar/sales-sidebar";
import AdminSidebar from "../../components/admin/admin_sidebar/Admin_sidebar";
import InventorySidebar from "../../components/inventory/inventorySidebar/inventorySidebar";
import PurchaseSidebar from "../../components/purchase_sidebar/purchase_sidebar";
import FianancialSidebar from "../../components/finance_sidebar/finance_sidebar";

import axios from "axios";
import user from "../../auth";

const Profile = () => {
  const [accessLevel, setAccessLevel] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (
      currentPassword === "" ||
      newPassword === "" ||
      confirmPassword === ""
    ) {
      alert(
        "If you need to change password fill 'Current Password' , 'New Password' and 'Confirm New Password'"
      );
    } else {
      if (newPassword !== confirmPassword) {
        alert("'New Password' and 'Confirm New Password' must match");
      } else {
        axios
          .post(
            "https://erp-system-nexeyo.herokuapp.com/auth/changePassword",
            {
              oldPassword: currentPassword,
              newPassword: newPassword,
            },
            {
              withCredentials: true,
              credentials: "include",
            }
          )
          .then((res) => {
            console.log(res);
            if (res.data === "Password changed") {
              alert("Password changed");
              window.location.reload();
            } else {
              if (res.data.error === "Wrong password") {
                alert("Recheck your current password");
              } else {
                alert("Sorry,Try again");
              }
            }
          });
      }
    }
  };

  useEffect(() => {
    axios
      .get(
        "https://erp-system-nexeyo.herokuapp.com/admin/getUserData/" + user.id,
        {
          withCredentials: true,
          credentials: "include",
        }
      )
      .then((res) => {
        console.log(res);
        setEmail(res.data[0].email);
        switch (parseInt(res.data[0].acessLevel)) {
          case 0:
            setAccessLevel("Admin");
            break;
          case 1:
            setAccessLevel("Cashier");
            break;
          case 2:
            setAccessLevel("HR Manager");
            break;
          case 3:
            setAccessLevel("Purchase Manager");
            break;
          case 4:
            setAccessLevel("Warehouse Operator");
            break;
          case 5:
            setAccessLevel("Accountant");
            break;
        }
      });
  }, [""]);

  return (
    <div className="new">
      {accessLevel === "Admin" ? <AdminSidebar /> : null}
      {accessLevel === "Cashier" ? <SalesSidebar /> : null}
      {accessLevel === "HR Manager" ? <HRSidebar /> : null}
      {accessLevel === "Purchase Manager" ? <PurchaseSidebar /> : null}
      {accessLevel === "Warehouse Operator" ? <InventorySidebar /> : null}
      {accessLevel === "Accountant" ? <FianancialSidebar /> : null}
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Profile</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput">
                <label>UID</label>
                <input type="text" value={user.id} disabled />
              </div>
              <div className="formInput">
                <label>User Name</label>
                <input type="text" disabled value={user.username} />
              </div>
              <div className="formInput">
                <label>Access Level</label>
                <input type="text" disabled value={accessLevel} />
              </div>

              <div className="formInput">
                <label>Email</label>
                <input type="email" value={email} disabled />
              </div>

              <div className="formInput">
                <label>Current Password</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => {
                    setCurrentPassword(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Confirm New Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
              </div>

              <div className="break"></div>
              {newPassword !== "" &&
                currentPassword !== "" &&
                confirmPassword !== "" && (
                  <button onClick={submitForm}>Change Password</button>
                )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
