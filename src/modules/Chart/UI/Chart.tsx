import * as React from 'react';
import { LineChart } from '@mui/x-charts';

export default function ChartEvo() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5, null, null, null],
          valueFormatter: (value: number | null) =>
            value == null ? 'NaN' : value.toString(),
        },
        {
          data: [null, null, null, null, 5.5, 2, 8.5, 1.5, 5],
        },
        {
          data: [7, 8, 5, 4, null, null, 2, 5.5, 1],
          valueFormatter: (value: number | null) =>
            value == null ? '?' : value.toString(),
        },
      ]}
      height={200}
      margin={{ top: 10, bottom: 20 }}
    />
  );
}
