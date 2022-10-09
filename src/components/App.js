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
import { productInputs, userInputs } from "../formsource";

function App() {
  const user = false;
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={user ? <Home /> : <Login />} />
          <Route path="register" element={user ? <Home /> : <Register />} />
          <Route path="products">
            <Route path=":category" element={<CategoryList />} />
          </Route>
          <Route path="product">
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="admin">
            <Route index element={<Dashboard />} />
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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
