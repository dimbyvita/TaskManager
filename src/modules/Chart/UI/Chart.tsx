import { LineChart } from '@mui/x-charts';
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
  );
}
