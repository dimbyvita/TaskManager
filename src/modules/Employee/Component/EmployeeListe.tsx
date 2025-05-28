// import React from "react";
import { useEmployees } from "../Hook/useEployee";


export const EmployeeList = () => {
  const { employees, loading } = useEmployees();

  if (loading) return <p>Loading employees...</p>;

  return (
    <div className="p-10">
      <h2 className="text-2xl font-semibold">Employee List</h2>
      <div className="mt-6">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-4 text-left">Avatar</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Role</th>
              <th className="p-4 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="border-b">
                <td className="p-4">
                  <img
                    // src={employee.avatar}
                    alt={employee.name}
                    className="w-12 h-12 rounded-full"
                  />
                </td>
                <td className="p-4">{employee.name}</td>
                <td className="p-4">{employee.Role}</td>
                <td className="p-4">{employee.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
