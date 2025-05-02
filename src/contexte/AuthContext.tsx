import { createContext, useContext, useEffect, useState } from 'react';
import { IUser } from '../modules/lib/UserInterface';
import { RouterProvider } from 'react-router-dom';
import { router } from '../Routes/router';

export const AuthContext = createContext<{
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  Role: string | null;
  setRole: React.Dispatch<React.SetStateAction<string | null>>;
}>({
  user: null,
  setUser: () => {},
  Role: null,
  setRole: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [Role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Restore user and role from localStorage on app start
    const storedUser = localStorage.getItem('user');
    const storedRole = localStorage.getItem('Role');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    if (storedRole) {
      setRole(storedRole);
    }

    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <AuthContext.Provider value={{ user, setUser, Role, setRole }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
