import { Line } from 'react-chartjs-2'
import styles from './styles.module.scss';

export function Chart(): JSX.Element {
  
  return (
    <div className={styles.chartContainer}>
      <Line
        data={{
          labels: ['Red', 'Blue'],
          datasets: [{
            label: 'Linux Chrome Min Response Time',
            data: [0.1, 0.2],
            backgroundColor: 'transparent',
            borderColor: 'red',
            borderWidth: 4
          },
          {
            label: 'Linux Chrome Max Response Time',
            data: [0.9, 1.3],
            backgroundColor: 'transparent',
            borderColor: 'blue',
            borderWidth: 4
          },]
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