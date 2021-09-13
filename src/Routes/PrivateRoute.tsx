import { ReactNode } from "react";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface IProps {
  exact?: boolean;
  path: string;
  comp: React.FC<RouteComponentProps>;
}

const PrivateRoute: React.FC<IProps> = ({ comp: Component, ...rest }) => {
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
