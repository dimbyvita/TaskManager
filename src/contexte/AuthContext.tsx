import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useLogin } from '../modules/Auth/Hooks/useLogin';
import { useRegister } from '../modules/Auth/Hooks/useRegister';
import { useLogOut } from '../modules/Auth/Hooks/useLogOut';
import { library } from '../modules/Auth/lib/lib';
import { UserProfile } from '../modules/Auth/utils/UserUtil';
import { NavigateFunction } from 'react-router-dom';

interface AuthContextType {
  user: UserProfile | null;
  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  Role: string | null;
  setRole: React.Dispatch<React.SetStateAction<string | null>>;
  isAuthenticated: boolean;
  isReady: boolean;
  login: (pseudo: string, password: string, Role: string, navigate: NavigateFunction) => Promise<void>;
  useRegister: typeof useRegister;
  useLogOut: typeof useLogOut;
  isLoggedIn: () => boolean;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const { token, setToken, user, setUser, Role, setRole } = library();
  const { login } = useLogin();

  // Initialisation
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    const storedRole = localStorage.getItem('Role');

    if (storedUser && storedToken && storedRole) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
      setRole(storedRole);
      setIsAuthenticated(true);
    } else {
      setUser(null);
      setToken(null);
      setRole(null);
      setIsAuthenticated(false);
    }

    setIsReady(true);
  }, [setUser, setToken, setRole]);

  // Sync axios headers avec le token
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }, [token]);

  // Sync Role si user change (optionnel, mais à revoir selon ta structure)
  useEffect(() => {
    if (user?.Role) {
      setRole(user.Role);
      localStorage.setItem('Role', user.Role);
    }
  }, [user, setRole]);

  const isLoggedIn = (): boolean => !!user;

  if (!isReady) {
    return <div className="text-center mt-10 text-blue-600">Loading...</div>;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        Role,
        setRole,
        isAuthenticated,
        isReady,
        login,
        useRegister,
        useLogOut,
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


// import { createContext, useContext, useEffect, useState } from 'react';
// import { IUser } from '../modules/lib/UserInterface';

// interface AuthContextType {
//   user: IUser | null;
//   setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
//   Role: string | null;
//   setRole: React.Dispatch<React.SetStateAction<string | null>>;
//   isAuthenticated: boolean;
// }

// export const AuthContext = createContext<AuthContextType>({
//   user: null,
//   setUser: () => {},
//   Role: null,
//   setRole: () => {},
//   isAuthenticated: false,
// });

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [user, setUser] = useState<IUser | null>(null);
//   const [Role, setRole] = useState<string | null>(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     const storedRole = localStorage.getItem('Role');
//     const storedToken = localStorage.getItem('token');

//     if (storedUser && storedRole && storedToken) {
//       setUser(JSON.parse(storedUser));
//       setRole(storedRole);
//       setIsAuthenticated(true);
//     }

//     setLoading(false);
//   }, []);

//   if (loading) return <div className="text-center mt-10 text-blue-600">Chargement...</div>;

//   return (
//     <AuthContext.Provider value={{ user, setUser, Role, setRole, isAuthenticated }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

