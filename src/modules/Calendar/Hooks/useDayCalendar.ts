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
};
