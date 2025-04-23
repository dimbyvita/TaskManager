import { useState } from 'react';
import { registerAPI } from '../services/Authserv';

export const useRegister = () => {
    const [loading, setLoading] = useState(false);

    const registerUser = async (email: string, pseudo: string, password: string, role: string) => {
        setLoading(true);
        try {
            const response = await registerAPI({ email, pseudo, password, role });
            if (response && response.data) {
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

    return { registerUser, loading };
};
