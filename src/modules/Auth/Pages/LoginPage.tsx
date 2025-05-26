import { Link, useNavigate } from "react-router-dom";
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

