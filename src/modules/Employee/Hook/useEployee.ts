// hooks/useEmployees.ts
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexte/AuthContext";
import axios from "axios";
import { EmployeeInfo } from "../../Utils/interfaces";

export const useEmployees = () => {
  const { token } = useContext(AuthContext);
  const [employees, setEmployees] = useState<EmployeeInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const res = await fetch("http://localhost:4258/employees");
        const data = await res.json();
        setEmployees(data);
      } catch (error) {
        console.error("Erreur lors du chargement des employés :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, [token]);

  return { employees, setEmployees, loading }; 
};
