import { useEmployees } from '../../Employee/Hook/useEployee';

export const EmployeeInputWithDatalist = ({ name, setName }: { name: string; setName: (value: string) => void }) => {
  const { employees } = useEmployees();
  const datalistId = "employee-options";

  return (
    <div>
      <label htmlFor="name" className="text-sm font-medium text-teal-950">
        name
      </label>
      <input
        id="name"
        list={datalistId}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-3 border rounded-md border-transparent bg-transparent text-teal-800 hover:text-teal-900 hover:outline-none ring-1 hover:ring-2 hover:ring-teal-400 transition-all duration-300"
        required
      />
      <datalist id={datalistId}>
        {employees.map((employee, index) => (
          <option key={index} value={employee.name} />
        ))}
      </datalist>
    </div>
  );
};
