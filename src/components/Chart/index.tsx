import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2'
import { EventDataReal, useChart } from '../../hooks/useChart';
import styles from './styles.module.scss';

export function Chart(): JSX.Element {
  const {setChartRange, data, inputData} = useChart();
  // const [charData, setChatData] = useState<EventDataReal[]>([]);
  const chartEndRange = String(setChartRange());

  // console.log(charData);

  // useEffect(() => {
  //   console.log(data)
  // }, [data]);

  return (
    <div className={styles.chartContainer}>
      <Line
        data={{
          labels: ['0', chartEndRange],
          datasets: data.map(chart => {
            return {
              label: `${chart.os} ${chart.browser}`,
              data: [chart.min_response_time, chart.max_response_time],
              backgroundColor: 'transparent',
              borderColor: 'red',
              borderWidth: 4
            }
          })
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