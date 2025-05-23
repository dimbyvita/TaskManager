import React, { useState } from 'react';
import { useRegister } from '../Hooks/useRegister';
import { EmployeeInputWithDatalist } from '../utils/listEmployee';
import { RoleInputWithDatalist } from '../utils/listEmployeeRole';
import { Link } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const { registerUser, loading, data, error } = useRegister();
  const [name, setName] = useState<string>('');
  const [pseudo, setPseudo] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [Role, setRole] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await registerUser(name, pseudo, password, Role);
  };

  return (
    <>
      {data ? (
        <section className="flex flex-col items-center justify-center min-h-screen text-green-700">
          <h1 className="text-3xl font-bold">Success!</h1>
          <p className="mt-4 text-lg">
            <a href="/" className="text-blue-600 underline">Go to Sign In</a>
          </p>
        </section>
      ) : (
        <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-800 via-stone-400 to-yellow-600 p-4">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl  sm:text-sm md:text-md bg-white/70 backdrop-blur-xl rounded-3xl p-8 sm:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold text-teal-800 dark:text-teal-950">REGISTER</h2>
              <p className="mt-2 text-sm text-teal-800 dark:text-teal-950">Extending your team ?</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Pseudo */}
              <div>
                <label htmlFor="pseudo" className="text-sm font-medium text-teal-800 dark:text-teal-950">Pseudo</label>
                <input
                  id="pseudo"
                  type="text"
                  value={pseudo}
                  onChange={(e) => setPseudo(e.target.value)}
                  placeholder="Define a user Name"
        className="w-full px-4 py-3 border rounded-md border-transparent bg-transparent text-teal-800 hover:text-teal-900 hover:outline-none ring-1 hover:ring-2 hover:ring-teal-400 transition-all duration-300"
                  required
                />
              </div>

              {/* name */}
              <EmployeeInputWithDatalist name={name} setName={setName} />

              {/* Password */}
              <div>
                <label htmlFor="password" className="text-sm font-medium text-teal-800 dark:text-teal-950">Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-3 border rounded-md border-transparent bg-transparent text-teal-800 hover:text-teal-900 hover:outline-none ring-1 hover:ring-2 hover:ring-teal-400 transition-all duration-300"
                  required
                />
                {!password && (
                  <p className="mt-2 text-xs text-gray-700 dark:text-gray-900">
                    8 to 24 characters. Must include uppercase, lowercase, number, and special character (!@#$%)
                  </p>
                )}
              </div>

              {/* Role */}
              <RoleInputWithDatalist Role={Role} setRole={setRole} />

              {/* Submit Button */}
              <div className="flex justify-center gap-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-48 py-2 bg-sky-700 hover:bg-sky-500 text-white font-semibold rounded-md transition disabled:opacity-50"
                >
                  {loading ? 'Registering...' : 'Register'}
                </button>
                <button className='w-48 py-2 bg-sky-700 hover:bg-sky-500 text-white font-semibold rounded-md transition disabled:opacity-50'>
                  <Link to='/home'>Back</Link>
                </button>
              </div>
            </form>

            {/* Error display */}
            {error && (
              <div className="mt-4 text-center text-red-500 text-sm">
                {error}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default RegisterPage;
