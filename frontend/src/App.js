import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/new";
import AddEmployee from "./pages/hr/employeee/add/add"

import AddProduct from "./pages/purchase/add_product/add_product";
import AddCategory from "./pages/purchase/add_category/add_category";
import AddSubCategory from "./pages/purchase/add_sub_category/add_sub_category";
import Viewproduct from "./pages/purchase/view_product/view_product";
import EditCategory from "./pages/purchase/edit_category/edit_category";
import Addsupplier from "./pages/purchase/add_supplier/add_supplier";
import EditsubCategory from "./pages/purchase/edit_sub_category/edit_sub_category";
import Purchasehome from "./pages/purchase/home_purchase/home_purchase";
import ViewAllEmployees from "./pages/hr/employeee/viewAll/viewAll";
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

            <Route path="purchase">
            <Route path="home" element={<Purchasehome />} />
              <Route path="product"> 
                <Route path="add" element={<AddProduct />} />
                <Route path="addcat" element={<AddCategory />} />
                <Route path="addsubcat" element={<AddSubCategory />} />
                <Route path="viewproduct" element={<Viewproduct />} />
                <Route path="editcat" element={<EditCategory />} />
                <Route path="editsubcat" element={<EditsubCategory />} />
                </Route>
                <Route path="addsupplier" element={<Addsupplier />} />
            </Route>

            <Route path="hr">
              <Route path="employee">
                <Route path="add" element={<AddEmployee />} />
                <Route path="viewall" element={<ViewAllEmployees />} />
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
