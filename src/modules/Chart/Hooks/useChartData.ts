import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../contexte/AuthContext';

interface ChartSeries {
  data: (number | null)[];
  valueFormatter?: (value: number | null) => string;
}

interface ChartData {
  labels: string[];
  series: ChartSeries[];
}

export const useChartData = () => {
  const { token } = useContext(AuthContext);
  const [data, setData] = useState<ChartData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!token) throw new Error("Token manquant");

        const response = await axios.get('http://localhost:4257/api/stats', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const chartData = response.data?.chart;
        if (chartData?.labels && chartData?.series) {
          // Corriger valueFormatter si c’est une string
          const cleanSeries = chartData.series.map((serie: any) => ({
            data: serie.data,
            valueFormatter: typeof serie.valueFormatter === 'function'
              ? serie.valueFormatter
              : undefined, // on ignore si ce n’est pas une vraie fonction
          }));

          setData({ labels: chartData.labels, series: cleanSeries });
        } else {
          throw new Error("Format de données inattendu");
        }

      } catch (err) {
        setError('Error fetching statistique Data.');
        console.error('Error trend :', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  return { data, loading, error };
};