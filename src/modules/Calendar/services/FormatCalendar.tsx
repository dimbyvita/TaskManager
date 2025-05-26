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
      </div>
    </div>
  );
}
