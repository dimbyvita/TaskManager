<<<<<<< HEAD
import { useContext, useEffect, useState } from 'react';
import axios from '../../../api/axios';
import { AuthContext } from '../../../contexte/AuthContext';
import { Day } from '../Utils/CalendarUtils';
import { Project } from '../../Chart/Utils/lib';

export const useDayCalendar = () => {
  const { token, isReady } = useContext(AuthContext);
  const [nav, setNav] = useState<number>(0);
  const [dayDisplay, setDayDisplay] = useState<string>('');
  const [days, setDays] = useState<Day[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  // Récupération du jour courant
  useEffect(() => {
    const fetchDayData = async () => {
      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await axios.get(`/api/calendar/daily/${nav}`);
        setDays(response.data.days);
        setDayDisplay(response.data.dayDisplay);
      } catch (error) {
        console.error('Erreur lors du chargement du jour :', error);
      }
    };

    fetchDayData();
  }, [nav, token]);

  // Récupération des projets
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('/api/projects', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const allProjects: Project[] = res.data;
        setProjects(allProjects.filter(p => p.priority));
      } catch (err) {
        console.error('Erreur récupération des projets :', err);
      }
    };

    if (isReady && token) fetchProjects();
  }, [token, isReady]);

  // Récupère les projets pour une date spécifique
  const getProjectsForDay = (date: Date): Project[] => {
    const formattedDate = date.toISOString().split('T')[0];
    return projects.filter(p => p.delai?.startsWith(formattedDate));
  };

  const handleTodayClick = () => setNav(0);

  return { nav, days, dayDisplay, setNav, handleTodayClick, getProjectsForDay };
=======
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Day } from '../Utils/CalendarUtils';

// Hook personnalisé pour gérer l'état du calendrier mensuel
export const useDayCalendar = () => {
  const [nav, setNav] = useState<number>(0); // État pour gérer la navigation des mois (0 signifie le mois actuel)
  const [dayDisplay, setdayDisplay] = useState<string>(''); // État pour afficher la date formatée
  const [days, setDays] = useState<Day[]>([]); // État pour stocker les jours du mois

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4257/api/calendar/daily/${nav}`);
        setDays(response.data.days);
        setdayDisplay(response.data.dayDisplay);
      } catch (error) {
        console.error('Error fetching calendar data:', error);
      }
    };

    fetchData();
  }, [nav]);

  // Fonction pour réinitialiser la vue sur le mois actuel
  const handleTodayClick = () => {
    setNav(0);
  };

  // Retourner les états et fonctions nécessaires
  return { nav, days, dayDisplay, setNav, handleTodayClick };
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23
};
