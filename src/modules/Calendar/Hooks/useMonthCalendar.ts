<<<<<<< HEAD
import React, { useContext, useEffect, useState } from 'react';
import axios from '../../../api/axios';
import { Day } from '../Utils/CalendarUtils';
import { AuthContext } from '../../../contexte/AuthContext';

export const useMonthCalendar = () => {
  const { token } = useContext(AuthContext);
  const [nav, setNav] = useState<number>(0);
  const [monthDisplay, setMonthDisplay] = useState<string>('');
  const [days, setDays] = useState<Day[]>([]);

  // Récupère les données du calendrier
  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await axios.get(`/api/calendar/monthly/${nav}`);
=======
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Day } from '../Utils/CalendarUtils';

// Hook personnalisé pour gérer l'état du calendrier mensuel
export const useMonthCalendar = () => {
  const [nav, setNav] = useState<number>(0); // État pour gérer la navigation des mois (0 signifie le mois actuel)
  const [monthDisplay, setMonthDisplay] = useState<string>(''); // État pour afficher la date formatée
  const [days, setDays] = useState<Day[]>([]); // État pour stocker les jours du mois

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4257/api/calendar/monthly/${nav}`);
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23
        setDays(response.data.days);
        setMonthDisplay(response.data.monthDisplay);
      } catch (error) {
        console.error('Error fetching calendar data:', error);
      }
    };

    fetchData();
<<<<<<< HEAD
  }, [nav, token]);

  
=======
  }, [nav]);

  // Fonction pour réinitialiser la vue sur le mois actuel
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23
  const handleTodayClick = () => {
    setNav(0);
  };

<<<<<<< HEAD
  return { nav, days, monthDisplay, setNav, handleTodayClick};
=======
  // Retourner les états et fonctions nécessaires
  return { nav, days, monthDisplay, setNav, handleTodayClick };
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23
};
