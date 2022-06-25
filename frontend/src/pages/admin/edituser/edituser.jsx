//import "../../form.scss";
import Navbar from "../../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Admin_sidebar from "../../../components/admin/admin_sidebar/Admin_sidebar";

const EditUserDetails = () => {
  const [userName, setUserName] = useState("");
  const [acessLevel, setAcessLevel] = useState("");
  const [email, setEmail] = useState("");
  const [town, setTown] = useState("");

  const { UID } = useParams();
  console.log(UID);

  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/getUserData/" + UID, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        setUserName(res.data[0].userName);
        setAcessLevel(res.data[0].acessLevel);
        setEmail(res.data[0].email);
        setTown(res.data[0].town);
      });
  }, [""]);

  const submitForm = (e) => {
    e.preventDefault();
    if (userName === "" || acessLevel === "" || email === "" || town === "") {
      alert("Fill the required fields");
    } else {
      let data = {
        userName: userName,
        acessLevel: acessLevel,
        email: email,
        town: town
      };

      axios
        .put("http://localhost:5000/admin/update/" + UID, data, {
          withCredentials: true,
          credentials: "include",
        })
        .then((res) => {
          console.log(res.data);
          if (res.data === "User updated") {
            alert("User details Updated");
          } else {
            alert("Try again");
          }
        });
    }
  };

  return (
    <div className="new">
      <Admin_sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="topContainer">
          <h1>Edit User Details</h1>
        </div>
        <div className="bottomContainer">
          <div className="right">
            <form>
              <div className="formInput">
                <label>Acess Level</label>
                <input
                  type="number"
                  value={acessLevel}
                  onChange={(e) => {
                    setAcessLevel(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Town</label>
                <input
                  type="text"
                  value={town}
                  onChange={(e) => {
                    setTown(e.target.value);
                  }}
                />
              </div>
              <div className="break"></div>
              <button onClick={submitForm}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserDetails;
