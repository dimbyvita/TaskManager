import React, { useRef, useState } from "react";
import { FaCheck, FaInfoCircle, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios";
import { EmployeeInfo } from "../../Utils/interfaces";

export const AddProfilServ = () => {
  const errRef = useRef<HTMLParagraphElement>(null);
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState<EmployeeInfo>({
    id: "",
    name: "",
    firstname: "",
    email: "",
    fonction: "",
    Role: "",
    departement: "",
    matricule: "",
    address: "",
  });

  const [validations] = useState({
    validName: false,
    validMatricule: false,
  });

  const [focus, setFocus] = useState({
    userFocus: false,
    matriculeFocus: false,
  });

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { validName, validMatricule } = validations;

    if (!validName || !validMatricule) {
      setErrMsg("Please check your inputs");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4258/employees", {
        ...credentials,
      });
      console.log(response.data);
      setSuccess(true);
      navigate("/home");
    } catch (err) {
      if (errRef.current) {
        errRef.current.focus();
      }
    }
  };

  return (
    <>
      <div className="flex h-full w-full justify-center px-6 py-12 lg:px-8">
        <div className="px-6 py-12 lg:px-8 bg-white/20">
          <section>
            <p
              ref={errRef}
              className={`${errMsg ? "errmsg" : "offscreen"}`}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1 className="mt-10 text-center text-2xl font-bold leading-9 text-teal-700">
              Add a new employee
            </h1>
            <div className="mt-10 h-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="block md:flex gap-5 w-full">
                  <div className="w-full space-y-5">
                    <div className="flex gap-3">
                      <div>
                        {/* input Name */}
                        <input
                          type="text"
                          id="name"
                          name="name"
                          autoComplete="off"
                          onChange={(e) =>
                            setCredentials((prev: any) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          required
                          placeholder="Name"
                          className="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yeal-700 sm:text-sm sm:leading-6"
                        />
                      </div>

                      <div>
                        {/* input Firstname */}
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          onChange={(e) =>
                            setCredentials((prev: any) => ({
                              ...prev,
                              firstName: e.target.value,
                            }))
                          }
                          required
                          placeholder="First Name"
                          className="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yeal-700 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div>
                        {/* input Matricule */}
                        <label
                          htmlFor="matricule"
                          className="flex items-center space-x-1 text-sm font-medium leading-6 text-gray-900"
                        >
                          <span
                            className={
                              validations.validMatricule ? "block" : "hidden"
                            }
                          >
                            <FaCheck className="text-green-800" />
                          </span>
                          <span
                            className={
                              validations.validMatricule ||
                              !credentials.matricule
                                ? "hidden"
                                : "block"
                            }
                          >
                            <FaTimes className="text-red-800" />
                          </span>
                        </label>
                        <input
                          type="text"
                          id="matricule"
                          name="matricule"
                          onChange={(e) =>
                            setCredentials((prev: any) => ({
                              ...prev,
                              matricule: e.target.value,
                            }))
                          }
                          required
                          placeholder="Matricule"
                          aria-invalid={
                            validations.validMatricule ? "false" : "true"
                          }
                          aria-describedby="matriculenote"
                          onFocus={() =>
                            setFocus((prev: any) => ({
                              ...prev,
                              matriculeFocus: true,
                            }))
                          }
                          onBlur={() =>
                            setFocus((prev: any) => ({
                              ...prev,
                              matriculeFocus: false,
                            }))
                          }
                          className="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yeal-700 sm:text-sm sm:leading-6"
                        />
                        <p
                          id="matriculenote"
                          className={
                            focus.matriculeFocus &&
                            credentials.matricule &&
                            !validations.validMatricule
                              ? "block"
                              : "hidden"
                          }
                        >
                          <FaInfoCircle />
                          4 to 12 characters.
                          <br />
                          Must begin with a letter.
                          <br />
                          Letters, numbers, underscores, hyphens allowed.
                        </p>
                      </div>
                    </div>

                    <div>
                      {/* input Address */}
                      <input
                        type="text"
                        id="address"
                        name="address"
                        onChange={(e) =>
                          setCredentials((prev: any) => ({
                            ...prev,
                            address: e.target.value,
                          }))
                        }
                        required
                        placeholder="Adresse"
                        className="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yeal-700 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="flex gap-3">
                      <div>
                        {/* input Email */}
                        <input
                          type="email"
                          id="email"
                          name="email"
                          onChange={(e) =>
                            setCredentials((prev: any) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          required
                          placeholder="Email"
                          className="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yeal-700 sm:text-sm sm:leading-6"
                        />
                      </div>

                      <div>
                        {/* input Function */}
                        <input
                          type="text"
                          id="fonction"
                          name="fonction"
                          onChange={(e) =>
                            setCredentials((prev: any) => ({
                              ...prev,
                              fonction: e.target.value,
                            }))
                          }
                          required
                          placeholder="Fonction"
                          className="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yeal-700 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className=" w-full gap-3 flex">
                      <div>
                        {/* input Function */}
                        <input
                          type="text"
                          id="departement"
                          name="departement"
                          onChange={(e) =>
                            setCredentials((prev: any) => ({
                              ...prev,
                              departement: e.target.value,
                            }))
                          }
                          required
                          placeholder="Departement"
                          className="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yeal-700 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full flex items-center justify-center">
                  <button
                    className="w-72 rounded-md bg-teal-700 px-3 py-1.5 text-sm font-semibold leading-6  text-white shadow-sm hover:bg-yeal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yeal-700"
                    disabled={
                      !validations.validName || !validations.validMatricule
                    }
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
      {success && (
        <div className="mb-4 text-green-700 bg-green-100 p-2 rounded">
          Employee successfully added!
        </div>
      )}
    </>
  );
};
