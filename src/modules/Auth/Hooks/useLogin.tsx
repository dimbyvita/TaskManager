import { toast } from "react-toastify";
import { library } from "../lib/lib";
import { loginAPI } from "../services/Authserv";
import { UserProfile } from "../utils/UserUtil";
<<<<<<< HEAD
import { NavigateFunction } from "react-router-dom";
=======
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23

export const useLogin = () => {
  const { setToken, setUser, setRole } = library(); // Removed `Role` from destructuring, it's a value, not a setter

  const login = async (
    pseudo: string,
    password: string,
<<<<<<< HEAD
    Role: string,
    navigate: NavigateFunction
  ) => {
    try {
      const response = await loginAPI({ pseudo, password, Role: Role });
=======
    role: string, // lowercase `role` to match your backend naming convention
    navigate: any
  ) => {
    try {
      const response = await loginAPI({ pseudo, password, Role: role });
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23

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
<<<<<<< HEAD
      navigate("home"); // Navigate after login
      toast.success("User logged in successfully!");
=======

      toast.success("User logged in successfully!");
      navigate("/home"); // Navigate after login
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23
    } catch (error: any) {
      console.error(error);
      const errorMessage =
        error?.response?.data?.message || error.message || "Server error";
      toast.warning("Login failed: " + errorMessage);
    }
  };

  return { login };
};
