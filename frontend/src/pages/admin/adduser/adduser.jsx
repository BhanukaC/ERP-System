import "./adduser.scss";
import { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import axios from "axios";
import Admin_sidebar from "../../../components/admin/admin_sidebar/Admin_sidebar";

const AddUser = () => {

  const [UID, setUID] = useState(0);

  const [userName, setUserName] = useState("");
  const [acessLevel, setAcessLevel] = useState(0);
  const [email, setEmail] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5000/admin/register",
        {
          username: userName,
          acessLevel: acessLevel,
          email: email
        }
        
      )
      .then((res) => {
        alert(res);
        console.log(res);
      });
  };

  return (
    <div className="new">
      <Admin_sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add User</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>

            <div className="formInput">
                <label>UID</label>
                <input
                  type="number"
                  value={UID}
                  onChange={(e) => {
                    setUID(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>User Name</label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <br></br>

              
              <div className="dropdown">
              <label for="acess-level">Choose acess level: </label>
              <select name="acess-level" id="acess-level">
                <option value="1"
                onChange={(e) => {
                  setAcessLevel(e.target.value);
                }}
                >Admin</option>
                <option value="2">Dave</option>
                <option value="3">Pumpernickel</option>
                <option value="4">Reeses</option>
              </select>
              </div>

              <div className="break"></div>
              <button onClick={submitForm}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
