import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexte/AuthContext';

interface ProtectedRouteProps {
  allowedRoles: string[];
  children: React.ReactNode;
}

export default function ProtectedRoute({ allowedRoles, children }: ProtectedRouteProps) {
  const { user, Role } = useAuth();

  // Not logged in → redirect to login
  if (!user && !allowedRoles.includes(Role || '')) {
    return <Navigate to="/" replace />;
  }
  // Allowed → render children
  return <>{children}</>;
}
