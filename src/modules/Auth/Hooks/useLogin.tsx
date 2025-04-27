import { toast } from "react-toastify";
import { library } from "../lib/lib";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../services/Authserv";

export const useLogin = () => {
    const navigate = useNavigate();
    const { setToken, setUser } = library();

    const login = async (pseudo: string, password: string, role: string) => {
        try {
            const response = await loginAPI({ pseudo, password, role });
            if (response && response.data && response.data.token) {
                const userData = response.data;

                if (!userData.token) {
                    throw new Error("No token found in response");
                }

                localStorage.setItem("user", JSON.stringify(userData));
                localStorage.setItem("token", userData.token);
                setUser(userData);
                setToken(userData.token);
                toast.success("User logged in successfully!");
                navigate("/home");
            } else {
                throw new Error("Invalid response from server");
            }
        } catch (error: any) {
            const errorMessage = error.response?.data?.message || error.message || "Server error";
            toast.warning("Server error: " + errorMessage);
        }
    };

    return { login };
};
