import { useState } from 'react'
import { TaskAPI } from '../Services/AddServ';
import { Task } from '../Utils/Interfaces';


export const useAdd = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData]  = useState(null)
    const [error, setError]  = useState(null)

    const addTask = async (props: Task) => {
        setLoading(true);

        try {
            const response = await TaskAPI(props)
            if (response && response.data) {
                setData(response.data)
                setLoading(false);
                return response.data;
            } else {
                setLoading(false);
                throw new Error('Registration failed: No response data');
            }
        } catch (error) {
            setLoading(false)
            throw error;
        }
    }

    const reset = () =>{
        setData(null);
        setError(null);
        setLoading(false);
    }
    
    return { addTask, loading, data, error, reset }
}
