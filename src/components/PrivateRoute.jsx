import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { PiBankBold } from "react-icons/pi";

const PrivateRoute = ({ children }) => {
  const { loading, isAuthenticated } = useAuth();

  if (loading) {
    return <i className="loading"><PiBankBold /> </i>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
