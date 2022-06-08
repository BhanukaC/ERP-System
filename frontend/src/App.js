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
import EditSuppler from "./pages/purchase/edit_supplier/edit_supplier";
import EditsubCategory from "./pages/purchase/edit_sub_category/edit_sub_category";
import Purchasehome from "./pages/purchase/home_purchase/home_purchase";
import ViewAllEmployees from "./pages/hr/employeee/viewAll/viewAll";
import EditEmployee from "./pages/hr/employeee/edit/edit";
import AddDependent from "./pages/hr/dependent/add/add";
import ViewAllDependents from "./pages/hr/dependent/viewAll/viewAll";
import EditDependent from "./pages/hr/dependent/edit/edit";
import AddOtType from "./pages/hr/otTypes/add/add";
import ViewAllOtTypes from "./pages/hr/otTypes/viewAll/viewAll";
import EditOtType from "./pages/hr/otTypes/edit/edit";
import AddOtRecord from "./pages/hr/otRecord/add/add";
import ViewAllOtRecords from "./pages/hr/otRecord/viewAll/viewAll";
import ViewAllOtRecordForEmployee from "./pages/hr/otRecord/viewAllForEmployee/viewAll";
import AddAdvance from "./pages/hr/advance/add/add";
import ViewAllAdvance from "./pages/hr/advance/viewAll/viewAll";
import ViewAllAdvanceForEmployee from "./pages/hr/advance/viewAllForEmployee/viewAll";
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
            <Route path="home" element={<Purchasehome/>} />
              <Route path="product"> 
                <Route path="add" element={<AddProduct />} />
                <Route path="addcat" element={<AddCategory />} />
                <Route path="addsubcat" element={<AddSubCategory />} />
                <Route path="viewproduct" element={<Viewproduct />} />
                <Route path="editcat" element={<EditCategory />} />
                <Route path="editsubcat" element={<EditsubCategory />} />
                </Route>
                <Route path="addsupplier" element={<Addsupplier />} />
                <Route path="editsupplier" element={<EditSuppler />} />
                
            </Route>

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
                <Route path="viewall/" element={<ViewAllOtTypes />} />
                <Route path="edit/:otID" element={<EditOtType />} />
              </Route>
              <Route path="otRecord">
                <Route path="add" element={<AddOtRecord />} />
                <Route path="viewall/" element={<ViewAllOtRecords />} />
                <Route path="viewall/:EID" element={<ViewAllOtRecordForEmployee />} />
              </Route>
              <Route path="advance">
                <Route path="add" element={<AddAdvance />} />
                <Route path="viewall/" element={<ViewAllAdvance />} />
                <Route path="viewall/:EID" element={<ViewAllAdvanceForEmployee />} />
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
