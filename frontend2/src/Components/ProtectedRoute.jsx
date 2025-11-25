import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user , doctor } = useSelector((state) => state.user);

console.log(user , doctor)
  // If user not logged in
  if (!user) return <Navigate to="/login" replace />;

  // Optional: Check roles

  if (user.role == "doctor" && doctor === null) {
    return <Navigate to={`/doctor-details-form`} replace />;
  } else if (
    user.role == "doctor" &&
    doctor.profile_submitted &&
    !doctor.approved
  ) {
    return <Navigate to={`/request-to-admin`} replace />;
  } else if (
    user.role == "doctor" &&
    doctor.profile_submitted &&
    doctor.approved
  ) {
    return <Navigate to={`/${user.role}-dashboard`} replace />;
  }

  
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to={`/${user.role}-dashboard`} replace />;
  }

  return children;
  
};

export default ProtectedRoute;
