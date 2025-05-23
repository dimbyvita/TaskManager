import { useState } from "react";
import { EmployeeInfo } from "../../Utils/interfaces";
import { handleUpdateEmployee } from "../Hook/handleUpdateEmployee";
import { handleChange } from "../Hook/hadleChange";


export interface ModalProps {
  employee: EmployeeInfo;
  closeModal: () => void;
  setEmployees: (employees: EmployeeInfo[]) => void;
  employees: EmployeeInfo[];
}

export const ModalProfil = ({ employee, closeModal, setEmployees, employees }: ModalProps) => {
  const [values, setValues] = useState({
    id: employee.id,
    name: employee.name,
    firstName: employee.firstname,
    fonction: employee.fonction,
    matricule: employee.matricule,
    departement: employee.departement,
    address: employee.address,
    email: employee.email,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleUpdateEmployee(e, employee, values, setEmployees, employees, closeModal);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/20 flex items-center justify-center">
      <div className="bg-white w-full md:w-[60%] sm:w-[40%] rounded-lg shadow p-6">
        <form onSubmit={handleSubmit}>
          {[
            { label: "Name", name: "name" },
            { label: "First Name", name: "firstName" },
            { label: "Function", name: "fonction" },
            { label: "Matricule", name: "matricule" },
            { label: "Departement", name: "departement" },
            { label: "Address", name: "address" },
            { label: "Email", name: "email" },
          ].map((field) => (
            <div className="mb-4 px-3" key={field.name}>
              <label className="block text-gray-700">{field.label}</label>
              <input
                type="text"
                name={field.name}
                value={(values as any)[field.name]}
                onChange={(e) => handleChange(e, values, setValues)}
                className="w-full p-2 border rounded text-gray-950"
              />
            </div>
          ))}

          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-lime-400/35 text-teal-800 px-4 py-2 rounded"
            >
              Save
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="ml-2 bg-lime-400/35 text-teal-800 px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
