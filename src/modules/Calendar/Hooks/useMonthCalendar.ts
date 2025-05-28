import { useContext, useEffect, useState } from 'react';
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
        const response = await axios.get(`/api/calendar/monthly/${nav}`)
        setDays(response.data.days);
        setMonthDisplay(response.data.monthDisplay);
      } catch (error) {
        console.error('Error fetching calendar data:', error);
      }
    };

    fetchData();
  }, [nav, token]);

  const handleTodayClick = () => {
    setNav(0);
  };

  return { nav, days, monthDisplay, setNav, handleTodayClick};
};
