import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../modules/Auth/Context/UserProvider';

interface ProtectedRouteProps {
  allowedRoles: string[];
  Role: string | null;
  children: React.ReactNode;
}

export default function ProtectedRoute({ allowedRoles, children }: ProtectedRouteProps) {
    const { Role } = useContext(UserContext)

  if (!Role || !allowedRoles.includes(Role)) {
    return <Navigate to="/" replace />; // redirige vers login 
  } 

  return <>{children}</>;
}
