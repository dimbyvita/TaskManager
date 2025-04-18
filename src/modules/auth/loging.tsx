import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/auth';
import { useAuth } from '../../contexte/AuthContext';
import { FaUnlockAlt, FaUserTie } from 'react-icons/fa';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await login(email, password) ;
    setUser(res.data.user);
    navigate('/dashboard');
  };

  return (
    <div className="flex h-screen min-h-full w-full bg-gradient-to-r from-yellow-200 via-slate-500 to-green-600 justify-center items-center px-6 py-12 lg:px-8">
          <section className="rounded-lg px-6 py-20 lg:px-8 bg-white/20 w-96">
            <div className='w-full flex justify-center'>
              <div className='w-32 h-32 bg-white bg-opacity-20 backdrop-blur-lg rounded-full flex items-center justify-center'>
                <FaUserTie className='h-24 w-24 text-slate-50/20' />
              </div>
            </div>
            {/* <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p> */}
            <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-400">
              Sign In
            </h1>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className='relative flex items-center'>
                  <FaUserTie className='absolute left-2' />
                  <input
                    type="text"
                    id="userName"
                    // ref={userRef}
                    autoComplete="off"
                    // onChange={(e) => setFormData({ userName: e.target.value })}
                    // value={formData.userName}
                    required
                    placeholder="User Name"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className='relative flex items-center'>
                  <FaUnlockAlt className='absolute left-2' />
                  <input
                    type="password"
                    id="password"
                    // onChange={(e) => setFormData({ password: e.target.value })}
                    // value={formData.password}
                    required
                    placeholder="Password"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <button
                  type="submit"
                  className="cursor-pointer inline-flex w-full justify-center rounded-md bg-blue-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                >
                  Sign In
                </button>
                {/* {errorMessage && <div>{errorMessage}</div>} */}
              </form>
            </div>
          </section>
        </div>
  );
}
