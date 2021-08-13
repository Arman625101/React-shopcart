import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../Components/contexts/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }
    ></Route>
  );
};

export default PrivateRoute;
