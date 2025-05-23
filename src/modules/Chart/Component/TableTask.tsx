import { useProjectData } from "../Hooks/useProjectData";

export const ProjectTable = () => {
  const { projects, loading } = useProjectData();

  if (loading) return <div className="p-10 text-lg">Loading Projects...</div>;

  return (
    <div className="p-10">
      <h2 className="border-4 border-b-2 flex bg-white text-gray-700 p-4 items-center h-16 mt-12 rounded-t-xl text-xl font-semibold">
        Active Projects
      </h2>

      <div className="overflow-auto">
        <table className="w-full border-4 bg-white">
          <thead className="text-left h-16">
            <tr className="bg-gray-300 text-sm text-gray-700">
              <th className="p-4">Project Name</th>
              <th className="p-4">Hours</th>
              <th className="p-4">Priority</th>
              <th className="p-4">Members</th>
              <th className="p-4">Progress</th>
              <th className="p-4 text-center">Completed</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-t h-16 text-gray-700 hover:bg-gray-50">
                <td className="p-4 font-medium">{project.name}</td>
                <td className="p-4">{project.hours}h</td>

                <td className="p-4">
                  <span
                    className={`text-wite text-sm px-2 py-1 rounded ${
                      project.priority === "High"
                        ? "bg-red-500"
                        : project.priority === "Medium"
                        ? "bg-orange-400"
                        : "bg-blue-400"
                    }`}
                  >
                    {project.priority}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex -space-x-3 overflow-hidden items-center">
                    {project.members.slice(0, 4).map((member, idx) => (
                      <img
                        key={idx}
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                        src={`https://randomuser.me/api/portraits/thumb/men/${
                          idx + 1
                        }.jpg`}
                        alt={member}
                        title={member}
                      />
                    ))}
                    {project.members.length > 4 && (
                      <div className="h-8 w-8 bg-blue-500 text-teal-800 dark:text-slate-900 text-sm rounded-full flex items-center justify-center ring-2 ring-white">
                        +{project.members.length - 4}
                      </div>
                    )}
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex items-center space-x-3 w-full max-w-xs">
                    <span className="text-sm">{project.progress}%</span>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                      <div
                        className="bg-blue-800 h-2.5 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </td>

                <td className="p-4 text-center">
                  <input
                    type="checkbox"
                    checked={project.progress === 100}
                    className="w-5 h-5 text-red-600 shadow-green-600"
                  />
                </td>
              </tr>
            ))}

            {projects.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center text-gray-500 py-4">
                  No projects available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
