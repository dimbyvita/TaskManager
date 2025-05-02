import { useState } from 'react';
import { registerAPI } from '../services/Authserv';

export const useRegister = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData]  = useState(null)
    const [error, setError]  = useState(null)

    const registerUser = async (email: string, pseudo: string, password: string, Role: string) => {
        setLoading(true);
        try {
            const response = await registerAPI({ email, pseudo, password, Role });
            if (response && response.data) {
                setData(response.data)
                setLoading(false);
                return response.data;
            } else {
                setLoading(false);
                throw new Error('Registration failed: No response data');
            }
        } catch (error) {
            setLoading(false);
            throw error;
        }
    };

    const reset = () =>{
        setData(null);
        setError(null);
        setLoading(false);
    }

    return { registerUser, loading, data, error, reset };
};
