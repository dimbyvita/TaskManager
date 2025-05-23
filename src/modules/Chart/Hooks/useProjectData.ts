import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexte/AuthContext';
import { Project } from '../Utils/lib';

export const useProjectData = () => {
  const { token } = useContext(AuthContext);

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const res = await fetch("http://localhost:4258/objectifs");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Erreur lors du chargement des employés :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [token]);

  return {projects, loading };
};