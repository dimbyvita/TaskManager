<<<<<<< HEAD
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
=======


import React, { useState } from 'react';
import { useRegister } from '../Hooks/useRegister';

const RegisterPage: React.FC = () => {
    const { registerUser, loading, data, error } = useRegister();
    const [email, setEmail] = useState<string>('')
    const [pseudo, setPseudo] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [Role, setRole] = useState<string>('')

    const handleSubmit =  async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await registerUser(email, pseudo, password, Role)

        if (data) {
            console.log('Registration successfull!', data);   
        } else {
            console.error('Registration error', error);
        }
    }
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23

  return (
    <>
      {data ? (
<<<<<<< HEAD
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
=======
        <section className='text-green-800'>
          <h1>Success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </section>
      ) : (
        <section className="w-full bg-gradient-to-br from-teal-800 via-stone-400 to-yellow-600 min-h-screen flex items-center justify-center lg:px-8 loginpage">
          <div className="sm:w-[100%] md:w-[50%] py-10 px-12 bg-black dark:bg-white/70 backdrop-blur-lg rounded-xl logincard">
                <div className="w-full h-auto flex items-center gap-x-1 my-5">
                    <div className="w-1/2 h-[1.5px] bg-gray-700/40 rounded-md"></div>
                    <p className="text-3xl text-gray-700 font-semibold px-2">REGISTER</p>
                    <div className="w-1/2 h-[1.5px] bg-gray-700/40 rounded-md"></div>
                </div>
                <p className="text-sm text-white dark:text-teal-950 font-normal mb-8">
                    Need a new employee you litle fellow?
                </p>
                <form onSubmit={handleSubmit}>
                    <div className=" w-full">
                        <div>
                            <label className="flex items-center space-x-1 text-sm font-medium leading-6 text-white dark:text-teal-950 mb-1" htmlFor="pseudo">
                            Pseudo:
                            </label>
                            <input
                                type="text"
                                className="w-full h-12 p-4 outline-none bg-transparent border-[2px] rounded-md border-gray-400/40 text-white dark:text-teal-950"
                                id="pseudo"
                                autoComplete="off"
                                value={pseudo}
                                onChange={(e) => setPseudo(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    
                        {/* Basic contact info */}
                    <div className=" w-full gap-3 flex">
                        <div>
                            <label className="flex items-center space-x-1 text-sm font-medium leading-6 text-white dark:text-teal-950 mb-1" htmlFor="email">Email:</label>
                            <input
                            type="email"
                            className="w-full h-12 p-4 outline-none bg-transparent border-[2px] rounded-md border-gray-400/40 text-white dark:text-teal-950"
                            id="email"
                            autoComplete="off"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            />
                        </div>
                    </div>

                        {/* Password part */}
                    <div>
                        <label className="flex items-center space-x-1 text-sm font-medium leading-6 text-white dark:text-teal-950 mb-1" htmlFor="password">
                        Password:
                        </label>
                        <input
                        type="password"
                        className="w-full h-12 p-4 outline-none bg-transparent border-[2px] rounded-md border-gray-400/40 text-white dark:text-teal-950"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                        <p
                        id="pwdnote" className={!password ? 'instructions' : 'offscreen'}>
                        8 to 24 characters.
                        <br />
                        Must include uppercase and lowercase letters, a number and a special character.
                        <br />
                        Allowed special characters: !@#$%
                        </p>
                    </div>                   

                    <label className="flex items-center space-x-1 text-sm font-medium leading-6 text-white dark:text-teal-950 mb-1" htmlFor="Role">Role:</label>
                    <select
                        className="w-full h-12 p-2 outline-none bg-transparent border-[2px] rounded-md border-gray-400/40 text-white dark:text-teal-950"
                        id="Role"
                        name="Role"
                        value={Role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                        >
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="manager">Manager</option>
                    </select>

                    <div className="w-full space-y-2 flex items-center justify-center">
                        <button
                            type='submit' disabled={loading}
                            className="w-72 rounded-md bg-sky-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
                            aria-disabled={!password && !pseudo && !Role} 
                        >
                            {loading ? 'Registering...' : 'Register'}
                        </button>
                    </div>
                </form>
          </div>
          {error && <p className='text-red-800'> {error}</p> }
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23
        </section>
      )}
    </>
  );
};

<<<<<<< HEAD
export default RegisterPage;
=======
export default RegisterPage;
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23
