import Plot from 'react-plotly.js';
import TimeSeries from '../main/timeSeries';

interface TimeSeriesChartProps {
  timeSeries: TimeSeries;
  width: number;
  height: number;
  title: string;
}

const TimeSeriesChart = ({
  timeSeries,
  width,
  height,
  title,
}: TimeSeriesChartProps) => {
  return (
    <Plot
      data={[
        {
          x: timeSeries.dates,
          y: timeSeries.values,
          type: 'scatter',
          mode: 'lines',
          marker: { color: 'green' },
        },
      ]}
      layout={{ width, height, title }}
    />
  );
};

export default TimeSeriesChart;
