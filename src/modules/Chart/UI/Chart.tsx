import { LineChart } from '@mui/x-charts';
<<<<<<< HEAD
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
=======
import axios from 'axios';
import { useEffect, useState } from 'react';

interface ChartData {
  labels: string[]; // mois en texte
  series: {
    data: (number | null)[];
    valueFormatter?: (value: number | null) => string;
  }[];
}

export default function ChartEvo() {
  const [chartData, setChartData] = useState<ChartData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4257/api/stats');
        // On suppose que le backend renvoie { labels: [...], series: [...] }
        setChartData(response.data);
      } catch (error) {
        console.error('Erreur lors du chargement des données :', error);
      }
    };

    fetchData();
  }, []);

  if (!chartData) return <p>Chargement...</p>;

  return (
    <LineChart
      xAxis={[{ data: chartData.labels }]} // Ex: ['Jan', 'Feb', 'Mar', ...]
      series={chartData.series}
      height={300}
      width={700}
      margin={{ top: 10, bottom: 30 }}
    />
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23
  );
}
