import { Bar, Line } from 'react-chartjs-2'

export function Chart(): JSX.Element {

  return (
    <div>
      <Line
        data={{
          labels: ['Red', 'Blue'],
          datasets: [{
            label: '# of Votes',
            data: [[1, 2],[3, 4]]
          }]
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