<<<<<<< HEAD
import React, { useState } from "react";
import { ButtonBack } from "../UI/ButtonBack";
import { ButtonForward } from "../UI/ButtonForward";
import { useWeekCalendar } from "../Hooks/useWeekCalendar";
import { weekDays } from "../Utils/lib";
import { Task } from "../../Task/Utils/Interfaces";
import { TaskInfo } from "../services/TaskInfo";

interface WeekViewProps {
  task: Task[];
}

export const WeekView: React.FC<WeekViewProps> = () => {
  const { nav, days, weekDisplay, setNav, handleTodayClick, getTaskForDay } = useWeekCalendar();
const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };
  return (
    <span className="h-full overflow-y-scroll text-emerald-900 md:overflow-y-hidden p-3">
      <header className="flex items-center mb-4">
        
        <span className="flex items-center space-x-3">
          <ButtonBack
            onClick={() => setNav(nav - 1)}
            aria-label="Previous Week"
          />
          <button
            onClick={handleTodayClick}
            className="p-2 rounded bg-blue-500 text-teal-800"
            aria-label="Go to Today"
          >
            Today
          </button>
          <ButtonForward
            onClick={() => setNav(nav + 1)}
            aria-label="Next Week"
          />
          <h1 className="ml-4 text-lg font-semibold">{weekDisplay}</h1>
        </span>
      </header>

      <span className="h-full flex overflow-x-auto">
        <table className="w-full table-fixed">
          <thead>
            <tr>
              {weekDays.map((day, index) => (
                <th
                  key={index}
                  className={`p-2 text-center border border-gray-300 
                ${day.isWeekend ? "bg-slate-200 text-slate-800" : ""}`}
                >
                  <span>
                    <p>{day.day}</p>
                    <p
                      className={`bg-slate-300 rounded-full py-2 px-4 ${
                        day.isWeekend ? "text-slate-800" : ""
                      }`}
                    >
                      {days[index]?.value || ""}
                    </p>
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 12 }, (_, i) => i + 8).map((hour) => (
              <tr key={hour}>
                {days.map((day, index) => {
                  const date = new Date(day.date);
                  const TaskForHour = getTaskForDay(date);

                  return (
                    <td
                      key={index}
                      className={`rounded border border-gray-300 p-2 align-top
                  ${day.isWeekend ? "bg-slate-300/40 text-slate-400" : ""}
                  ${day.isCurrentDay ? "bg-blue-300/20 text-blue-700" : ""}
                  ${day.isPassedDay ? "cursor-not-allowed" : "cursor-pointer"}
                `}
                    >
                      <span className="space-y-1 max-h-20 overflow-auto">
                        {TaskForHour.map((Task) => {
                          const quantity = Task.quantity || 0;

                          const getColor = (quantity: number) => {
                            if (quantity === 100) return "bg-green-500";
                            if (quantity < 50) return "bg-green-400";
                            return "bg-blue-500";
                          };

              
                          return (
                            <span
                              key={Task.id}
                              className="w-full bg-gray-200 rounded-sm h-4 overflow-hidden"
                              title={`${Task.title} (${quantity}%)`}
                              onClick={() => handleTaskClick(Task)}
                            >
                              <span
                                className={`h-full w-96 text-black text-xs px-1 truncate ${getColor(
                                  quantity
                                )}`}
                                style={{ width: `${quantity}%` }}
                              >
                                {Task.title}
                              </span>
                            </span>
                            
                          );
                        })}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
            {
              isModalOpen && selectedTask && (
                <TaskInfo
                  task={selectedTask}
                  onClose={closeModal}
                />
              )
            }
          </tbody>
        </table>
      </span>
    </span>
  );
};
=======
import React from 'react'
import { ButtonBack } from '../UI/ButtonBack'
import { ButtonForward } from '../UI/ButtonForward'
import { useWeekCalendar } from '../Hooks/useWeekCalendar'
import { weekDays } from '../Utils/lib'
import { Day } from '../Utils/CalendarUtils'



export const WeekView = () => {
  const { nav, days, weekDisplay, setNav, handleTodayClick } = useWeekCalendar()
  return (
    <div className='h-full overflow-y-scroll md:overflow-y-hidden'>
      <div id='Simple Calendar' className='flex h-full py-5'>
        <div className='bg-slate-200 flex flex-col gap-3 p-2 rounded-md h-full w-full'>
          <header className='flex items-center'>
            {/* En-tête du calendrier avec les boutons de navigation */}
            <div className='flex mb-4 items-center'>
              <ButtonBack onClick={() => setNav(nav - 1)}/> 
                <button onClick={handleTodayClick} className='p-2 rounded'>Today</button>
              <ButtonForward onClick={() => setNav(nav + 1)}/> 
              <h1 className=''>{weekDisplay}</h1> {/* Affichage du mois et de l'année en cours */}
            </div>
          </header>

          <div className=' h-full flex overflow-y-scroll'>
            {/* Tableau pour afficher les jours du mois */}
            <table className='w-full table-fixed to-violet-400-collapse'>
              <thead>
                <tr>
                  {/* Header row for days of the week */}
                  {weekDays.map((day, index) => (
                    <th key={index} className={`p-2 text-center border border-gray-300 
                      ${day.isWeekend ? 'bg-slate-200 text-slate-800' : ''}
                    `}>
                      <div>
                        <p>{day.day}</p> {/* Day label */}
                        <p className={`bg-slate-300 rounded-full py-2 px-4 ${day.isWeekend ? 'text-slate-800' : ''}`}>
                          {days[index]?.value || ''}{/* Date value */}
                        </p>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Diviser les jours en semaines */}
                {Array.from({ length: 24 }, (_, hour) => (
                  <tr key={hour} className='p-5 '>
                    {/* Affichage des jours de la semaine */}
                    {days.map((day: Day, index: number) => (
                      <td
                      key={index}
                      className={`rounded border border-gray-300  hover:bg-gradient-to-r from-blue-200 to-violet-400 p-2 text-end                        ${day.isWeekend ? 'bg-slate-300/40 text-slate-400' : ''} 
                        ${day.isCurrentDay ? 'bg-blue-300/20 text-blue-700' : ''}
                        ${day.isPassedDay ? 'cursor-not-allowed': 'cursor-pointer'}
                        `}
                        >a
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23
