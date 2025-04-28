import { toast } from "react-toastify";
import { library } from "../lib/lib";
import { loginAPI } from "../services/Authserv";

export const useLogin = () => {
    const { setToken, setUser } = library();

    const login = async (pseudo: string, password: string, role: string, navigate: any) => {
        try {
            const response = await loginAPI({ pseudo, password, role });
            if (response && response.data && response.data.token) {
                const userData = response.data;

                if (!userData.token) {
                    throw new Error("No token found in response");
                }

                localStorage.setItem("user", JSON.stringify(userData));
                localStorage.setItem("token", userData.token);
                setToken(userData.token);
                setUser(userData);
                toast.success("User logged in successfully!");

                // Naviguer vers la page d'accueil après la connexion réussie
                navigate("/home");  // Cela garantit que la navigation se fait vers "/home"
            } else {
                throw new Error("Invalid response from server");
            }
        } catch (error: any) {
            console.error(error);
            const errorMessage = error.response?.data?.message || error.message || "Server error";
            toast.warning("Server error: " + errorMessage);
        }
    };

    return { login };
};
