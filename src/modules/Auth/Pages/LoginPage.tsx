import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { AuthContext } from "../../../contexte/AuthContext";
import axios from '../../../api/axios';
import { IUser } from "../../lib/UserInterface";
import { AxiosRequestConfig } from "axios";

const LOGIN_URL = '/auth/login';

export const LoginPage: React.FC = () => {
    const { user, setUser } = useContext(AuthContext);
    const userRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLParagraphElement>(null);
    const navigate = useNavigate()

    const [pseudo, setPseudo] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [Role, setRole]= useState<string>('');
    const [errMsg, setErrMsg] = useState<string>('');
    const [success, setSuccess] = useState<boolean>(false);

    useEffect(() => {
        if (userRef.current) {
            userRef.current.focus();
        }
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [pseudo, password, Role]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const config: AxiosRequestConfig = {   
                headers: { 'Content-Type': 'application/json' }, // Corrected Content-Type
                withCredentials: true,
            }
            const response = await axios.post(LOGIN_URL, JSON.stringify({ pseudo, password, role: Role }),config);
            console.log(JSON.stringify(response?.data));
            const foundUser: IUser = response?.data;
            setUser(foundUser);
            setPseudo('');
            setRole('');
            setPassword('');
            setSuccess(true);
            navigate("/home")
        } catch (err: any) { //Type assertion for err
            if (!err?.response) {
                setErrMsg('No server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            if (errRef.current) {
                errRef.current.focus();
            }
        }
    };

    return (
        <>

            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <Link to="/home">Go to Home</Link>
                    </p>
                </section>
            ) : (

            <div className="w-full bg-gradient-to-br from-teal-800 via-stone-400 to-yellow-600 min-h-screen flex items-center justify-center lg:px-8 loginpage">
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <div className="sm:w-[100%] md:w-[50%] py-10 px-12 bg-black dark:bg-white/70 backdrop-blur-lg rounded-xl logincard">


                    {/* this is just a separation  */}
                    <div className="w-full h-auto flex items-center gap-x-1 my-5">
                        <div className="w-1/2 h-[1.5px] bg-gray-700/40 rounded-md"></div>
                        <p className="text-3xl text-gray-700 font-semibold px-2">LOGIN</p>
                        <div className="w-1/2 h-[1.5px] bg-gray-700/40 rounded-md"></div>
                    </div>
                    <p className="text-sm text-white dark:text-teal-950 font-normal mb-8">
                        Are you ready to start a new day?
                    </p>
                    <form onSubmit={handleSubmit}>
                        {/* Real Login part */}
                        <div className="w-full h-auto mb-5">
                            <label htmlFor="pseudo" className="block text-white dark:text-teal-950 mb-1"> User name </label>
                            <input
                                required
                                type="text"
                                className="w-full h-12 p-4 outline-none bg-transparent border-[2px] rounded-md border-gray-200/40 text-white dark:text-teal-950"
                                id="pseudo" // Changed id to "pseudo" to match label's htmlFor
                                ref={userRef}
                                onChange={(e) => setPseudo(e.target.value)}
                                value={pseudo}
                                placeholder="Enter your username"
                            />

                        </div>

                        <div className="w-full h-auto mb-5 text-white dark:text-teal-950">
                            <label htmlFor="role" className="block text-white dark:text-teal-950 mb-1"> Role selection </label>
                            <select 
                                className="w-full text-sm h-12 p-2 outline-none bg-transparent border-[2px] rounded-md border-gray-200/40 text-white dark:text-teal-950" 
                                id="role"
                                value={Role}
                                onChange={(e)  => setRole(e.target.value)}
                            >
                                <option value="">--Please Choose your role--</option>
                                <option value="admin">Admin</option>
                                <option value="manager">Manager</option>
                            </select>

                        </div>

                        <div className="w-full h-auto mb-5 text-white dark:text-teal-950">
                            <label htmlFor="password" className="block text-white dark:text-teal-950 mb-1"> Password </label>
                            <input
                                required
                                type="password"
                                className="w-full h-12 p-4 outline-none bg-transparent border-[2px] rounded-md border-gray-200/40 text-white dark:text-teal-950"
                                id="password" // Changed id to "password" to match label's htmlFor
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                placeholder="Enter your password"
                            />
                        </div>

                        {/* the bottoms */}
                        <div className="w-full h-auto flex items-center justify-between mb-5">
                            <div className="flex items-center gap-x-2">
                                <input 
                                    type="checkbox" 
                                    className="w-4 h-4 accent-gray-200/20 border border-gray-200/20 rounded-md text-white dark:text-teal-950" 
                                    id="remember" 
                                />
                                <label htmlFor="remember" className="text-[0.875rem] text-white dark:text-teal-950 ">Remember me</label>
                            </div>
                            <div className="w-auto h-auto">
                                <Link to='/' className="text-white dark:text-teal-950 text-sm font-medium hover:underline ease-in-out duration-500">Forgot Password?</Link>
                            </div>
                        </div>
                        <button className="w-full h-12 outline-none bg-white/70 rounded-md text-lg text-black font-medium mb-7">
                            LOGIN
                        </button>
                    </form>
                </div>
            </div>
            )}
        </>
    )
}