import { useForm } from "react-hook-form";
import { useLogin } from "../Hooks/useLogin"; 
import { LoginFormsInputs, Props } from "../utils/UserUtil";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationLogin } from "../services/validationLogin";
import { Link } from "react-router-dom";
import { useChangeFormat } from "../Hooks/useChangeFormat";

export const LoginPage = (props: Props) => {
    const { activeComponent, handleChange } = useChangeFormat();
    const { login } = useLogin();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormsInputs>({
        resolver: yupResolver(validationLogin),
    });

    const onSubmit = (data: LoginFormsInputs) => {
        login(data.pseudo, data.password, data.role);
    };

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mb-20 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <label htmlFor="pseudo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        pseudo
                                    </label>
                                    <input
                                        type="text"
                                        id="pseudo"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="pseudo"
                                        {...register("pseudo")}
                                    />
                                    {errors.pseudo && <p className="text-red-500">{errors.pseudo.message}</p>}
                                </div>
                                <div className='flex justify-end '>
                                    <select className='border-none p-3 rounded-lg' 
                                        // onChange={handleChange} 
                                        {...register("role")}>
                                        <option value="admin">admin</option> {/* Option pour la vue mensuelle */}
                                        <option value="Supervisor">Supervisor</option> {/* Option pour la vue hebdomadaire */}
                                        <option value="user">user</option> {/* Option pour la vue quotidienne */}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        {...register("password")}
                                    />
                                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <Link to={""} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                        Forgot password?
                                    </Link>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Sign in
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet?{" "}
                                    <Link to={"/register"} className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                                        Sign up
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LoginPage;
