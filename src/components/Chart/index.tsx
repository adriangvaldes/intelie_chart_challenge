import { stringify } from 'querystring';
import { Line } from 'react-chartjs-2'
import { useChart } from '../../hooks/useChart';
import styles from './styles.module.scss';

export function Chart(): JSX.Element {
  const {setChartRange, chartData} = useChart();

  const chartEndRange = String(setChartRange());

  return (
    <div className={styles.chartContainer}>
      <Line
        data={{
          labels: ['0', chartEndRange],
          datasets: chartData.map(chart => {
            return {
              label: `${chart.os} ${chart.browser}`,
              data: [chart.min_response_time, chart.max_response_time],
              backgroundColor: 'transparent',
              borderColor: 'red',
              borderWidth: 4
            }
          })
          // [{
          //   label: 'Linux Chrome Min Response Time',
          //   data: [0.1, 0.2],
          //   backgroundColor: 'transparent',
          //   borderColor: 'red',
          //   borderWidth: 4
          // },
          // {
          //   label: chartData
          // }
          // {
          //   label: 'Linux Chrome Max Response Time',
          //   data: [0.9, 1.3],
          //   backgroundColor: 'transparent',
          //   borderColor: 'blue',
          //   borderWidth: 4
          // },]
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
        }} 
      />
    </div>
  )
}