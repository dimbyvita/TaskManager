    import axios from "axios";
    import { useContext, useEffect, useState } from "react";
    import { AuthContext } from "../../../contexte/AuthContext";
    
    export interface ProjectStats {
      total: number;
      completed: number;
    }
    
    export const useProjectStats = () => {
      const { token } = useContext(AuthContext);
      const [data, setData] = useState<ProjectStats | null>(null);
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
    
            const { project } = res.data;
    
            setData({
              total: project.total, 
              completed: project.completed,
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
    