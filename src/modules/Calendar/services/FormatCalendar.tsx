<<<<<<< HEAD
import React, {  useState } from 'react';
import { WeekView } from '../Components/week-view';
import { useChangeFormat } from '../Hooks/useChangeFormat';
import { DayView } from '../Components/Day-view';
import { Project } from '../../Chart/Utils/lib';
import { Task } from '../../Task/Utils/Interfaces';


export default function FormatCalendar() {
  const { activeComponent, handleChange } = useChangeFormat();
  const [project] = useState<Project[]>([]);
  const [task] = useState<Task[]>([]);

  return (
    <div className="w-full h-full py-3">
      <div className="flex justify-end p-3 rounded-lg mb-4">
        <select className="border-none bg-slate-400 p-3 rounded-lg" onChange={handleChange}>
          <option value="weekly">Weekly</option>
          <option value="daily">Daily</option>
        </select>
      </div>

      <div id="calendar" className="h-screen">
        {activeComponent === 'weekly' && <WeekView task={task} />}
        {activeComponent === 'daily' && <DayView  project={project}/>}
=======
import React from 'react';
import { MonthView } from '../Components/Month-view'; // Importation du composant pour la vue mensuelle
import { WeekView } from '../Components/week-view'; // Importation du composant pour la vue hebdomadaire
import { useChangeFormat } from '../Hooks/useChangeFormat'; // Importation du hook personnalisé pour changer le format du calendrier
import { DayView } from '../Components/Day-view';

// Composant principal pour gérer le changement de format du calendrier
export default function FormatCalendar() {
  const { activeComponent, handleChange } = useChangeFormat(); // Utilisation du hook pour obtenir le composant actif et la fonction de changement

  return (
    <div className='w-full h-full py-3'>
      {/* Sélecteur pour changer le format du calendrier */}
      <div className='flex justify-end '>
        <select className='border-none p-3 rounded-lg' onChange={handleChange}>
          <option value="monthly">Monthly</option> {/* Option pour la vue mensuelle */}
          <option value="weekly">Weekly</option> {/* Option pour la vue hebdomadaire */}
          <option value="daily">Daily</option> {/* Option pour la vue quotidienne */}
        </select>
      </div>
      {/* Affichage du calendrier en fonction du format sélectionné */}
      <div id='calendar' className='h-5/6'>
        {activeComponent === "monthly" && <MonthView />} {/* Affichage de la vue mensuelle */}
        {activeComponent === "weekly" && <WeekView />} {/* Affichage de la vue hebdomadaire */}
        {activeComponent === "daily" && <DayView />} {/* Affichage de la vue quotidienne (pour le moment commentée) */}
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23
      </div>
    </div>
  );
}
