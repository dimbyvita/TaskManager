import { useLogin } from "../Hooks/useLogin"
import { LoginFormsInputs } from "../utils/UserUtil"

const { login } = useLogin();
export const handleLogin = (form: LoginFormsInputs) => {
  login(form.pseudo, form.password, form.role);
} 
