<<<<<<< HEAD
import { useContext, useEffect, useState } from 'react';
import axios from '../../../api/axios';
import { Day } from '../Utils/CalendarUtils';
import { AuthContext } from '../../../contexte/AuthContext';
import { Task } from '../../Task/Utils/Interfaces';

interface UseWeekCalendarReturn {
  nav: number;
  days: Day[];
  weekDisplay: string;
  setNav: React.Dispatch<React.SetStateAction<number>>;
  handleTodayClick: () => void;
  tasks: Task[];
  getTaskForDay: (date: Date) => Task[];
}

export const useWeekCalendar = () => {
  const { token, isReady } = useContext(AuthContext);
  const [nav, setNav] = useState<number>(0); // State to manage week navigation (0 means the current week)
  const [weekDisplay, setWeekDisplay] = useState(''); // Week display text
  const [days, setDays] = useState<Day[]>([]); // State to store the days of the week
  const [Tasks, setTask] = useState<Task[]>([]); // State to store Tasks

  // Fetch data for week view when nav changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await axios.get(`/api/calendar/weekly/${nav}`);
        setDays(response.data.days);
        setWeekDisplay(response.data.weekDisplay);
      } catch (error) {
        console.error('Error fetching week data:', error);
      }
    };
    fetchData();
  }, [nav, token]); // Refetch when nav changes

  // Récupère les tâches en cours
 useEffect(() => {
  const fetchTask = async () => {
    try {
      const res = await axios.get("/api/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const allTask : Task[] = res.data;
      setTask(allTask.filter(Task => Task.status));
    } catch (error) {
      console.error("Error fetching Tasks", error);
    }
  };

  if (isReady && token) {
    fetchTask();
  }
}, [token, isReady]); // Refetch when token changes

  // Fonction utilitaire (à exporter si besoin dans CalendarPM)
  const getTaskForDay = (date: Date): Task[] => {
  return Tasks.filter((task) => {
    if (!task.delai?.dayStart || !task.delai?.dayEnd) return false;

    const start = new Date(task.delai.dayStart);
    const end = new Date(task.delai.dayEnd);

    // Vérifie si la date fournie est dans l'intervalle inclusif
    return date >= start && date <= end;
  });
};


  // Function to reset the view to the current week
  const handleTodayClick = () => {
    setNav(0);
  };

  return { nav, days, weekDisplay, setNav, handleTodayClick, Tasks, getTaskForDay};
=======
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Day } from '../Utils/CalendarUtils';

export const useWeekCalendar = () => {
    const [nav, setNav] = useState<number>(0); // State to manage week navigation (0 means the current week)
    const [weekDisplay, setWeekDisplay] = useState('');
    const [days, setDays] = useState<Day[]>([]); // State to store the days of the week

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4257/api/calendar/weekly/${nav}`);    
                setDays(response.data.days);
                setWeekDisplay(response.data.weekDisplay);
            } catch (error) {
                console.error('Error fetching week data:', error);
            }
        };
        // Call fetchData function to get data
        fetchData();

    }, [nav]); // Dependency array includes nav to refetch data when nav changes

    // Function to reset the view to the current week
    const handleTodayClick = () => {
        setNav(0);
    };


    return { nav, days, weekDisplay, setNav, handleTodayClick };
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23
};
