import { Product } from "../pages/Product";
import CategoryList from "../pages/CategoryList";
import { Cart } from "../pages/Cart";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../admin/Dashboard";
import List from "../admin/List";
import Single from "../admin/Single";
import New from "../admin/New";
import { productInputs, userInputs } from "../Helpers/formsource";
import Settings from "../pages/Settings";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../redux/apiCalls";
import { userColumns, productColumns } from "../Helpers/datatablesource";
import Success from "../pages/Success";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  const admin = user?.user.profile?.is_admin;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={user ? <Home /> : <Login />} />
          <Route path="register" element={user ? <Home /> : <Register />} />
          <Route path="success" element={<Success />} />
          <Route path="settings" element={user ? <Settings /> : <Register />} />
          <Route path="products">
            <Route path=":category" element={<CategoryList />} />
          </Route>
          <Route path="product">
            <Route path=":id" element={<Product />} />
          </Route>
          {admin && (
            <Route path="admin">
              <Route index element={<Dashboard />} />
              <Route path="users">
                <Route
                  index
                  element={
                    <List
                      data={products}
                      title="Add New User"
                      type="users"
                      columns={productColumns}
                    />
                  }
                />
                <Route
                  path=":userId"
                  element={<Single inputs={userInputs} title="Update User" />}
                />
                <Route
                  path="new"
                  element={<New inputs={userInputs} title="Add New User" />}
                />
              </Route>
              <Route path="products">
                <Route
                  index
                  element={
                    <List
                      data={products}
                      title="Add New Product"
                      columns={productColumns}
                      type="products"
                    />
                  }
                />
                <Route
                  path=":productId"
                  element={
                    <Single inputs={productInputs} title="Update Product" />
                  }
                />
                <Route
                  path="new"
                  element={
                    <New inputs={productInputs} title="Add New Product" />
                  }
                />
              </Route>
            </Route>
          )}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
