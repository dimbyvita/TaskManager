import axios from "axios";

export const deleteEmployee = async (
  id: string | number,
  employees: any[],
  setEmployees: (val: any[]) => void
) => {
  try {
    await axios.delete(`http://localhost:4258/employees/${id}`);
    setEmployees(employees.filter(emp => emp.id !== id));
  } catch (error) {
    console.error("Error deleting employee:", error);
  }
};
