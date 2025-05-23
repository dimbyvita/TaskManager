import React from 'react';
import { AfficheDayProps } from '../Utils/CalendarUtils';

export const AfficheDay: React.FC<AfficheDayProps> = ({ day, onClick }) => {
  return (
    <div
      className='relative p-1'
      onClick={onClick} // Déclenche la fonction onClick lors du clic sur le div
    >
      <div
        className={`p-1 text-xs sm:text-sm md:text-base font-semibold 
          ${day.isNextMonthDay || day.isPreviousMonthDay ? 'text-gray-400' : 'text-black'}
          hover:bg-blue-100 cursor-pointer rounded-full`}
      >
        {/* Affiche la valeur du jour, sauf s'il s'agit d'un jour du mois suivant ou précédent */}
        {day.value}
      </div>
    </div>
  );
};
