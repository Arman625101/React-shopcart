import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../Components/Auth/Login/Login";
import Profile from "../Components/Auth/Profile/Profile";
import Register from "../Components/Auth/Register/Register";
import MyProducts from "../Components/MyProducts/MyProducts";
import Products from "../Components/Products/Products";
import PrivateRoute from "./PrivateRoute";
import { useAuth } from "../context/AuthContext";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import MyProductDetail from "../Components/MyProductDetail";
import { ReactElement } from "react";

const Routes: React.FC = (): ReactElement => {
  const { currentUser } = useAuth();
  return (
    <div className="main-width">
      <Switch>
        <Route exact path="/">
          <Redirect to="/products" />
        </Route>
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={ProductDetails} />
        <PrivateRoute exact path="/myproducts" comp={MyProducts} />
        <PrivateRoute exact path="/myproducts/:id" comp={MyProductDetail} />
        <PrivateRoute path="/profile" comp={Profile} />
        {!currentUser && (
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        )}
        <Route path="*">
          <Redirect to="/products" />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
