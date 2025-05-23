import React from 'react';
import FormatCalendar from '../services/FormatCalendar';
<<<<<<< HEAD

type Priority = 'High' | 'Medium' | 'Low';

const priorityColors: Record<Priority, string> = {
  High: 'bg-red-500',
  Medium: 'bg-yellow-500',
  Low: 'bg-green-500',
};

export const CalendarContainer: React.FC = () => {
  const priorities: Priority[] = ['High', 'Medium', 'Low'];

  return (
    <div className="w-full flex flex-wrap gap-4 sm:gap-6 p-4 overflow-hidden bg-lime-400/20 rounded-lg">

      {/* Calendar */}
      <div className=" p-4 rounded-lg shadow-lg">
        <FormatCalendar />
      </div>

      {/* Legend */}
      <div className="min-w-[120px] text-emerald-700 h-fit p-4 bg-white rounded-lg shadow">
        <h3 className="text-md font-semibold mb-2">Priority Legend</h3>
        <ul className="space-y-2">
          {priorities.map((priority) => (
            <li key={priority} className="flex items-center gap-2">
              <span className={`w-52 h-10 text-white flex items-center px-2 rounded-sm ${priorityColors[priority]}`} >
                <span>{priority}</span>
              </span>
            </li>
          ))}
        </ul>
=======
import { Datepicker } from '../Components/Datepicker';

export const CalendarContainer: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 overflow-hidden bg-gradient-to-br from-teal-800 via-stone-400 to-yellow-600 rounded-lg">
      {/* Datepicker */}
      <div className="w-full sm:w-1/2 md:w-1/3 p-4 bg-white rounded-lg shadow-lg">
        <Datepicker />
      </div>

      {/* Calendar */}
      <div className="w-full sm:w-1/2 md:w-2/3 p-4 bg-white rounded-lg shadow-lg">
        <FormatCalendar />
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23
      </div>
    </div>
  );
};
