import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/new";
import AddEmployee from "./pages/hr/employeee/add/add"
import ViewAllEmployees from "./pages/hr/employeee/viewAll/viewAll";
import EditEmployee from "./pages/hr/employeee/edit/edit";
import AddDependent from "./pages/hr/dependent/add/add";
import ViewAllDependents from "./pages/hr/dependent/viewAll/viewAll";
import EditDependent from "./pages/hr/dependent/edit/edit";
import AddOtType from "./pages/hr/otTypes/add/add";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

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
              <Route index element={<AddEmployee />} />
              <Route path="employee">
                <Route path="add" element={<AddEmployee />} />
                <Route path="viewall" element={<ViewAllEmployees />} />
                <Route path="edit/:EID" element={<EditEmployee />} />
              </Route>
              <Route path="dependent">
                <Route path="add" element={<AddDependent />} />
                <Route path="viewall/:EID" element={<ViewAllDependents />} />
                <Route path="edit/:DID" element={<EditDependent />} />
              </Route>
              <Route path="otType">
                <Route path="add" element={<AddOtType />} />
                {/* <Route path="viewall/:EID" element={<ViewAllDependents />} />
                <Route path="edit/:DID" element={<EditDependent />} /> */}
              </Route>
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
