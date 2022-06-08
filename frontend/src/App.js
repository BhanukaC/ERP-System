import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/new";
import AddEmployee from "./pages/hr/employeee/add/add"
import ViewAllEmployees from "./pages/hr/employeee/viewAll/viewAll";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

import AddUser from "./pages/admin/adduser/adduser";
import DeleteUser from "./pages/admin/deleteuser/deleteuser";
import UpdateUser from "./pages/admin/updateuser/updateuser";
import ViewAllUsers from "./pages/admin/viewAll/viewAll";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />

            <Route path="hr">
              <Route path="employee">
                <Route path="add" element={<AddEmployee />} />
                <Route path="viewall" element={<ViewAllEmployees />} />
              </Route>
            </Route>

            <Route path="admin">
              <Route path="adduser" element={<AddUser />} />
              <Route path="deleteuser" element={<DeleteUser />} />
              <Route path="updateuser" element={<UpdateUser />} />
              <Route path="viewAll" element={<ViewAllUsers />} />
            </Route>

            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
