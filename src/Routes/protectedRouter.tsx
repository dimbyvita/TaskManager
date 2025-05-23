<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
=======
import { Navigate } from 'react-router-dom';
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23
import { useAuth } from '../contexte/AuthContext';

interface ProtectedRouteProps {
  allowedRoles: string[];
  children: React.ReactNode;
<<<<<<< HEAD
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
=======
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

// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../contexte/AuthContext';

// interface ProtectedRouteProps {
//   allowedRoles: string[];
//   children: React.ReactNode;
// }

// export default function ProtectedRoute({ allowedRoles, children }: ProtectedRouteProps) {
//   const { isAuthenticated, Role } = useAuth();

//   if (!isAuthenticated || !allowedRoles.includes(Role || '')) {
//     return <Navigate to="/" replace />;
//   }

//   return <>{children}</>;
// }
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23
