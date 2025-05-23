import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexte/AuthContext";

export interface StatItem {
  total: number;
  completed: number;
}

export interface DashboardStats {
  activeTasks: StatItem;
  projects: StatItem;
  teams: StatItem;
}

export const useDashboardStats = () => {
  const { token } = useContext(AuthContext);
  const [data, setData] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        if (!token) throw new Error("No token found");

        const res = await axios.get("http://localhost:4257/api/stats", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { activeTasks, project, teams } = res.data;

        setData({
          activeTasks,
          projects: project, 
          teams,
        });
      } catch (error) {
        console.error("Error loading dashboard stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [token]);

  return { data, loading };
};
