export type UserProfileToken = {
    pseudo: string;
    Role: string;
    token: string;
}

export type UserProfile = {
    pseudo: string;
    Role: string;
}

export type Props = { children: React.ReactNode};

export type LoginFormsInputs = {
    pseudo: string;
    password: string;
    Role:string;
}

export type RegisterFormInputs = {
    email: string;
    pseudo: string;
    password: string; 
    Role:string;
}