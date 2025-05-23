// /src/Auth/services/validationRegister.tsx
import * as yup from "yup";

export const validationRegister = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Email is required"),
    pseudo: yup.string().min(4, "pseudo must be at least 4 characters").required("pseudo is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    Role: yup.string().required('Required')
});
