import axios from "axios";
import { useError } from "../Hooks/useError";
import { UserProfileToken } from "../utils/UserUtil";

const api = "http://localhost:4257/auth/login";

type Authentication = {
    pseudo: string;
    password: string;
    role: string;
    email?: string;
};

export const loginAPI = async (props: Authentication) => {
    try {
        const data = await axios.post<UserProfileToken>(api , {
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
        const response = await axios.post(api , {
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
