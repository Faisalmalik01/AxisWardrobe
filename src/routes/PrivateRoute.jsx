import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useRef } from "react";
import toast from "react-hot-toast";

export default function PrivateRoute({ children }) {
  const { user } = useAuth();
  const shownRef = useRef(false);

  if (!user) {
    if (!shownRef.current) {
      toast.error("Please login to continue");
      shownRef.current = true;
    }
    return <Navigate to="/login" replace />;
  }

  return children;
}
