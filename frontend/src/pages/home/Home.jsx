import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    axios
      .post(
        "http://localhost:5000/auth/login",
        {
          username: "Bhanuka",
          password: "964418",
        },
        { withCredentials: true, credentials: "include" }
      )
      .then((res) => {
        // console.log(res);
      });
  }, [""]);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
