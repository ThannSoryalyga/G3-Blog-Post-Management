import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  // Example: check for token in localStorage or call API
  return !!localStorage.getItem("token");
};

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;