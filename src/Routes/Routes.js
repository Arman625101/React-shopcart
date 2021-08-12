import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../Components/Auth/Login/Login";
import Register from "../Components/Auth/Register/Register";
import MyProducts from "../Components/MyProducts/MyProducts";
import Products from "../Components/Products/Products";

const Routes = () => {
  return (
    <div className="main-width">
      <Switch>
        <Route exact path="/">
          <Redirect to="/products" />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/myproducts">
          <MyProducts />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
