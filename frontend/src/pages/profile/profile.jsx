import "./profile.scss";
import { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/hr/sidebar/Sidebar";
import axios from "axios";
import user from "../../auth";

const Profile = () => {
  const [accessLevel, setAccessLevel] = useState("");
  const [email, setEmail] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (true) {
      alert("Please fill all required fields");
    } else {
      let data = {};

      axios
        .post("http://localhost:5000/hr/advance/add", data, {
          withCredentials: true,
          credentials: "include",
        })
        .then((res) => {
          console.log(res);
          if (res.data === "Give an advance") {
            alert("Give an advance");
          } else {
            alert("Sorry,Try again");
          }
        });
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/getUserData/" + user.id, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        setEmail(res.data[0].email);
        switch (parseInt(res.data[0].acessLevel)) {
          case 0:
            setAccessLevel("Admin");
            break;
          case 1:
            window.location = "Cashier";
            break;
          case 2:
            window.location = "Manager";
            break;
          case 3:
            window.location = "Purchase Manager";
            break;
          case 4:
            window.location = "Warehouse Operator";
            break;
          case 5:
            window.location = "Accountant";
            break;
        }
      });
  }, [""]);

  return (
    <div className="new">
      <Sidebar />
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
                <input type="password" value={""} disabled />
              </div>

              <div className="formInput">
                <label>New Password</label>
                <input type="password" value={""} disabled />
              </div>

              <div className="formInput">
                <label>Confirm New Password</label>
                <input type="password" value={""} disabled />
              </div>

              <div className="break"></div>
              <button onClick={submitForm}>Change Password</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
