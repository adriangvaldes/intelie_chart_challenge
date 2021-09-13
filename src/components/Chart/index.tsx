import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2'
import { EventDataReal, useChart } from '../../hooks/useChart';
import { dataSeparatorOsBrowser } from '../../utils/dataSeparatorOsBrowser';
import styles from './styles.module.scss';

interface groupByType {
  os: EventDataReal[]
}


export function Chart(): JSX.Element {
  const { setChartRange, data } = useChart();
  const chartEndRange = String(setChartRange());


  const Linux = dataSeparatorOsBrowser('linux', 'chrome', data)
  const Mac = dataSeparatorOsBrowser('linux', 'chrome', data)

  // console.log('Linux data:', Linux);

  const groupBy = data.reduce((acc, obj) => {
    if (!acc[obj.os]) {
      acc[obj.os] = []
    }
    acc[obj.os].push(obj)
    return acc
  }, {} as any) 

  // const groupBy2 = groupBy.os.reduce((acc:any, obj:any) => {
  //   if(!acc[obj.os.browser]) {
  //     acc[obj.os] = []
  //   }
  //   acc[obj.os].push(obj)
  //   return acc
  // }, {} as any)

  console.log(groupBy)

  const dataOs = []

  const dataset = data.map(chart => {
    return {
      label: `${chart.os} ${chart.browser}`,
      data: [chart.min_response_time, chart.max_response_time],
      backgroundColor: 'transparent',
      borderColor: 'red',
      borderWidth: 3
    }
  })

  return (
    <div className={styles.chartContainer}>
      <Line
        data={{
          labels: ['0', chartEndRange],
          datasets: dataset
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