import user from "../../auth";
import { Navigate } from "react-router-dom";

const ProtectedRouteUser = ({ redirectPath = "/", children }) => {
  const jwt = getCookie("access-token");

  if (jwt === "") {
    return <Navigate to={redirectPath} replace />;
  }

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRouteUser;

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
