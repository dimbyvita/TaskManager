import { createContext, useContext, useState } from 'react';
import { IUser } from '../modules/lib/UserInterface';


const AuthContext = createContext<{
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}>({
  user: null,
  setUser: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
