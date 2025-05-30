import { toast } from "react-toastify";
import { library } from "../lib/lib";
import { loginAPI } from "../services/Authserv";
import { UserProfile } from "../utils/UserUtil";

import { NavigateFunction } from "react-router-dom";

export const useLogin = () => {
  const { setToken, setUser, setRole } = library(); // Removed `Role` from destructuring, it's a value, not a setter

  const login = async (
    pseudo: string,
    password: string,
    Role: string,
    navigate: NavigateFunction
  ) => {
    try {
      const response = await loginAPI({ pseudo, password, Role: Role });

      const { token, pseudo: userPseudo, Role: userRole } = response?.data || {};

      if (!token || !userPseudo || !userRole) {
        throw new Error("Invalid response from server");
      }

      const user: UserProfile = {
        pseudo: userPseudo,
        Role: userRole,
      };

      // Store in localStorage
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("Role", userRole);
      localStorage.setItem("token", token);

      // Update context
      setToken(token);
      setUser(user);
      setRole(userRole);
      navigate("home"); // Navigate after login
      toast.success("User logged in successfully!");
    } catch (error: any) {
      console.error(error);
      const errorMessage =
        error?.response?.data?.message || error.message || "Server error";
      toast.warning("Login failed: " + errorMessage);
    }
  };

  return { login };
};
