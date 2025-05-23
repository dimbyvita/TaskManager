import { useNavigate } from "react-router-dom";
import { library } from "../lib/lib";

export const useLogOut = () => {
    const navigate = useNavigate();
    const { setToken, setUser } = library();

    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
    navigate("/login");
}