import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";


function PrivateRoute({ children, ...rest }) {
    const user = useSelector((state) => state.user?.token);

    return (
      <Route
        {...rest}
        render={({ location }) =>
          user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  export default PrivateRoute;
