import { toast } from "react-toastify";
import { library } from "../lib/lib";
import { loginAPI } from "../services/Authserv";
import { UserProfile } from "../utils/UserUtil";

export const useLogin = () => {
    const { setToken, setUser } = library();

    const login = async (pseudo: string, password: string, role: string, navigate: any) => {
        try {
            const response = await loginAPI({ pseudo, password, role });
            if (response?.data?.token && response.data?.pseudo &&  response.data?.Role) {
                const token = response.data.token;
                const user: UserProfile ={
                    pseudo: response.data.pseudo,
                    Role: response.data.Role
                }

                if (!token) {
                    throw new Error("No token found in response");
                }

                localStorage.setItem("pseudo", JSON.stringify(user));
                localStorage.setItem("Role", user.Role);
                localStorage.setItem("token", token);
                setToken(token);
                setUser(user);
                toast.success("User logged in successfully!");

                // Naviguer vers la page d'accueil après la connexion réussie
                navigate("/home");  // Cela garantit que la navigation se fait vers "/home"
            } else {
                throw new Error("Invalid response from server");
            }
        } catch (error: any) {
            console.error(error);
            const errorMessage = error?.response?.data?.message || error.message || "Server error";
            toast.warning("Server error: " + errorMessage);
        }
    };

    return { login };
};
