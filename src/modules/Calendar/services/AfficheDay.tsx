import React from 'react';
import { AfficheDayProps } from '../Utils/CalendarUtils';

export const AfficheDay: React.FC<AfficheDayProps> = ({ day, onClick }) => {
  return (
<<<<<<< HEAD
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
=======
    <div className='relative' onClick={onClick}> {/* Déclenche la fonction onClick lors du clic sur le div */}
      <div className='p-1'>
        {/* Affiche la valeur du jour, sauf s'il s'agit d'un jour du moi prochain ou du moi precedent alors, remplissage ("padding") */}
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23
        {day.value}
      </div>
    </div>
  );
};
