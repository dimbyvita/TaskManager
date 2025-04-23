import { createContext, useEffect } from "react";
import { Props, UserContextType} from "../utils/UserUtil";
import { library } from "../lib/lib";
import { useRegister } from "../Hooks/useRegister";
import { useLogin } from "../Hooks/useLogin";
import { useLogOut } from "../Hooks/useLogOut";
import axios from "axios";

export const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
    const {isReady, setIsReady, token, setToken, setUser, user} = library()

    useEffect(() => {
        const user = localStorage.getItem('user');
        const token = localStorage.getItem("token");
        if (user && token) {
            setUser(JSON.parse(user));
            setToken(token);
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        }
        setIsReady(true);
    }, []);

    const isLoggedIn = (): boolean => {
        return !!user;
    }

    return (
        <UserContext.Provider value={{ user, token, useRegister, useLogin, useLogOut, isLoggedIn }}>
            {isReady ? children : null}
        </UserContext.Provider>
    );
};