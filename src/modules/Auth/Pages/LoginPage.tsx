import { Link, useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../../../contexte/AuthContext";
import TaskManager_Logo from "../../../assets/TaskManager_Logo.png";

export const LoginPage: React.FC = () => {
  const bgStyle = {
    backgroundImage: TaskManager_Logo,
    backgroundSize: "cover",
  };

  const { login } = useAuth();
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLParagraphElement>(null);
  const navigate = useNavigate();

  const [pseudo, setPseudo] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [Role, setRole] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [pseudo, password, Role]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrMsg("");

    try {
      await login(pseudo, password, Role, navigate);
      setPseudo("");
      setPassword("");
      setRole("");
      navigate("/home");
    } catch (error) {
      setErrMsg("Login failed"); // Le détail d’erreur est géré par toast dans useLogin
      if (errRef.current) {
        errRef.current.focus();
      }
    }
  };

  return (
    <>
      <div
        className="w-full min-h-screen overflow-y-auto flex flex-col items-center justify-center bg-lime-400/20 p-4"
        style={bgStyle}
      >
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>

        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl  sm:text-sm md:text-md bg-white/70 backdrop-blur-xl rounded-3xl p-8 sm:p-12">
          <p className="text-2xl bg-gradient-to-br from-teal-900 via-stone-600 to-yellow-900 bg-clip-text text-transparent text-center mb-8">
            Ready to start a new day of productivity?
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username */}
            <div>
              <label
                htmlFor="pseudo"
                className="block mb-1 text-sm font-medium text-teal-800 hover:text-teal-900"
              >
                Username
              </label>
              <input
                required
                type="text"
                id="pseudo"
                ref={userRef}
                value={pseudo}
                onChange={(e) => setPseudo(e.target.value)}
                className="w-full px-4 py-3 border rounded-md border-transparent bg-transparent text-teal-800 hover:text-teal-900 hover:outline-none hover:ring-2 hover:ring-teal-400 transition-all duration-300"
                placeholder="Enter your username"
              />
            </div>

            {/* Role selection */}
            <div>
              <label
                htmlFor="Role"
                className="block mb-1 text-sm font-medium text-teal-800 hover:text-teal-900"
              >
                Role Selection
              </label>
              <select
                id="Role"
                value={Role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-3 border rounded-md border-transparent bg-transparent text-teal-800 hover:text-teal-900 hover:outline-none hover:ring-2 hover:ring-teal-400 transition-all duration-300"
              >
                <option value="">-- Choose your Role --</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="supervisor">Supervisor</option>
              </select>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block mb-1 text-sm font-medium text-teal-800 hover:text-teal-900"
              >
                Password
              </label>
              <input
                required
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-md border-transparent bg-transparent text-teal-800 hover:text-teal-900 hover:outline-none hover:ring-2 hover:ring-teal-400 transition-all duration-300"
                placeholder="Enter your password"
              />
            </div>

            {/* Remember me and Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-teal-800 hover:text-teal-900">
                <input type="checkbox" className="accent-teal-500" />
                Remember me
              </label>
              <Link
                to="/"
                className="text-sm font-medium text-teal-800 hover:text-teal-900 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-md bg-gradient-to-r from-teal-500 to-teal-700 text-lime-100 hover:text-lime-300 font-medium hover:bg-teal-400 transition-all duration-300"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
=======
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
            const response = await axios.post(LOGIN_URL, JSON.stringify({ pseudo, password, Role }),config);
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
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-800 via-stone-400 to-yellow-600 p-6">
              <div className="text-center text-white dark:text-teal-950">
                <h1 className="text-2xl font-bold mb-4">You are logged in!</h1>
                <Link
                  to="/home"
                  className="text-lg underline font-semibold hover:text-yellow-300 transition"
                >
                  Go to Home
                </Link>
              </div>
            </section>
          ) : (
            <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-800 via-stone-400 to-yellow-600 p-4">
              <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
              
              <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-black/80 dark:bg-white/70 backdrop-blur-lg rounded-xl p-6 sm:p-10">
                
                {/* Section title */}
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="flex-grow h-[1.5px] bg-gray-300 rounded-md" />
                  <p className="text-2xl font-semibold text-white dark:text-teal-950">LOGIN</p>
                  <div className="flex-grow h-[1.5px] bg-gray-300 rounded-md" />
                </div>
      
                <p className="text-sm text-white dark:text-teal-950 text-center mb-6">
                  Are you ready to start a new day?
                </p>
      
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Username */}
                  <div>
                    <label htmlFor="pseudo" className="block mb-1 text-sm font-medium text-white dark:text-teal-950">User Name</label>
                    <input
                      required
                      type="text"
                      id="pseudo"
                      ref={userRef}
                      value={pseudo}
                      onChange={(e) => setPseudo(e.target.value)}
                      className="w-full px-4 py-3 border rounded-md border-gray-300 bg-transparent text-white dark:text-teal-950 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Enter your username"
                    />
                  </div>
      
                  {/* Role selection */}
                  <div>
                    <label htmlFor="role" className="block mb-1 text-sm font-medium text-white dark:text-teal-950">Role Selection</label>
                    <select
                      id="role"
                      value={Role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-3 py-3 border rounded-md border-gray-300 bg-transparent text-white dark:text-teal-950 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="">-- Please Choose your Role --</option>
                      <option value="admin">Admin</option>
                      <option value="manager">Manager</option>
                    </select>
                  </div>
      
                  {/* Password */}
                  <div>
                    <label htmlFor="password" className="block mb-1 text-sm font-medium text-white dark:text-teal-950">Password</label>
                    <input
                      required
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 border rounded-md border-gray-300 bg-transparent text-white dark:text-teal-950 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Enter your password"
                    />
                  </div>
      
                  {/* Remember me and Forgot */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 text-sm text-white dark:text-teal-950">
                      <input type="checkbox" className="accent-teal-500" />
                      Remember me
                    </label>
                    <Link to="/" className="text-sm font-medium text-white dark:text-teal-950 hover:underline">
                      Forgot Password?
                    </Link>
                  </div>
      
                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-3 rounded-md bg-white/80 text-black font-medium hover:bg-white transition"
                  >
                    LOGIN
                  </button>
                </form>
              </div>
            </div>
          )}
        </>
      );
      
}
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23
