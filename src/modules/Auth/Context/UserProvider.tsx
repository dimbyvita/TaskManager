import { createContext, useEffect, useState } from "react";
import { Props, UserContextType} from "../utils/UserUtil";
import { library } from "../lib/lib";
import { useRegister } from "../Hooks/useRegister";
import { useLogin } from "../Hooks/useLogin";
import { useLogOut } from "../Hooks/useLogOut";
import axios from "axios";

export const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
    const {isReady, setIsReady, token, setToken, user, setUser,} = library()

    const [userState, setUserState] = useState<string | null>()
    const [Role, setRole] = useState<string | null>(null)

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('token');
        const storedRole = localStorage.getIteme('role')
        if (storedUser && storedToken && storedRole) {
            setUserState(JSON.parse(storedUser));
            setToken(storedToken );
            setRole(storedRole ?? null);
            axios.defaults.headers.common["Authorization"] = "Bearer " + storedToken ;
        }
        setIsReady(true);
    }, []);

    const isLoggedIn = (): boolean => {
        return !!userState;
    }

    return (
        <UserContext.Provider value={{ user, token, Role, useRegister, useLogin, useLogOut, isLoggedIn }}>
            {isReady ? children : null}
        </UserContext.Provider>
    );
};