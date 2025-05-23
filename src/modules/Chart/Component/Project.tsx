import { IoBagHandle } from 'react-icons/io5';
import { useProjectStats } from '../Hooks/useProjectStat';


export const Project = () => {
  const { data, loading } = useProjectStats();

  if (loading) {
    return <div className="text-gray-500">Loading project...</div>;
  }

  return (
    <div className="p-4 md:w-1/4 sm:w-1/2 w-full text-white">
      <div className=" bg-cyan-600 px-4 py-6 rounded-lg">
        <div className="flex justify-between font-medium text-xl my-4">
          <p>Projects</p>
          <IoBagHandle size={40} color='#E5D013'/>
        </div>
        <h2 className="title-font font-semibold text-3xl ">{data?.total}</h2>
        <p className="leading-relaxed">{data?.completed} Completed</p>
      </div>
    </div>
  );
};
