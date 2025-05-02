import React from 'react';
import FormatCalendar from '../services/FormatCalendar';
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
      </div>
    </div>
  );
};
