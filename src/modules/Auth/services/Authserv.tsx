import axios from "axios";
import { useError } from "../Hooks/useError";
import { UserProfileToken } from "../utils/UserUtil";

const apil = "http://localhost:4257/auth/login";
const apir = "http://localhost:4257/auth/register";

type Authentication = {
    pseudo: string;
    password: string;
    role: string;
    email?: string;
};

export const loginAPI = async (props: Authentication) => {
    try {
        const data = await axios.post<UserProfileToken>(apil , {
            pseudo: props.pseudo,
            password: props.password,
            role: props.role
        });
        return data;
    } catch (error) {
        useError(error);
    }
};

export const registerAPI = async (props: Authentication) => {
    try {
        const response = await axios.post(apir , {
            email: props.email,
            pseudo: props.pseudo,
            password: props.password,
            role: props.role
        });
        return response;
    } catch (error) {
        useError(error);
        throw error;  // Ensure the error is propagated
    }
};
