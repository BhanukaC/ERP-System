import user from "../../auth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ level, redirectPath = "/", children }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  if (user.acessLevel !== level && user.acessLevel !== 0) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default ProtectedRoute;
