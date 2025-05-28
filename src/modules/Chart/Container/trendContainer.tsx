import { HeadChart } from '../UI/headChart'
import { Project } from '../Component/Project'
import { ActivTask } from '../Component/ActivTask'
import { Team } from '../Component/Team'
import { Productivity } from '../Component/Productivity'
import { ProjectTable } from '../Component/TableTask'
// import ChartEvo from '../UI/Chart'

export const TrendContainer = () => {
  return (
    <>
        <HeadChart/>

        <div className="w-full px-5 -mt-20 ">
            <div className="flex flex-wrap">
                <Project/>
                <ActivTask/>
                <Team/>
                <Productivity/>
            </div>
        </div>

        <ProjectTable/>

        {/* <ChartEvo/> */}
    </>
  )
}
