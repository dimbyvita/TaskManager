import { Project } from "../../Chart/Utils/lib";
import { ButtonBack } from "../UI/ButtonBack";
import { ButtonForward } from "../UI/ButtonForward";
import { useDayCalendar } from "../Hooks/useDayCalendar";
// import { useProjectData } from "../../Chart/Hooks/useProjectData";

interface DayViewProps {
  project: Project[];
}
export const DayView: React.FC<DayViewProps> = () => {
  const { nav, days, dayDisplay, setNav, handleTodayClick, getProjectsForDay } =
    useDayCalendar();
  // const { projects } = useProjectData();

  // Check if days is an array and has at least one element
  const isDaysValid = Array.isArray(days) && days.length > 0;

  return (
    <div className="w-full h-full overflow-y-scroll p-3">
      <header className="flex items-center">
        <div className="flex mb-4 items-center">
          <ButtonBack
            onClick={() => setNav(nav - 1)}
            aria-label="Previous Day"
          />
          <button
            onClick={handleTodayClick}
            className="p-2 rounded bg-blue-500 text-white"
            aria-label="Go to Today"
          >
            Today
          </button>
          <ButtonForward
            onClick={() => setNav(nav + 1)}
            aria-label="Next Day"
          />
          <h1 className="ml-4 text-emerald-700">{dayDisplay}</h1>
        </div>
      </header>

      <div className="w-full flex gap-1 p-2">
        <div className="w-full">
          {isDaysValid ? (
            Array.from({ length: 1 }, (_, hour) => (
              <div key={hour} className="p-1  w-full cursor-pointer">
                {days.map((day, index) => {
                  const ProjectForDay = getProjectsForDay(new Date(day.date));
                  const ProjectForHour = ProjectForDay.filter((project) => {
                    const taskDate = new Date(project.delai || "");
                    return taskDate.getHours() === hour;
                  });
                  return (
                    <div
                      key={index}
                      className={`rounded border border-gray-300 hover:bg-gradient-to-r w-full from-blue-200 to-violet-200 p-2 text-end
                      ${day.isWeekend ? "bg-slate-300/40 text-slate-400" : ""}
                      ${day.isCurrentDay ? "bg-blue-300/20 text-blue-700" : ""}
                      ${
                        day.isPassedDay
                          ? "cursor-not-allowed"
                          : "cursor-pointer"
                      }
                    `}
                    >
                      <div className="space-y-[2px] h-full overflow-auto">
                        {ProjectForHour.map((project) => {
                          const progress = project.progress || 0;

                          const getColor = (progress: number) => {
                            if (progress === 100) return "bg-green-500";
                            if (progress < 50) return "bg-yellow-400";
                            return "bg-blue-500";
                          };

                          return (
                            <div
                              key={project.id}
                              className={`h-full text-white text-xs px-1 truncate ${getColor(
                                progress
                              )}`}
                              style={{ width: `${progress}%` }}
                            >
                              {days[hour]?.value || "No task scheduled"}
                              {project.name}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    </div>
  );
};
