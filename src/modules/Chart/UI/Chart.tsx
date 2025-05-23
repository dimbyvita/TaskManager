import { LineChart } from '@mui/x-charts';
import { useChartData } from '../Hooks/useChartData';

export default function ChartEvo() {
  const { data, loading, error } = useChartData();

  if (loading) return <p className="text-gray-500">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!data || !data.labels.length || !data.series.length) {
    return <p className="text-gray-500">Any data.</p>;
  }

  return (
    <div className="flex justify-center">
      <LineChart
        xAxis={[{ data: data.labels }]}
        series={data.series.map(({ data }) => ({ data }))} 
        yAxis={[{data: data.series}]}
        height={300}
        width={700}
        margin={{ top: 10, bottom: 30 }}
      />
    </div>
  );
}
