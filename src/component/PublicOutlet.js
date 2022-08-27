import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateOutlet() {
  const { currentUser } = useAuth();
  return !currentUser ? <Navigate to="/login" /> : <Navigate to="/" />;
}
