import axios from "axios";

export const handleUpdateEmployee = async (
  e: React.FormEvent,
  employee: any,
  values: any,
  setEmployees: (employees: any[]) => void,
  employees: any[],
  closeModal: () => void,
) => {
  e.preventDefault();

  const updatedData = employee
    ? { ...values, employee }
    : { ...values };

  try {
    await axios.patch(`http://localhost:4258/employees/${employee.id}`, updatedData);
    setEmployees(employees.map(emp => emp.id === employee.id ? { ...emp, ...values } : emp));
    closeModal();
  } catch (error) {
    console.error("Error updating employee:", error);
  }
};
