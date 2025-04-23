export type UserProfileToken = {
    pseudo: string;
    email: string;
    token: string;
}

export type UserContextType = {
    user: UserProfile | null;
    token: string | null;
    useRegister: (email: string, pseudo: string, password: string, role:string) => void;
    useLogin: (pseudo: string, password: string, role:string) => void;
    useLogOut: () => void;
    isLoggedIn: () => boolean;
}

export type UserProfile = {
    pseudo: string;
    email: string;
}

export type Props = { children: React.ReactNode};

export type LoginFormsInputs = {
    pseudo: string;
    password: string;
    role:string;
}

export type RegisterFormInputs = {
    email: string;
    pseudo: string;
    password: string; 
    role:string;
}