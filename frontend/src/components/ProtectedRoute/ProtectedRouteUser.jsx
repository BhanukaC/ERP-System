import user from "../../auth";
import { Navigate } from "react-router-dom";

const ProtectedRouteUser = ({ redirectPath = "/", children }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRouteUser;
