import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexte/AuthContext';

interface ProtectedRouteProps {
  allowedRoles: string[];
  children: React.ReactNode;
  isAuthenticated: boolean
}

export default function ProtectedRoute({ allowedRoles, children }: ProtectedRouteProps) {
  const { user, Role, isAuthenticated } = useAuth();

  // Si pas connecté
  if (!isAuthenticated && !user && !allowedRoles.includes(Role || '')) {
    return <NavLink to="/" replace />;
  } 
  // Tout est ok → afficher les enfants
  return <>{children}</>;
}