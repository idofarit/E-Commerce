import { Navigate } from "react-router-dom";

import { useFirebase } from "../Firebase/Firebase";

const PrivateRoute = ({ children }) => {
  const { user } = useFirebase();

  return user ? children : <Navigate to="/" />;
};
export default PrivateRoute;
