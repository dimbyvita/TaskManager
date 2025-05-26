import React from 'react';
import FormatCalendar from '../services/FormatCalendar';
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
      </div>
    </div>
  );
};
