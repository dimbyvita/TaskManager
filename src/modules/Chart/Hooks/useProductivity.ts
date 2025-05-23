import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexte/AuthContext";

export interface ProdictivityStats {
  total: number;
  completed: number;
}

export const useProductivity = () => {
  const { token } = useContext(AuthContext);
  const [productivity, setProductivity] = useState<ProdictivityStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductivity = async () => {
      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const res = await axios.get("http://localhost:4257/api/stats");

        const { project } = res.data;

        setProductivity(project);
      } catch (error) {
        console.error("Error loading dashboard stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductivity();
  }, [token]);

  return { productivity, loading };
};
