import Plot from 'react-plotly.js';
import TimeSeries from '../main/timeSeries';

interface TimeSeriesChartProps {
  timeSeries: TimeSeries;
}

const TimeSeriesChart = ({ timeSeries }: TimeSeriesChartProps) => {
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
      layout={{ width: 600, height: 300, title: 'Time Series' }}
    />
  );
};

export default TimeSeriesChart;
