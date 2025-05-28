import { useState } from 'react';
import { deleteEmployee } from '../Hook/useDelet';
import { useEmployees } from '../Hook/useEployee';
import { EmployeeInfo } from '../../Utils/interfaces';
import { ModalProfil } from './ModalProfil';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';

export const ProfilesList = () => {
  const { employees, setEmployees, loading } = useEmployees();
  const [openModal, setOpenModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<EmployeeInfo | null>(null);

  const handleEditClick = (employee: EmployeeInfo) => {
    setSelectedEmployee(employee);
    setOpenModal(true);
  };

  const handleDelete = async (id: string | number) => {
    await deleteEmployee(id, employees, setEmployees);
  };

 if (loading) {
  return (
    <div className="h-full flex justify-center items-center">
      <p>Loading employees...</p>
    </div>
  );
}


  return (
    <div className='h-full'>
      <div className="my-5 h-full bg-white/20 backdrop-blur-lg rounded-lg shadow-lg border border-gray-200">
        <div className="flex overflow-auto">
          <table className="min-w-full bg-lime-400/20 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100/20 text-gray-700">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                  Firstname
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                  Fonction
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                  Matricule
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                  Departement
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                  Adresse
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                  Email
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {employees.map((employee, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-100">
                  <td className="px-4 py-3 text-sm">{employee.name}</td>
                      <td className="px-4 py-3 text-sm">{employee.firstname}</td>
                      <td className="px-4 py-3 text-sm">{employee.fonction}</td>
                      <td className="px-4 py-3 text-sm">{employee.matricule}</td>
                      <td className="px-4 py-3 text-sm">{employee.departement}</td>
                      <td className="px-4 py-3 text-sm">{employee.address}</td>
                      <td className="px-4 py-3 text-sm">{employee.email}</td>
                  <td className="flex px-4 py-7 space-x-2 ">
                    <button 
                      onClick={() => handleEditClick(employee)}
                      className="flex hover:text-blue-500 rounded-lg shadow-md shadow-gray-400/50 py-1 px-3 text-md font-medium tracking-wider text-gray-500">
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(employee.id)}
                      className="flex hover:text-red-500 rounded-lg shadow-md shadow-gray-400/50 py-1 px-3 text-md font-medium tracking-wider text-gray-500">
                      <FaRegTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {openModal && selectedEmployee && (
        <ModalProfil employee={selectedEmployee} closeModal={() => setOpenModal(false)} setEmployees={setEmployees} employees={[]} />
      )}
    </div>
  );
};
