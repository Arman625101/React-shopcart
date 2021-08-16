import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../Components/Auth/Login/Login";
import Profile from "../Components/Auth/Profile/Profile";
import Register from "../Components/Auth/Register/Register";
import MyProducts from "../Components/MyProducts/MyProducts";
import Products from "../Components/Products/Products";
import PrivateRoute from "./PrivateRoute";
import { useAuth } from "../Components/contexts/AuthContext";

const Routes = () => {
  const { currentUser } = useAuth();
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
