import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  allowedRoles: string[];
  userRole: string | null;
  children: React.ReactNode;
}

export default function ProtectedRoute({ allowedRoles, userRole, children }: ProtectedRouteProps) {
  if (!userRole || !allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />; // redirige vers login 
  } 

  return <>{children}</>;
}
