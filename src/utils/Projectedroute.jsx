import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user = useSelector((state) => state.user);

  // Not logged in → redirect
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Logged in → allow access
  return <Outlet />;
};

export default ProtectedRoute;
