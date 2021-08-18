import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";
import Login from "../Components/Auth/Login/Login";
import Profile from "../Components/Auth/Profile/Profile";
import Register from "../Components/Auth/Register/Register";
import MyProducts from "../Components/MyProducts/MyProducts";
import Products from "../Components/Products/Products";
import PrivateRoute from "./PrivateRoute";
import { useAuth } from "../Components/contexts/AuthContext";
import ProductDetails from "../Components/ProductDetails/ProductDetails";

const Routes = () => {
  const { currentUser, profile } = useAuth();
  return (
    <div className="main-width">
      <Switch>
        <Route exact path="/">
          <Redirect to="/products" />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/:id" component={ProductDetails} />
        <Route path="/myproducts">
          <MyProducts />
        </Route>
        <PrivateRoute path="/profile" comp={Profile} />
        {!currentUser && (
          <>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </>
        )}
        <Route path="*">
          <Redirect to="/products"></Redirect>
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
