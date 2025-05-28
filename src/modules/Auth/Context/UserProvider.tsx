import { createContext, useEffect, useState } from "react";
import { Props, UserContextType} from "../utils/UserUtil";
import { library } from "../lib/lib";
import { useRegister } from "../Hooks/useRegister";
import { useLogin } from "../Hooks/useLogin";
import { useLogOut } from "../Hooks/useLogOut";
import axios from "axios";

export const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
    const {isReady, setIsReady, token, setToken, user, Role, setRole} = library()

    const [userState, setUserState] = useState<string | null>()

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('token');
        const storedRole = localStorage.getItem('Role');
      
        console.log(storedRole);
      
        if (storedUser && storedToken && storedRole) {
          setUserState(JSON.parse(storedUser));
          setToken(storedToken);
          setRole(storedRole ?? null);
          axios.defaults.headers.common["Authorization"] = "Bearer " + storedToken;
        }
        setIsReady(true);
      }, []);

    useEffect(() =>{
        console.log('user state changed:', user)
        if (user?.Role){
            setRole(user.Role)
            console.log(user.Role);
            localStorage.setItem('Role', user.Role)
            console.log('localstoragechecking',localStorage.setItem('Role', user.Role));
        } else if (!user) {
            setRole(null)
            localStorage.removeItem('Role')
        }
    }, [user])

    const isLoggedIn = (): boolean => {
        return !!userState;
    }

    return (
        <UserContext.Provider value={{ user, token, Role, useRegister, useLogin, useLogOut, isLoggedIn }}>
            {isReady ? children : null}
        </UserContext.Provider>
    );
};