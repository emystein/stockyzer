import Plot from 'react-plotly.js';
import TimeSeries from '../main/timeSeries';
import ChartLayout from './chartLayout';

interface TimeSeriesChartProps {
  timeSeries: TimeSeries;
  layout: ChartLayout;
}

const TimeSeriesChart = ({ timeSeries, layout }: TimeSeriesChartProps) => {
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
      layout={layout}
    />
  );
};

export default TimeSeriesChart;
